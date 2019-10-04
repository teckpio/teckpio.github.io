'use strict';

// vssfnc_tablepopulate_param
// vssfnc_tablepopulate
// vssfnc_paintoddevenrow
// vssfnc_sortarrydata

// vssfnc_formpopulate_param
// vssfnc_formpopulate

function vssfnc_tablepopulate_param() {
    // caption - caption of table (optional)
    // arryheadercol - a 2-dim array of  [header col[description strings, col-width, text-alignment]]
    //                  (col-width: set to '0%' to hide column - col-width is checked in both <th> and <td> to determine whether to <display:none>)
    //                  (text-alignment - 0:center, -1:left, 1:right (default - left))
    //               - if arryheadercol is not provided, header col info will be extracted from arryJSON's properties - col-width will be defaulted, text-alignment - ?)
    // arryJSON - a json data object 
    // arryfooteragg - an array of aggregate functions (sum or ave) on required column
    // boolitemcount - a boolean to indicate whether to list number of items at the bottom of table
    // tablelistX - html element of the table to be created (if the html table element is not provided, the function will return a table element)
    // tableid - id of source datatable (for sorting by column purposes - obsolete?)
    // arryclass - an array of css classes - 
    //          0:<caption> 
    //          1:<thead><tr>
    //          2:<thead><tr><th>
    //          3:<tr><td>
    //          4:<tr><button>
    //          5:<tfoot><tr>
    // arryclassdatarow - an array of 3 classes for datarow - 
    //          0:odd-numbered row
    //          1:even-numbered row
    //          2:selected row
    // arrydataid - an array of data attributes - 
    //          0:table id
    //          1:datarow id
    // arrysortind - an array of 2 strings indicator for column sorting - 
    //          0:ascending
    //          1:descending
    // boolbutton - true to add a button in the first cell of each row
    // fncdatarowclicked - function to call on datarow clicked
    // fncbuttonclicked - function to call on datarow button clicked

    return {
        caption: null,
        arryheadercol: null,
        arryjsondata: null,
        arryfooteragg: null,
        boolitemcount: false,
        htmltable: null,
        htmltableid: null,
        arryclass: null,
        arryclassdatarow: null,
        arrydataid: null,
        arrysortind: null,
        addbutton: false,
        fncdatarowclicked: undefined,
        fncbuttonclicked: undefined
    }
}

function vssfnc_tablepopulate(objparam) {
    // 4 tasks are executed:
    // - load caption <caption>
    // - load header <thead>
    // - load body + datarow <tbody>
    // - load footer <tfoot>
    // - add eventhandler for datarow (to be before paint datarow)
    // - paint datarow (odd/even)
    // - add eventhandler for:
    //      - header
    //      - datarow button


    // try {
    let boolReturnElem = false;
    if (objparam.htmltable) {
        objparam.htmltable.innerHTML = "";
    }
    else {
        objparam.htmltable = document.createElement('table');
        objparam.htmltable.id = objparam.arrydataid[0];
        boolReturnElem = true;
    }

    // handling of null param //
    if (!objparam.arryclass) {
        objparam.arryclass = [];
    }
    if (!objparam.arryclassdatarow) {
        objparam.arryclassdatarow = [];
    }
    if (!objparam.arrydataid) {
        objparam.arrydataid = [];
    }

    // caption //

    if (objparam.caption) {
        let strcaption = `<caption class = ${objparam.arryclass[0]}>${objparam.caption}</caption>`;
        objparam.htmltable.innerHTML += strcaption;
    }

    // objparam.htmltable.innerHTML += '<colgroup><col style = "font-style:italic"><col style = "font-style:italic"><col style = "font-style:italic"></colgroup>';

    let strHeaderCol = `<thead><tr class = "${objparam.arryclass[1]}">`;
    if (objparam.arryheadercol) {
        objparam.arryheadercol.forEach((datacol, index) => {
            strHeaderCol += `<th class = "${objparam.arryclass[2]}" id = ${index} data-${objparam.arrydataid[0]} = "${objparam.htmltableid}" style = "width:${objparam.arryheadercol[index][1]} ${objparam.arryheadercol[index][1] === '0%' ? ';display:none' : ''}" >${datacol[0]}</th>`;
        });
    }
    else {
        // extract header col from json object //
        objparam.arryheadercol = [];
        let header;
        let index = 0;

        // objparam.arryheadercol = [[headercol[0], '0%', 0], [headercol[1], '100%',]];
        for (header in objparam.arryjsondata[0]) {

            strHeaderCol += `<th class = "${objparam.arryclass[2]}" id = ${index} data-${objparam.arrydataid[0]} = "${objparam.htmltableid}">${header}</th>`;
            objparam.arryheadercol.push([header, '10%', 0]);
            index += 1;
        }
    }
    strHeaderCol += '</tr></thead>';
    objparam.htmltable.innerHTML += strHeaderCol;

    // 
    // load datarow //
    //

    let strRowData = '<tbody>'
    let boolbtnadded;
    let strbtn;

    // an array for total for each datacol of arrjJSON item //
    let arrydatasum = new Array(Object.keys(objparam.arryjsondata[0]).length);
    if (objparam.arryfooteragg) {
        // initialise arrydatasum //
        for (var i = 0; i < arrydatasum.length; i++) {
            arrydatasum[i] = 0;
        }
    }

    objparam.arryjsondata.forEach((item, index) => {
        strRowData += `<tr class = ${objparam.arryclass[3]} data-${objparam.arrydataid[1]} = ${Object.values(item)[0]}>`;

        // datarow button (1st datacol), if any //
        boolbtnadded = objparam.addbutton ? false : true;
        strbtn = '';
        Object.values(item).forEach((val, index) => {
            // construct str for button element //
            strbtn = boolbtnadded ? '' : `<button class = ${objparam.arryclass[4]} data-${objparam.arrydataid[1]} = ${Object.values(item)[0]}>..</button>`;
            boolbtnadded = true;

            // construct the td element //
            strRowData += `<td style = 'text-align:${objparam.arryheadercol[index][2] === 1 ? 'right' : (objparam.arryheadercol[index][2] === 0 ? 'center' : 'left')} ${objparam.arryheadercol[index][1] === '0%' ? ';display:none' : ''}'> ${strbtn} ${val} </td>`;

            // collect aggregate details (count and total) //
            if (objparam.arryfooteragg) {
                arrydatasum[index] = parseInt(arrydatasum[index]) + parseInt(isNaN(val) ? 0 : val);
            }
        });
        strRowData += '</tr>';
    });
    strRowData += '</tbody>';
    objparam.htmltable.innerHTML += strRowData;

    // table footer //
    let strfooterhtml = '<tfoot>';

    // aggregate function
    if (objparam.arryfooteragg) {
        strfooterhtml += `<tr class = ${objparam.arryclass[5]}>`
        objparam.arryfooteragg.forEach((fnc, index) => {
            strfooterhtml += '<td>'
            switch (fnc) {
                case 'sum':
                    strfooterhtml += arrydatasum[index];
                    break;
                case 'ave':
                    strfooterhtml += (arrydatasum[index] / objparam.arryjsondata.length).toFixed(2);
                    break;
                default:
                    break;
            }
            strfooterhtml += '</td>'
        })
        // objparam.htmltable.innerHTML += `<tfoot><tr class = ${objparam.arryclass[5]}><td>${objparam.arryjsondata.length}</td>${objparam.arryfooter}</tr></tfoot>`;
        strfooterhtml += '</tr>'
    }


    // item count //
    // if (objparam.boolitemcount) {
    //     objparam.htmltable.innerHTML += `<tr class = ${objparam.arryclass[5]}><td>Count: ${objparam.arryjsondata.length}</td></tr>`;
    // }
    strfooterhtml += '</tfoot>'
    objparam.htmltable.innerHTML += strfooterhtml;

    // 
    // eventhandler for table datarow clicked //
    // ! do it before formatting odd/even row, which changes the class of the datarow !//
    // 

    let tabledatarow = document.getElementsByClassName(objparam.arryclass[3]);
    for (var i = 0; i < tabledatarow.length; i++) {
        if (objparam.fncdatarowclicked === undefined) {
            tabledatarow[i].onclick = function () {

                // <tr> -> <tbody> -> <table> //
                let parent = this.parentElement.parentElement;
                vssfnc_paintoddevenrow(parent, objparam.arryclassdatarow[0], objparam.arryclassdatarow[1], objparam.arryclassdatarow[2]);
                this.classList.add(objparam.arryclassdatarow[2]);
            }
        }
        else {
            tabledatarow[i].onclick = objparam.fncdatarowclicked;
        }
    }

    //
    // paint table datarow - odd/even //
    // 
    vssfnc_paintoddevenrow(objparam.htmltable, objparam.arryclassdatarow[0], objparam.arryclassdatarow[1], objparam.arryclassdatarow[2]);

    // 
    // add event handler //
    // 

    // eventhandler for table header click-sort //
    let tablecolheaderX = objparam.htmltable.getElementsByClassName(objparam.arryclass[2]);
    for (var i = 0; i < tablecolheaderX.length; i++) {
        tablecolheaderX[i].onclick = function () {
            // try {

            let colidx = this.id;
            let dir = ((this.innerHTML).indexOf(objparam.arrysortind[0]) < 0 ? -1 : 1);

            // revert sortedtablecol to original headercol //
            let sortedtablecol = objparam.arryheadercol.map(function (datacol) {
                datacol[0] = datacol[0].includes(objparam.arrysortind[0]) ? datacol[0].replace(objparam.arrysortind[0], '') : datacol[0].includes(objparam.arrysortind[1]) ? datacol[0].replace(objparam.arrysortind[1], '') : datacol[0];
                return datacol;
            })

            // rename sorted headercol //
            sortedtablecol[colidx][0] += (dir < 0) ? objparam.arrysortind[0] : objparam.arrysortind[1];

            // reload sorted table //
            objparam.arryheadercol = sortedtablecol;
            objparam.arryjsondata = vssfnc_sortarrydata(objparam.arryjsondata, colidx, dir);
            vssfnc_tablepopulate(objparam);
        }
    }


    // eventhandler for table datarow button //
    if (objparam.addbutton) {
        let tablerowbutton = objparam.htmltable.getElementsByClassName(objparam.arryclass[4]);
        for (var i = 0; i < tablerowbutton.length; i++) {
            if (objparam.fncbuttonclicked === undefined) {
                tablerowbutton[i].onclick = function () {
                    alert('(vssfnc) Enter Exit Time for: ' + this.dataset[objparam.arrydataid[1]]);
                }
            }
            else {
                tablerowbutton[i].onclick = objparam.fncbuttonclicked;
            }

        }
    }

    if (boolReturnElem) {
        return objparam.htmltable;
    }

}

// }
// catch (e) {
//     alert('loadtablelist error: ' + e);
// }




function vssfnc_paintoddevenrow(tablex, classoddrow, classevenrow, classselectedrow) {
    let cssstyle = classoddrow;
    for (let i = 0; i < tablex.rows.length; i++) {
        // remove selected row class, if any //
        tablex.rows[i].classList.remove(classselectedrow);

        cssstyle = (cssstyle === classevenrow) ? classoddrow : classevenrow;
        tablex.rows[i].classList.add(cssstyle);
    }
}

function vssfnc_sortarrydata(arryJSON, colidx, dir) {
    // use the first data object in arryJSON to extract the property 

    try {
        let x, y;

        return arryJSON.sort(function (a, b) {
            switch (typeof a[Object.keys(arryJSON[0])[colidx]]) {
                case 'string':
                    x = a[Object.keys(arryJSON[0])[colidx]].toLowerCase();
                    y = b[Object.keys(arryJSON[0])[colidx]].toLowerCase();
                    break;
                default:
                    x = a[Object.keys(arryJSON[0])[colidx]];
                    y = b[Object.keys(arryJSON[0])[colidx]];
                    break;
            }

            let rtn = 0;
            if (x < y) { rtn = 1; }
            if (x > y) { rtn = -1; }
            return rtn * dir;
        });
    }
    catch (e) {
        alert('sortarrydata error: ' + e);
    }
}


function vssfnc_formpopulate_param() {
    // specified form is a flex (by col/row) with one div (divwrapper) for one pair of key/value (label(divlabel)/input(divinput))
    // within divlabel is a label element and within divinput is an input element
    // 
    // caption - caption of form (optional)
    // actionurl - url to add / edit
    // arrydatacol - a 2-dim array of  [key[description strings, requird, type]]
    // arryJSON - a json data object 
    // arryfooter - ??
    // htmlform - html element of the form container (if a form html is not provided, a form element will be returned)
    // formid - id of source datatable (for sorting by column purposes - obsolete?)
    // arryitemdata - an array of constituent json data object 
    // arrylabelinput - a 2-dim array of [[label:[width ration, text-align]],[input[width ratio, text-align]] between label:input 
    //                          - [xx%, -1]
    //                          - text-align - -1:left, 0:center, 1:right
    // arryclass - an array of css classes - 
    //          0:caption
    //          1:label
    //          2:input
    //          3:divbutton
    // arryclassdatarow - an array of 3 classes for datarow - 
    //          0:odd-numbered row
    //          1:even-numbered row
    //          2:selected row
    // arrydataid - an array of data attributes - 
    //          0:table id
    //          1:datarow id
    // arrysortind - an array of 2 strings indicator for column sorting - 
    //          0:ascending
    //          1:descending
    // arrybutton - a 2-dim array of [button[(0)type, (1)text, (2)class, (3)clickedfunction]]
    // fncdatarowclicked - function to call on datarow clicked
    // fncbuttonclicked - function to call on datarow button clicked

    return {
        caption: null,
        actionurl: null,
        arrydatacol: null,
        arryjsondata: null,
        arryfooter: null,
        htmlform: null,
        htmlformid: null,
        arryitemdata: [],
        arrylabelinput: null,
        arryclass: null,
        arryclassdatarow: null,
        arrydataid: null,
        arrysortind: null,
        arrybutton: null,
        fncdatarowclicked: undefined,
        fncbuttonclicked: undefined
    }
}


// used to populate a form (display / addition / edit) for a single object with multiple properties //
function vssfnc_formpopulate(objparam) {



    let boolReturnElem = false;
    if (objparam.htmlform) {
        // remove existing elements //
        while (objparam.htmlform.firstChild) {
            objparam.htmlform.removeChild(objparam.htmlform.firstChild);
        }
    }
    else {
        objparam.htmlform = document.createElement('form');
        boolReturnElem = true;
    }


    // 
    // format form //
    // a form is a flex (row or col depending on layout) with one div for each property //

    // form action url //
    // if an url for form action is provided, it's a POST request, else default to GET //
    if (objparam.actionurl) {
        objparam.htmlform.method = 'POST';
        objparam.htmlform.action = objparam.actionurl;
    }

    objparam.htmlform.style.display = 'flex';
    objparam.htmlform.style.flexDirection = 'column';

    // 
    // caption //
    // 

    if (objparam.caption) {
        let captionelement = document.createElement('div');
        captionelement.innerHTML = objparam.caption;
        if (objparam.arryclass[0]) {
            captionelement.classList.add(objparam.arryclass[0]);
        }
        objparam.htmlform.appendChild(captionelement);
    }


    // 
    // load key and value //
    // 

    var ppt;
    var idxarrydatacol = 0;
    for (ppt in objparam.arryjsondata) {

        // property wrapper - a div (row or column flex depending on layout) with: divlabel + divinput //
        var divwrapper = document.createElement('div');
        divwrapper.width = '100%';
        divwrapper.setAttribute('style', 'display:flex;');


        // label - a label element in a div element //
        var divlabel = document.createElement('div');
        divlabel.style.flexBasis = objparam.arrylabelinput[0][0];
        divlabel.style.textAlign = objparam.arrylabelinput[0][1] === 0 ? 'center' : (objparam.arrylabelinput[0][1] === 1 ? 'right' : 'left');

        var labelelement = document.createElement('LABEL');
        labelelement.width = '100%';
        if (objparam.arrydatacol[idxarrydatacol][0]) {
            labelelement.innerHTML = objparam.arrydatacol[idxarrydatacol][0];
        }
        else {
            labelelement.innerHTML = ppt;
        }

        if (objparam.arryclass[1]) {
            labelelement.classList.add(objparam.arryclass[1]);
        }
        labelelement.setAttribute('style', 'width:100%;')
        divlabel.appendChild(labelelement);


        // data input box - an input OR select element in a div element //
        var divinput = document.createElement('div');
        divinput.setAttribute('style', `flex-basis:${objparam.arrylabelinput[1][0]};`);

        // dataobj vs non-dataobj //
        // non-dataobj -> checkbox vs text //
        let inputelement;

        // dataobj vs non-dataobj //
        if (isNaN(objparam.arrydatacol[idxarrydatacol][2])) {

            // non-dataobj -> checkbox vs text //
            if (objparam.arrydatacol[idxarrydatacol][2] === 'radio') {
                // radio button //
                // inputelement for radio is a div with 2 radio
                inputelement = document.createElement('div');

                const idradioYes = 'rY';
                const idradioNo = 'rN';

                // yes radio //
                let radioY = document.createElement('INPUT');
                radioY.setAttribute('name', ppt);
                radioY.required = objparam.arrydatacol[idxarrydatacol][1];
                radioY.setAttribute('type', objparam.arrydatacol[idxarrydatacol][2]);
                radioY.value = 1;
                radioY.id = idradioYes;
                inputelement.appendChild(radioY);

                let labelY = document.createElement('label');
                labelY.setAttribute('for', idradioYes);
                labelY.innerHTML = 'YES';
                inputelement.appendChild(labelY);

                // no radio //
                let radioN = document.createElement('INPUT');
                radioN.setAttribute('name', ppt);
                radioN.required = objparam.arrydatacol[idxarrydatacol][1];
                radioN.setAttribute('type', objparam.arrydatacol[idxarrydatacol][2]);
                radioN.value = 0;
                radioN.id = idradioNo;
                inputelement.appendChild(radioN);

                let labelN = document.createElement('label');
                labelN.setAttribute('for', idradioNo);
                labelN.innerHTML = 'NO';
                inputelement.appendChild(labelN);

                if (objparam.arryjsondata[ppt]) {
                    radioY.checked = true;
                }
                else {
                    radioN.checked = true;
                }
            }
            else {
                // text //
                inputelement = document.createElement('INPUT');
                inputelement.setAttribute('name', ppt);
                inputelement.required = objparam.arrydatacol[idxarrydatacol][1];

                // / doesn't work !! required is a reflected property //
                // inputelement.setAttribute('required', objparam.arrydatacol[idxarrydatacol][1]);//

                inputelement.setAttribute('type', objparam.arrydatacol[idxarrydatacol][2]);
                inputelement.value = objparam.arryjsondata[ppt];
            }
        }
        else {
            // supporting data by id //
            inputelement = document.createElement('select');
            inputelement.setAttribute('name', ppt);
            inputelement.setAttribute('required', objparam.arrydatacol[idxarrydatacol][1]);

            // populate select list item //
            objparam.arryitemdata[objparam.arrydatacol[idxarrydatacol][2]].forEach(value => {
                var opt = document.createElement('option');
                opt.value = value.ID;
                opt.text = value.NName;
                inputelement.add(opt);
            })

            // find the data in the list //
            var dataobjX = objparam.arryitemdata[objparam.arrydatacol[idxarrydatacol][2]].find(function (dataobj) {
                return dataobj.ID === objparam.arryjsondata[ppt];
            })
            if (dataobjX) {
                inputelement.value = dataobjX.ID;
            }
            else {
                inputelement.value = '';
            }
        }
        if (objparam.arryclass[2]) {
            inputelement.classList.add(objparam.arryclass[2]);
        }

        inputelement.setAttribute('style', `width:100%;
            text-align:${objparam.arrylabelinput[1][1] === 0 ? 'center' : (objparam.arrylabelinput[1][1] === 1 ? 'right' : 'left')}`);
        divinput.appendChild(inputelement);

        divwrapper.appendChild(divlabel);
        divwrapper.appendChild(divinput);

        objparam.htmlform.appendChild(divwrapper);

        idxarrydatacol++
    }

    //  button //
    let divbutton = document.createElement('div');
    divbutton.setAttribute('style', 'display:flex; justify-content:space-around;');
    divbutton.classList.add(objparam.arryclass[3]);

    for (let i = 0; i < objparam.arrybutton.length; i++) {
        var buttonelement = document.createElement('button');
        buttonelement.setAttribute('type', objparam.arrybutton[i][0]);
        buttonelement.innerHTML = objparam.arrybutton[i][1];

        buttonelement.classList.add(objparam.arryclass[i][2]);
        // buttonelement.formAction=objparam.actionurl;
        if (objparam.arrybutton[i][0] !== 'submit' && objparam.arrybutton[i][0] !== 'reset') {
            buttonelement.onclick = objparam.arrybutton[i][3];
        }
        divbutton.appendChild(buttonelement);
    }

    objparam.htmlform.appendChild(divbutton);

    // onsubmit is required to convert checkbox / radio value //
    // objparam.htmlform.onsubmit = function (evt) {
    //     let eleminput = this.querySelectorAll('input');
    //     eleminput.forEach(elem => {
    //         if (elem.type == 'checkbox') {
    //             elem.value = elem.checked ? 1 : 0;
    //         }
    //     })
    //     // evt.preventDefault();
    // }

    if (boolReturnElem) {
        return objparam.htmlform;
    }
}


function vssfnc_scrollright(){
    if (this.innerHTML === strUserProfile) {
        // scroll right //
        listtitle.innerHTML = strUserProfile;
        userprofile.style = 'display:block';
        setTimeout(function () {
            tablelist.style = 'transform: translateX(100%)';
            userprofile.style = 'right:0';

        }, numContentScrollDelay);

        this.innerHTML = strUserList;
    }
    else {
        // scroll left //
        listtitle.innerHTML = strBlackListWhite;
        tablelist.style = 'transform: translateX(0)';
        userprofile.style = 'right:-100%';
        setTimeout(function () {
            userprofile.style = 'display:none';

        }, numContentScrollDelay * 3);
        this.innerHTML = strUserProfile;
    }
}