// const file_ui = "file:///C:/ltp/Perak%20Transit/Going/Project%20Web/ui.csv";
const project_csv = "pt_project.csv";

const htmlid_iptloadcontent = "iptloadcontent";
const htmlid_btnloadcontent = "btnloadcontent";
const htmlid_btnprintdoc = "btnprintdoc";
const htmlid_table_procflowtms = "processflow_tms_table";


init_project();


function init_project() {
    populate_UI();


    let btnloadcontent = document.getElementById(htmlid_btnloadcontent);
    let btnprintdoc = document.getElementById(htmlid_btnprintdoc);
    let iptloadcontent = document.getElementById(htmlid_iptloadcontent);

    btnloadcontent.onclick = () => {
        iptloadcontent.click();
    }

    btnprintdoc.onclick = () => {
        window.print();
    }


    iptloadcontent.onchange = () => {
        let fr = new FileReader();
        fr.onload = () => {
            convert_upload(fr.result);
            // let arryline = fr.result.split('\n');

            // let arrytablerow = [];
            // let tableid = "";
            // let colnum = 0;
            // arryline.forEach(line => {

            //     if (line.startsWith("#") && !line.startsWith("##")) {
            //         // new table //
            //         tableid = line.split(",")[0];
            //         colnum = line.split(",")[1];
            //         arrytablerow = [];
            //     } else if (line.startsWith("##")) {
            //         tableloading(tableid, colnum, arrytablerow);
            //     } else {
            //         arrytablerow.push(line);
            //     }
            // });
            // alert('Finished loading contents from file.');
        }
        fr.readAsText(iptloadcontent.files[0]);
        iptloadcontent.value = null;
    }
}



function convert_upload(uploadtext) {
    let arryline = uploadtext.split('\n');

    let arrytablerow = [];
    let tableid = "";
    let colnum = 0;
    arryline.forEach(line => {

        if (line.startsWith("#") && !line.startsWith("##")) {
            // new table //
            tableid = line.split(",")[0];
            colnum = line.split(",")[1];
            arrytablerow = [];
        } else if (line.startsWith("##")) {
            tableloading(tableid, colnum, arrytablerow);
        } else {
            arrytablerow.push(line);
        }
    });
    alert('Finished loading contents from file.');
}


function tableloading(tableid, colnum, arryline) {

    let divtable = document.getElementById(tableid.substr(1));

    if (divtable) {
        divtable.innerHTML = "";

        // 1st line to be header //
        // then datarow until the end //
        let tbl = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        arryline.forEach(line => {
            let arrycell = line.split(",");

            if (thead.children.length == 0) {
                // header row //
                let theadtr = thead.insertRow();
                for (i = 0; i < colnum; i++) {
                    let thcell = theadtr.insertCell();
                    thcell.innerHTML = arrycell[i];
                }
            } else {
                // data row //
                let datarow = tbody.insertRow();
                for (i = 0; i < colnum; i++) {
                    let tdcell = datarow.insertCell();
                    tdcell.innerHTML = convertcomma(arrycell[i]);
                }
            }
        })

        tbl.appendChild(thead);
        tbl.appendChild(tbody);

        divtable.appendChild(tbl);
    }
}

function convertcomma(ipttext) {
    return ipttext.replace(/\|/g, ",");
}


function populate_UI() {
    fetch(project_csv)
        .then(response => response.text())
        .then(text => {
            convert_upload(text);
        })


    // var httpreq = new XMLHttpRequest();
    // httpreq.open('GET',file_ui);
    // httpreq.setRequestHeader("Access-Control-Allow-Origin","*");
    // httpreq.onreadystatechange=()=>{
    //     if(this.readyState ==4 &&  this.status==200){
    //         alert(this.responseText);
    //     }
    // }
    // httpreq.send();
}
