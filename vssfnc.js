const vf_strSortAsc = ' (v)';
const vf_strSortDsc = ' (^)';

function vssfnc_tablepopulate(arryheader, arryJSON, tablelistX, tableid, arryclass, arrydataid, arryclassdatarow, boolbutton) {

    // arryheader - an array of header col descriptions //
    // arryJSON - a json data object //
    // tablelistX - html element of the table to be created //
    // tableid - id of source datatable (for sort by column purposes)
    // arryclass - an array of classes - 0:<tr>header, 1:<th>, 2:<tr>data, 3:<tr><button>
    // arrydataid - an array of data attributes - 0:table, 1:datarow
    // arryclassdatarow - an array of 3 classes for datarow - 0:class of odd row, 1:class of even row, 2:class of selected row
    // boolbutton - true to add a button in the first cell of each row


    // 4 tasks are executed:
    // - load header
    // - load datarow
    // - paint datarow
    // - add eventhandler for:
    //      - header
    //      - datarow button

    // try {

    // load header //
    let strHeaderCol = `<thead><tr class = "${arryclass[0]}">`;

    arryheader.forEach((datacol, index) => {
        strHeaderCol += `<th class = "${arryclass[1]}" id = ${index} data-${arrydataid[0]} = "${tableid}">${datacol}</th>`;
    });
    strHeaderCol += '</tr></thead>';
    tablelistX.innerHTML = strHeaderCol;

    // load datarow //
    let strRowData = '<tbody>'
    let boolbtnadded;
    let strbtn;
    arryJSON.forEach((item, index) => {
        // attach vehicle number (index: 0) as an identifier //
        strRowData += `<tr class = ${arryclass[2]} data-${arrydataid[1]} = ${Object.values(item)[0]}>`;

        // data //
        // there is an action button for datacol:vehicle number (1st datacol) //
        boolbtnadded = boolbutton ? false : true;
        strbtn = '';
        Object.values(item).forEach((val, index) => {
            // construct str for button element //
            strbtn = boolbtnadded ? '' : `<button class = ${arryclass[3]} data-${arrydataid[1]} = ${Object.values(item)[0]}>..</button>`;

            // construct the td element //
            strRowData += `<td> ${strbtn} ${val} </td>`;
            boolbtnadded = true;
        });
        strRowData += '</tr>';
    });
    strRowData += '</tbody>';
    tablelistX.innerHTML += strRowData;

    // eventhandler for table datarow clicked //
    let tabledatarow = document.getElementsByClassName(arryclass[2]);
    for (var i = 0; i < tabledatarow.length; i++) {
        tabledatarow[i].onclick = function () {
            this.classList.add(arryclassdatarow[2]);
        }
    }

    // paint table datarow //
    // oddevendatarow(tablelistX, arryclassdatarow[0], arryclassdatarow[1]);
    try {
        let cssstyle = arryclassdatarow[0];
        for (let i = 0; i < tablelistX.rows.length; i++) {
            // tablelistX.rows[i].className = '';
            cssstyle = (cssstyle === arryclassdatarow[1]) ? arryclassdatarow[0] : arryclassdatarow[1];
            tablelistX.rows[i].classList.add(cssstyle);
        }
    }
    catch (e) { alert(e); }


    // add event handler //

    // eventhandler for table header sort //
    let tablecolheader = tablelistX.getElementsByClassName(arryclass[1]);
    for (var i = 0; i < tablecolheader.length; i++) {
        tablecolheader[i].onclick = function () {
            // try {
            
            let colidx = this.id;
            let dir = ((this.innerHTML).indexOf(vf_strSortAsc) < 0 ? -1 : 1);

            // revert sortedtablecol to original headercol //
            let sortedtablecol = arryheader.map(function (datacol) {
                return datacol.includes(vf_strSortAsc)?datacol.replace(vf_strSortAsc, ''):datacol.includes(vf_strSortDsc)?datacol.replace(vf_strSortDsc, ''):datacol;
            })

            // rename sorted headercol //
            sortedtablecol[colidx] += (dir < 0) ? vf_strSortAsc : vf_strSortDsc;

            // let th = tablelistX.getElementsByTagName('th');
            // for (let i = 0; i < th.length; i++) {
            //     th[i].innerHTML = sortedtablecol[i];
            // }

            // let datarow = tablelistX.getElementsByClassName(arryclass[2]);
            // for(let i = 0; i < datarow.length; i ++){
            //     alert(datarow[i].innerHTML);
            // }

            // reload table with sorted array
            // k = new vssfnc_tablepopulate(sortedtablecol, sortarrydata(arryJSON, colidx, dir), tablelistX, tableid, arryclass, arrydataid, arryclassdatarow, boolbutton);
            vssfnc_tablepopulate(sortedtablecol, vssfnc_sortarrydata(arryJSON, colidx, dir), tablelistX, tableid, arryclass, arrydataid, arryclassdatarow, boolbutton);



            // rewrite sortedtablecol //
            // if (this.dataset[strtabledataid] === strtableidcurr) {
            //     sortedtablecol = tablecolX.slice();
            //     sortedtablecol[colidx] += (dir < 0) ? strSortAsc : strSortDsc;

            //     // reload table with sorted array
            //     loadtablelist(sortedtablecol, sortarrydata(arrydataX, colidx, dir), tablelistX);
            // }
            // else {
            //     sortedtablecolblack = tablecolX.slice();
            //     sortedtablecolblack[colidx] += (dir < 0) ? strSortAsc : strSortDsc;

            //     // reload table with sorted array
            //     loadtablelist(sortedtablecolblack, sortarrydata(arrydataX, colidx, dir), tablelistX);
            // }
            // }
            // catch (e) {
            //     alert('Add Event Handler for Table Header: ' + e);
            // }
        }
    }


    // eventhandler for table datarow button //
    if (boolbutton) {
        let tablerowbutton = tablelistX.getElementsByClassName(arryclass[3]);
        for (var i = 0; i < tablerowbutton.length; i++) {
            tablerowbutton[i].onclick = function () {
                console.log(this);
                alert('(vssfnc) Enter Exit Time for: ' + this.dataset[arrydataid[1]]);
            }
        }
    }
    // }
    // catch (e) {
    //     alert('loadtablelist error: ' + e);
    // }
}


// function oddevendatarow(tablelistX, classoddrow, classevenrow) {
//     try {
//         let cssstyle = classoddrow;
//         for (let i = 0; i < tablelistX.rows.length; i++) {
//             // tablelistX.rows[i].className = '';
//             cssstyle = (cssstyle === classevenrow) ? classoddrow : classevenrow;
//             tablelistX.rows[i].classList.add(cssstyle);
//         }
//     }
//     catch (e) { alert(e); }
// }


function vssfnc_sortarrydata(arryJSON, colidx, dir) {
    // use the first data object in arryJSON to extract the property 

    try {
        // compare string
        return arryJSON.sort(function (a, b) {
            let x = a[Object.keys(arryJSON[0])[colidx]].toLowerCase();
            let y = b[Object.keys(arryJSON[0])[colidx]].toLowerCase();

            let rtn = 0;
            if (x < y) { rtn = 1; }
            if (x > y) { rtn = -1; }
            return rtn * dir;
        });

        // compare number

        // compare date

    }
    catch (e) {
        alert('sortarrydata error: ' + e);
    }
}
