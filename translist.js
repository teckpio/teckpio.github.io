var translist_table = document.getElementById("translist_tbl");
const btnexportexcel = document.getElementById('exportexcel') ;

try {
    const input = document.querySelector('input[type="file"]');

    input.addEventListener('change', function (e) {
        const reader = new FileReader();
        reader.onload = function () {

            const jsondata = JSON.parse(reader.result);



            let objparam = vssfnc_tablepopulate_param();
            // objparam.caption = "Entity";
            objparam.htmltable = translist_table;
            objparam.htmltableid = 'Transaction Listing';
            objparam.arryjsondata = jsondata;
            // objparam.arryjsondata = listobj[0];
            // objparam.arryheadercol = [['ID', '0%', 0], ['Name', '100%',]];
            // objparam.arryheadercol = [[headercol[0], '0%', 0], [headercol[1], '100%',]];
            objparam.arryfooteragg = ['sum', '', '', '', 'sum', '', 'ave', 'ave', 'sum', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
            objparam.boolitemcount = true;
            objparam.arrydataid = ['table', 'strdatarowdataid'];
            // objparam.arryclass = ['tablerow', 'tableheadercol', 'tabledatarow', 'tabledatarowbutton'];
            // objparam.arryclassdatarow = ['narbartabletrodd', 'narbartabletreven', 'narbartabletrselected'];
            objparam.arrysortind = [' (v)', ' (^)'];
            objparam.addbutton = false;
            objparam.fncdatarowclicked = undefined;

            // let tbl = document.getElementById('table_container');
            // tbl.appendChild(vssfnc_tablepopulate(objparam));

            vssfnc_tablepopulate(objparam);
            // document.getElementsByClassName('vas_content')[0].appendChild(vssfnc_tablepopulate(objparam));


            // for(var i=0; i < jsondata.length; i++){
            //     insert_tblrow(jsondata[i]);
            // }
        };
        reader.readAsText(input.files[0]);
    }, false);

    function insert_tblrow(rowdata) {
        try {
            var newrow = translist_table.insertRow(0);
            var cell1 = newrow.insertCell(0);
            var cell2 = newrow.insertCell(1);
            var cell3 = newrow.insertCell(2);
            var cell4 = newrow.insertCell(3);

            cell1.innerHTML = rowdata.DDate;
            cell2.innerHTML = rowdata.Ref;
            cell3.innerHTML = rowdata.Desc;
            cell4.innerHTML = rowdata.Nett;
        }
        catch (e) {
            alert(e);
        }


    }

}
catch (e) {
    alert(e);
}

btnexportexcel.onclick = function(){
    let filename = 'excel_data.xls';
    let downloadlink = document.createElement('a');
    document.body.appendChild(downloadlink);

    let tbl = document.getElementById('table');
    
    // replace space with %20 to ensure the browser will display text properly //
    // downloadlink.href = 'data:' + 'applicatin/vnd.ms-excel' + ', ' + tbl.outerHTML.replace(/ /g, '%20');
    downloadlink.href = 'data:' + 'applicatin/vnd.ms-excel' + ', ' + translist_table.outerHTML.replace(/ /g, '%20');
    downloadlink.download = filename;
    

    downloadlink.click();
}