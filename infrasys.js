// constant declaration //
arrynavfnc = [
    'Measurement Unit',
    'Location',
    'Entity Category',
    'Item Category'
]

arrycontentfnc = [
    'Detail',
    'Export'
]

const strfunctionclass = 'vas_function';
const strcontentfncclass = 'vas_contentfnc';

// document elements //

//navbar //
const navbartitle = document.getElementById('vas_navbar');
const navbarlist = document.getElementById('vas_navlist');
const navbarfunction = document.getElementById('vas_navbarfunction');

// content //
const contenttitle = document.getElementById('vas_contenttitle');
const contentlisttitle = document.getElementById('vas_contentlisttitle');
const contentlist = document.getElementById('vas_contentlist');
const contentfunction = document.getElementById('vas_contentfunction');


// initial loading //

// navbar functions//
let navbarfncX;
arrynavfnc.forEach(element => {
    navbarfncX = document.createElement('div');
    navbarfncX.setAttribute('class', strfunctionclass);
    navbarfncX.innerHTML = element;
    navbarfncX.addEventListener('click', fnc_navbarfnc_clicked);
    navbarfunction.appendChild(navbarfncX);
});

let contentfncX;
arrycontentfnc.forEach(element => {
    contentfncX = document.createElement('div');
    contentfncX.setAttribute('class', strfunctionclass)
    contentfncX.innerHTML = element;
    contentfncX.addEventListener('click', fnc_contentfnc_clicked);
    contentfunction.appendChild(contentfncX);
})




// event management //





// functions declaration //

function fnc_navbarfnc_clicked() {
    contenttitle.innerHTML = this.innerHTML;
}

function fnc_contentfnc_clicked() {

}