const navbar_infrasys = document.getElementById('navbar_infrasys');

var arrynavfnc = document.getElementsByClassName("navbar_fnc");
var dboardtitle = document.getElementById("home_dboard_title");
const objEntity = document.getElementById("home_dboard_objectEntity");
const objTrans = document.getElementById("home_dboard_objectTrans");
const objReport = document.getElementById("home_dboard_objectReport");



/* set header and footer */
var my_header = document.getElementsByClassName("vas_header_text");
/*my_header.innerHTML="<img src='c:\vas\setup\vlogo9.bmp' alt='VAS'>"*/
/*my_header.innerHTML="<h1 style='padding-left:20px;'>Elegant-V Solutions</h1>";*/
my_header.innerHTML = "V Accounting System";














// Events Management //
for (i = 0; i < arrynavfnc.length; i++) {
    arrynavfnc[i].addEventListener("click", navfnc_clicked);
}

objEntity.onclick = function () {
    window.open('entity.html');
}

objTrans.onclick = function () {
    window.open('transdetail.html');
}

objReport.onclick = function () {
    window.open('report.html');
}















// Functions //

function navfnc_clicked() {
    switch (this.innerHTML) {
        case "Sales":
            break;
        case "Purchasing":
            alert("Purchasing - Work In Progress ...");
            break;
        case "Finance":
            alert("Finance - Work In Progress ...");
            break;
        case "Inventory":
            alert("Inventory - Work In Progress ...");
            break;
        case "Admin":
            alert("Admin - Work In Progress ...");
            break;
        case "Accounting and Reporting":
            window.open("accounting.html", "_blank");
            break;
        case "Infra-Data and System-Control":
            window.open("infrasys.html", "_blank");
            break;
        default:
    }
}

