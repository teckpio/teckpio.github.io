var arryfunctions = document.getElementById("home_nav").getElementsByTagName("li");
var dboardtitle = document.getElementById("home_dboard_title");

/* set header and footer */
var my_header = document.getElementsByClassName("vas_header_text");
/*my_header.innerHTML="<img src='c:\vas\setup\vlogo9.bmp' alt='VAS'>"*/
/*my_header.innerHTML="<h1 style='padding-left:20px;'>Elegant-V Solutions</h1>";*/
my_header.innerHTML = "V Accounting System"

for (i = 0; i < arryfunctions.length; i++) {
    arryfunctions[i].addEventListener("click", function_clicked);
    arryfunctions[i].addEventListener("mouseover", function_mouseover);
}

function function_clicked() {
    switch (this.innerHTML) {
        case "Sales":
            
            try {                
                var req = new XMLHttpRequest();
                req.open('GET', 'http://127.0.0.1:3000/customer');
                req.onreadystatechange=function(){
                    if (this.readyState == 4 && this.status == 200){
                        try {
                            var obj = JSON.parse(req.responseText);
                            alert(obj.recordsets[0].LLevel);
                            alert(JSON.stringify(obj));
                        }
                        catch (e) {
                            alert('parse ' + e);
                        }
                    }
                }
                req.send();
                // req.onload = function () {
                //     try {
                //         alert('onload');
                //         var data = JSON.parse(req.responseText);
                //         alert(JSON.stringify(data));
                //     }
                //     catch (e) {
                //         alert('parse ' + e);
                //     }

                // }                
            }
            catch (e) {
                alert('end ' + e);
            }

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
        default:
    }
}

function function_mouseover() {
    // this.style="border-width:5px;"
}

/*
datarequest.onreadystatechange =function(){
    if (this.readyState==4 && this.status==200){
        alert("ready state change");
        var data1=json.parse(datarequest.responseText);
        alert(data1[0]);
    }
};
*/

/*
alert("opened");
datarequest.send;
*/
