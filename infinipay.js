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
const objectid = {
    employee: 0,
    payitem: 1,
    payprofile: 2,
    accrueditem: 3,
    statitem: 4,
    payunit: 5,
    calcsheet: 6,
    process: 7,
    output: 8
}
const arryMainNavItem = [
    ['navitememployee', 'Employee', employee, arryemployeeinfocat, dataobjlistdatarow_clicked, employee_loaddetail],
    ['navitemsalaryitem', 'Salary Item', payitem, arrysalaryitemcat, dataobjlistdatarow_clicked, payitem_loaddetail],
    ['navitemsalarystruct', 'Salary Profile', payprofile, undefined, dataobjlistdatarow_clicked, payprofile_loaddetail],
    ['navitemaccrueditem', 'Accrued Item', accrueditem, undefined, dataobjlistdatarow_clicked, accrueditem_loaddetail],
    ['navitemstatitem', 'Stat Item', statitem, undefined, dataobjlistdatarow_clicked, undefined],
    ['navitempayunit', 'Work Unit', payunit, arrysalaryitemcat, dataobjlistdatarow_clicked, payunit_loaddetail],
    ['navitemcalcsheet', 'Work Sheet', undefined, undefined, dataobjlistdatarow_clicked, calcsheet_loaddetail],
    ['navitemprocess', 'Process', payprocess, undefined, dataobjlistdatarow_clicked, payprocess_loaddetail], 
    ['navitemoutput', 'Output', undefined, undefined, output_clicked, undefined]
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
const strDetailFormID = 'contentdetailform';
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



// document elements //
const navitememployee = document.getElementById('navitememployee');
const navitemsalaryitem = document.getElementById('navitemsalaryitem');
const navitemsalarystruct = document.getElementById('navitemsalarystruct');
const navitemstatitem = document.getElementById('navitemstatitem');
const navitemaccrueditem = document.getElementById('navitemaccrueditem');
const navitempayunit = document.getElementById('navitempayunit');
const navitemcalcsheet = document.getElementById('navitemcalcsheet');
const navitemprocess = document.getElementById('navitemprocess');
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
var payprofileitem_curr = [];
var payprofileitem_new;

var dataid_curr; // id of datatype (ie employee or payitem etc)
var dataobjlist_curr;
var dataobjid_curr; // id of current object of current datatype

// 
// initial load //
// 

// contenttitle.style.display = 'none';
contentlisttitle.innerHTML = '';


// 
// event management //
// 
navitememployee.onclick = navitem_clicked;
navitemsalaryitem.onclick = navitem_clicked;
navitemsalarystruct.onclick = navitem_clicked;
navitemaccrueditem.onclick = navitem_clicked;
navitemstatitem.onclick = navitem_clicked;
navitempayunit.onclick = navitem_clicked;
navitemcalcsheet.onclick = navitem_clicked;
navitemprocess.onclick = navitem_clicked;
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

        // employee //
        case arryMainNavItem[objectid.employee][0]:
            dataobjlist_curr = employee;
            dataid_curr = objectid.employee;
            break;

        // pay item //
        case arryMainNavItem[objectid.payitem][0]:
            dataobjlist_curr = payitem;
            dataid_curr = objectid.payitem;
            break;

        // accured item //
        case arryMainNavItem[objectid.accrueditem][0]:
            dataobjlist_curr = accrueditem;
            dataid_curr = objectid.accrueditem;
            break;

        // stat item //
        case arryMainNavItem[objectid.statitem][0]:
            dataobjlist_curr = statitem;
            dataid_curr = objectid.statitem;
            break;

        // pay profile //
        case arryMainNavItem[objectid.payprofile][0]:
            dataobjlist_curr = payprofile;
            dataid_curr = objectid.payprofile;
            break;

        // pay unit //
        case arryMainNavItem[objectid.payunit][0]:
            dataobjlist_curr = payunit;
            dataid_curr = objectid.payunit;
            break;

        // calc sheet //
        case arryMainNavItem[objectid.calcsheet][0]:
            // data object for calcsheet is a list of employees instead of the original calcsheet
            // dataobjlist_curr = calcsheet;
            dataid_curr = objectid.calcsheet;
            break;

        // process //
        case arryMainNavItem[objectid.process][0]:
            dataobjlist_curr = payprocess;
            dataid_curr = objectid.process;
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

    // content title //
    contenttitle.innerHTML = arryMainNavItem[dataid_curr][1]

    // load navbar table list //
    let arrydataobjlist;
    if (dataid_curr === objectid.calcsheet) {
        // calcsheet //
        arrydataobjlist = calcsheet.map(item => {
            return { ID: item.Employee, Name: employee.find(eee => eee.ID === item.Employee).Name }
        });
        dataobjlist_curr = arrydataobjlist;
    }
    else {
        arrydataobjlist = dataobjlist_curr.map(item => {
            return { ID: item.ID, Name: item.Name }
        })
    }
    let tablelist1 = populatetable(arryMainNavItem[dataid_curr][1], arrydataobjlist, arryMainNavItem[dataid_curr][4]);
    tablelist1.dataset[strListTableNavItem] = arryMainNavItem[dataid_curr][0];
    tablelist1.classList.add(strClsListInTable);
    contentlisttable.appendChild(tablelist1);
    
    // list functions //
    contentlistfunction.innerHTML = '';

    switch (this.id) {
        // // process //
        // case arryMainNavItem[objectid.process][0]:
        //     arryMainNavItem[objectid.process][4]();
        //     break;

        // output //
        case arryMainNavItem[objectid.output][0]:
            arryMainNavItem[objectid.output][4]();
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

// function employeedatarow_clicked() {
//     // save for prev/next navigation //
//     dataobjid_curr = this.dataset[strListID];
//     employee_loaddetail(this.dataset[strListID]);
// }

function employee_loaddetail(eeeid) {
    // load employee detail by ID //
    let dataobj = employee.find(function (employee) {
        return employee.ID === this;
    }, eeeid);

    // initial detail display area //

    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[0] = dataobj;
    dataobj_form[1] = [
        ['ID', false, 'text'],
        ['Name', false, 'text'],
        ['PayType', false, 'text'],
        ['Address1', false, 'text'],
        ['Address2', false, 'text'],
        ['Address3', false, 'text'],
        ['IC', false, 'text'],
        ['Passport', false, 'text'],
        ['Tel1', false, 'text'],
        ['Tel2', false, 'text'],
        ['Permit', false, 'text'],
        ['Marital', false, 'text'],
        ['DOB', false, 'text'],
        ['Nationality', false, 'text'],
        ['Race', false, 'text'],
        ['Religion', false, 'text'],
        ['PayProfile', false, 0]
    ];
    dataobj_form[2] = [payprofile];
    // arrybutton - a 2-dim array of [button[(0)type, (1)text, (2)class, (3)clickedfunction]]
    dataobj_form[3] = [[null, '<<', null, dataobjprev_clicked],
    [null, 'Edit', null, functionudefined_clicked],
    ['RESET', 'Reset', null, undefined],
    ['POST', 'New', null, functionudefined_clicked],
    [null, '>>', null, dataobjnext_clicked]];

    init_divcontent(eeeid, dataobj_form, null);
    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.Name;
}

// function payitemdatarow_clicked() {
//     // save for prev/next navigation //
//     dataobjid_curr = this.dataset[strListID];
//     payitem_loaddetail(this.dataset[strListID]);
// }

function payitem_loaddetail(currid) {
    // load salary item detail by ID //
    let dataobj = payitem.find(function (item) {
        return item.ID === this;
    }, currid);

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[0] = dataobj;
    dataobj_form[1] = [
        ['ID', false, 'text'],
        ['Name', true, 'text'],
        ['Remark', true, 'text'],
        ['PayType', true, 'text'],
        ['PayUnit', false, 0],
        ['Range', true, 'text'],
        ['RangeBase', true, 1],
        ['PerRate', true, 'text'],
        ['PerBase', true, 1],
        ['Rate', true, 'text'],
        ['Min-Max', true, 'text'],
        ['Valid Period', true, 'text'],
        ['Accrued Item', true, 2],
        ['Stat Requirment', true, 'text']
    ]
    dataobj_form[2] = [payunit, payitem, accrueditem];
    dataobj_form[3] = [[null, '<<', null, dataobjprev_clicked],
    [null, 'Edit', null, payitemedit_clicked],
    ['RESET', 'Reset', null, undefined],
    [null, 'New', null, dataobj_new],
    [null, '>>', null, dataobjnext_clicked]];

    init_divcontent(currid, dataobj_form, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.Name;
}

function payunit_loaddetail(currid) {
    // load salary item detail by ID //
    let dataobj = payunit.find(function (item) {
        return item.ID === this;
    }, currid);

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[0] = dataobj;
    dataobj_form[1] = [['ID', false, 'text'],
    ['Name', true, 'text']];
    // dataobj_form[2] = [payunit, payitem];
    dataobj_form[3] = [[null, '<<', null, dataobjprev_clicked],
    [null, 'Edit', null, payunitedit_clicked],
    ['RESET', 'Reset', null, undefined],
    ['POST', 'New', null, dataobj_new],
    [null, '>>', null, dataobjnext_clicked]];

    init_divcontent(currid, dataobj_form, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.Name;
}


function payprocess_loaddetail(currid) {
    // load salary item detail by ID //
    let dataobj = payprocess.find(function (item) {
        return item.ID === this;
    }, currid);

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[0] = dataobj;
    dataobj_form[1] = [
        ['ID', false, 'text'],
        ['Name', true, 'text'],
        ['Setting1', true, 'text'],
        ['Setting2', true, 'text']
    ];
    // dataobj_form[2] = [payunit, payitem];
    dataobj_form[3] = [[null, '<<', null, dataobjprev_clicked],
    [null, 'Edit', null, payunitedit_clicked],
    ['RESET', 'Reset', null, undefined],
    ['POST', 'New', null, dataobj_new],
    [null, 'RUN', null, processendmonth_clicked],
    [null, '>>', null, dataobjnext_clicked]];

    init_divcontent(currid, dataobj_form, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.Name;
}

// function accrueditemdatarow_clicked() {
//     // save for prev/next navigation //
//     dataobjid_curr = this.dataset[strListID];
//     accrueditem_loaddetail(this.dataset[strListID]);
// }

function accrueditem_loaddetail(currid) {
    let dataobj = accrueditem.find(function (item) {
        return item.ID === this;
    }, currid);

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[0] = dataobj;
    dataobj_form[1] = [
        ['ID', false, 'text'],
        ['Name', false, 'text'],
        ['Date', false, 'text'],
        ['Balance', false, 'text']
    ];
    dataobj_form[3] = [
        [null, '<<', null, dataobjprev_clicked],
        [null, 'Edit', null, accrueditemedit_clicked],
        ['RESET', 'Reset', null, undefined],
        ['POST', 'New', null, dataobj_new],
        [null, '>>', null, dataobjnext_clicked]
    ];

    init_divcontent(currid, dataobj_form, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.Name;
}

// function payprofiledatarow_clicked() {
//     // save for prev/next navigation //
//     dataobjid_curr = this.dataset[strListID];
//     payprofile_loaddetail(this.dataset[strListID]);
// }

function payprofile_loaddetail(profileid) {

    // load payprofile by ID //
    let profiledata = payprofile.find(function (item) {
        return item.ID === this;
    }, profileid);

    // load payprofile item //
    payprofileitem_curr = [];
    payprofileitem_curr = payprofileitem.filter(item => {
        return item.PayProfile === profileid; //?? why cannot use this like profiledata ??//
    }, profileid)
    // insert name of payitem //
    let profiledetaildata = payprofileitem_curr.map(item => {
        return {
            ID: item.ID,
            // PayProfile: item.PayProfile,
            // PayItemID: item.PayItem,
            PayItem: payitem.find(pi => { return pi.ID === item.PayItem }).Name,
            PayRate: item.PayRate
        };
    })

    // init detail display area //
    // profile form //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[0] = profiledata;
    dataobj_form[1] = [['ID', false, 'text'],
    ['Name', true, 'text'],
    ['Accommodation', true, 'text'],
    ['Companycar', true, 'text']
    ];
    dataobj_form[2] = null;
    dataobj_form[3] = [[null, '<<', null, dataobjprev_clicked],
    [null, 'Edit', null, payprofileedit_clicked],
    ['RESET', 'Reset', null, undefined],
    [null, 'New', null, functionudefined_clicked],
    [null, '>>', null, dataobjnext_clicked]];

    // profile item table //
    let dataobj_table = init_divcontent_getdataobjtable();
    dataobj_table[0] = profiledetaildata
    // arrybutton - an array of 0: button text, 1: button column, 2: button_clicked function
    // dataobj_table[2] = [['=', 2, payprofileitemedit_clicked]];

    // [header col[0: description strings, 1: col-width, 2: text-alignment, 3: [input type, input data, onchange function]]]
    dataobj_table[1] = [
        ['ID', '10%', 0, null],
        ['Pay Item', '70%', 0, null],
        ['Pay Rate', '20%', 0, [1, null, payprofileitemedit_clicked]]
    ];
    dataobj_table[2] = [['x', 0, payprofileitemdelete_clicked]];
    let divdetail = init_divcontent(profileid, dataobj_form, dataobj_table);

    // create funtions for profile payitem table //
    // edit function //
    let divfunctionedit = document.createElement('div');
    divfunctionedit.setAttribute('style',
        `width:90%;
                        box-sizing:box-border;
                        padding:2%;
                        margin:2% auto;
                        display:flex;
                        justify-content:space-around;
                        border:1px solid gray`);
    let btnEdit = document.createElement('button');
    btnEdit.innerHTML = 'Edit';
    btnEdit.dataset.id = profileid;
    btnEdit.onclick = payprofileitemupdate_clicked;
    divfunctionedit.appendChild(btnEdit);
    divdetail.appendChild(divfunctionedit);

    // new function //
    let divfunctionnew = document.createElement('div');
    divfunctionnew.setAttribute('style',
        `width:90%;
                        box-sizing:box-border;
                        padding:2%;
                        margin:2% auto;
                        display:flex;
                        justify-content:space-around;
                        border:1px solid gray`);
    // select for pay item //
    let payitemselect = document.createElement('select');
    payitemselect.style.width = '60%';
    payitemselect.dataset.id = profileid;
    payitem.forEach(item => {
        let selectoption = document.createElement('option');
        selectoption.text = item.Name;
        selectoption.setAttribute('value', item.ID);
        payitemselect.appendChild(selectoption);
    })
    payitemselect.onchange = payprofileitem_selectchanged;

    divfunctionnew.appendChild(payitemselect);

    // new button //
    let btnNew = document.createElement('button');
    btnNew.innerHTML = 'New'
    btnNew.onclick = payprofileitemnew_clicked;
    divfunctionnew.appendChild(btnNew);

    divdetail.appendChild(divfunctionnew);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = profiledata.Name;
}

// function process_clicked() {
//     toggle_logoinfo(true);

//     // clear div contentlist except listfunction //
//     contentlisttitle.innerHTML = '';
//     contentlisttable.style.display = 'none';

//     // mid-month process //
//     contentlistfunction.style.display = 'flex';
//     contentlistfunction.style.flexDirection = 'column';
//     contentlistfunction.style.backgroundColor = 'white';

//     let btnprocess;

//     arryProcess.forEach(function (proc) {
//         btnprocess = document.createElement('button');
//         btnprocess.innerHTML = proc[0];
//         btnprocess.classList.add(strClsListFunction);
//         btnprocess.onclick = proc[1];
//         contentlistfunction.appendChild(btnprocess);
//     })
// }


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
function init_divcontent(dataobj_ID, dataobj_form, dataobj_table) {

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

    // form content //
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
        objparam.arrydataid = [strDetailFormID, dataobj_ID];
        // objparam.htmlform = formdetails;
        objparam.arrylabelinput = [['30%', -1],
        ['70%', -1]];
        objparam.arryitemdata = dataobj_form[2];
        // objparam.arryclass = ['contentcaption', 'contentlabel', 'contentinput', 'contentbutton'];
        objparam.arrybutton = dataobj_form[3];
        newform = vssfnc_formpopulate(objparam);

        divcontentbox.appendChild(newform);
    }

    // table content //
    if (dataobj_table && dataobj_table[0]) {
        let objparam = vssfnc_tablepopulate_param();
        // objparam.caption = "Entity";
        // objparam.htmltable = tablelist;
        // objparam.htmltableid = 'Entity';
        objparam.arryjsondata = dataobj_table[0];
        objparam.arryheadercol = dataobj_table[1];
        objparam.arryfooter = ['Item Count']
        objparam.boolitemcount = true;
        objparam.arrydataid = ['table', strListID];
        objparam.arryclass = ['tablerow', 'tableheadercol', 'tabledatarow', 'tabledatarowbutton'];
        // objparam.arryclassdatarow = ['narbartabletrodd', 'narbartabletreven', 'narbartabletrselected'];
        objparam.arrysortind = [' (v)', ' (^)'];

        // arrybutton - a 2-dim array of 
        // [0: datarow button: [0: button text, 1: button column, 2: button_clicked function, 3: css class of button]]
        // ?? [1: table button: [0: button text, 1: button column, 2: button_clicked function, 3: css class of button]]
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

    if (dataobj_form && dataobj_table) {
        return newform;
    }
    else {
        return divcontentdetail;
    }

    // return divcontentbox;
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
            if (ppt === 'Rate' || ppt === 'PerRate') {
                payitemX[ppt] = parseFloat(form.elements[ppt].value).toFixed(2);
            }
            else {
                payitemX[ppt] = form.elements[ppt].value;
            }

        }
    }
    // without saving the edited data, prevent page refresh //
    alert('Pay Item edited.');
    toggle_logoinfo(true);
    e.preventDefault();
}

function payunitedit_clicked(e) {
    let payunitX = payunit.find(item => {
        return item.ID === this.dataset.ID;
    });
    ;
    let form = this.parentElement.parentElement;
    let inputelem = form.getElementsByTagName('input');
    if (inputelem) {
        var ppt;
        for (ppt in payunitX) {
            payunitX[ppt] = form.elements[ppt].value;
        }
    }
    // without saving the edited data, prevent page refresh //
    alert('Pay Unit edited.');
    toggle_logoinfo(true);
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

    let objparam = vssfnc_tablepopulate_param();
    objparam.caption = 'Listing';
    objparam.htmltable = tablelist;
    // objparam.htmltableid = 'Entity';
    objparam.arryjsondata = datalist;
    // [header col[0: description strings, 1: col-width, 2: text-alignment, 3: [input type, input data, onchange function]]]
    objparam.arryheadercol = [
        ['ID', '30%', 0, ,],
        ['Name', '70%', -1, ,]
    ];
    // objparam.arryfooter = ['Item Count']
    // objparam.boolitemcount = true;
    objparam.arrydataid = ['table', 'id'];
    objparam.arryclass = ['tablerow', 'tableheadercol', 'tabledatarow', 'tabledatarowbutton'];
    // objparam.arryclassdatarow = ['narbartabletrodd', 'narbartabletreven', 'narbartabletrselected'];
    objparam.arrysortind = [' (v)', ' (^)'];

    // arrybutton - a 2-dim array of 
    // [0: datarow button: [0: button text, 1: button column, 2: button_clicked function, 3: css class of button]]
    // ?? [1: table button: [0: button text, 1: button column, 2: button_clicked function, 3: css class of button]]
    // if (dataobj_table[2]) {
    //     objparam.arrybutton = dataobj_table[2][0] //['=', 2, payprofileitemedit_clicked];
    // let arrybtn = ['..', 0, payprofileitemedit_clicked];
    // objparam.arrybutton.push(arrybtn);
    // objparam.boolbutton = true;
    // objparam.fncbuttonclicked = payprofileitemedit_clicked;
    // }
    objparam.fncdatarowclicked = function_clicked;
    vssfnc_tablepopulate(objparam);

    return tablelist;
}

function populatetable2(tabletitle, datalist, function_clicked) {
    // load listing in table element //
    contentlisttable.innerHTML = '';
    contentlisttable.style.display = 'block';

    var tablelist = document.createElement('table');
    tablelist.id = strListTableID;
    let datarow;

    // caption //
    tablelist.createCaption().innerHTML = 'Listing';

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
// function populateform(dataobj, boolpost) {

//     // detail form is always create anew, divdetail will remove all child beforehand //
//     let formelement = document.createElement('form');
//     formelement.id = strDetailFormID;
//     formelement.style.flex = strFBDetailForm;

//     // divproperty is a row flex of: label + input //
//     let divproperty;
//     let labelelement, dataelement;
//     for (var ppt in dataobj) {
//         divproperty = document.createElement('div');
//         divproperty.style.display = 'flex';
//         divproperty.style.marginTop = '1%';

//         // label //
//         labelelement = document.createElement('label');
//         labelelement.innerHTML = ppt
//         labelelement.style.flex = strFBFormLabel;
//         divproperty.appendChild(labelelement);

//         // data // 
//         dataelement = document.createElement('input');
//         dataelement.name = ppt;
//         if (boolpost) {
//             dataelement.value = '';
//         }
//         else {
//             dataelement.value = dataobj[ppt];
//         }
//         dataelement.style.flex = strFBFormInput;
//         divproperty.appendChild(dataelement);

//         formelement.appendChild(divproperty);
//     }

//     return formelement;
// }

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

    alert('Record edited.');

    // without saving the edited data, prevent page refresh //
    e.preventDefault();
}

function payprofileitemedit_clicked(e) {
    let ppfitem = payprofileitem_curr.find(item => {
        return item.ID === this.dataset.id
    });
    ppfitem.PayRate = parseFloat(this.value).toFixed(2);

    // without saving the edited data, prevent page refresh //
    e.preventDefault();
}

function calcsheetitemedit_clicked(e) {
    alert(this.dataset.id);
    let csitem = calcsheet_curr.find(item => {
        return item.ID === this.dataset[strListID];
    });
    csitem.PayQuantity = this.value;

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
            // extract list of PayItem (ID only) of PayProfile //
            let arryprofilepayitem = payprofileitem.filter(pfitem => {
                return pfitem.PayProfile === pprofile.ID;
            })

            if (arryprofilepayitem) {
                // extract info of PayItem and then
                // apply extracted PayQuantity to PayRate to get PayAmount //
                arryprofilepayitem.forEach(profilepayitem => {

                    let eeecalcsheet;

                    let payitemX = payitem.find(item => {
                        return item.ID === profilepayitem.PayItem;
                    })

                    // process payroll item PayQuantity * PayRate = PayAmount //
                    let payqty, payrate;

                    // extract pay quantity from calcsheet //

                    // an  undefined/null PayUnit of PayItem indicates a lump sum PayItem that's not dependant on any quantity //

                    // ?? why null need to be in quote, doesn't work when edited after run ?? //
                    if (payitemX.PayUnit && payitemX.PayUnit !== 'null') {
                        eeecalcsheet = calcsheet.find(calc => {
                            return calc.Employee === eee.ID;
                        });

                        let calcqty = eeecalcsheet.pay_quantity.find(payqty => {
                            return payqty[0] === payitemX.PayUnit;
                        });
                        if (calcqty) {
                            payqty = calcqty[1];
                        } else {
                            payqty = 0;
                        }
                    }
                    else {
                        payqty = 1;
                    }

                    // extract payrate
                    payrate = processendmonth_getPayRate(eee, eeecalcsheet, profilepayitem, payrollobj, payitemX);

                    // load payroll table //
                    payrollobj.push(
                        {
                            Name: eee.Name,
                            Profile: pprofile.Name,
                            PayItemID: payitemX.ID,
                            PayItem: payitemX.Name,
                            PayQuantity: payqty,
                            PayRate: payrate,
                            PayAmount: payqty * payrate
                        });

                    // if PayItem is attached to an Accrued Item //
                    if (payitemX.AccruedItem) {
                        alert(`Update balance of Accrued Item ${payitemX.Name} ...`)
                    }
                })
            }
            else {
                alert('No Pay Item in Pay Profile.');
            }
        }
        else {
            alert('No attached Pay Profile.');
        }
    })

    let dataobj_table = init_divcontent_getdataobjtable()
    dataobj_table[0] = payrollobj;
    init_divcontent('', null, dataobj_table);
}

function processendmonth_getPayRate(eee, eeecalcsheet, profilepayitem, payrollobj, payitemX) {
    // precedence:
    // - 1. PayRate of PayProfileItem
    // - 2. Rate of PayItem
    // - 3. PerRate on PerBase of PayItem
    // - 4. Extract from Range (rate extracted from Range could be % or $; if % calc $ from extracted % and PayItem's PerBase)

    let payrate;

    if (profilepayitem.PayRate && !isNaN(profilepayitem.PayRate)) {
        // user-defined in payprofile //
        // - 1. PayRate of PayProfileItem
        payrate = profilepayitem.PayRate;
    }
    else {
        // - 2. Rate of PayItem
        if (payitemX.Rate && payitemX.Rate > 0) {
            payrate = payitemX.Rate;
        }
        else {
            // - 3. PerRate on PerBase of PayItem
            if (payitemX.PerRate && payitemX.PerRate > 0) {
                payrate = processendmonth_getPayRateFromPer(eee, payitemX, payrollobj);
            }
            else {
                // - 4. Extract from Range

                // extract RateBase from ProcessPayroll Object, if none, extract from PayItem 
                let processedRateBaseItem = payrollobj.find(pi => {
                    return pi.PayItemID === payitemX.RangeBase && pi.Name === eee.Name;
                });

                let RangeBase;
                if (processedRateBaseItem) {
                    RangeBase = processedRateBaseItem.PayAmount;
                }
                else {
                    if (payitemX.RangeBase === payitemX.ID) {
                        // { ID: '1', Employee: '101', pay_quantity: [['101', 1], ['102', 26]] } //
                        let calcsheetqty = eeecalcsheet.pay_quantity.find(arrypq => {
                            return arrypq[0] === payitemX.RangeBase;
                        })
                        if (calcsheetqty) {
                            RangeBase = calcsheetqty[1];
                        }
                        else {
                        }
                    }
                    else {
                        let basepayitem = payitem.find(pi => pi.ID === payitemX.RangeBase);
                        if (basepayitem) {
                            RangeBase = basepayitem.Rate;
                        }
                        else {
                        }
                    }
                }
                let arryRange = processendmonth_getArryRange(payitemX.Range);
                if (arryRange.length > 1) {
                    let raterange = arryRange.find(rangeX => { return RangeBase >= rangeX[0] && RangeBase <= rangeX[1] });
                    if (raterange) {
                        // extract PayRate //
                        let setpayrate = raterange[2];

                        //  if PayRate is % ... //
                        let idxper = setpayrate.indexOf('%');
                        if (idxper > -1) {
                            let pitemX = {
                                PerRate: setpayrate.slice(0, idxper) / 100,
                                PerBase: payitemX.PerBase
                            }
                            payrate = processendmonth_getPayRateFromPer(eee, pitemX, payrollobj);
                        }
                        else {
                            // else $ //
                            payrate = setpayrate;
                        }
                    }
                }
                else {
                }
            }
        }
    }
    return payrate;
}

function processendmonth_getPayRateFromPer(eee, payitemX, payrollobj) {

    // extract RateBase from ProcessPayroll Object, if none, extract from PayItem 
    let payrate;
    let processedRateBaseItem = payrollobj.find(pi => {
        return pi.PayItemID === payitemX.PerBase && pi.Name === eee.Name;
    });

    if (processedRateBaseItem) {
        payrate = payitemX.PerRate * processedRateBaseItem.PayAmount;
    }
    else {
        // if PayItem Base is not yet calculated/processed, used set PayItem Base //
        let rBaseItem = payitem.find(itm => itm.ID === payitemX.PerBase);
        if (rBaseItem) {
            payrate = payitemX.PerRate * rBaseItem.Rate;
        }
        else {

        }
    }
    return payrate;
}

function processendmonth_getArryRange(strRange) {
    // Range: '0,1000,50;1001,2500,80;2501,10000,100;',
    let arryRange = strRange.split(';');
    let arryRangeM = [];
    if (arryRange) {
        arryRange.forEach(strR => {
            arryRangeM.push(strR.split(','));
        })
    }
    return arryRangeM;
}

function processyearend_clicked() {
    alert('Year end Processing ...');
}

function functionudefined_clicked(e) {
    alert('undefined function');
    e.preventDefault();
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

// function calcsheetdatarow_clicked() {
//     // save for prev/next navigation //
//     dataobjid_curr = this.dataset[strListID];
//     calcsheet_loaddetail(this.dataset[strListID]);
// }

function calcsheet_loaddetail(eeeid) {
    // remove previously added update button //
    let btnnode = document.getElementById(strDivTableFunctionID)
    if (btnnode) { btnnode.parentNode.removeChild(btnnode) }

    calcsheet_curr = [];
    let eeecalcsheet = calcsheet.filter(item => item.Employee === eeeid);

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
        item.Employee = employee.find(ee => ee.ID === eeeid).Name;
        let arrypayqty = eeecalcsheet[0].pay_quantity.find(pq => pq[0] === item.PayUnitID);
        item.PayQuantity = arrypayqty ? arrypayqty[1] : 0;
    })

    let dataobj_table = init_divcontent_getdataobjtable();
    dataobj_table[0] = calcsheet_curr;
    // [header col[0: description strings, 1: col-width, 2: text-alignment, 3: [input type, input data, onchange function]]]
    dataobj_table[1] = [
        ['ID', '10%', 0, null],
        ['Employee', '50%', 0, null],
        ['UnitID', '10%', 0, null],
        ['Unit', '20%', 0, null],
        ['Quantity', '10%', 0, [1, null, calcsheetitemedit_clicked]]
    ];
    // dataobj_table[2] = [['=', 1, calcsheetitemedit_clicked]];
    let divcontent = init_divcontent('', null, dataobj_table);

    // add function button //
    let divfunction = document.createElement('div');
    divfunction.id = strDivTableFunctionID;
    divfunction.setAttribute('style',
        `width:50%;
                            padding:2%;
                            margin:2% auto;
                            border:1px solid gray;
                            box-sizing:box-border;
                            display:flex;
                            justify-content:space-around`);

    // prev //
    let btnprev = document.createElement('button');
    btnprev.innerHTML = '<<';
    btnprev.dataset.id = eeeid;
    btnprev.onclick = dataobjprev_clicked;
    divfunction.appendChild(btnprev);

    // update //
    let btnupdate = document.createElement('button');
    btnupdate.innerHTML = 'Update';
    btnupdate.dataset.id = eeeid;
    btnupdate.onclick = calcsheetupdate_clicked;
    divfunction.appendChild(btnupdate);

    // next //
    let btnnext = document.createElement('button');
    btnnext.innerHTML = '>>';
    btnnext.dataset.id = eeeid;
    btnnext.onclick = dataobjnext_clicked;
    divfunction.appendChild(btnnext);


    divcontent.appendChild(divfunction);
}

function calcsheetupdate_clicked() {
    let eeecalcsheet = calcsheet.find(item => item.Employee === this.dataset.id);
    eeecalcsheet.pay_quantity = [];
    calcsheet_curr.forEach(pq => {
        eeecalcsheet.pay_quantity.push([pq.PayUnitID, pq.PayQuantity]);
    })
    toggle_logoinfo(false);
    alert('Calculation Sheet edited.');
}

function payprofileitemupdate_clicked(e) {
    payprofileitem_curr.forEach(pfitem => {
        let ppitem = payprofileitem.find(pfi => {
            pfi.ID === pfitem.ID;
        })
        if (ppitem) {
            ppitem.PayRate = pfitem.PayRate;
        }
    })
    alert('Pay Profile Item edited.');
    toggle_logoinfo(false);
    e.preventDefault();
}

function payprofileitem_selectchanged() {
    // { ID: '1', PayProfile: '101', PayItem: '101', PayRate: 500 },
    payprofileitem_new = { ID: dataobj_getnewid(payprofileitem), PayProfile: this.dataset.id, PayItem: this.value, PayRate: 0 };

}

function payprofileitemnew_clicked(e) {
    payprofileitem.push(payprofileitem_new);
    payprofileitem_new = null;
    alert('Pay Profile Item edited.');
    toggle_logoinfo(false);
    e.preventDefault();
}

// function payunitnew_clicked(e) {
//     try {

//         dataobj_new(e);
//         alert('New Pay Unit added.');
//         toggle_logoinfo(false);
//         e.preventDefault();
//     }
//     catch (e) { alert(e); }
// }

function dataobj_crud_obj() {
    // let newdataobj;
    // let data;
    // let dataname;
    // switch (dataid_curr) {
    //     case objectid.payitem:
    //         data = payitem;
    //         dataname = 'Salary Item';
    //         newdataobj = { ID: '', Name: '' };
    //         break;
    //     case objectid.payunit:
    //         data = payunit;
    //         dataname = 'Pay Unit';
    //         newdataobj = { ID: '', Name: '' };
    //         break;
    //     case objectid.accrueditem:
    //         data = accrueditem;
    //         dataname = 'Accrued Item';
    //         newdataobj = { ID: '', Name: '' };
    //         break;
    //     default:
    //         data = null;
    //         dataname = null;
    //         newdataobj = null;
    //         break;
    // }
    // return { data, dataname, newdataobj };
}

function dataobj_new(e) {
    try {
        // let dataparam = dataobj_crud_obj();
        // console.log(dataparam);
        // let newdataobj = dataparam[2];
        // let data = dataparam[0];
        // let dataname = dataparam[1];

        let newdataobj;
        let data;
        let dataname;
        switch (dataid_curr) {
            case objectid.payitem:
                data = payitem;
                dataname = 'Salary Item';
                newdataobj = { ID: '', Name: '' };
                break;
            case objectid.payunit:
                data = payunit;
                dataname = 'Pay Unit';
                newdataobj = { ID: '', Name: '' };
                break;
            case objectid.accrueditem:
                data = accrueditem;
                dataname = 'Accrued Item';
                newdataobj = { ID: '', Name: '' };
                break;
            default:
                data = null;
                dataname = null;
                newdataobj = null;
                break;
        }
        let frm = document.getElementById(strDetailFormID);
        Object.keys(data[0]).forEach(ppt => {
            newdataobj[ppt] = frm.elements[ppt].value
        })
        newdataobj.ID = dataobj_getnewid(data);
        data.push(newdataobj);

        alert('New ' + dataname + ' added.');
        toggle_logoinfo(false);
        e.preventDefault();
    }
    catch (ex) { alert(ex); }

}

function dataobj_newextrparam() {
    // let newpayunit = { ID: '', Name: '' };
    // let arrydatacol = window.location.href.split('?')[1].split('&');

    // arrydatacol.forEach(datacol => {
    //     let arryppt = datacol.split('=');
    //     newpayunit[arryppt[0]] = arryppt[1];
    // })
}

function dataobj_getnewid(dataobj) {
    let maxid = 0;
    dataobj.forEach(item => {
        if (parseInt(item.ID) > maxid) {
            maxid = parseInt(item.ID);
        }
    })
    return (maxid + 1).toString();
}

function dataobjprev_clicked(e) {
    dataobjid_curr = dataobjlist_search(-1).ID;
    dataobj_loaddetail(dataobjid_curr);
    e.preventDefault();
}

function dataobjnext_clicked(e) {
    dataobjid_curr = dataobjlist_search(1).ID;
    dataobj_loaddetail(dataobjid_curr);
    e.preventDefault();
}

function dataobj_loaddetail(id) {
    arryMainNavItem[dataid_curr][5](id);
}

function dataobjlist_search(direction) {

    let curridx = 0;

    dataobjlist_curr.forEach((dataobj, index) => {
        if (dataobj.ID === dataobjid_curr) {
            curridx = index;
        }
    })

    if (curridx === 0 && direction === -1) {
        curridx = dataobjlist_curr.length;
    }
    else if (curridx === dataobjlist_curr.length - 1 && direction === 1) {
        curridx = -1;
    }
    return direction === -1 ? (dataobjlist_curr[curridx - 1]) : (dataobjlist_curr[curridx + 1]);
}

function dataobjlistdatarow_clicked() {
    // save for prev/next navigation //
    dataobjid_curr = this.dataset[strListID];
    arryMainNavItem[dataid_curr][5](this.dataset[strListID]);
}

function accrueditemedit_clicked() { }

function payprofileitemdelete_clicked(e) {
    let pfitemIdx;
    payprofileitem.forEach((pfitem, index) => {
        if (pfitem.ID === this.dataset.id) {
            pfitemIdx = index;
            // break;
        }
    })
    payprofileitem.splice(pfitemIdx, 1);

    alert('Pay Profile Item deleted.');
    toggle_logoinfo(false);
    e.preventDefault();
}