'use strict';

const serverendpoint = vas_apiEntity;
const serverendpointcol = vas_apiEntityDataCol;
const serverendpointcollist = vas_apiEntityDataColList;

const strcsstablerowodd = 'narbartabletrodd';
const strcsstableroweven = 'narbartabletreven';
const strcsstablerowselected = 'narbartabletrselected';

const navbarselect = document.getElementById('navbarselect');
const navbarselectitem = document.getElementsByClassName('navbarselectitem');
const navbarbuttonget = document.getElementById('navbarbuttonget');
const navbarbuttonadd = document.getElementById('navbarbuttonadd');
const navbarbuttonpdf = document.getElementById('navbarbuttonpdf');

const tablelist = document.getElementById('navbartable');
const divdetails = document.getElementById('divdetails');

// -1 to indicate non-selection from list //
var tablelistselectedid = -1;


// initial load //


// navbar table list //

// not using select element //
// navbarselect.innerHTML += `<option value = "${listobj[0][i].ID}" class ="nvabarselectitem">"${listobj[0][i].NName}"</option>`;

// using table element //

// get table header //
var reqheader = new XMLHttpRequest();
reqheader.open('GET', serverendpointcollist);
reqheader.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {

        var arryheadercol = JSON.parse(reqheader.responseText);

        var strheadercol = '';
        strheadercol = '<thead><tr>';
        for (let i = 0; i < arryheadercol.length; i++) {
            strheadercol += `<th>${arryheadercol[i].Disp}</th>`
        }
        strheadercol += '</tr></thead>';
        
        alert(strheadercol);

        tablelist.innerHTML += strheadercol

        // get datarow //
        try {
            var req = new XMLHttpRequest();
            req.open('GET', serverendpoint);
        
            req.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    try {
        
                        var listobj = JSON.parse(req.responseText).recordsets;
                        if (listobj[0].length > 0) {
        
                            // datarow //
                            let cssstyle = '';
                            let strdatarow = '';
                            for (var i = 0; i < listobj[0].length; i++) {
                                cssstyle = (cssstyle === strcsstableroweven) ? strcsstablerowodd : strcsstableroweven;
        
                                tablelist.innerHTML +=
                                    `<tr data-objid = '${listobj[0][i].ID}' class = '${cssstyle}'>
                                        <td>${listobj[0][i].ID}</td>
                                        <td>${listobj[0][i].NName}</td>    
                                        </tr>
                                        `;
                            }
                            tablelist.innerHTML += strdatarow;
        
                            SetTableEvent();
                        }
                        else {
                            tablelist.innerHTML = 'Empty Data.';
                        }
        
                    }
                    catch (e) {
                        alert('Error in retrieving List: ' + e);
                    }
                }
                else {
        
                }
            }
        
            req.send();
        }
        catch (e) {
            alert(e);
        }
    }
}
reqheader.send();










// event management //
// - tablelist
// - buttongetdetail
// - buttonpdf
// - buttonadd


// navbar: table list onclick //
function SetTableEvent() {
    for (var i = 0; i < tablelist.rows.length; i++) {
        tablelist.rows[i].onclick = function () {
            tablelistselectedid = this.dataset.objid;

            painttabledatarow();
            this.classList.add(strcsstablerowselected);
        }
    }
}


// get detail button //
navbarbuttonget.onclick = function () {
    // check for non-selection //

    // using table as selection in navbar //
    if (tablelistselectedid === -1) {
        alert('No Selected Item.');
    }
    else {
        var req = new XMLHttpRequest();

        // using navbar:select //
        // req.open('GET', `${serverendpoint}/?id='${navbarselect.value}'`);
        // OR //

        // using navbar:tablelist //
        req.open('GET', `${serverendpoint}/?id='${tablelistselectedid}'`);

        req.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                try {
                    // extract object data //
                    var listobj = JSON.parse(req.responseText).recordsets;


                    RemovePPtInputElement();

                    // get datacollist info from Server:Entity //
                    CreatePPtInputElement(listobj[0][0]);
                }
                catch (e) {
                    alert('Error in retrieving List: ' + e);
                }
            }
            else if (this.readyState == 4 && this.status == 500) {
                alert(req.responseText);
            }
        }
        req.send();
    }
}


// pdf button //
navbarbuttonpdf.onclick = function () {
    var req = new XMLHttpRequest();
    req.open('POST', serverendpoint + '/pdf');
    // req.responseText = "blob";
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            // var blob = req.responseText;
            // var link = document.createElement('a');
            // link.href = window.URL.createObjectURL(blob);
            // link.download = 'PdfName-' + new Date().getTime() + '.pdf';

            // document.body.appendChild(link);

            // link.click();

            try {
                alert('pdf received: ' + req.response);
                window.open(req.response);
            }
            catch (e) {
                alert(e);
            }
        }
    }
    req.send();
}


// add button //
navbarbuttonadd.onclick = function () {
    var req = new XMLHttpRequest();
    var data = {
        'ID': '109',
        'NName': 'Queen',
        'Code': 'CD131',
        'Currcy': '0',
        'DebitAcc': '1',
        'CreditAcc': '2'
    };

    try {
        req.open('POST', serverendpoint);
        req.setRequestHeader('Content-Type', 'application/json');
    }
    catch (e) {
        alert('Error Sending POST Request.');
    }


    req.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            alert('New Entity added.');
        }
        else if (this.readyState == XMLHttpRequest.DONE && this.status === 500) {
            alert(req.responseText);
        }
    }
    req.send(JSON.stringify(data));
}






// functions: //
// - painttabledatarow
// - RemovePPtInputElement
// - CreatePPtInputElement



function painttabledatarow() {
    try {
        let cssstyle = strcsstablerowodd;
        for (let i = 0; i < tablelist.rows.length; i++) {
            tablelist.rows[i].className = '';
            cssstyle = (cssstyle === strcsstableroweven) ? strcsstablerowodd : strcsstableroweven;
            tablelist.rows[i].classList.add(cssstyle);
        }
    }
    catch (e) { alert(e); }

}

// remove existing child nodes before adding new nodes //
function RemovePPtInputElement() {
    while (divdetails.firstChild) {
        divdetails.removeChild(divdetails.firstChild);
    }
}

// create an input element for each property of entity //
function CreatePPtInputElement(listobj) {

    // get the datacol list of entity and match the property (label) 
    // to the value (inputbox) in listobj //
    const req = new XMLHttpRequest;
    req.open('GET', serverendpointcol);
    req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            var arryPPT = JSON.parse(req.responseText);

            // each property is wrapped in a div with a label + inputbox //
            arryPPT.forEach(ppt => {
                // wrapping div //
                var divelement = document.createElement('div');
                divelement.setAttribute('style', 'display:flex;');
                divdetails.appendChild(divelement);

                // label //
                var labelelement = document.createElement('LABEL');
                labelelement.setAttribute('style', 'flex-grow:1; background-color:gray;');
                labelelement.innerHTML = ppt.Disp;
                // labelelement.setAttribute('flex-grow', '1');
                divelement.appendChild(labelelement);

                // input box //
                var inputelement = document.createElement('INPUT');
                inputelement.setAttribute('type', 'text');
                inputelement.setAttribute('style', 'flex-grow:3; align-self: flex-start; background-color:blue;');

                // inputelement.setAttribute('flex-grow', '1');
                var newinputelement = divelement.appendChild(inputelement);
                newinputelement.value = listobj[ppt.Name];

                // // new line //
                // var brelement = document.createElement('BR');
                // divdetails.appendChild(brelement);
            });

        }
    }
    req.send();
}


