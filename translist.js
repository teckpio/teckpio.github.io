var translist_table = document.getElementById("translist_tbl");


try{
    const input=document.querySelector('input[type="file"]');

    input.addEventListener('change', function(e){
        const reader = new FileReader();
        reader.onload=function(){
            const jsondata = JSON.parse(reader.result);
            for(var i=0; i < jsondata.length; i++){
                insert_tblrow(jsondata[i]);
            }
        };
        reader.readAsText(input.files[0]);
    }, false);

    function insert_tblrow(rowdata){
        try{
            var newrow = translist_table.insertRow(0);
            var cell1 =newrow.insertCell(0);
            var cell2=newrow.insertCell(1);
            var cell3=newrow.insertCell(2);
            var cell4=newrow.insertCell(3);

            cell1.innerHTML = rowdata.DDate;
            cell2.innerHTML=rowdata.Ref;
            cell3.innerHTML=rowdata.Desc;
            cell4.innerHTML=rowdata.Nett;
        }
        catch(e){
            alert(e);
        }
                
        
    }
    
}
catch(e){
    alert(e);
}