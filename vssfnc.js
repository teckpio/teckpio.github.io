
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

    try {
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
        oddevendatarow(tablelistX, arryclassdatarow[0], arryclassdatarow[1]);

        // add event handler //
        // eventhandler for table header sort //
        for (var i = 0; i < tablecolheader.length; i++) {
            tablecolheader[i].onclick = function () {
                try {
                    alert(this.id);
                    // determine the curr / black objects to use //
                    // var sortedtablecolX;
                    // let tablecolX, arrydataX, tablelistX;

                    // if (this.dataset[strtabledataid] === strtableidcurr) {
                    //     sortedtablecolX = sortedtablecol;
                    //     tablecolX = tablecol;
                    //     arrydataX = sampledata;
                    //     tablelistX = tablelist;
                    // }
                    // else {
                    //     sortedtablecolX = sortedtablecolblack
                    //     tablecolX = tablecolBlacklist;
                    //     arrydataX = sampledataBlacklist;
                    //     tablelistX = tableblacklist;
                    // }


                    // // extract selected col id //
                    // let colidx = sortedtablecolX.indexOf(this.innerHTML);
                    // let dir = ((this.innerHTML).indexOf(strSortAsc) < 0 ? -1 : 1);


                    // // rewrite sortedtablecol //
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
                }
                catch (e) {
                    alert('Add Event Handler for Table Header: ' + e);
                }
            }
        }


        // eventhandler for table datarow button //
        if (boolbutton) {
            let tablerowbutton = document.getElementsByClassName(arryclass[3]);
            for (var i = 0; i < tablerowbutton.length; i++) {
                tablerowbutton[i].onclick = function () {
                    alert('(vssfnc) Enter Exit Time for: ' + this.dataset
                    [arrydataid[1]]);
                }
            }
        }


    }
    catch (e) {
        alert('loadtablelist error: ' + e);
    }
}

function oddevendatarow(tablelistX, classoddrow, classevenrow) {
    try {
        let cssstyle = classoddrow;
        for (let i = 0; i < tablelistX.rows.length; i++) {
            // tablelistX.rows[i].className = '';
            cssstyle = (cssstyle === classevenrow) ? classoddrow : classevenrow;
            tablelistX.rows[i].classList.add(cssstyle);
        }
    }
    catch (e) { alert(e); }
}


