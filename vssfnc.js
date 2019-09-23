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
    // arryJSON - a json data object 
    // arryfooter - ??
    // tablelistX - html element of the table to be created 
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
        arryfooter: null,
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

    // 
    // load header //
    //

    // objparam.htmltable.style.tableLayout = 'fixed';
    // objparam.htmltable.style.width = '20%';

    objparam.htmltable.innerHTML = "";

    if (objparam.caption) {
        let strcaption = `<caption class = ${objparam.arryclass[0]}>${objparam.caption}</caption>`;
        objparam.htmltable.innerHTML += strcaption;
    }

    objparam.htmltable.innerHTML += '<colgroup><col style = "font-style:italic"><col style = "font-style:italic"><col style = "font-style:italic"></colgroup>';

    let strHeaderCol = `<thead><tr class = "${objparam.arryclass[1]}">`;
    objparam.arryheadercol.forEach((datacol, index) => {
        strHeaderCol += `<th class = "${objparam.arryclass[2]}" id = ${index} data-${objparam.arrydataid[0]} = "${objparam.htmltableid}" style = "width:${objparam.arryheadercol[index][1]} ${objparam.arryheadercol[index][1] === '0%' ? ';display:none' : ''}" >${datacol[0]}</th>`;
        // strHeaderCol += `<th class = "${objparam.arryclass[2]}" id = ${index} data-${objparam.arrydataid[0]} = "${objparam.htmltableid}" style = "width:${objparam.arryheadercol[index][1]}" >${datacol[0]}</th>`;
        // strHeaderCol += `<th style = "width:${objparam.arryheadercol[index][1]}" class = "${objparam.arryclass[2]}" id = ${index} data-${objparam.arrydataid[0]} = "${objparam.htmltableid}">${datacol[0]}</th>`;
    });
    strHeaderCol += '</tr></thead>';
    objparam.htmltable.innerHTML += strHeaderCol;

    // 
    // load datarow //
    //

    let strRowData = '<tbody>'
    let boolbtnadded;
    let strbtn;
    objparam.arryjsondata.forEach((item, index) => {
        strRowData += `<tr class = ${objparam.arryclass[3]} data-${objparam.arrydataid[1]} = ${Object.values(item)[0]}>`;

        // datarow button (1st datacol), if any //
        boolbtnadded = objparam.addbutton ? false : true;
        strbtn = '';
        Object.values(item).forEach((val, index) => {
            // construct str for button element //
            strbtn = boolbtnadded ? '' : `<button class = ${objparam.arryclass[4]} data-${objparam.arrydataid[1]} = ${Object.values(item)[0]}>..</button>`;

            // construct the td element //
            strRowData += `<td style = 'text-align:${objparam.arryheadercol[index][2] === 1 ? 'right' : (objparam.arryheadercol[index][2] === 0 ? 'center' : 'left')} ${objparam.arryheadercol[index][1] === '0%' ? ';display:none' : ''}'> ${strbtn} ${val} </td>`;
            // strRowData += `<td style = 'text-align:${objparam.arryheadercol[index][2] === 1 ? 'right' : (objparam.arryheadercol[index][2] === 0 ? 'center' : 'left')}'> ${strbtn} ${val} </td>`;
            boolbtnadded = true;
        });
        strRowData += '</tr>';
    });
    strRowData += '</tbody>';
    objparam.htmltable.innerHTML += strRowData;

    if (objparam.arryfooter) {
        objparam.htmltable.innerHTML += `<tfoot><tr class = ${objparam.arryclass[5]}><td>${objparam.arryjsondata.length}</td>${objparam.arryfooter}</tr></tfoot>`;
    }


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
                return datacol
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
}

// }
// catch (e) {
//     alert('loadtablelist error: ' + e);
// }

// function vssfnc_tablepopulate(objparam) {
//     // 4 tasks are executed:
//     // - load caption <caption>
//     // - load header <thead>
//     // - load body + datarow <tbody>
//     // - load footer <tfoot>
//     // - add eventhandler for datarow
//     // - paint datarow (odd/even)
//     // - add eventhandler for:
//     //      - header
//     //      - datarow button


//     // try {

//     // 
//     // load header //
//     //

//     if (objparam.caption) {
//         let strcaption = `<caption>${objparam.caption}</caption>`
//         objparam.htmltable.innerHTML = strcaption;
//     }

//     let strHeaderCol = `<thead><tr class = "${objparam.arryclass[0]}">`;
//     objparam.arryheadercol.forEach((datacol, index) => {
//         strHeaderCol += `<th class = "${objparam.arryclass[1]}" id = ${index} data-${objparam.arrydataid[0]} = "${objparam.htmltableid}">${datacol}</th>`;
//     });
//     strHeaderCol += '</tr></thead>';
//     objparam.htmltable.innerHTML += strHeaderCol;

//     // 
//     // load datarow //
//     // 

//     let strRowData = '<tbody>'
//     let boolbtnadded;
//     let strbtn;
//     objparam.arryjsondata.forEach((item, index) => {
//         // attach vehicle number (index: 0) as an identifier //
//         strRowData += `<tr class = ${objparam.arryclass[2]} data-${objparam.arrydataid[1]} = ${Object.values(item)[0]}>`;

//         // data //
//         // there is an action button for datacol:vehicle number (1st datacol) //
//         boolbtnadded = objparam.addbutton ? false : true;
//         strbtn = '';
//         Object.values(item).forEach((val, index) => {
//             // construct str for button element //
//             strbtn = boolbtnadded ? '' : `<button class = ${objparam.arryclass[3]} data-${objparam.arrydataid[1]} = ${Object.values(item)[0]}>..</button>`;

//             // construct the td element //
//             strRowData += `<td> ${strbtn} ${val} </td>`;
//             boolbtnadded = true;
//         });
//         strRowData += '</tr>';
//     });
//     strRowData += '</tbody>';
//     objparam.htmltable.innerHTML += strRowData;

//     objparam.htmltable.innerHTML += '<tfoot>Footer</tfoot>';

//     // 
//     // eventhandler for table datarow clicked //
//     // ! do it before formatting odd/even row, which changes the class of the datarow !//
//     // 
//     let tabledatarow = document.getElementsByClassName(objparam.arryclass[2]);
//     for (var i = 0; i < tabledatarow.length; i++) {
//         if (objparam.fncdatarowclicked === undefined) {
//             tabledatarow[i].onclick = function () {

//                 // <tr> -> <tbody> -> <table> //
//                 let parent = this.parentElement.parentElement;
//                 vssfnc_paintoddevenrow(parent, objparam.arryclassdatarow[0], objparam.arryclassdatarow[1], objparam.arryclassdatarow[2]);
//                 this.classList.add(objparam.arryclassdatarow[2]);
//             }
//         }
//         else {
//             tabledatarow[i].onclick = objparam.fncdatarowclicked;
//         }
//     }

//     //
//     // paint table datarow - odd/even //
//     // 
//     vssfnc_paintoddevenrow(objparam.htmltable, objparam.arryclassdatarow[0], objparam.arryclassdatarow[1], objparam.arryclassdatarow[2]);


//     // add event handler //

//     // eventhandler for table header sort //
//     let tablecolheaderX = objparam.htmltable.getElementsByClassName(objparam.arryclass[1]);
//     for (var i = 0; i < tablecolheaderX.length; i++) {
//         tablecolheaderX[i].onclick = function () {
//             // try {

//             let colidx = this.id;
//             let dir = ((this.innerHTML).indexOf(objparam.arrysortind[0]) < 0 ? -1 : 1);

//             // revert sortedtablecol to original headercol //
//             let sortedtablecol = objparam.arryheadercol.map(function (datacol) {
//                 return datacol.includes(objparam.arrysortind[0]) ? datacol.replace(objparam.arrysortind[0], '') : datacol.includes(objparam.arrysortind[1]) ? datacol.replace(objparam.arrysortind[1], '') : datacol;
//             })

//             // rename sorted headercol //
//             sortedtablecol[colidx] += (dir < 0) ? objparam.arrysortind[0] : objparam.arrysortind[1];

//             // reload sorted table //
//             objparam.arryheadercol = sortedtablecol;
//             objparam.arryjsondata = vssfnc_sortarrydata(objparam.arryjsondata, colidx, dir);
//             vssfnc_tablepopulate(objparam);
//         }
//     }


//     // eventhandler for table datarow button //
//     if (objparam.addbutton) {
//         let tablerowbutton = objparam.htmltable.getElementsByClassName(objparam.arryclass[3]);
//         for (var i = 0; i < tablerowbutton.length; i++) {
//             if (objparam.fncbuttonclicked === undefined) {
//                 tablerowbutton[i].onclick = function () {
//                     alert('(vssfnc) Enter Exit Time for: ' + this.dataset[objparam.arrydataid[1]]);
//                 }
//             }
//             else {
//                 tablerowbutton[i].onclick = objparam.fncbuttonclicked;
//             }

//         }
//     }
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
    // actionurl - url to add
    // arrykey - a 2-dim array of  [key[description strings, requird, type]]
    // arryJSON - a json data object 
    // arryfooter - ??
    // tablelistX - html element of the table to be created 
    // tableid - id of source datatable (for sorting by column purposes - obsolete?)
    // arryclass - an array of css classes - 
    //          0:caption
    //          1:label
    //          2:input
    //          3:button
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
        actionurl: null,
        arrykey: null,
        arryjsondata: null,
        arryfooter: null,
        htmlform: null,
        htmlformid: null,
        arryclass: null,
        arryclassdatarow: null,
        arrydataid: null,
        arrysortind: null,
        addbutton: false,
        fncdatarowclicked: undefined,
        fncbuttonclicked: undefined
    }
}

function vssfnc_formpopulate(objparam) {

    // 
    // remove existing elements //
    // 

    while (objparam.htmlform.firstChild) {
        objparam.htmlform.removeChild(objparam.htmlform.firstChild);
    }


    // 
    // format form //
    // 

    console.log(objparam.actionurl);

    if (objparam.actionurl) {
        objparam.htmlform.method = 'POST';
        objparam.htmlform.action = objparam.actionurl;
    }

    objparam.htmlform.style.display = 'flex';
    objparam.htmlform.style.flexDirection = 'column';

    // caption
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
    for (ppt in objparam.arryjsondata) {

        // property wrapper - a div (row/column flex) with: divlabel + divinput //
        var divwrapper = document.createElement('div');
        divwrapper.width = '100%';
        divwrapper.setAttribute('style', 'display:flex;');


        // label //
        var divlabel = document.createElement('div');
        divlabel.setAttribute('style', 'flex-basis:50%;');

        var labelelement = document.createElement('LABEL');
        labelelement.width = '100%';
        labelelement.innerHTML = ppt;
        if (objparam.arryclass[1]) {
            labelelement.classList.add(objparam.arryclass[1]);
        }
        labelelement.setAttribute('style', 'width:100%;')
        divlabel.appendChild(labelelement);


        // input box //
        var divinput = document.createElement('div');
        divinput.setAttribute('style', 'flex-basis:50%');

        var inputelement = document.createElement('INPUT');
        inputelement.setAttribute('type', 'text');
        inputelement.setAttribute('name', ppt);
        if (objparam.arryclass[2]) {
            inputelement.classList.add(objparam.arryclass[2]);
        }
        inputelement.value = objparam.arryjsondata[ppt];
        inputelement.setAttribute('style', 'width:100%;')
        divinput.appendChild(inputelement);



        divwrapper.appendChild(divlabel);
        divwrapper.appendChild(divinput);

        objparam.htmlform.appendChild(divwrapper);

        // // new line //
        // var brelement = document.createElement('BR');
        // objparam.htmlform.appendChild(brelement);
    }

    // submit button //
    let divbutton = document.createElement('div');

    var buttonelement = document.createElement('button');
    buttonelement.setAttribute('type', 'submit');
    buttonelement.value= 'Add';
    buttonelement.classList.add(objparam.arryclass[3]);
    // buttonelement.formAction=objparam.actionurl;
    // objparam.htmlform.appendChild(buttonelement);
    // buttonelement.onclick = objparam.fncbuttonclicked;

    divbutton.appendChild(buttonelement);
    objparam.htmlform.appendChild(divbutton);


}
