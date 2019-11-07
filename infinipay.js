'use strict';
// const sample_data= require('./infinipay_data');

// import {employee, employeeitem} from ('./infinipay_data');
// console.log(employee[0]);

const boolAspNet = false;

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

const MainNavItem_Index = {
    HTMLID: 0,
    Desc: 1,
    DataObjectID: 2,
    DataObject: 3,
    DescCat: 4,
    DataRowOnClick: 5,
    FncDetailLoad: 6
}

const arryMainNavItem = [
    ['navitememployee', 'Employee', 0, employee, arryemployeeinfocat, dataobjlistdatarow_clicked, employee_loaddetail],
    ['navitemsalaryitem', 'Salary Item', 1, payitem, arrysalaryitemcat, dataobjlistdatarow_clicked, payitem_loaddetail],
    ['navitemsalarystruct', 'Salary Profile', 2, payprofile, undefined, dataobjlistdatarow_clicked, payprofile_loaddetail],
    ['navitemaccrueditem', 'Accrued Item', 3, accrueditem, undefined, dataobjlistdatarow_clicked, accrueditem_loaddetail],
    ['navitemstatitem', 'Stat Item', 4, statitem, undefined, dataobjlistdatarow_clicked, statitem_loaddetail],
    ['navitempayunit', 'Work Unit', 5, payunit, arrysalaryitemcat, dataobjlistdatarow_clicked, payunit_loaddetail],
    ['navitemcalcsheet', 'Work Sheet', 6, calcsheet, undefined, dataobjlistdatarow_clicked, calcsheet_loaddetail],
    ['navitemprocess', 'Process', 7, payprocess, undefined, dataobjlistdatarow_clicked, payprocess_loaddetail],
    ['navitemoutput', 'Output', 8, undefined, undefined, null, output_clicked]
];

const arryEmployeeInfo = [
    ['Personal Details', entitypersonal_clicked],
    ['Salary Structure', entitysalarystruct_clicked],
    ['Salary History', entitysalaryhistory_clicked]
]

const arryProcess = [
    ['101', processmidmonth_clicked],
    ['102', processendmonth_clicked],
    ['103', processyearend_clicked]
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
const strDetailTableID = 'contentdetailtable';
const strDivTableFunctionID = 'contentdetailtablefunction';
const strListTableID = 'listtableid';
const strListTableNavItem = 'listtablenavitem';
const strDivEeePayrollID = 'diveeepayroll';
const strDivStatProfileEeeItemID = 'divstatprofileeeeitem';

// css classes //
const strClsListInSelect = 'listtableinselect';
const strClsListInTable = 'listtableintable';
const strClsListFunction = 'listfunction';
const strClsContentDetail = 'contentdetail';
const strClsContentDetailTitle = 'contentdetailtitle';
const strClsContentFunction = 'contentfunction';
const strClsDivContentImg = 'contentimgdiv';
const strClsContentImg = 'contentimg';

const strDivButtonStyle = 'width:90%;box-sizing:box-border;padding:2%;margin:2% auto;display:flex;justify-content:space-around;border:1px solid gray';

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
var statitem_curr = [];
var statprofile_curr;

var dataobjid_curr; // id of datatype (ie employee or payitem etc)
var dataobj_curr;
var objectid_curr; // id of current object of current datatype
var payrollobj_curr;


// 
// initial load //
// 

contentlist.style.display = 'none';

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
function toggle_logoinfo(boolSwitchNavItem, boolonlogo) {
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

        if (boolonlogo) {
            contentdetailinfo.style.display = 'none';
            contentdetaillogo.style.display = 'block';
        }
    }
}

async function navitem_clicked() {

    if (contentlist.style.display = 'none') {
        contentlist.style.display = 'block';
    }

    toggle_logoinfo(true);

    // list title //
    contentlisttitle.style.display = 'none';

    let navitem = arryMainNavItem.find(nitem => nitem[MainNavItem_Index.HTMLID] === this.id);
    dataobjid_curr = navitem[MainNavItem_Index.DataObjectID];

    // content title //
    contenttitle.innerHTML = navitem[MainNavItem_Index.Desc];

    // load navbar table list //
    let arrydataobjlist;
    if (navitem[MainNavItem_Index.DataObjectID] === DataObjID.CalcSheet) {
        // data object for calcsheet is a list of employees instead of the original calcsheet
        let csheet = await dataobj_get();
        let empee = await dataobj_get(null, DataObjID.Employee);
        arrydataobjlist = csheet.map(item => {
            return { ID: item.Employee, Name: empee.find(eee => eee.ID === item.Employee).Name }
        });
        dataobj_curr = arrydataobjlist;
    } else {
        dataobj_curr = await dataobj_get();
        arrydataobjlist = dataobj_curr.map(item => {
            return boolAspNet ? { ID: item.id, Name: item.name } : { ID: item.ID, Name: item.Name };
        })
    }


    // !! SHORTCUT FOR TESTING !! //
    // if (this.id === arryMainNavItem[DataObjID.output][MainNavItem_Index.HTMLID]) {
    //     processendmonth_clicked();
    // }
    // !! SHORTCUT FOR TESTING !! //


    // if (dataobjid_curr === DataObjID.calcsheet) {
    //     arrydataobjlist = calcsheet.map(item => {
    //         return { ID: item.Employee, Name: employee.find(eee => eee.ID === item.Employee).Name }
    //     });
    //     dataobj_curr = arrydataobjlist;
    // }
    // else {
    //     arrydataobjlist = dataobj_curr.map(item => {
    //         return { ID: item.ID, Name: item.Name }
    //     })
    // }


    let tablelist1 = populatetable(navitem[1], arrydataobjlist, navitem[MainNavItem_Index.DataRowOnClick]);
    tablelist1.dataset[strListTableNavItem] = navitem[MainNavItem_Index.HTMLID];
    tablelist1.classList.add(strClsListInTable);
    contentlisttable.appendChild(tablelist1);

    // list functions //
    contentlistfunction.innerHTML = '';

    switch (this.id) {

        // output //
        // case arryMainNavItem[DataObjID.output][0]:
        //     arryMainNavItem[DataObjID.output][4]();
        //     break;

        default:
            let divfunction = document.createElement('div');
            divfunction.setAttribute('style', 'display:flex');

            // New function //
            let fncNew = document.createElement('div');
            fncNew.innerHTML = 'New';
            fncNew.classList.add(strClsListFunction);
            fncNew.onclick = newemployee_clicked;
            divfunction.appendChild(fncNew);

            // Full List function //
            let fncFullList = document.createElement('div');
            fncFullList.innerHTML = 'Full List';
            fncFullList.classList.add(strClsListFunction);
            fncFullList.onclick = fulllist_clicked;
            divfunction.appendChild(fncFullList);

            contentlistfunction.appendChild(divfunction);
            break;
    }
}

function dataobj_url(type, DObjID) {
    if (!DObjID) {
        DObjID = dataobjid_curr;
    }
    switch (DObjID) {
        case DataObjID.Employee:
            switch (type) {
                case 'get':
                    return infinipayURL.EmployeeGet;
                case 'post':
                    return infinipayURL.EmployeeAdd;
                case 'put':
                    return infinipayURL.EmployeeUpdate;
            }
        case DataObjID.PayItem:
            switch (type) {
                case 'get':
                    return infinipayURL.PayItemGet;
                case 'post':
                    return infinipayURL.PayItemAdd;
                case 'put':
                    return infinipayURL.PayItemUpdate;
            }
    }
}

function dataobj_get(obj_id, dobjid) {

    if (dobjid === null || dobjid === undefined) {
        dobjid = dataobjid_curr;
    }

    let strURL = dataobj_url('get', dobjid);
    if (obj_id) {
        strURL += '/' + obj_id;
    }

    if (!boolAspNet) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                switch (dobjid) {
                    case DataObjID.PayProfileItem:
                        resolve(payprofileitem);
                        break;
                    case DataObjID.StatProfile:
                        resolve(statprofile);
                        break;
                    case DataObjID.StatProfileEmployeeItem:
                        resolve(statprofileiemployeeitem);
                        break;
                    default:
                        let dobj = arryMainNavItem[dobjid][MainNavItem_Index.DataObject];
                        if (obj_id) {
                            let dataobj = dobj.find(function (obj) {
                                return obj.ID === this;
                            }, obj_id);
                            resolve([dataobj]);
                        }
                        else {
                            resolve(dobj);
                        }
                        break;
                }
            }, 300);
        })
    }
    else {
        // retrieved from server //
        return new Promise((resolve, reject) => {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                }
            }
            xhttp.open('GET', strURL);
            xhttp.send();
        })
    }
}

async function divcontentparam_loaddataobj(datacol) {
    // arryType2Index is an array of arrays of [DataObjID, ArrayIndex]
    // loaded Data Object will have an entry with its ArrayIndex
    // this to avoid double loading of same Data Object
    let arryType2Index = [];
    let arrydataobj = [];
    let arryidx = 0;
    for (var i = 0; i < datacol.length; i++) {
        if (!isNaN(datacol[i][vssfnc_formpopparam_item.arrydatacol.Type])) {
            let loaded = arryType2Index.find(typeindex => {
                return typeindex[0] === datacol[i][vssfnc_formpopparam_item.arrydatacol.Type];
            })
            if (loaded) {
                datacol[i][vssfnc_formpopparam_item.arrydatacol.Type] = loaded[1];
            }
            else {
                // vssfnc_formpopparam_item.arrydatacol.Type indicates the index of the required dataobj in the array of data object in vssfnc:form_populate; therefore convert the initial data object id to the array index
                let dataobj = await dataobj_get(null, datacol[i][vssfnc_formpopparam_item.arrydatacol.Type]);
                arrydataobj.push(dataobj);
                arryType2Index.push([datacol[i][vssfnc_formpopparam_item.arrydatacol.Type], arryidx])
                datacol[i][vssfnc_formpopparam_item.arrydatacol.Type] = arryidx;
                arryidx += 1;
            }
        }
    }
    return arrydataobj;
}

async function employee_loaddetail(eeeid) {

    // load employee detail by ID //
    let arrydataobj = await dataobj_get(eeeid);
    let dataobj = arrydataobj[0];

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = employeedatacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = await divcontentparam_loaddataobj(employeedatacol);

    let arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'SUBMIT';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Edit';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobj_new;
    arrybtn[vssfnc_formpopparam_item.arrybutton.ActionURL] = dataobj_url('put');
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = functionudefined_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'SUBMIT';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'New';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobj_new;
    arrybtn[vssfnc_formpopparam_item.arrybutton.ActionURL] = dataobj_url('post');
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    init_divcontent(eeeid, dataobj_form, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.Name;
}

async function payitem_loaddetail(currid) {
    // load salary item detail by ID //
    let arrydataobj = await dataobj_get(currid);
    let dataobj = arrydataobj[0];


    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = payitemdatacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = await divcontentparam_loaddataobj(payitemdatacol);
    //[payunit, payitem, accrueditem];

    let arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Formula';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = payitemformula_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Edit';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = payitemedit_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'POST';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'New';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobj_new;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    init_divcontent(currid, dataobj_form, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.Name;
}

async function payunit_loaddetail(currid) {
    // load salary item detail by ID //
    let arrydataobj = await dataobj_get(currid);
    let dataobj = arrydataobj[0];

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();

    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = payunitdatacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = null;

    let arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Edit';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = payunitedit_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'POST';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'New';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobj_new;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    init_divcontent(currid, dataobj_form, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.Name;
}


async function payprocess_loaddetail(currid) {

    // load salary item detail by ID //
    let arrydataobj = await dataobj_get(currid);
    let dataobj = arrydataobj[0];

    let procprocess = arryProcess.find(prc => prc[0] === currid);

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = payprocessdatacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = null;

    let arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Edit';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'RUN';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = procprocess[1];
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    init_divcontent(currid, dataobj_form, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.Name;
}

async function accrueditem_loaddetail(currid) {
    let arrydataobj = await dataobj_get(currid);
    let dataobj = arrydataobj[0];


    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = accrueditemdatacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = null;

    let arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Edit';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = accrueditemedit_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'POST';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'New';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobj_new;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    init_divcontent(currid, dataobj_form, null);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = dataobj.Name;
}

async function payprofile_loaddetail(profileid) {

    // load payprofile by ID //
    let arrydataobj = await dataobj_get(profileid);
    let profiledata = arrydataobj[0];


    // load payprofile item //
    payprofileitem_curr = [];
    let pprofileitem = await dataobj_get(null, DataObjID.PayProfileItem);
    payprofileitem_curr = pprofileitem.filter(item => {
        return item.PayProfile === profileid; //?? why cannot use this like profiledata ??//
    }, profileid)

    // insert name of payitem in payprofile item //
    let pitem = await dataobj_get(null, DataObjID.PayItem);
    let profiledetaildata = payprofileitem_curr.map(item => {
        return {
            ID: item.ID,
            // PayProfile: item.PayProfile,
            // PayItemID: item.PayItem,
            PayItem: pitem.find(pi => { return pi.ID === item.PayItem }).Name,
            PayRate: item.PayRate
        };
    })

    // init detail display area //
    // profile form //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[divcontent_formitemidx.FormDataObj] = profiledata;
    dataobj_form[divcontent_formitemidx.DataCol] = payprofiledatacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = null;

    let arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Edit';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = payprofileedit_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'POST';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'New';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = functionudefined_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);


    // profile item table //
    let dataobj_table = init_divcontent_getdataobjtable();
    dataobj_table[divcontent_tableitemidx.TableDataObj] = profiledetaildata

    let arryheader = [];
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'ID';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '10%';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
    dataobj_table[divcontent_tableitemidx.DataCol].push(arryheader);

    arryheader = [];
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Pay Item';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '70%';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
    dataobj_table[divcontent_tableitemidx.DataCol].push(arryheader);

    arryheader = [];
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Pay Rate';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '20%';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = [];
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input][vssfnc_tablepopparam_item.arryheadercol.Input.Type] = 1;
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input][vssfnc_tablepopparam_item.arryheadercol.Input.Data] = null;
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input][vssfnc_tablepopparam_item.arryheadercol.Input.OnChange] = payprofileitemedit_clicked;

    dataobj_table[divcontent_tableitemidx.DataCol].push(arryheader);

    let arrybtn2 = [];
    arrybtn2[vssfnc_tablepopparam_item.arrybutton.DataRow.Desc] = 'x';
    arrybtn2[vssfnc_tablepopparam_item.arrybutton.DataRow.Col] = 0;
    arrybtn2[vssfnc_tablepopparam_item.arrybutton.DataRow.OnClick] = payprofileitemdelete_clicked;
    dataobj_table[divcontent_tableitemidx.Button].push(arrybtn2);

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
    // divfunctionedit.appendChild(divfunctionnew);

    // divdetail.appendChild(divfunctionedit);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = profiledata.Name;
}

async function statitem_loaddetail(statid) {

    // load payprofile by ID //
    let arrydataobj = await dataobj_get(statid);
    let statobj = arrydataobj[0];


    // load statprofile item //
    statitem_curr = [];
    let sprofile = await dataobj_get(null, DataObjID.StatProfile);
    statprofile_curr = sprofile.filter(item => {
        return item.StatItem === statid;
    }, statid)

    // init detail display area //
    // profile form //
    let dataobj_form = init_divcontent_getdataobjform();

    dataobj_form[divcontent_formitemidx.FormDataObj] = statobj;
    dataobj_form[divcontent_formitemidx.DataCol] = statitemdatacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = null;

    let arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Edit';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = functionudefined_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'POST';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'New';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = functionudefined_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    // profile item table //
    let dataobj_table = init_divcontent_getdataobjtable();
    dataobj_table[divcontent_tableitemidx.TableDataObj] = statprofile_curr;
    // arrybutton - an array of 0: button text, 1: button column, 2: button_clicked function
    // // dataobj_table[2] = [['=', 2, payprofileitemedit_clicked]];
    dataobj_table[divcontent_tableitemidx.DataCol] = [
        ['ID', '5%', 0, ,],
        ['Name', '35%', -1, ,],
        ['Stat Item', '5%', 0, ,],
        ['Rate', '55%', -1, ,]
    ];

    dataobj_table[divcontent_tableitemidx.FncDatarowOnClick] = statitemprofile_clicked;
    let divdetail = init_divcontent(statid, dataobj_form, dataobj_table);



    // create functions for profile payitem table //
    let divfunction = document.createElement('div');
    divfunction.setAttribute('style',
        `width:90%;
                        box-sizing:box-border;
                        padding:2%;
                        margin:2% auto;
                        display:flex;
                        justify-content:space-around;
                        border:1px solid gray`);

    // edit function //
    let btnEdit = document.createElement('button');
    btnEdit.innerHTML = 'Edit';
    btnEdit.dataset.id = statid;
    btnEdit.onclick = payprofileitemupdate_clicked;
    divfunction.appendChild(btnEdit);

    // new button //
    let btnNew = document.createElement('button');
    btnNew.innerHTML = 'New'
    btnNew.onclick = payprofileitemnew_clicked;
    divfunction.appendChild(btnNew);

    divdetail.appendChild(divfunction);


    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = statobj.Name;
}

function output_clicked(e) {
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
const divcontent_formitemidx = {
    FormDataObj: 0,
    DataCol: 1,
    DataColObj: 2,
    Button: 3
}
// dataobj_table is an array of
//  [
//  - 0. dataobj of table
//  - 1. header col properties
//  - 2. array of button info [0-button for datarow; 2-button for table]
//  - 3. function for datarowclicked
//  ]
// 
const divcontent_tableitemidx = {
    TableDataObj: 0,
    DataCol: 1,
    Button: 2,
    FncDatarowOnClick: 3
}
function init_divcontent_getdataobjform() { return [null, [], [], []] }
function init_divcontent_getdataobjtable() { return [null, [], [], null, null] }
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
    divcontentdetail.setAttribute('style',
        `width:100%;
        margin:1% auto;
        display:flex;
        flex-direction:column;
        `);


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
        let objparam = vssfnc_formpopulate_param();
        objparam.actionurl = dataobj_url('post');

        objparam.arrydatacol = dataobj_form[1];
        objparam.arryjsondata = dataobj_form[0];
        objparam.arrydataid[vssfnc_formpopparam_item.arrydataid.Form] = strDetailFormID;
        objparam.arrydataid[vssfnc_formpopparam_item.arrydataid.DataObj] = dataobj_ID;

        let arryinp = [];
        arryinp[vssfnc_formpopparam_item.arryinput.Label.WidthRatio] = '30%';
        arryinp[vssfnc_formpopparam_item.arryinput.Label.Align] = 0;
        objparam.arryinput.push(arryinp);

        arryinp = [];
        arryinp[vssfnc_formpopparam_item.arryinput.Input.WidthRatio] = '70%';
        arryinp[vssfnc_formpopparam_item.arryinput.Input.Align] = -1;
        objparam.arryinput.push(arryinp);

        objparam.arryitemdata = dataobj_form[2];
        objparam.arrybutton = dataobj_form[3];
        newform = vssfnc_formpopulate(objparam);

        divcontentbox.appendChild(newform);
    }

    // table content //
    if (dataobj_table && dataobj_table[0]) {
        let objparam = vssfnc_tablepopulate_param();
        objparam.arryjsondata = dataobj_table[0];
        objparam.arryheadercol = dataobj_table[1];
        objparam.boolitemcount = true;
        objparam.arrydataid = [strDetailTableID, strListID];
        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Ascd] = ' (v)';
        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Dscd] = ' (^)';

        if (dataobj_table[2]) {
            // objparam.arrybutton = dataobj_table[2][0];
            objparam.arrybutton = dataobj_table[2];
        }
        objparam.fncdatarowclicked = dataobj_table[3];

        //  append to form element if both form and table element are required //
        if (dataobj_form) {
            let detailtable = vssfnc_tablepopulate(objparam);
            detailtable.style.margin = '2% auto';
            detailtable.style.width = '100%';
            newform.appendChild(detailtable);
            // contentdetail.style.flexDirection='columns';
            // divcontentbox.appendChild(detailtable);
        }
        else {
            let detailtable = vssfnc_tablepopulate(objparam);
            detailtable.style.margin = '2% auto';
            detailtable.style.width = '100%';
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
    toggle_logoinfo(false, true);
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
    toggle_logoinfo(false, true);
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
    objparam.arryjsondata = datalist;

    let arryheader = [];
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'ID';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '30%';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
    objparam.arryheadercol.push(arryheader);

    arryheader = [];
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Name';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '70%';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = -1;
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
    objparam.arryheadercol.push(arryheader);

    objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Table] = 'table'
    objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Datarow] = strListID;

    objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Ascd] = ' (v)';
    objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Dscd] = ' (^)';

    objparam.fncdatarowclicked = function_clicked;
    vssfnc_tablepopulate(objparam);

    return tablelist;
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

    alert('Salary Profile edited.');
    toggle_logoinfo(false, true);
    // without saving the edited data, prevent page refresh //
    e.preventDefault();
}

function payprofileitemedit_clicked(e) {
    let ppfitem = payprofileitem_curr.find(item => {
        return item.ID === this.dataset.id
    });
    ppfitem.PayRate = parseFloat(this.value).toFixed(2);

    alert('Salary Profile Item edited.');
    toggle_logoinfo(false, true);
    // without saving the edited data, prevent page refresh //
    e.preventDefault();
}

function calcsheetitemedit_clicked(e) {
    let csitem = calcsheet_curr.find(item => {
        return item.ID === this.dataset[strListID];
    });
    csitem.PayQuantity = this.value;

    // without saving the edited data, prevent page refresh //
    e.preventDefault();
}


function newemployee_clicked() {
    alert('new employee clicked');

    promptmessage('Hello World');
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

function processmidmonth_clicked(e) {
    alert('Mid-Month Processing ...');
    e.preventDefault();
}

function processendmonth_clicked(e) {
    if (boolAspNet) {
        let xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange=function(){
        //     if(this.readyState===4 && this.status ===200){
        //     }
        // }
        xhttp.open('GET', infinipayURL.PayProcessEndMonth);
        xhttp.send();
    }
    else {
        processendmonth();
    }
    e.preventDefault();
}

function processendmonth() {
    // for each employee
    //      extract PayProfile
    //          apply attached CalcSheet to each PayItem in PayProfile
    //              apply extracted PayQuantity (from CalcSheet) to extracted PayRate (from PayItem) for each PayItem

    let eeelist = [];
    let payrollobj = []; // properties: Name, Pay Item, Quantity, Rate, Amount //

    employee.forEach(eee => {

        // extract PayProfile of Employee //
        let eeepprofile = payprofile.find(profile => {
            return profile.ID === eee.PayProfile;
        })

        if (eeepprofile) {
            // extract list of PayItem (ID only) of PayProfile //
            let arryprofilepayitem = payprofileitem.filter(pfitem => {
                return pfitem.PayProfile === eeepprofile.ID;
            })

            if (arryprofilepayitem) {

                // extract info of PayItem and then
                // apply extracted PayQuantity to PayRate to get PayAmount //

                arryprofilepayitem.forEach(profilepayitem => {
                    let eeecalcsheet;

                    let payitemX = payitem.find(item => {
                        return item.ID === profilepayitem.PayItem;
                    })

                    // 
                    // process payroll item: PayQuantity * PayRate = PayAmount //
                    // 

                    let payqty, payrate;
                    eeecalcsheet = calcsheet.find(calc => calc.Employee === eee.ID);


                    // PAYQTY //
                    payqty = processendmonth_getPayQty(payitemX, eeecalcsheet);


                    // PAYRATE //
                    payrate = processendmonth_getPayRate(eee, eeecalcsheet, profilepayitem, payrollobj, payitemX);


                    // load payroll table //
                    let payu = payunit.find(unit => unit.ID === payitemX.PayUnit);
                    payrollobj.push(
                        {
                            ID: eee.ID,
                            Name: eee.Name,
                            Profile: eeepprofile.Name,
                            PayItemID: payitemX.ID,
                            PayItem: payitemX.Name,
                            PayUnit: payu ? payu.Name : '',
                            PayQuantity: payqty,
                            PayRate: payrate,
                            PayAmount: payqty * payrate
                        });

                    // if PayItem is attached to an Accrued Item //
                    if (payitemX.AccruedItem) {
                        // alert(`Update balance of Accrued Item ${payitemX.Name} ...`)
                    }
                })
            }
            else {
                alert('No Pay Item in Pay Profile + ' + eeepprofile.Name);
            }
        }
        else {
            alert('No attached Pay Profile for ' + eee.Name);
        }

        // update employee list //
        eeelist.push({ ID: eee.ID, Name: eee.Name, Profile: eeepprofile.Name });
    })

    payrollobj_curr = payrollobj;

    // payroll object //
    let dataobj_table = init_divcontent_getdataobjtable()
    dataobj_table[divcontent_tableitemidx.TableDataObj] = payrollobj;
    dataobj_table[divcontent_tableitemidx.FncDatarowOnClick] = processendmonth_eeeclicked;
    let divcontent = init_divcontent('', null, dataobj_table);

    // content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = 'End-Month Process';

    // add an invisible individual employee payroll object and 'back' button //
    let diveeepayroll = document.createElement('div');
    diveeepayroll.id = strDivEeePayrollID;
    diveeepayroll.style.display = 'none';
    divcontent.appendChild(diveeepayroll);

    // if (e) {
    //     e.preventDefault();
    // }
    // else {

    // }
}

function processendmonth_eeeclicked(e) {

    let payrollobj_eee = payrollobj_curr.filter(item => {
        return item.Name === employee.find(item => item.ID === this.dataset[strListID]).Name;
    })
    if (payrollobj_eee) {
        let diveeepayroll = document.getElementById(strDivEeePayrollID);
        while (diveeepayroll.firstChild) {
            diveeepayroll.firstChild.parentNode.removeChild(diveeepayroll.firstChild);
        }
        diveeepayroll.setAttribute('style',
            'width:90%;margin:0 auto; border:1px solid gray;padding:2%;');

        let title = document.createElement('h3');
        title.innerHTML = payrollobj_eee[0].Name;
        diveeepayroll.appendChild(title);

        let objparam = vssfnc_tablepopulate_param();
        objparam.arryjsondata = payrollobj_eee;
        objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Table] = 'table';
        objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Datarow] = strListID;

        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Ascd] = ' (v)';
        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Dscd] = ' (^)';
        let tbl = vssfnc_tablepopulate(objparam);

        tbl.setAttribute('style', 'width:100%; margin:0 auto; border-collapse:collapse;');
        diveeepayroll.appendChild(tbl);

        let btnback = document.createElement('button');
        btnback.innerHTML = 'Back to List';
        btnback.setAttribute('style', 'margin:2% 0 0 85%;');
        btnback.onclick = function () {
            let tablepayroll = document.getElementById(strDetailTableID);
            let diveeepayroll = document.getElementById(strDivEeePayrollID);

            // tablepayroll.style.display='block';
            diveeepayroll.style.display = 'none';
        }

        // if (true){
        //     promptmessage(null, diveeepayroll);
        // }
        // else{
        diveeepayroll.appendChild(btnback);
        diveeepayroll.style.display = 'block';
        // }
    }
    e.preventDefault();
}

function processendmonth_getPayQty(payitemX, eeecalcsheet) {

    // precendence: PayItem.PayQty -> pay_quantity of PayItem.PayUnit (1 if null)//

    let payqty = 0;

    if (payitemX.PayQty > 0) {
        // Default PayQty (ignore CalcSheet) //
        payqty = payitemX.PayQty;
    }
    else {
        // ?? why null need to be in quote, doesn't work when edited after run ?? //
        if (payitemX.PayUnit && payitemX.PayUnit !== 'null') {

            let arryqty = payitemX.PayUnit.split(';');
            arryqty.forEach(pqty => {

                let calcqty = eeecalcsheet.pay_quantity.find(payqty => {
                    return payqty[0] === pqty;
                });
                if (calcqty) {
                    payqty += parseInt(calcqty[1]);
                } else {
                    payqty += 0;
                }
            })
        }
        else {
            payqty = 1;
        }
    }

    return payqty;
}

function processendmonth_getPayRate(eee, eeecalcsheet, profilepayitem, payrollobj, payitemX) {
    // precedence:
    // - 1: PayRate of PayProfileItem
    // - 2: Rate of PayItem
    // - 3.1: PerRate on PerBase in PayProfileItem
    // - 3.2: PerRate on Rate of PerBase
    // - 3.3: PerRate on PerRate of PerBase (loop until resolved)
    // - 4.1: PerRate on Processed PayAmount of PerBase 
    // - 4.2: PerRate on Rate of PerBase in PayItem 
    // - 5: Extract from Range (rate extracted from Range could be % or $; if % calc $ from extracted % and PayItem's PerBase)

    let payrate;

    if (profilepayitem.PayRate && !isNaN(profilepayitem.PayRate)) {
        // - 1: PayRate of PayProfileItem
        payrate = profilepayitem.PayRate;
    }
    else {
        if (payitemX.Rate && !isNaN(payitemX.Rate) && payitemX.Rate > 0) {
            // - 2. Rate of PayItem
            payrate = payitemX.Rate;
        }
        else {
            if (payitemX.PerRate && payitemX.PerRate > 0) {
                // - 3.1: PerRate on PerBase in PayProfileItem
                // - 3.2: PerRate on Rate of PerBase
                // - 3.3: PerRate on PerRate of PerBase (loop until resolved)
                // - 4.1: PerRate on Processed PayAmount of PerBase
                // - 4.2: PerRate on Rate of PerBase in PayItem
                payrate = processendmonth_getPayRateFromPer(eee, payitemX, payrollobj);
            }
            else {
                // - 5: Extract from Range 

                // extract RateBase from ProcessPayroll Object, if none, extract from PayItem 
                let processedCalcBaseItem = payrollobj.find(pi => {
                    return pi.PayItemID === payitemX.RangeBase && pi.Name === eee.Name;
                });

                let CalcBase;
                if (processedCalcBaseItem) {
                    CalcBase = processedCalcBaseItem.PayAmount;
                }
                else {
                    if (payitemX.RangeQty) {
                        // use quantity instaed of amount as criteria //
                        // eg Mileage Claim //
                        // { ID: '1', Employee: '101', pay_quantity: [['101', 1], ['102', 26]] } //
                        let calcsheetqty = eeecalcsheet.pay_quantity.find(arrypq => {
                            return arrypq[0] === payitemX.RangeQty;
                        })

                        if (calcsheetqty) {
                            CalcBase = calcsheetqty[1];
                        }
                        else {
                            CalcBase = 0;
                        }
                    }
                    else {
                        let basepayitem = payitem.find(pi => pi.ID === payitemX.CalcBase);
                        if (basepayitem) {
                            CalcBase = basepayitem.Rate;
                        }
                        else {
                            CalcBase = 0;
                        }
                    }
                }

                let arryRange = processendmonth_getArryRange(payitemX.Range);
                if (arryRange.length > 0) {

                    let raterange = arryRange.find(rangeX => { return CalcBase >= rangeX[0] && CalcBase <= rangeX[1] });
                    if (raterange) {
                        // extract PayRate //
                        let setpayrate = raterange[2];


                        let idxper = setpayrate.indexOf('%');
                        if (idxper > -1) {
                            //  if PayRate is % ... //
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
                    alert('No Range is set for Current Value.');
                }
            }
        }
    }
    return payrate;
}

function processendmonth_getPayRateFromPer(eee, payitemX, payrollobj) {
    // - 3.1: PerRate on PerBase in PayProfileItem
    // - 3.2: PerRate on Rate of PerBase
    // - 3.3: PerRate on PerRate of PerBase (loop until resolved)
    // - 4.1: PerRate on Processed PayAmount of PerBase //
    // - 4.2: PerRate on Rate of PerBase in PayItem //

    // extract RateBase from ProcessPayroll Object, if none, extract from PayItem 
    let payrate;

    // if PerBaseRate is set CalcSheet is ignored //
    // usually for rate calculation //
    if (payitemX.PerBaseRate) {
        let profilepayitem = processendmonth_getprofilepayitem(eee, payitemX.PerBaseRate);

        if (profilepayitem && profilepayitem.PayRate && !isNaN(profilepayitem.PayRate)) {
            // - 3.1: PerRate on PerBase in PayProfileItem
            payrate = payitemX.PerRate * profilepayitem.PayRate;
        }
        else {
            // - 3.2: PerRate on Rate of PerBase
            let baseitem = payitem.find(item => item.ID === payitemX.PerBaseRate);
            if (baseitem && baseitem.Rate && baseitem.Rate > 0) {
                payrate = payitemX.PerRate * baseitem.Rate;
            }
            else {
                // - 3.3: PerRate on PerRate of PerBase (loop until resolved)
                payrate = processendmonth_getPayRateFromPer(eee, baseitem, payrollobj);
            }
        }
    }
    else {
        let processedRateBaseItem = payrollobj.find(pi => {
            return pi.PayItemID === payitemX.PerBase && pi.Name === eee.Name;
        });

        if (processedRateBaseItem) {
            // - 4.1: PerRate on Processed PayAmount of PerBase //
            payrate = payitemX.PerRate * processedRateBaseItem.PayAmount;
        }
        else {
            // - 4.2: PerRate on Rate of PerBase in PayItem //
            let rBaseItem = payitem.find(itm => itm.ID === payitemX.PerBase);

            if (rBaseItem) {
                payrate = payitemX.PerRate * rBaseItem.Rate;
            }
            else {
                payrate = 0;
            }
        }
    }

    return payrate;
}

function processendmonth_getprofilepayitem(eee, payitemID) {
    let profilepayitem = undefined;

    let pprofile = payprofile.find(profile => {
        return profile.ID === eee.PayProfile;
    })
    if (pprofile) {
        // extract list of PayItem (ID only) of PayProfile //
        profilepayitem = payprofileitem.find(pfitem => {
            return pfitem.PayProfile === pprofile.ID && pfitem.PayItem === payitemID;
        })
    }

    return profilepayitem;
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

function processyearend_clicked(e) {
    alert('Year end Processing ...');
    e.preventDefault();
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


async function calcsheet_loaddetail(eeeid) {
    let calcsheettitle = '';

    // remove previously added update button //
    let btnnode = document.getElementById(strDivTableFunctionID)
    if (btnnode) { btnnode.parentNode.removeChild(btnnode) }

    calcsheet_curr = [];
    let csheet = await dataobj_get(null, DataObjID.CalcSheet);
    let eeecalcsheet = csheet.filter(item => item.Employee === eeeid);

    let punit = await dataobj_get(null, DataObjID.PayUnit);
    punit.forEach(item => {
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
    let eee = await dataobj_get(null, DataObjID.Employee);
    calcsheet_curr.forEach(item => {
        // item.ID = eeecalcsheet[0].Employee;
        item.Employee = eee.find(ee => ee.ID === eeeid).Name;
        calcsheettitle = item.Employee;
        let arrypayqty = eeecalcsheet[0].pay_quantity.find(pq => pq[0] === item.PayUnitID);
        item.PayQuantity = arrypayqty ? arrypayqty[1] : 0;
    })

    let dataobj_table = init_divcontent_getdataobjtable();
    dataobj_table[0] = calcsheet_curr;

    // [header col[0: description strings, 1: col-width, 2: text-alignment, 3: [input type, input data, onchange function]]]
    let arrydatacol = [];
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'ID';
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Width] = '10%';
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    dataobj_table[1].push(arrydatacol);

    arrydatacol = [];
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Employee';
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Width] = '50%';
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    dataobj_table[1].push(arrydatacol);

    arrydatacol = [];
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'UnitID';
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Width] = '10%';
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    dataobj_table[1].push(arrydatacol);

    arrydatacol = [];
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Unit';
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Width] = '20%';
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    dataobj_table[1].push(arrydatacol);

    arrydatacol = [];
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Quantity';
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Width] = '10%';
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;

    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Input] = [];
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Input][vssfnc_tablepopparam_item.arryheadercol.Input.Type] = 1;
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Input][vssfnc_tablepopparam_item.arryheadercol.Input.Data] = null;
    arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Input][vssfnc_tablepopparam_item.arryheadercol.Input.OnChange] = calcsheetitemedit_clicked;

    dataobj_table[1].push(arrydatacol);

    let divcontent = init_divcontent('', null, dataobj_table);

    // update content title //
    document.getElementById(strClsContentDetailTitle).innerHTML = calcsheettitle;

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
    toggle_logoinfo(false, true);
    alert('Work Sheet edited.');
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
    alert('Salary Profile Item edited.');
    toggle_logoinfo(false, true);
    e.preventDefault();
}

function payprofileitem_selectchanged() {
    // { ID: '1', PayProfile: '101', PayItem: '101', PayRate: 500 },
    payprofileitem_new = { ID: dataobj_getnewid(payprofileitem), PayProfile: this.dataset.id, PayItem: this.value, PayRate: 0 };

}

function payprofileitemnew_clicked(e) {
    payprofileitem.push(payprofileitem_new);
    payprofileitem_new = null;
    alert('New Pay Profile Item added.');
    toggle_logoinfo(false, true);
    e.preventDefault();
}

function dataobj_new(e) {
    try {
        let strURL = '';
        let newdataobj;
        let data;
        let dataname;
        switch (dataobjid_curr) {
            case DataObjID.Employee:
                data = employee;
                dataname = 'Employee';
                newdataobj = { ID: '', Name: '' };
                strURL = 'http://localhost:49951/data/employeeadd';
                break;
            case DataObjID.PayItem:
                data = payitem;
                dataname = 'Salary Item';
                newdataobj = { ID: '', Name: '' };
                break;
            case DataObjID.PayUnit:
                data = payunit;
                dataname = 'Pay Unit';
                newdataobj = { ID: '', Name: '' };
                break;
            case DataObjID.AccruedItem:
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
        if (boolAspNet) {

        }
        else {
            let frm = document.getElementById(strDetailFormID);
            Object.keys(data[0]).forEach(ppt => {
                newdataobj[ppt] = frm.elements[ppt].value
            })
            newdataobj.ID = dataobj_getnewid(data);
            data.push(newdataobj);

            alert('New ' + dataname + ' added.');
            toggle_logoinfo(false, true);
            e.preventDefault();
        }
    }
    catch (ex) { alert(ex); }
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
    objectid_curr = boolAspNet ? dataobjlist_search(-1).id : dataobjlist_search(-1).ID;
    dataobj_loaddetail(objectid_curr);
    e.preventDefault();
}

function dataobjnext_clicked(e) {
    objectid_curr = boolAspNet ? dataobjlist_search(1).id : dataobjlist_search(1).ID;
    dataobj_loaddetail(objectid_curr);
    e.preventDefault();
}

function dataobj_loaddetail(id) {
    arryMainNavItem[dataobjid_curr][MainNavItem_Index.FncDetailLoad](id);
}

function dataobjlist_search(direction) {

    let curridx = 0;
    dataobj_curr.forEach((dataobj, index) => {
        if (dataobj.ID === objectid_curr || dataobj.id === objectid_curr) {
            curridx = index;
        }
    })

    if (curridx === 0 && direction === -1) {
        curridx = dataobj_curr.length;
    }
    else if (curridx === dataobj_curr.length - 1 && direction === 1) {
        curridx = -1;
    }
    return direction === -1 ? (dataobj_curr[curridx - 1]) : (dataobj_curr[curridx + 1]);
}

function dataobjlistdatarow_clicked() {
    // save for prev/next navigation //
    objectid_curr = this.dataset[strListID];
    arryMainNavItem[dataobjid_curr][MainNavItem_Index.FncDetailLoad](this.dataset[strListID]);
}

function accrueditemedit_clicked(e) {
    e.preventDefault();
}

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
    toggle_logoinfo(false, true);
    e.preventDefault();
}

function payitemformula_clicked() {
    alert('Show Formula of PayItem Rate Calculation ...');
}

async function statitemprofile_clicked(e) {

    let statpeeeitem = await dataobj_get(null, DataObjID.StatProfileEmployeeItem);
    let profileeeeitem = statpeeeitem.filter(item => {
        return item.StatProfile === this.dataset[strListID];
    })

    if (profileeeeitem) {
        let divcontentdetail = document.getElementById(strDivContentDetailID);
        //     // let tablepayroll = document.getElementById(strDetailTableID);
        //     // tablepayroll.style.display = 'none';

        let divprofileeeeitem = document.getElementById(strDivStatProfileEeeItemID);
        if (divprofileeeeitem) {
            while (divprofileeeeitem.firstChild) {
                divprofileeeeitem.firstChild.parentNode.removeChild(divprofileeeeitem.firstChild);
            }
            divprofileeeeitem.style.display = 'block';
        }
        else {
            divprofileeeeitem = document.createElement('div');
            divprofileeeeitem.id = strDivStatProfileEeeItemID;
        }

        divprofileeeeitem.setAttribute('style',
            'border:1px solid lightgrey;padding:1%;');

        // title //
        let title = document.createElement('h3');
        title.innerHTML = statprofile.find(prf => prf.ID === profileeeeitem[0].StatProfile).Name;
        divprofileeeeitem.appendChild(title);

        // profile employee item //
        let objparam = vssfnc_tablepopulate_param();
        // objparam.caption = payrollobj_eee[0].Name;
        // objparam.arryheadercol = [
        //     ['ID', '5%', 0, null],
        //     ['Stat Profile', '30%', 0, null],
        //     ['Employee Data', '30%', 0, null],
        //     ['Operator', '5%', 0, null],
        //     ['Operand', '10%', 0, null],
        //     ['Criteria', '10%', 0, null]
        // ];
        let headercol = [];
        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'ID';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '5%';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
        objparam.arryheadercol.push(headercol);

        headercol = [];
        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Stat Profile';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '30%';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
        objparam.arryheadercol.push(headercol);

        headercol = [];
        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Employee Data';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '30%';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
        objparam.arryheadercol.push(headercol);

        headercol = [];
        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Operator';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '5%';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
        objparam.arryheadercol.push(headercol);

        headercol = [];
        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Operand';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '10%';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
        objparam.arryheadercol.push(headercol);

        headercol = [];
        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Criteria';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '10%';
        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
        objparam.arryheadercol.push(headercol);

        objparam.arryjsondata = profileeeeitem;

        objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Table] = 'table';
        objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Datarow] = strListID;

        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Ascd] = ' (v)';
        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Dscd] = ' (^)';

        let tbl = vssfnc_tablepopulate(objparam);
        tbl.setAttribute('style', 'width:90%; margin:0 auto; border-collapse:collapse;');
        divprofileeeeitem.appendChild(tbl);


        // new profile employee item form //
        objparam = vssfnc_formpopulate_param();

        let arrydatacol = [];
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'ID';
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 'text';
        objparam.arrydatacol.push(arrydatacol);

        arrydatacol = [];
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'Stat Profile';
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 0;
        objparam.arrydatacol.push(arrydatacol);

        arrydatacol = [];
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'Employee Profile Item';
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 1;
        objparam.arrydatacol.push(arrydatacol); arrydatacol = [];

        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'Operator';
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 'text';
        objparam.arrydatacol.push(arrydatacol);

        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'Operand';
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 'text';
        objparam.arrydatacol.push(arrydatacol);

        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'Criteria';
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 'text';
        objparam.arrydatacol.push(arrydatacol);

        objparam.arryjsondata = { ID: '', StatProfile: '', ProfileItem: '', Operator: '', Criteria: '' };
        objparam.arrydataid = [strDetailFormID, strDetailFormID];

        let arryinp = [];
        arryinp[vssfnc_formpopparam_item.arryinput.Label.WidthRatio] = '30%';
        arryinp[vssfnc_formpopparam_item.arryinput.Label.Align] = -1;
        objparam.arryinput.push(arryinp);

        arryinp = [];
        arryinp[vssfnc_formpopparam_item.arryinput.Input.WidthRatio] = '70%';
        arryinp[vssfnc_formpopparam_item.arryinput.Input.Align] = -1;
        objparam.arryinput.push(arryinp);

        objparam.arryitemdata = [statprofile, employeeitem];

        let arrybtn = [];
        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
        objparam.arrybutton.push(arrybtn);

        arrybtn = [];
        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Edit';
        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = functionudefined_clicked;
        objparam.arrybutton.push(arrybtn);

        arrybtn = [];
        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
        objparam.arrybutton.push(arrybtn);

        arrybtn = [];
        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'POST';
        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'New';
        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = functionudefined_clicked;
        objparam.arrybutton.push(arrybtn);

        arrybtn = [];
        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
        objparam.arrybutton.push(arrybtn);

        let newform = vssfnc_formpopulate(objparam);
        newform.setAttribute('style', 'width:80%; margin:2% auto');
        divprofileeeeitem.appendChild(newform);

        // back to list button //
        let btnback = document.createElement('button');
        btnback.innerHTML = 'Back to List';
        btnback.setAttribute('style', 'margin:2% 0 0 85%;');
        btnback.onclick = function () {
            let divstatprofileeeeitem = document.getElementById(strDivStatProfileEeeItemID);
            divstatprofileeeeitem.style.display = 'none';
        }
        divprofileeeeitem.appendChild(btnback);

        divcontentdetail.appendChild(divprofileeeeitem);
    }
    e.preventDefault();
}

function promptmessage(strmessage, htmlelem) {

    // shielddiv covers whole page //
    let shielddiv = document.createElement('div');
    shielddiv.id = 'vssPromptMsg';
    shielddiv.setAttribute('style',
        `width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    background-color:rgba(255,255,255,0.8);
    `);

    // promptdiv houses the content //
    let promptdiv = document.createElement('div');
    promptdiv.setAttribute('style',
        `width:50%;
    height:50%;
    position:absolute;
    top:25%;
    left:25%;
    background-color:white;
    box-shadow:0 0 10px gray;
    `);


    if (htmlelem) {
        promptdiv.appendChild(htmlelem);
    }
    else {
        let msgdiv = document.createElement('div');
        msgdiv.setAttribute('style',
            `width:50%;
            height:50%;
            position:absolute;
            top:25%;
            left:25%;
            `);
        msgdiv.innerHTML = strmessage;
        promptdiv.appendChild(msgdiv);
    }


    let btnback = document.createElement('button');
    btnback.setAttribute('style',
        `position:absolute;
    bottom:2%;
    right:2%;`);
    btnback.innerHTML = 'Back';
    btnback.onclick = function () {
        let divshield = document.getElementById('vssPromptMsg');
        divshield.parentNode.removeChild(divshield);
    }

    promptdiv.appendChild(btnback);

    shielddiv.appendChild(promptdiv);

    document.getElementsByTagName('body')[0].appendChild(shielddiv);
    btnback.focus();
}

function statitemprofilerange_clicked() {
    let arryrange = processendmonth_getArryRange('0,5000,11%,13%;5001,1000,11%,12%');
    promptmessage(arryrange);
}