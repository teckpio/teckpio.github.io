'use strict';

const navbargetbutton = document.getElementById('navbargetBtn');
const navbarfilebutton = document.getElementById('navbarfilebutton');

const reporttable = document.getElementById('reporttable');



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
        // var strtable = '<table>';
        var strtable = '';
        var colheader;
        var datacol;
        for (var rowi = 0; rowi < arrydata.length; rowi++) {

            // table header //
            if (rowi === 0) {
                for (colheader in arrydata[rowi]) {
                    strtable += `<th>${colheader}</th>`;
                }
                alert(strtable);
            }
            else {

                // table datarow //
                strtable += '<tr class = "reporttablerowtotal">';

                for (datacol in arrydata[rowi]) {
                    strtable += `<td>${arrydata[rowi][datacol]}</td>`;
                }
                // strtable += `<td>${arrydata[rowi].Cat}</td>`;

                strtable += '</tr>';
            }
        }

        // update table html element //
        reporttable.innerHTML = strtable;
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