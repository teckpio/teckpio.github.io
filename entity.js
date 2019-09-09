'use strict';

const serverendpoint = 'http://127.0.0.1:3000/Entity'

const navbarselect = document.getElementById('navbarselect');
const navbarselectitem = document.getElementsByClassName('navbarselectitem');
const navbarbutton = document.getElementById('navbarbutton');
const navbarbuttonadd = document.getElementById('navbarbuttonadd');
const tablelist = document.getElementById('tablelist');
const divdetails = document.getElementById('divdetails');

var tablelistselectedid = -1;


// initial load list //

try {
    var req = new XMLHttpRequest();
    req.open('GET', serverendpoint);

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                var listobj = JSON.parse(req.responseText).recordsets;
                if (listobj[0].length > 0){
                    for (var i = 0; i < listobj[0].length; i++) {

                        // using select element //
                        navbarselect.innerHTML += `<option value = "${listobj[0][i].ID}" class ="nvabarselectitem">"${listobj[0][i].NName}"</option>`;
    
                        // using table element //
                        tablelist.innerHTML +=
                            `<tr data-objid = '${listobj[0][i].ID}'>
                                <td>${listobj[0][i].NName}</td>
                                <td>${listobj[0][i].Code}</td>
                                <td>${listobj[0][i].Currcy}</td>
                            </tr>
                            `;
    
                    }
    
                    SetTableEvent();                    
                }
                else {
                    alert('Empty Data.');
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








// event management //


// navbar: table list //
function SetTableEvent() {
    for (var i = 0; i < tablelist.rows.length; i++) {
        tablelist.rows[i].onclick = function () {
            tablelistselectedid = this.dataset.objid;
        }
    }
}


// get detail button //
navbarbutton.onclick = function () {
    // check for non-selection //
    if (navbarselect.value == null) {
        alert('No Selected Item.');
    }
    else {
        var req = new XMLHttpRequest();
        // using navbar:select //
        // req.open('GET', `${serverendpoint}/?id='${navbarselect.value}'`);

        // using navbar:tablelist //
        req.open('GET', `${serverendpoint}/?id='${tablelistselectedid}'`);

        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                try {
                    // extract object data //
                    var listobj = JSON.parse(req.responseText).recordsets;

                    RemovePPtInputElement();

                    CreatePPtInputElement(listobj[0][0]);
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
}

// add button //
navbarbuttonadd.onclick = function () {
    var req = new XMLHttpRequest();
    var data = {
        'ID': '101',
        'NName': 'ZZZ',
        'Code': 'CD125',
        'Currcy': '0'
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
            try {
                alert('New Entity added.');
            }
            catch (e) {
                alert('Error in Adding New Entity: ' + e);
            }
        }
        else {

        }
    }
    req.send(JSON.stringify(data));
    alert('send post');
    // req.send(params);


}






// functions: //

// // remove existing child nodes before adding new nodes //
function RemovePPtInputElement() {
    while (divdetails.firstChild) {
        divdetails.removeChild(divdetails.firstChild);
    }
}

// create an input element for each property of entity //
function CreatePPtInputElement(listobj) {
    var ppt;
    for (ppt in listobj) {
        // wrapping div //
        var divelement = document.createElement('div');
        // divelement.setAttribute('class', 'divdetailselement');
        divelement.setAttribute('style', 'display:flex;');
        divdetails.appendChild(divelement);

        // label //
        var labelelement = document.createElement('LABEL');
        labelelement.setAttribute('style', 'flex-grow:1; background-color:gray;');
        labelelement.innerHTML = ppt;
        // labelelement.setAttribute('flex-grow', '1');
        divelement.appendChild(labelelement);

        // input box //
        var inputelement = document.createElement('INPUT');
        inputelement.setAttribute('type', 'text');
        inputelement.setAttribute('style', 'flex-grow:3; align-self: flex-start; background-color:blue;');

        // inputelement.setAttribute('flex-grow', '1');
        var newinputelement = divelement.appendChild(inputelement);
        newinputelement.value = listobj[ppt];

        // // new line //
        // var brelement = document.createElement('BR');
        // divdetails.appendChild(brelement);
    }

}