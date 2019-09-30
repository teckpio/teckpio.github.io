'use strict';

// sample data //
const employee = [
    { ID: '101', Name: 'Ali' },
    { ID: '102', Name: 'Muthu' },
    { ID: '104', Name: 'Ah Meng' },
    { ID: '105', Name: 'Siti' },
    { ID: '106', Name: 'Ah Looong' }
]

const employeedetail = [
    { ID: '101', FullName: 'Ali Ali', PayType: 'Monthly', Address1: '33, Jalan K', Address2: '', Address3: '', IC: '890910-08-1289', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam' },
    { ID: '104', FullName: 'Wong Ah Meng', PayType: 'Monthly', Address1: '68, Jalan Long', Address2: '', Address3: '', IC: '901098-08-8798', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist' }
]

const employeepaystruct = [
    { ID: '101', PayType: 'Monthly', Allowances: 'Managerial', Accomodation: 'Yes', CompanyCar: 'No' },
    { ID: '104', PayType: 'Daily', Allowances: 'Clerical', Accomodation: 'No', CompanyCar: 'No' }
]

// css classes //
const strClsListInSelect = 'listtableinselect';
const strClsListInTable = 'listtableintable';

// element dataset //
const strListID = 'id';

// flex basis //
const strFBDetailNav = '0 0 30%';
const strFBDetailForm = '0 0 70%';

const strFBFormLabel = '0 0 30%';
const strFBFormInput = '0 0 70%';

const strDetailFormID = 'DetailForm';

const strStyleContentCat = 'width:90%; background-color:gray; color:white; margin:2% auto; padding:2%; text-align:center;'

// document elements //
const navitememployee = document.getElementById('navitememployee');
const navitemsalaryitem = document.getElementById('navitemsalaryitem');
const navitemstatitem = document.getElementById('navitemstatitem');
const navitemprocess = document.getElementById('navitemprocess');

const contentlisttitle = document.getElementById('listtitle');
const contentlisttable = document.getElementById('listtable');
const contentlistfunction = document.getElementById('listfunction');

const contentdetail = document.getElementById('contentdetail');
const contentdetailform = document.getElementById('contentdetailform');
const contentdetaillogo = document.getElementById('contentdetaillogo');

// 
// initial load //
// 
contentlisttitle.innerHTML = '';


// 
// event management //
// 
navitememployee.onclick = navitememployee_clicked;
navitemsalaryitem.onclick = navitemsalaryitem_clicked;
navitemstatitem.onclick = navitemstatitem_clicked;
navitemprocess.onclick = navitemprocess_clicked;



// 
// function //
// 
function navitememployee_clicked() {
    // list title //
    contentlisttitle.innerHTML = 'Employee List';

    // load listing in table element //
    contentlisttable.innerHTML = '';
    var tablelist = document.createElement('table');
    let datarow;

    // headerrow //
    let thead = tablelist.createTHead();
    datarow = thead.insertRow();
    let thdata = document.createElement('th');
    thdata.innerHTML = 'ID';
    datarow.appendChild(thdata);
    let thdata2 = document.createElement('th');
    thdata2.innerHTML = 'Name'
    datarow.appendChild(thdata2);

    // datarow //
    let tbody = tablelist.createTBody();
    employee.forEach(function (employee) {
        datarow = tbody.insertRow();
        datarow.dataset[strListID] = employee.ID;
        datarow.insertCell(0).innerHTML = employee.ID;
        datarow.insertCell(1).innerHTML = employee.Name;
        datarow.addEventListener('click', employeedatarow_clicked);
    })

    // css class //
    tablelist.classList.add(strClsListInTable);
    contentlisttable.appendChild(tablelist);

    // list functions //
    let fncNew = document.createElement('div');
    fncNew.innerHTML= 'New';
    fncNew.style.width = '80%';
    fncNew.style.backgroundColor='gray';
    fncNew.style.textAlign='center';
    fncNew.style.margin= '2% auto';
    fncNew.onclick = newentity_clicked;
    contentlistfunction.appendChild(fncNew);
}

function navitemsalaryitem_clicked() {
    // list title //
    contentlisttitle.innerHTML = 'Salary Item List';

    // load listing in select element //
    contentlisttable.innerHTML = '';
}

function navitemstatitem_clicked() {

}

function navitemprocess_clicked() {

}

function employeedatarow_clicked() {
    // invisible logo //
    contentdetaillogo.style.display = 'none';
    contentdetail.appendChild(loadentitypersonal_init(this.dataset[strListID]));
}


// diventitydetail is a row flex of: detailnav + detailform //
// detailnave is a column flex of: image + navitem //
// navitem is a column flex of various detail categories //
// detailform is a form with one divproperty for each property //
// detailform is reloadable with different data object //
// divproperty is a row flex of: label + input //
function loadentitypersonal_init(listID) {

    contentdetail.innerHTML = '';

    // load employee detail by ID //
    let dataobj = employeedetail.find(function (employee) {
        return employee.ID === this;
    }, listID);

    // diventitydetail is row flex of: navemployee + formemployeedetail //
    let diventitydetail = document.createElement('div');
    diventitydetail.style.width = '95%';
    diventitydetail.style.margin = '1% auto';
    diventitydetail.style.display = 'flex';
    diventitydetail.style.flexDirection = 'row';

    diventitydetail.appendChild(loadnavemployee(listID, './img/watch1.jpg'));
    diventitydetail.appendChild(loadformdetail(dataobj));

    return diventitydetail;
}

function loadnavemployee(listID, imgsrc) {
    let divnavemployee = document.createElement('div');
    divnavemployee.style.flex = strFBDetailNav;

    divnavemployee.appendChild(loademployeeimg(imgsrc));
    divnavemployee.appendChild(loadcontentcat(listID));

    return divnavemployee;
}


function loademployeeimg(imgsrc) {
    let divimg = document.createElement('div');
    divimg.style.minHeight = '10%';
    divimg.style.maxHeight = 'auto';
    divimg.style.boxShadow = '0 0 2px gray';
    divimg.style.width = '80%';
    divimg.style.margin = '0 auto';

    let imgelement = document.createElement('img');
    imgelement.setAttribute('src', imgsrc);
    imgelement.style.maxWidth = '100%';
    imgelement.style.height = 'auto';
    divimg.appendChild(imgelement);
    return divimg;
};

function loadcontentcat(listID) {
    let divcontentnav = document.createElement('div');
    divcontentnav.style.margin = '1% auto';

    let divpersonal = document.createElement('div');
    divpersonal.innerHTML = 'Personal Details';
    divpersonal.setAttribute('style', strStyleContentCat);
    divpersonal.dataset[strListID] = listID;
    divpersonal.onclick = entitypersonal_clicked;
    divcontentnav.appendChild(divpersonal);

    let divsalarystruct = document.createElement('div');
    divsalarystruct.innerHTML = 'Salary Structure';
    divsalarystruct.setAttribute('style', strStyleContentCat);
    divsalarystruct.dataset[strListID] = listID;
    divsalarystruct.onclick = entitysalarystruct_clicked;
    divcontentnav.appendChild(divsalarystruct);

    return divcontentnav;
}

function entitypersonal_clicked() {
    // load employee detail by ID //
    let dataobj = employeedetail.find(function (employee) {
        return employee.ID === this;
    }, this.dataset[strListID]);

    loadformdetail(dataobj);
}

function entitysalarystruct_clicked() {
    // load employee detail by ID //
    let dataobj = employeepaystruct.find(function (employee) {
        return employee.ID === this;
    }, this.dataset[strListID]);

    loadformdetail(dataobj);
}

function loadformdetail(dataobj) {

    // create form element, if not already exist //
    let boolAlreadyExist = false;
    let formelement = document.getElementById(strDetailFormID);
    if (formelement) {
        while (formelement.firstChild) {
            formelement.removeChild(formelement.firstChild);
        }
        boolAlreadyExist = true;
    }
    else {
        formelement = document.createElement('form');
        formelement.id = strDetailFormID;
        formelement.style.flex = strFBDetailForm;
    }

    // divproperty is a row flex of: label + input //
    let divproperty;
    let labelelement, dataelement;
    for (var ppt in dataobj) {
        divproperty = document.createElement('div');
        divproperty.style.display = 'flex';
        divproperty.style.marginTop = '1%';

        // label //
        labelelement = document.createElement('label');
        labelelement.innerHTML = ppt
        labelelement.style.flex = strFBFormLabel;
        divproperty.appendChild(labelelement);

        // data // 
        dataelement = document.createElement('input');
        dataelement.value = dataobj[ppt];
        dataelement.style.flex = strFBFormInput;
        divproperty.appendChild(dataelement);

        formelement.appendChild(divproperty);
    }

    if (!boolAlreadyExist) {
        return formelement;
    }

}

function newentity_clicked(){
    alert('New Entity to be added.');
}