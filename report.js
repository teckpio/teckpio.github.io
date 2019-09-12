'use strict';

const navbargetbutton = document.getElementById('navbargetBtn');
const navbarfilebutton = document.getElementById('navbarfilebutton');
const navbaroutputbutton = document.getElementById('navbaroutputBtn');

const reporttable = document.getElementById('reporttable');

const mFormatIDTitle = '^';
const mFormatIDTotal = '=';

const mTableRowClassTitle = 'reporttablerowtitle';
const mTableRowClassData = 'reporttablerowdata';
const mTableRowClassTotal = 'reporttablerowtotal';
const mTableRowClassBlank = 'reporttablerowblank';

// Initial Load //




// Events Management //
navbargetbutton.onclick = function () {
    alert('clicked');
}


navbarfilebutton.addEventListener('change', function (e) {
    try {
        const reader = new FileReader();

        reader.onload = function () {
            const reportdata = JSON.parse(reader.result);
            if (reportdata) {
                loadreporttable(reportdata);
            }
            else {
                alert('Invalid File Input.');
            }
        }

        reader.readAsText(navbarfilebutton.files[0]);

    }
    catch (e) {
        alert(e);
    }
});




// Functions //

function loadreporttable(reportdata) {

    // convert json to array //
    var arrydata = [];
    jsontoarray(reportdata, arrydata);
    console.log(arrydata);

    try {

        var strtable = '';
        var colheader, datacol, strClass, datacolIdx, celldata;
        var boolClassNotSet;


        // table col width //
        strtable = '<col width = "0">';

        for (var rowi = 0; rowi < arrydata.length; rowi++) {

            // table header //
            if (rowi === 0) {
                strtable += '<thead>';
                for (colheader in arrydata[rowi]) {
                    strtable += `<th>${colheader}</th>`;
                }
                strtable += '</thead>';
            }
            else {
                // construct table row innerHTML  //
                strClass = '';
                boolClassNotSet = true;
                datacolIdx = 0;

                strtable += '<tbody><tr';
                for (datacol in arrydata[rowi]) {

                    // assumption: 
                    // - datacol(0): CatID
                    // - datacol(1): Cat

                    if (boolClassNotSet) {
                        strClass = tablerow_setclass(arrydata[rowi][datacol].substring(0, 1));
                        strtable += ` class = "${strClass}">`
                        boolClassNotSet = false;
                    }

                    // do nothing for title row, except inserting the title, in data cell //
                    if (strClass !== mTableRowClassTitle || (strClass === mTableRowClassTitle && datacolIdx < 2)) {
                        celldata = arrydata[rowi][datacol];
                        strtable += `<td style = "text-align:${((datacolIdx < 2) ? 'left' : 'right')}">
                        ${datacolIdx < 2 ? celldata : Number(celldata).toFixed(2)}
                        </td>`;
                    }
                    datacolIdx++;
                }
                strtable += '</tr>';
                if (strClass === mTableRowClassTotal) {
                    strtable += `<tr class = ${mTableRowClassBlank}><td>&nbsp</td></tr>`;
                }
            }
        }

        // set table html element //
        reporttable.innerHTML = strtable + '</tbody>';
    }
    catch (e) {
        alert('Error in Loading Report Data: ' + e);
    }
}

function jsontoarray(jsondata, arrydata) {
    for (var i = 0; i < jsondata.length; i++) {
        arrydata.push(jsondata[i]);
    }
}

function tablerow_setclass(formattingX) {
    // categorise type of datarow //
    // - title, data, total //
    switch (formattingX) {
        case mFormatIDTitle: // title //
            return mTableRowClassTitle;
        case mFormatIDTotal: // total //
            return mTableRowClassTotal;
        default: // data //
            return mTableRowClassData;
    }
}


