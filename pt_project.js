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
                let colspan = 0;
                let adjustedcolnum = colnum;
                for (i = 0; i < colnum; i++) {
                    let cellstring = arrycell[i];

                    if (colspan > 0) {
                        colspan--;
                    } else if (cellstring.includes("(cs:")) {
                        let tdcell = datarow.insertCell();


                        let idxclosing = cellstring.indexOf(")");
                        // length of "(cs:" = 4 //
                        let colspanx = cellstring.substr(4, idxclosing - 4);

                        // console.log(cellstring);

                        // let idxopening = cellstring.indexOf("(cs:");
                        // let colspanx = '-';
                        // for (i = idxopening; i < cellstring.length; i++) {
                        //     if (cellstring[i] == ":") {
                        //         colspanx = '';
                        //     } else if (cellstring[i] == ')') {
                        //         break;
                        //     } else if (colspanx != '-') {
                        //         colspanx += cellstring[i];
                        //     }
                        // }
                        // cellstring = cellstring.replace("(cs:" + colspanx + ")", "");
                        // console.log(colspanx);



                        tdcell.colSpan = colspanx;
                        cellstring = cellstring.substr(idxclosing + 1);

                        tdcell.innerHTML = convertcomma(cellstring);

                        colspan = parseInt(colspanx);
                        adjustedcolnum = colnum - colspan;
                        colspan--;
                    } else if (cellstring.startsWith(".o")) {
                        let tdcell = datarow.insertCell();
                        tdcell.style.backgroundColor = "lightblue";
                        tdcell.innerHTML = "";
                    } else if (cellstring.startsWith(".x")) {
                        let tdcell = datarow.insertCell();
                        tdcell.style.backgroundColor = "lightgreen";
                        tdcell.innerHTML = "";
                    } else if (cellstring.startsWith("%")) {
                        let tdcell = datarow.insertCell();
                        tdcell.style.textAlign = "center";
                        tdcell.innerHTML = cellstring.substr(1);
                    } else if (cellstring.startsWith(":1")) {
                        let tdcell = datarow.insertCell();
                        tdcell.style.paddingLeft = "2%";
                        tdcell.innerHTML = convertcomma(cellstring.replace(":1", "-"));
                    } else if (cellstring.startsWith(":2")) {
                        let tdcell = datarow.insertCell();
                        tdcell.style.paddingLeft = "4%";
                        tdcell.innerHTML = cellstring.replace(":2", "-");
                    }
                    else {
                        let tdcell = datarow.insertCell();
                        tdcell.innerHTML = convertcomma(cellstring);
                    }
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
