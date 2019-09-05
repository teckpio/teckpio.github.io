const serverendpoint = 'http://127.0.0.1:3000/customer'

const navbarselect = document.getElementById('navbarselect');
const navbarselectitem = document.getElementsByClassName('navbarselectitem');
const navbarbutton = document.getElementById('navbarbutton');
const details = document.getElementById('details');


// load list //

try {
    var req = new XMLHttpRequest();
    req.open('GET', serverendpoint);
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                var listobj = JSON.parse(req.responseText).recordsets;
                for (var i = 0; i < listobj[0].length; i++) {
                    navbarselect.innerHTML += `<option value = "${listobj[0][i].ID}" class ="nvabarselectitem">"${listobj[0][i].NName}"</option>`;
                }
            }
            catch (e) {
                alert('Error in retrieving List: ' + e);
            }
        }
        else {

        }
    }
    req.send();
}
catch (e) {
    alert(e);
}








// event management //

navbarbutton.onclick = function(){
    // check for non-selection //
    alert(navbarselect.value);
    if (navbarselect.value==null){
        alert('No Selected Item.');
    }
    else{
        var req = new XMLHttpRequest();
        req.open('GET', `${serverendpoint}/?id='${navbarselect.value}'`);
    
        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                try {
                    var listobj = JSON.parse(req.responseText).recordsets;
                    details.innerHTML= listobj[0][0].NName;
                }
                catch (e) {
                    alert('Error in retrieving List: ' + e);
                }
            }
            else {
    
            }
        }
        req.send();
    }
}
