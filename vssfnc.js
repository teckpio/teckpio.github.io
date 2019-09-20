'use strict';



function vssfnc_tablepopulate_param() {
    // arryheader - an array of header col description strings //
    // arryJSON - a json data object //
    // tablelistX - html element of the table to be created //
    // tableid - id of source datatable (for sorting by column purposes - obsolete?)
    // arryclass - an array of classes - 0:<tr>header, 1:<th>, 2:<tr>data, 3:<tr><button>
    // arrydataid - an array of data attributes - 0:table id, 1:datarow id
    // arryclassdatarow - an array of 3 classes for datarow - 0:class of odd row, 1:class of even row, 2:class of selected row
    // arrysortind - an array of 2 strings for column sorting - 0:ascending indicator, 1:descending indicator
    // boolbutton - true to add a button in the first cell of each row
    // fncdatarowclicked - function to call on datarow clicked

    return {
        arryheadercol: null,
        arryjsondata: null,
        htmltable: null,
        htmltableid: null,
        arryclass: null,
        arrydataid: null,
        arryclassdatarow: null,
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
    // - add eventhandler for datarow
    // - paint datarow (odd/even)
    // - add eventhandler for:
    //      - header
    //      - datarow button


    // try {

    // 
    // load header //
    //

    let strcaption = '<caption>Caption</caption>'
    objparam.htmltable.innerHTML =strcaption;

    let strHeaderCol = `<thead><tr class = "${objparam.arryclass[0]}">`;
    objparam.arryheadercol.forEach((datacol, index) => {
        strHeaderCol += `<th class = "${objparam.arryclass[1]}" id = ${index} data-${objparam.arrydataid[0]} = "${objparam.htmltableid}">${datacol}</th>`;
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
        // attach vehicle number (index: 0) as an identifier //
        strRowData += `<tr class = ${objparam.arryclass[2]} data-${objparam.arrydataid[1]} = ${Object.values(item)[0]}>`;

        // data //
        // there is an action button for datacol:vehicle number (1st datacol) //
        boolbtnadded = objparam.addbutton ? false : true;
        strbtn = '';
        Object.values(item).forEach((val, index) => {
            // construct str for button element //
            strbtn = boolbtnadded ? '' : `<button class = ${objparam.arryclass[3]} data-${objparam.arrydataid[1]} = ${Object.values(item)[0]}>..</button>`;

            // construct the td element //
            strRowData += `<td> ${strbtn} ${val} </td>`;
            boolbtnadded = true;
        });
        strRowData += '</tr>';
    });
    strRowData += '</tbody>';
    objparam.htmltable.innerHTML += strRowData;

    objparam.htmltable.innerHTML += '<tfoot>Footer</tfoot>';

    // 
    // eventhandler for table datarow clicked //
    // ! do it before formatting odd/even row, which changes the class of the datarow !//
    // 
    let tabledatarow = document.getElementsByClassName(objparam.arryclass[2]);
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


    // add event handler //

    // eventhandler for table header sort //
    let tablecolheaderX = objparam.htmltable.getElementsByClassName(objparam.arryclass[1]);
    for (var i = 0; i < tablecolheaderX.length; i++) {
        tablecolheaderX[i].onclick = function () {
            // try {

            let colidx = this.id;
            let dir = ((this.innerHTML).indexOf(objparam.arrysortind[0]) < 0 ? -1 : 1);

            // revert sortedtablecol to original headercol //
            let sortedtablecol = objparam.arryheadercol.map(function (datacol) {
                return datacol.includes(objparam.arrysortind[0]) ? datacol.replace(objparam.arrysortind[0], '') : datacol.includes(objparam.arrysortind[1]) ? datacol.replace(objparam.arrysortind[1], '') : datacol;
            })

            // rename sorted headercol //
            sortedtablecol[colidx] += (dir < 0) ? objparam.arrysortind[0] : objparam.arrysortind[1];

            // reload sorted table //
            objparam.arryheadercol = sortedtablecol;
            objparam.arryjsondata = vssfnc_sortarrydata(objparam.arryjsondata, colidx, dir);
            vssfnc_tablepopulate(objparam);
        }
    }


    // eventhandler for table datarow button //
    if (objparam.addbutton) {
        let tablerowbutton = objparam.htmltable.getElementsByClassName(objparam.arryclass[3]);
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
                    x = a;
                    y = b;
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
