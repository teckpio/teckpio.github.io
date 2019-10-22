'use strict';
// const sample_data= require('./infinipay_data');

// import employee from ('./infinipay_data');
// console.log(employee[0]);


const arryemployeeinfocat = [
    ['Personal Info', entitypersonal_clicked],
    ['Salary Profile', entitysalarystruct_clicked],
    ['Salary History', entitysalaryhistory_clicked]
]

const arrysalaryitemcat = [
    ['General Info', salaryitemgeneral_clicked],
    ['Calculation', salaryitemcalc_clicked],
    ['Valid Period', salaryitemvalid_clicked]
]

// array main nav item //
const arryMainNavItem = [
    ['navitememployee', 'Employee Listing', employee, arryemployeeinfocat, employeedatarow_clicked],
    ['navitemsalaryitem', 'Salary Item Listing', payitem, arrysalaryitemcat, payitemdatarow_clicked],
    ['navitemsalarystruct', 'Salary Profile Listing', payprofile, undefined, payprofiledatarow_clicked],
    ['navitemstatitem', 'Stat Item Listing', statitem, undefined, payitemdatarow_clicked],
    ['navitemprocess', 'Process', undefined, undefined, process_clicked],
    ['navitemcalcsheet', 'Calculation Sheet', undefined, undefined, calcsheetdatarow_clicked],
    ['navitemoutput', 'Output Listing', undefined, undefined, output_clicked]
];

const arryEmployeeInfo = [
    ['Personal Details', entitypersonal_clicked],
    ['Salary Structure', entitysalarystruct_clicked],
    ['Salary History', entitysalaryhistory_clicked]
]

const arryProcess = [
    ['Mid-Month Processing', processmidmonth_clicked],
    ['End-Month Processing', processendmonth_clicked],
    ['Year-End Processing', processyearend_clicked]
]

const arryOutput = [
    ['Payslip - Mid-Month', outputmidpayslip_clicked],
    ['Payslip - End-Month', outputendpayslip_clicked],
    ['Payslip - EPF Borang A', outputEPFA_clicked],
    ['Payslip - SOCSO Borang 2', outputSOCSO2_clicked],
    ['Payslip - SOCSO Borang 3', outputSOCSO3_clicked]
]

// id of manipulatable html element //
const strDivContentDetailID = 'contentdetailinfo';
const strDetailNavID = 'contentdetailnav';
const strDivTableFunctionID = 'contentdetailtablefunction';
const strListTableID = 'listtableid';
const strListTableNavItem = 'listtablenavitem';


// css classes //
const strClsListInSelect = 'listtableinselect';
const strClsListInTable = 'listtableintable';
const strClsListFunction = 'listfunction';
const strClsContentDetail = 'contentdetail';
const strClsContentDetailTitle = 'contentdetailtitle';
const strClsContentFunction = 'contentfunction';
const strClsDivContentImg = 'contentimgdiv';
const strClsContentImg = 'contentimg';

// element dataset //
const strListID = 'id';

// flex basis //
const strFBDetailNav = '0 0 30%';
const strFBDetailForm = '0 0 70%';

const strFBFormLabel = '0 0 30%';
const strFBFormInput = '0 0 70%';

const strDetailFormID = 'DetailForm';

// document elements //
const navitememployee = document.getElementById('navitememployee');
const navitemsalaryitem = document.getElementById('navitemsalaryitem');
const navitemsalarystruct = document.getElementById('navitemsalarystruct');
const navitemstatitem = document.getElementById('navitemstatitem');
const navitemprocess = document.getElementById('navitemprocess');
const navitemcalcsheet = document.getElementById('navitemcalcsheet');
const navitemoutput = document.getElementById('navitemoutput');

const contenttitle = document.getElementById('contenttitle');
const contentlist = document.getElementById('contentlist');
const contentlisttitle = document.getElementById('listtitle');
const contentlisttable = document.getElementById('listtable');
const contentlistfunction = document.getElementById('listfunction');

const contentdetail = document.getElementById('contentdetail');
const contentdetailtitle = document.getElementById('contentdetailtitle');
const contentdetailform = document.getElementById('contentdetailform');
const contentdetaillogo = document.getElementById('contentdetaillogo');
var contentdetailinfo = document.getElementById(strDivContentDetailID);

// working data //
var calcsheet_curr = [];

// 
// initial load //
// 

contenttitle.style.display = 'none';
contentlisttitle.innerHTML = '';


// 
// event management //
// 
navitememployee.onclick = navitem_clicked;
navitemsalaryitem.onclick = navitem_clicked;
navitemsalarystruct.onclick = navitem_clicked;
navitemstatitem.onclick = navitem_clicked;
navitemprocess.onclick = navitem_clicked;
navitemcalcsheet.onclick = navitem_clicked;
navitemoutput.onclick = navitem_clicked;



// 
// function //
// 
// toggle_logoinfo

// navitem_clicked
// employeedatarow_clicked
// payitemdatarow_clicked
// payprofiledatarow_clicked

// process_clicked
// output_clicked

// init_divcontent
// loadnavdetail
// loademployeeimg
// loadcontentcat

// entitypersonal_clicked
// entitysalarystruct_clicked
// entitysalaryhistory_clicked

// populatetable
// populateform

// navitememployee_clicked

// addemployee_clicked
// editemployee_clicked

// processmidmonth_clicked
// processendmont_clicked
// processyearend_clicked

// outputmidpayslip_clicked
// outputendpayslip_clicked
// ouputEPFA_clicked
// outputSOCSO2_clicked
// outputSOCSO3_clicked

// salaryitemgeneral_clicked
// salaryitemcalc_clicked
// salaryitemvalid_clicked

// toggle between logo and content in the content area //
function toggle_logoinfo(boolSwitchNavItem) {
    //!! doesn't work if put outside of if statement !!//
    // contentdetailinfo = document.getElementById(strDivContentDetailID);

    if (boolSwitchNavItem) {
        contentdetailinfo = document.getElementById(strDivContentDetailID);

        if (contentdetailinfo !== null) {
            contentdetailinfo.style.display = 'none';
        }
        if (contentdetaillogo.style.display === 'none') {
            contentdetaillogo.style.display = 'block';
        }
    }
    else {
        contentdetailinfo = document.getElementById(strDivContentDetailID);

        if (contentdetailinfo !== null) {
            contentdetailinfo.style.display = 'block';
        }
        contentdetaillogo.style.display = 'none';
    }
}

function navitem_clicked() {

    toggle_logoinfo(true);

    // list title //
    contentlisttitle.style.display = 'none';

    // load listing into table //
    switch (this.id) {
        // process //
        case arryMainNavItem[4][0]:
            // do nothing //
            break;

        // employee //
        case arryMainNavItem[0][0]:
            let eee = employee;
            // let eee = smp_data.employee;
            let arryeeelist = eee.map(eee => {
                return { ID: eee.ID, Name: eee.Name }
            })
            let tablelist0 = populatetable(arryMainNavItem[0][1], arryeeelist, arryMainNavItem[0][4]);
            tablelist0.dataset[strListTableNavItem] = arryMainNavItem[0][0];
            tablelist0.classList.add(strClsListInTable);
            contentlisttable.appendChild(tablelist0);
            break;

        // pay item //
        case arryMainNavItem[1][0]:
            let arryitemlist = payitem.map(item => {
                return { ID: item.ID, Name: item.Name }
            })
            let tablelist1 = populatetable(arryMainNavItem[1][1], arryitemlist, arryMainNavItem[1][4]);
            tablelist1.dataset[strListTableNavItem] = arryMainNavItem[1][0];
            tablelist1.classList.add(strClsListInTable);
            contentlisttable.appendChild(tablelist1);
            break;

        // pay profile //
        case arryMainNavItem[2][0]:
            let arryprofilelist = payprofile.map(item => {
                return { ID: item.ID, Name: item.Name }
            })
            let tablelist2 = populatetable(arryMainNavItem[2][1], arryprofilelist, arryMainNavItem[2][4]);
            tablelist2.dataset[strListTableNavItem] = arryMainNavItem[2][0];
            tablelist2.classList.add(strClsListInTable);
            contentlisttable.appendChild(tablelist2);
            break;

        // calc sheet //
        case arryMainNavItem[5][0]:
            let arrycalcsheet = calcsheet.map(item => {
                return { ID: item.Employee, Name: employee.find(eee => eee.ID === item.Employee).Name }
            })
            let tablelist5 = populatetable(arryMainNavItem[5][1], arrycalcsheet, arryMainNavItem[5][4]);
            tablelist5.dataset[strListTableNavItem] = arryMainNavItem[5][0];
            tablelist5.classList.add(strClsListInTable);
            contentlisttable.appendChild(tablelist5);
            break;

        default:
            let navitemX = arryMainNavItem.find(function (navitem) {
                return navitem[0] === this;
            }, this.id)
            let tablelist = populatetable(navitemX[1], navitemX[2], navitemX[4]);
            tablelist.dataset[strListTableNavItem] = navitemX[0];
            tablelist.classList.add(strClsListInTable);
            contentlisttable.appendChild(tablelist);
            break;
    }


    // list functions //
    contentlistfunction.innerHTML = '';

    switch (this.id) {
        // process //
        case arryMainNavItem[4][0]:
            arryMainNavItem[4][4]();
            break;

        // output //
        case arryMainNavItem[6][0]:
            arryMainNavItem[6][4]();
            break;

        default:
            let divfunction = document.createElement('div');
            divfunction.setAttribute('style', 'display:flex');

            // New function //
            let fncNew = document.createElement('div');
            fncNew.innerHTML = 'New';
            fncNew.classList.add(strClsListFunction);
            fncNew.onclick = newemployee_clicked;
            divfunction.appendChild(fncNew);

            // Full List functin //
            let fncFullList = document.createElement('div');
            fncFullList.innerHTML = 'Full List';
            fncFullList.classList.add(strClsListFunction);
            fncFullList.onclick = fulllist_clicked;
            divfunction.appendChild(fncFullList);

            contentlistfunction.appendChild(divfunction);
            break;
    }

}

// function tabledatarow_clicked() {
//     // extract data object from arryMainNavItem //
//     let tlist = document.getElementById(strListTableID);
//     let navitemX = arryMainNavItem.find(function (navitem) {
//         return navitem[0] === this;
//     }, tlist.dataset[strListTableNavItem])

//     // load detail by ID //
//     let dataobj = navitemX[2].find(function (dataobj) {
//         return dataobj.ID === this;
//     }, this.dataset[strListID]);

//     init_divcontent(this.dataset[strListID], dataobj);
// }

function employeedatarow_clicked() {
    // load employee detail by ID //
    let dataobj = employee.find(function (employee) {
        return employee.ID === this;
    }, this.dataset[strListID]);

    // initial detail display area //

    let dataobj_form = init_divcontent_getdataobjform;
    dataobj_form[0] = dataobj;
    dataobj_form[1] = [['ID', false, 'text'],
    ['Name', true, 'text'],
    ['PayType', true, 'text'],
    ['Address1', true, 'text'],
    ['Address2', true, 'text'],
    ['Address3', true, 'text'],
    ['IC', true, 'text'],
    ['Passport', true, 'text'],
    ['Tel1', true, 'text'],
    ['Tel2', true, 'text'],
    ['Permit', true, 'text'],
    ['Marital', true, 'text'],
    ['DOB', true, 'text'],
    ['Nationality', true, 'text'],
    ['Race', true, 'text'],
    ['Religion', true, 'text'],
    ['PayProfile', true, 0]];
    dataobj_form[2] = [payprofile];
    init_divcontent(this.dataset[strListID], dataobj_form, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.FullName;

}

function payitemdatarow_clicked() {
    // load salary item detail by ID //
    let dataobj = payitem.find(function (item) {
        return item.ID === this;
    }, this.dataset[strListID]);

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform;
    dataobj_form[0] = dataobj;
    dataobj_form[1] = [['ID', false, 'text'],
    ['Name', true, 'text'],
    ['Remark', true, 'text'],
    ['PayType', true, 'text'],
    ['PayUnit', true, 'text'],
    ['Rate', true, 'text'],
    ['RateBase', true, 0],
    ];
    dataobj_form[2] = [payitem];
    dataobj_form[3] = [[null, 'Edit', null, payitemedit_clicked]]

    init_divcontent(this.dataset[strListID], dataobj_form, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.FullName;
}

function payprofiledatarow_clicked() {
    let profileid = this.dataset[strListID];

    // load payprofile by ID //
    let profiledata = payprofile.find(function (item) {
        return item.ID === this;
    }, this.dataset[strListID]);

    // load payprofile detail //
    let profileitem = payprofileitem.filter(item => {
        return item.PayProfile === profileid; //?? why cannot use this like profiledata ??//
    }, profileid)
    // insert name of payitem //
    let profiledetaildata = profileitem.map(item => {
        return {
            ID: item.ID,
            // PayProfile: item.PayProfile,
            // PayItemID: item.PayItem,
            PayItem: payitem.find(pi => { return pi.ID === item.PayItem }).Name,
            PayRate: item.PayRate
        };
    })

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[0] = profiledata;
    dataobj_form[1] = [['ID', false, 'text'],
    ['Name', true, 'text'],
    ['Accommodation', true, 'text'],
    ['Companycar', true, 'text']
    ];
    dataobj_form[2] = null;
    dataobj_form[3] = [[null, 'Edit', null, payprofileedit_clicked]]


    let dataobj_table = init_divcontent_getdataobjtable();
    dataobj_table[0] = profiledetaildata
    // arrybutton - an array of 0: button text, 1: button column, 2: button_clicked function
    dataobj_table[2] = [['=', 2, payprofileitemedit_clicked]];
    init_divcontent(this.dataset[strListID], dataobj_form, dataobj_table, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = profiledata.FullName;
}

function process_clicked() {
    toggle_logoinfo(true);

    // clear div contentlist except listfunction //
    contentlisttitle.innerHTML = '';
    contentlisttable.style.display = 'none';

    // mid-month process //
    contentlistfunction.style.display = 'flex';
    contentlistfunction.style.flexDirection = 'column';
    contentlistfunction.style.backgroundColor = 'white';

    let btnprocess;

    arryProcess.forEach(function (proc) {
        btnprocess = document.createElement('button');
        btnprocess.innerHTML = proc[0];
        btnprocess.classList.add(strClsListFunction);
        btnprocess.onclick = proc[1];
        contentlistfunction.appendChild(btnprocess);
    })
}


function output_clicked() {
    toggle_logoinfo(true);

    // clear div contentlist except listfunction //
    contentlisttitle.innerHTML = '';
    contentlisttable.style.display = 'none';

    // mid-month process //
    contentlistfunction.style.display = 'flex';
    contentlistfunction.style.flexDirection = 'column';
    contentlistfunction.style.backgroundColor = 'white';

    let btnprocess;
    arryOutput.forEach(output => {
        btnprocess = document.createElement('button');
        btnprocess.innerHTML = output[0];
        btnprocess.classList.add(strClsListFunction);
        btnprocess.onclick = output[1];
        contentlistfunction.appendChild(btnprocess);
    })
}

// divcontentdetail is a column flex of: detailtitle + detailbox //
// divcontentbox is a row flex of: detailnav + detailform //
// 
// dataobj_form is an array of 
//  [
//  - 0. dataobj of form
//  - 1. datacol properties 
//  - 2. dataobj of value-datacol
//  - 3. array of button info
//  ]
// 
// dataobj_table is an array of
//  [
//  - 0. dataobj of table
//  - 1. header col properties
//  - 2. array of button info [0-button for datarow; 2-button for table]
//  ]
// 
function init_divcontent_getdataobjform() { return [null, null, null, null] }
function init_divcontent_getdataobjtable() { return [null, null, null, null] }
function init_divcontent(dataobj_ID, dataobj_form, dataobj_table, arrybutton_form, arrybutton_table) {

    toggle_logoinfo(false);

    // main content box //
    let divcontentdetail = document.getElementById(strDivContentDetailID);
    if (divcontentdetail) {
        while (divcontentdetail.firstChild) {
            divcontentdetail.removeChild(divcontentdetail.firstChild);
        }
    }
    else {
        divcontentdetail = document.createElement('div');
        divcontentdetail.id = strDivContentDetailID;
        divcontentdetail.classList.add(strClsContentDetail);
    }
    divcontentdetail.style.width = '100%';
    divcontentdetail.style.margin = '1% auto';
    divcontentdetail.style.display = 'flex';
    divcontentdetail.style.flexDirection = 'column';


    // contentdetailtitle //
    let divcontenttitle = document.createElement('div');
    // divcontenttitle.innerHTML = dataobj.Name;
    divcontenttitle.id = strClsContentDetailTitle;
    divcontenttitle.classList.add(strClsContentDetailTitle);
    divcontentdetail.appendChild(divcontenttitle);

    // contentbox //
    let divcontentbox = document.createElement('div');
    divcontentbox.style.width = '95%';
    divcontentbox.style.margin = '1% auto';
    divcontentbox.style.display = 'flex';
    divcontentbox.style.flexDirection = 'row';//

    let newform;
    if (dataobj_form && dataobj_form[0]) {
        // navdetail //
        divcontentbox.appendChild(loadnavdetail(dataobj_ID, './img/banner_bg.jpg'));

        // formdetail //
        // newform = populateform(dataobj_form, dataobj_ID === '-1' ? true : false);

        let objparam = vssfnc_formpopulate_param();
        // objparam.caption = 'Entity Details'
        // objparam.actionurl = serverendpoint;
        // [description strings, requird, type]]
        objparam.arrydatacol = dataobj_form[1];
        objparam.arryjsondata = dataobj_form[0];
        objparam.arrydataid = [dataobj_ID];
        // objparam.htmlform = formdetails;
        objparam.arrylabelinput = [['30%', -1],
        ['70%', -1]];
        objparam.arryitemdata = dataobj_form[2];
        // objparam.arryclass = ['contentcaption', 'contentlabel', 'contentinput', 'contentbutton'];
        objparam.arrybutton = dataobj_form[3];
        newform = vssfnc_formpopulate(objparam);

        // detail functions //
        // let divdetailfunction = document.createElement('div');
        // let btn;

        // divdetailfunction.style.textAlign = 'right';
        // divdetailfunction.style.padding = '2%';
        // divdetailfunction.style.display = 'flex';
        // divdetailfunction.style.justifyContent = 'space-evenly';
        // divdetailfunction.style.boxShadow = '0 0 2px';
        // divdetailfunction.style.marginTop = '2%';

        // if (arrybutton_form && arrybutton_form.length > 0) {
        //     arrybutton_form.forEach(btnX => {
        //         btn = document.createElement('button');
        //         btn.dataset.ID = listID;
        //         btn.innerHTML = btnX[0];
        //         btn.onclick = btnX[1];
        //         divdetailfunction.appendChild(btn);
        //     })
        //     newform.appendChild(divdetailfunction);
        // }

        divcontentbox.appendChild(newform);
    }

    if (dataobj_table && dataobj_table[0]) {
        let objparam = vssfnc_tablepopulate_param();
        // objparam.caption = "Entity";
        // objparam.htmltable = tablelist;
        // objparam.htmltableid = 'Entity';
        objparam.arryjsondata = dataobj_table[0];

        // objparam.arryheadercol = [['ID', '50%', 0], ['Name', '50%', 0]];
        objparam.arryfooter = ['Item Count']
        objparam.boolitemcount = true;
        objparam.arrydataid = ['table', 'ID'];
        objparam.arryclass = ['tablerow', 'tableheadercol', 'tabledatarow', 'tabledatarowbutton'];
        // objparam.arryclassdatarow = ['narbartabletrodd', 'narbartabletreven', 'narbartabletrselected'];
        objparam.arrysortind = [' (v)', ' (^)'];
        if (dataobj_table[2]) {
            objparam.arrybutton = dataobj_table[2][0] //['=', 2, payprofileitemedit_clicked];
            // let arrybtn = ['..', 0, payprofileitemedit_clicked];
            // objparam.arrybutton.push(arrybtn);
            // objparam.boolbutton = true;
            // objparam.fncbuttonclicked = payprofileitemedit_clicked;
        }
        // objparam.fncdatarowclicked = datarowclicked;

        //  append to form element if both form and table element are required //
        if (dataobj_form) {
            let detailtable = vssfnc_tablepopulate(objparam);
            detailtable.style.margin = '2% auto';
            detailtable.style.width = '80%';
            newform.appendChild(detailtable);
        }
        else {
            let detailtable = vssfnc_tablepopulate(objparam);
            detailtable.style.margin = '2% auto';
            detailtable.style.width = '90%';
            divcontentbox.appendChild(detailtable);
        }
    }

    divcontentdetail.appendChild(divcontentbox);
    contentdetail.appendChild(divcontentdetail);
}


// detailnav is a column flex of: image + navitem //
// navitem is a column flex of various detail categories //
function loadnavdetail(listID, imgsrc) {

    // detail nav is always create anew, divdetail will remove all child beforehand //
    let detailnavelement = document.createElement('div');
    detailnavelement.id = strDetailNavID;
    detailnavelement.style.flex = strFBDetailNav;

    // image //
    detailnavelement.appendChild(loademployeeimg(imgsrc));

    // navitem //

    // extract data object from arryMainNavItem //
    // index of arryMainNavItem is saved in table dataset //
    let tlist = document.getElementById(strListTableID);
    let navitemX = arryMainNavItem.find(function (navitem) {
        return navitem[0] === this;
    }, tlist.dataset[strListTableNavItem])


    detailnavelement.appendChild(loadcontentcat(listID, navitemX[3]));

    return detailnavelement;
}


function loademployeeimg(imgsrc) {
    let divimg = document.createElement('div');
    divimg.classList.add(strClsDivContentImg)

    let imgelement = document.createElement('img');
    imgelement.setAttribute('src', imgsrc);
    imgelement.classList.add(strClsContentImg)
    divimg.appendChild(imgelement);

    return divimg;
};


function loadcontentcat(listID, arrydata) {
    let divcontentnav = document.createElement('div');
    if (arrydata) {


        let divinfo;

        arrydata.forEach(info => {
            divinfo = document.createElement('div');
            divinfo.classList.add(strClsContentFunction)
            divinfo.innerHTML = info[0];
            divinfo.dataset[strListID] = listID;
            divinfo.onclick = info[1];
            divcontentnav.appendChild(divinfo);
        })
    }
    return divcontentnav;
}

function payitemedit_clicked(e) {
    let payitemX = payitem.find(item => {
        return item.ID === this.dataset.ID;
    });
    ;
    let form = this.parentElement.parentElement;
    let inputelem = form.getElementsByTagName('input');
    if (inputelem) {
        var ppt;
        for (ppt in payitemX) {
            if (ppt === 'Rate') {
                payitemX[ppt] = [];
                let arryrate = [];
                let arrystr = form.elements[ppt].value.split(',');
                let x = 1;
                for (var i = 0; i < arrystr.length; i++) {
                    arryrate.push(arrystr[i]);
                    if (x === 3) {
                        x = 1;
                        payitemX[ppt].push(arryrate);
                        arryrate = [];
                    }
                    else {
                        if (arrystr.length === 1) {
                            payitemX[ppt].push(arryrate)
                        }
                        else {
                            x++;
                        }
                    }
                }
            }
            else {
                payitemX[ppt] = form.elements[ppt].value;
            }

        }
    }
    // without saving the edited data, prevent page refresh //
    alert('Record edited.');
    e.preventDefault();
}

function entitypersonal_clicked() {
    // load employee detail by ID //
    let dataobj = employeedetail.find(function (employee) {
        return employee.ID === this;
    }, this.dataset[strListID]);

    let dataobj_form = init_divcontent_getdataobjform()
    dataobj_form[0] = dataobj;
    init_divcontent(this.dataset[strListID], dataobj_form, null);
}

function entitysalarystruct_clicked() {
    // load employee detail by ID //
    let dataobj = payprofile.find(function (employee) {
        return employee.ID === this;
    }, this.dataset[strListID]);

    let dataobj_form = init_divcontent_getdataobjform()
    dataobj_form[0] = dataobj;
    init_divcontent(this.dataset[strListID], dataobj_form, null);
}

function entitysalaryhistory_clicked() {
    alert('Retrieve Salary History ...');
}

function populatetable(tabletitle, datalist, function_clicked) {
    // load listing in table element //
    contentlisttable.innerHTML = '';
    contentlisttable.style.display = 'block';

    var tablelist = document.createElement('table');
    tablelist.id = strListTableID;
    let datarow;

    // caption //
    tablelist.createCaption().innerHTML = tabletitle;

    // headerrow //
    let thead = tablelist.createTHead();
    let ppt;
    let thdata;
    datarow = thead.insertRow();

    for (ppt in datalist[0]) {
        thdata = document.createElement('th');
        thdata.innerHTML = ppt;
        datarow.appendChild(thdata);
    }


    // datarow //
    let tbody = tablelist.createTBody();
    datalist.forEach(function (dataobj) {
        datarow = tbody.insertRow();
        datarow.dataset[strListID] = dataobj.ID;
        datarow.insertCell(0).innerHTML = dataobj.ID;
        datarow.insertCell(1).innerHTML = dataobj.Name;
        datarow.addEventListener('click', function_clicked);
    })

    return tablelist;
}

// detailform is a form with one divproperty for each property //
// detailform is reloadable with different data object //
// divproperty is a row flex of: label + input //
function populateform(dataobj, boolpost) {

    // detail form is always create anew, divdetail will remove all child beforehand //
    let formelement = document.createElement('form');
    formelement.id = strDetailFormID;
    formelement.style.flex = strFBDetailForm;

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
        dataelement.name = ppt;
        if (boolpost) {
            dataelement.value = '';
        }
        else {
            dataelement.value = dataobj[ppt];
        }
        dataelement.style.flex = strFBFormInput;
        divproperty.appendChild(dataelement);

        formelement.appendChild(divproperty);
    }

    return formelement;
}

function payprofileedit_clicked(e) {
    let payprofileX = payprofile.find(item => {
        return item.ID === this.dataset.ID;
    });
    ;
    let form = this.parentElement.parentElement;
    let inputelem = form.getElementsByTagName('input');
    if (inputelem) {
        var ppt;
        for (ppt in payprofileX) {
            payprofileX[ppt] = form.elements[ppt].value;
        }
    }
    // without saving the edited data, prevent page refresh //
    e.preventDefault();
}

function payprofileitemedit_clicked(e) {

    let newrate = prompt('Enter New PayRate:');
    let ppfitem = payprofileitem.find(item => {
        return item.ID === this.dataset.id
    });
    ppfitem.PayRate = newrate;


    // without saving the edited data, prevent page refresh //
    e.preventDefault();
}

function calcsheetitemedit_clicked(e) {

    let newqty = prompt('Enter Pay Quantity:');
    let csitem = calcsheet_curr.find(item => {
        return item.ID === this.dataset.id;
    });
    csitem.PayQuantity = newqty;

    // without saving the edited data, prevent page refresh //
    e.preventDefault();
}


function newemployee_clicked() {
    alert('new employee clicked');
}

function fulllist_clicked() {
    alert('full list clicked');
}

function addemployee_clicked() {
    alert('Add New Employee ...');
}

function editemployee_clicked() {
    alert('Edit Employee Details ...');
}

function processmidmonth_clicked() {
    alert('Mid-Month Processing ...');
}

function processendmonth_clicked() {
    // for each employee
    //      extract PayProfile
    //          apply attached CalcSheet to each PayItem in PayProfile
    //              apply extracted PayQuantity (from CalcSheet) to extracted PayRate (from PayItem) for each PayItem

    let payrollobj = []; // properties: Name, Pay Item, Quantity, Rate, Amount //

    employee.forEach(eee => {
        // extract PayProfile of Employee //
        let pprofile = payprofile.find(profile => {
            return profile.ID === eee.PayProfile;
        })
        if (pprofile) {
            // extract PayItem (ID only) of PayProfile //
            let arryprofilepayitem = payprofileitem.filter(pfitem => {
                return pfitem.PayProfile === pprofile.ID;
            })

            if (arryprofilepayitem) {
                // extract info (PayRate) of PayItem and then
                // apply extracted PayQuantity to PayRate to get PayAmount //
                arryprofilepayitem.forEach(profilepayitem => {
                    let pitemX = payitem.find(item => {
                        return item.ID === profilepayitem.PayItem;
                    })

                    // process payroll item PayQuantity * PayRate = PayAmount //
                    let payqty, payrate;

                    // extract pay quantity
                    let eeecalcsheet = calcsheet.find(calc => {
                        return calc.Employee === eee.ID;
                    });
                    payqty = eeecalcsheet.pay_quantity.find(payqty => {
                        return payqty[0] === pitemX.PayUnit;
                    })[1];


                    // extract payrate
                    // precedence:
                    // - PayRate of PayProfileItem
                    // - Rate of RateBase of PayItem
                    // - Rate will be 1 of 3
                    //      - flat / percentage / range

                    if (profilepayitem.PayRate && profilepayitem.PayRate != null) {
                        // user-defined in payprofile //
                        payrate = profilepayitem.PayRate;
                    }
                    else {
                        // extract from payitem - find calculated base item and payrate of payitem //
                        let piCalcBase = payrollobj.find(pi => {
                            return pi.PayItemID === pitemX.RateBase && pi.Name === eee.Name;
                        });

                        if (piCalcBase) {
                            if (Array.isArray(pitemX.Rate)) {
                                console.log(pitemX.Rate);
                                if (pitemX.Rate.length > 1) {
                                    let raterange = pitemX.Rate.find(rangeX => { return piCalcBase.PayAmount >= rangeX[0] && piCalcBase.PayAmount <= rangeX[1] });
                                    if (raterange) {
                                        payrate = raterange[2];
                                    }
                                }
                                else {
                                    payrate = pitemX.Rate[0];
                                }
                            }
                            else {
                                payrate = pitemX.Rate;
                            }

                        }
                        else {
                            // if PayItem Base is not yet calculated/processed, used set PayItem Base //
                            payrate = pitemX.Rate;
                        }

                    }

                    // load payroll table //
                    payrollobj.push(
                        {
                            Name: eee.Name,
                            Profile: pprofile.Name,
                            PayItemID: pitemX.ID,
                            PayItem: pitemX.Name,
                            PayQuantity: payqty,
                            PayRate: payrate,
                            PayAmount: payqty * payrate
                        });
                })
            }
            else {
                alert('no payitem in payprofile');
            }
        }
        else {
            alert('no attached payprofile');
        }
    })

    let dataobj_table = init_divcontent_getdataobjtable()
    dataobj_table[0] = payrollobj;
    init_divcontent('', null, dataobj_table, null, null);
}


function processyearend_clicked() {
    alert('Year end Processing ...');
}

function outputmidpayslip_clicked() {
    alert('WIP ...');
}

function outputendpayslip_clicked() {
    alert('WIP ...');
}

function outputEPFA_clicked() {
    alert('WIP ...');
}

function outputSOCSO2_clicked() {
    alert('WIP ...');
}

function outputSOCSO3_clicked() {
    alert('WIP ...');
}

function salaryitemgeneral_clicked() {
    alert('WIP ...');

}

function salaryitemcalc_clicked() {
    alert('WIP ...');

}

function salaryitemvalid_clicked() {
    alert('WIP ...');

}

function calcsheetdatarow_clicked() {
    // remove previously added update button //
    let btnnode = document.getElementById(strDivTableFunctionID)
    if (btnnode){btnnode.parentNode.removeChild(btnnode)}

    calcsheet_curr = [];
    let eeecalcsheet = calcsheet.filter(item => item.Employee === this.dataset.id);

    payunit.forEach(item => {
        calcsheet_curr.push({
            ID: item.ID,
            Employee: '',
            PayUnitID: item.ID,
            PayUnit: item.Name,
            PayQuantity: 0
        });
    })

    // ID:'2',
    // Employee: '102',
    // pay_quantity: [['101', 1], ['102', 26]]

    calcsheet_curr.forEach(item => {
        // item.ID = eeecalcsheet[0].Employee;
        item.Employee = employee.find(ee => ee.ID === this.dataset.id).Name;
        let arrypayqty = eeecalcsheet[0].pay_quantity.find(pq => pq[0] === item.PayUnitID);
        item.PayQuantity = arrypayqty ? arrypayqty[1] : 0;
    })

    let dataobj_table = init_divcontent_getdataobjtable;
    dataobj_table[0] = calcsheet_curr;
    dataobj_table[2] = [['=', 4, calcsheetitemedit_clicked]];
    init_divcontent('', null, dataobj_table, null, null);

    // add update button //
    let divfunction = document.createElement('div');
    divfunction.id = strDivTableFunctionID;
    divfunction.setAttribute('style', 'width:90%; border:1px solid gray; box-sizing:box-border; padding:2%');
    

    let btnupdate = document.createElement('button');
    btnupdate.innerHTML = 'Update';
    btnupdate.dataset.id = this.dataset.id;
    btnupdate.onclick = calcsheetupdate_clicked;

    divfunction.appendChild(btnupdate);
    contentdetail.appendChild(divfunction);

}

function calcsheetupdate_clicked() {
    let eeecalcsheet = calcsheet.find(item => item.Employee === this.dataset.id);
    eeecalcsheet.pay_quantity = [];
    calcsheet_curr.forEach(pq => {
        eeecalcsheet.pay_quantity.push([pq.PayUnitID, pq.PayQuantity]);
    })
}