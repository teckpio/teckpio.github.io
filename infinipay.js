'use strict';
// const sample_data= require('./infinipay_data');

// import {employee, employeeitem} from ('./infinipay_data');
// console.log(employee[0]);

//importScripts('infinipay_data.js');


// array main nav item //

const MainNavItem_Index = {
    HTMLID: 0,
    Desc: 1,
    DataObjectID: 2,
    DataObject: 3,
    DescCat: 4,
    DataRowOnClick: 5,
    FncDetailLoad: 6,
    FncNew: 7
}

// array index to correspond to infinipay_data:DataObjID //
const arryMainNavItem = [
    ['navitememployee', 'Employee', 0, null, undefined, dataobjlistdatarow_clicked, employee_loaddetail, employeenew_clicked],
    ['navitemsalaryitem', 'Salary Item', 1, null, undefined, dataobjlistdatarow_clicked, payitem_loaddetail, payitemnew_clicked],
    ['navitemsalarystruct', 'Salary Profile', 2, null, undefined, dataobjlistdatarow_clicked, payprofile_loaddetail, payprofilenew_clicked],
    ['navitemaccrueditem', 'Accrued Item', 3, null, undefined, dataobjlistdatarow_clicked, accrueditem_loaddetail, accrueditemnew_clicked],
    ['navitemstatitem', 'Stat Item', 4, null, undefined, dataobjlistdatarow_clicked, statitem_loaddetail, statitemnew_clicked],
    ['navitempayunit', 'Work Unit', 5, null, undefined, dataobjlistdatarow_clicked, payunit_loaddetail, payunitnew_clicked],
    ['navitemcalcsheet', 'Work Sheet', 6, null, undefined, dataobjlistdatarow_clicked, calcsheet_loaddetail, calcsheetnew_clicked],
    ['navitemprocess', 'Process', 7, null, undefined, dataobjlistdatarow_clicked, payprocess_loaddetail, undefined],
    ['navitemoutput', 'Output', 8, null, undefined, null, output_clicked, undefined],
    [],
    [],
    [],
    [],
    ['navitemprofileoption', 'Profile Option', 13, null, undefined, dataobjlistdatarow_clicked, employeeprofileoption_loaddetail, employeeprofileoptionnew_clicked],
    ['navitemprofileitem', 'Profile Item', 14, null, undefined, dataobjlistdatarow_clicked, employeeprofileitem_loaddetail, employeeprofileitemnew_clicked]
]

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
const strDivContentDetailIDX = 'contentdetailinfoX';
const strDivContentDetailIDY = 'contentdetailinfoY';
var strDivContentDetailID = 'contentdetailinfo';

const strDetailNavID = 'contentdetailnav';
const strDetailFormID = 'contentdetailform';
const strDetailTableID = 'contentdetailtable';
const strDivTableFunctionID = 'contentdetailtablefunction';
const strListTableID = 'listtableid';
const strListTableNavItem = 'listtablenavitem';
const strDivEeePayrollID = 'diveeepayroll';
const strDivStatProfileEeeItemID = 'divstatprofileeeeitem';
const strDivObjectItem = 'divobjectitem';
const strStatProfileFormID = 'statprofileform';
const strPayItemXStatItemFormID = 'payitemxstatitemform';
const strStatProfileItemFormID = 'statprofileitemform';

// css classes //
const strClsMainNavItem = 'mainnavitem'
const strClsListInSelect = 'listtableinselect';
const strClsListInTable = 'listtableintable';
const strClsListFunction = 'listfunction';
const strClsContentDetail = 'contentdetail';
const strClsContentDetailTitle = 'contentdetailtitle';
const strClsContentFunction = 'contentfunction';
const strClsDivContentImg = 'contentimgdiv';
const strClsContentImg = 'contentimg';
const strClsSlideInLeft = 'slideinleft';
const strClsSlideOutLeft = 'slideoutleft';
const strClsSlideInRight = 'slideinright';
const strClsSlideOutRight = 'slideoutright';
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
var contentdetailtitle; //= document.getElementById('contentdetailtitle');
const contentdetailform = document.getElementById('contentdetailform');
const contentdetaillogo = document.getElementById('contentdetaillogo');
//const contentdetailinfo = document.getElementById(strDivContentDetailID);
const contentdetailinfoX = document.getElementById(strDivContentDetailIDX);
const contentdetailinfoY = document.getElementById(strDivContentDetailIDY);

const timedatafetched = document.getElementById('timedatafetched');

const strNewDataObjInst = 'New Record';
const strTimeFetched = 'Data fetched: ';

// working data //
const strColorNavItemInactive = 'gray';
const strColorNavItemActive = 'black';

var calcsheet_curr = [];
var payprofileitem_curr = [];
var payprofileitem_new;
var statitem_curr = [];
var statprofile_curr;
var pisi_curr;

var dataobjid_curr; // id of datatype (ie employee or payitem etc)
var dataobj_curr;
var objectid_curr; // id of current object of current datatype
var payrollobj_curr;
var slide_direction = 0;

// 
// initial load //
// 

contentlist.style.display = 'none';

//contenttitle.style.display = 'none';

contentlisttitle.innerHTML = '';

// load main navigation menu //
//load_mainnav();
//function load_mainnav() {
//    console.log(arryMainNavItem);
//    arryMainNavItem.forEach(navitem => {
        
//        if (navitem.length > 0) {
//            let divnavitem = document.createElement('div');
//            divnavitem.classList.add(strClsMainNavItem);
//            divnavitem.id = navitem[0];
//            divnavitem.innerHTML = navitem[1];
//            divnavitem.style.backgroundColor = strColorNavItemInactive;
//            divnavitem.onclick = navitem_clicked;
//            mainnav.appendChild(divnavitem);
//        }
//    })
//}



// toggle between logo and content in the content area //
function toggle_logoinfo(boolSwitchNavItem, boolonlogo) {
    //!! doesn't work if put outside of if statement !!//
    // contentdetailinfo = document.getElementById(strDivContentDetailID);

    //!! but this would also remove the logo div !!//
    //while (contentdetail.firstChild) {
    //    contentdetail.firstChild.parentNode.removeChild(contentdetail.firstChild);
    //}

    if (boolSwitchNavItem) {
        //contentdetailinfo = document.getElementById(strDivContentDetailID);
        //if (contentdetailinfo !== null || contentdetailinfoX !== null || contentdetailinfoY !== null) {
        if (contentdetailinfoX !== null || contentdetailinfoY !== null) {
            //contentdetailinfo.style.display = 'none';
            contentdetailinfoX.style.display = 'none';
            contentdetailinfoY.style.display = 'none';
        }
        if (contentdetaillogo.style.display === 'none') {
            contentdetaillogo.style.display = 'block';
        }
    }
    else {
        //contentdetailinfo = document.getElementById(strDivContentDetailID);
        if (contentdetailinfoX !== null || contentdetailinfoY !== null) {
            //if (contentdetailinfo !== null) {
            //contentdetailinfo.style.display = 'block';
            contentdetailinfoX.style.display = 'block';
            contentdetailinfoY.style.display = 'block';

        }
        contentdetaillogo.style.display = 'none';

        if (boolonlogo) {
            //contentdetailinfo.style.display = 'none';
            contentdetailinfoX.style.display = 'none';
            contentdetailinfoY.style.display = 'none';
            contentdetaillogo.style.display = 'block';
        }
    }
}

async function navitem_clicked(elem) {

    console.log(elem.id);

    // set active navitem //
    let arrydiv = elem.parentElement.getElementsByTagName('div');
    for (var i = 0; i < arrydiv.length; i++) {
        arrydiv[i].style.backgroundColor = strColorNavItemInactive;
    }
    elem.style.backgroundColor = strColorNavItemActive;


    if (contentlist.style.display = 'none') {
        contentlist.style.display = 'block';
    }

    toggle_logoinfo(true);

    // list title //
    contentlisttitle.style.display = 'none';

    let navitem = arryMainNavItem.find(nitem => nitem[MainNavItem_Index.HTMLID] === elem.id);
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
        console.log(arrydataobjlist);
        dataobj_curr = arrydataobjlist;
    } else {
        dataobj_curr = await dataobj_get();
        arrydataobjlist = dataobj_curr.map(item => {
            return { id: item.id, name: item.name };
        })
        //arrydataobjlist = await dataobj_get();
    }


    // !! SHORTCUT FOR TESTING !! //
    // if (this.id === arryMainNavItem[DataObjID.output][MainNavItem_Index.HTMLID]) {
    //     processendmonth_clicked();
    // }
    // !! SHORTCUT FOR TESTING !! //

    let tablelist1 = populatetable(navitem[MainNavItem_Index.Desc], arrydataobjlist, navitem[MainNavItem_Index.DataRowOnClick]);
    tablelist1.dataset[strListTableNavItem] = navitem[MainNavItem_Index.HTMLID];
    tablelist1.classList.add(strClsListInTable);
    contentlisttable.appendChild(tablelist1);

    // list functions //
    contentlistfunction.innerHTML = '';

    switch (elem.id) {

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
            fncNew.onclick = navitem[MainNavItem_Index.FncNew];
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

    timedatafetched_update();
}

function timedatafetched_update() {
    let currtime = new Date();
    timedatafetched.innerHTML = strTimeFetched + currtime.getDate() + '/' + currtime.getMonth() + '/' + currtime.getFullYear() + ' - ' + currtime.getHours() + ':' + currtime.getMinutes() + ':' + ('0' + currtime.getSeconds()).slice(-2);
}

function timedatafetched_clear() {
    timedatafetched.innerHTML = strTimeFetched;
}

function dataobj_prop(DObjID) {
    if (!DObjID && DObjID !== 0) {
        DObjID = dataobjid_curr;
    }
    switch (DObjID) {
        case DataObjID.Employee:
            return DataObj.Employee;

        case DataObjID.EmployeeProfile:
            return DataObj.EmployeeProfile;

        case DataObjID.EmployeeProfileItem:
            return DataObj.EmployeeProfileItem;

        case DataObjID.EmployeeProfileOption:
            return DataObj.EmployeeProfileOption;

        case DataObjID.PayProfile:
            return DataObj.PayProfile;

        case DataObjID.PayProfileItem:
            return DataObj.PayProfilIteme;

        case DataObjID.PayItem:
            return DataObj.PayItem.URL;

        case DataObjID.PayItemXStatItem:
            return DataObj.PayItemXStatItem;

        case DataObjID.AccruedItem:
            return DataObj.AccruedItem;

        case DataObjID.PayUnit:
            return DataObj.PayUnit;

        case DataObjID.WorkSheet:
            return DataObj.WorkSheet;

        case DataObjID.WorkSheetItem:
            return DataObj.WorkSheetItem;

        case DataObjID.StatItem:
            return DataObj.StatItem;

        case DataObjID.StatProfile:
            return DataObj.StatProfile;

        case DataObjID.StatProfileItem:
            return DataObj.StatProfileItem;

        case DataObjID.PayProcess:
            return DataObj.PayProcess;

        case DataObjID.ProfileItemComparer:
            return DataObj.ProfileItemComparer;
    }
}


function dataobj_url(type, DObjID) {

    if (!DObjID && DObjID !== 0) {
        DObjID = dataobjid_curr;
    }

    console.log(DObjID);

    switch (DObjID) {
        case DataObjID.Employee:
            switch (type) {
                case 'get':
                    return DataObj.Employee.URL.Get;
                case 'post':
                    return DataObj.Employee.URL.Add;
                case 'put':
                    return DataObj.Employee.URL.Update;
                //case 'list':
                //    return DataObj.Employee.URL.List;
            }

        case DataObjID.EmployeeProfile:
            switch (type) {
                case 'get':
                    return DataObj.EmployeeProfile.URL.Get;
                case 'post':
                    return DataObj.EmployeeProfile.URL.Add;
                case 'put':
                    return DataObj.EmployeeProfile.URL.Update;
            }

        case DataObjID.EmployeeProfileItem:
            switch (type) {
                case 'get':
                    return DataObj.EmployeeProfileItem.URL.Get;
                case 'post':
                    return DataObj.EmployeeProfileItem.URL.Add;
                case 'put':
                    return DataObj.EmployeeProfileItem.URL.Update;
            }

        case DataObjID.EmployeeProfileOption:
            switch (type) {
                case 'get':
                    return DataObj.EmployeeProfileOption.URL.Get;
                case 'post':
                    return DataObj.EmployeeProfileOption.URL.Add;
                case 'put':
                    return DataObj.EmployeeProfileOption.URL.Update;
            }


        case DataObjID.PayProfile:
            switch (type) {
                case 'get':
                    return DataObj.PayProfile.URL.Get;
                case 'post':
                    return DataObj.PayProfile.URL.Add;
                case 'put':
                    return DataObj.PayProfile.URL.Update;
            }
        case DataObjID.PayProfileItem:
            switch (type) {
                case 'get':
                    return DataObj.PayProfileItem.URL.Get;
                case 'post':
                    return DataObj.PayProfileItem.URL.Add;
                case 'put':
                    return DataObj.PayProfilIteme.URL.Update;
            }
        case DataObjID.PayItem:
            switch (type) {
                case 'get':
                    return DataObj.PayItem.URL.Get;
                case 'post':
                    return DataObj.PayItem.URL.Add;
                case 'put':
                    return DataObj.PayItem.URL.Update;
            }

        case DataObjID.PayItemXStatItem:
            switch (type) {
                case 'get':
                    return DataObj.PayItemXStatItem.URL.Get;
                case 'post':
                    return DataObj.PayItemXStatItem.URL.Add;
                case 'put':
                    return DataObj.PayItemXStatItem.URL.Update;
            }

        case DataObjID.AccruedItem:
            switch (type) {
                case 'get':
                    return DataObj.AccruedItem.URL.Get;
                case 'post':
                    return DataObj.AccruedItem.URL.Add;
                case 'put':
                    return DataObj.AccruedItem.URL.Update;
            }
        case DataObjID.PayUnit:
            switch (type) {
                case 'get':
                    return DataObj.PayUnit.URL.Get;
                case 'post':
                    return DataObj.PayUnit.URL.Add;
                case 'put':
                    return DataObj.PayUnit.URL.Update;
            }
        case DataObjID.WorkSheet:
            switch (type) {
                case 'get':
                    return DataObj.WorkSheet.URL.Get;
                case 'post':
                    return DataObj.WorkSheet.URL.Add;
                case 'put':
                    return DataObj.WorkSheet.URL.Update;
            }
        case DataObjID.WorkSheetItem:
            switch (type) {
                case 'get':
                    return DataObj.WorkSheetItem.URL.Get;
                case 'post':
                    return DataObj.WorkSheetItem.URL.Add;
                case 'put':
                    return DataObj.WorkSheetItem.URL.Update;
            }

        case DataObjID.StatItem:
            switch (type) {
                case 'get':
                    return DataObj.StatItem.URL.Get;
                case 'post':
                    return DataObj.StatItem.URL.Add;
                case 'put':
                    return DataObj.StatItem.URL.Update;
            }

        case DataObjID.StatProfile:
            switch (type) {
                case 'get':
                    return DataObj.StatProfile.URL.Get;
                case 'post':
                    return DataObj.StatProfile.URL.Add;
                case 'put':
                    return DataObj.StatProfile.URL.Update;
            }

        case DataObjID.StatProfileItem:
            switch (type) {
                case 'get':
                    return DataObj.StatProfileItem.URL.Get;
                case 'post':
                    return DataObj.StatProfileItem.URL.Add;
                case 'put':
                    return DataObj.StatProfileItem.URL.Update;
            }

        case DataObjID.PayProcess:
            switch (type) {
                case 'get':
                    return DataObj.PayProcess.URL.Get;
                case 'post':
                    return DataObj.PayProcess.URL.Add;
                case 'put':
                    return DataObj.PayProcess.URL.Update;
            }

        case DataObjID.ProfileItemComparer:
            switch (type) {
                case 'get':
                    return DataObj.ProfileItemComparer.URL.Get;
                //case 'post':
                //    return DataObj.PayProcess.URL.Add;
                //case 'put':
                //    return DataObj.PayProcess.URL.Update;
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

    //console.log(dobjid + ' ' + strURL);

    // retrieved from server //
    return new Promise((resolve, reject) => {
        //if (dobjid === DataObjID.ProfileItemComparer) {
        //    resolve(ProfileItemComparer);
        //} else {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {

                console.log(this.responseText);
                
                if (this.responseText) {
                    try {
                        resolve(JSON.parse(this.responseText));
                    }
                    catch{
                        contentlist.innerHTML = this.responseText;
                    }
                    
                } else {
                    alert('Empty Data Object.');
                }
            }
        }
        xhttp.open('GET', strURL);
        xhttp.send();
        //}
    })
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
                //vssfnc_formpopparam_item.arrydatacol.Type indicates the index of the required dataobj in the array of data object in vssfnc:form_populate; therefore convert the initial data object id to the array index
                let dataobj = await dataobj_get(null, datacol[i][vssfnc_formpopparam_item.arrydatacol.Type]);
                if (dataobj) {
                    arrydataobj.push(dataobj);
                    arryType2Index.push([datacol[i][vssfnc_formpopparam_item.arrydatacol.Type], arryidx])
                    datacol[i][vssfnc_formpopparam_item.arrydatacol.Type] = arryidx;
                    arryidx += 1;
                }
            }
        }
    }
    return arrydataobj;
}

function arraydatacol_clone(oriarry) {
    let newarry = [];
    oriarry.forEach(item => {
        let subarry = [];
        item.forEach(subitem => {
            subarry.push(subitem);
        })
        newarry.push(subarry);
    })
    return newarry;
}

function update_detailtitle_timedatafetched(title) {
    contentdetailtitle.innerHTML = title;

    if (title === strNewDataObjInst) {
        timedatafetched_clear();
    }
    else {
        timedatafetched_update();
    }
}


async function employee_loaddetail(eeeid) {

    //console.log('employee_loaddetail');

    let dataobj;
    if (eeeid) {
        // load employee detail by ID //
        let arrydataobj = await dataobj_get(eeeid);
        // server returns an array of one employee //
        dataobj = arrydataobj[0];
    }
    else {
        // new employee - create an empty employee object //
        dataobj = new Object();
        DataObj.Employee.DataCol.forEach(datacol => {
            dataobj[datacol[DataColIndex.FieldName]] = '';
        })
    }

    //console.log(dataobj);

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();

    let datacol = arraydatacol_clone(DataObj.Employee.DataCol);

    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = await divcontentparam_loaddataobj(datacol);

    let arrybtn = [
        ['post', 'Edit', undefined, undefined, DataObj.Employee.URL.Update],
        ['post', 'Add', undefined, undefined, DataObj.Employee.URL.Add],
        ['post', 'Upload Photo', undefined, undefined, undefined]
    ];
    dataobj_form[divcontent_formitemidx.Button] = load_divbutton(arrybtn, true, true);

    let divcontentemployee = init_divcontent(eeeid, dataobj_form, null, true);

    // load profile items form //

    let arryeeeprofile = await dataobj_get(eeeid * -1, DataObjID.EmployeeProfile);
    // arrydataobj2 will be an array of datarow, one for each profile item //
    // convert the list of datarow into an object, dataobj2, ie datarow into properties //

    let dataobj2 = new Object();
    let datacol2 = [];
    let datacolname;
    let arryitemdata = [];
    let arrydataitemindex = 0;
    let eeeprofileoption;
    let profilevalue;
    let profileitemX;

    let employeeprofileitemfull = await dataobj_get(null, DataObjID.EmployeeProfileItem);
    let employeeprofileoption = await dataobj_get(null, DataObjID.EmployeeProfileOption);

    // convert the list of datarow into an object, dataobj2, ie datarow into properties //

    employeeprofileitemfull.forEach(profileitem => {

        datacolname = profileitem.Name;

        // use value of existing profile item, if any //
        if (arryeeeprofile && arryeeeprofile.length > 0) {
            profileitemX = arryeeeprofile.find(prfitem => {
                if (prfitem != null) {
                    return prfitem.ProfileItem === profileitem.ID
                }
            });
            if (profileitemX) {
                profilevalue = profileitemX.Value;
            }
            else {
                profilevalue = '';
            }
        }
        else {
            profilevalue = '';
        }
        dataobj2[datacolname] = profilevalue;

        // load dataobj of profile item, if id data //
        if (profileitem.Type === null || profileitem.Type === '' || isNaN(profileitem.Type)) {
            datacol2.push([datacolname, datacolname, profileitem.Required, 'text']);
        }
        else {
            eeeprofileoption = employeeprofileoption.find(item => item.ID === profileitem.Type).Option;
            let dataitem = DataStrTODataObj(eeeprofileoption);
            arryitemdata.push(dataitem);
            datacol2.push([datacolname, datacolname, profileitem.Required, arrydataitemindex]);
            arrydataitemindex += 1;
        }
    })

    let formparam = vssfnc_formpopulate_param();
    //formparam.actionurl = dataobj_url('post');
    formparam.caption = 'Profile';

    formparam.arrydatacol = datacol2;
    formparam.jsondata = dataobj2;
    formparam.arrydataid[vssfnc_formpopparam_item.arrydataid.Form] = strDetailFormID;
    formparam.arrydataid[vssfnc_formpopparam_item.arrydataid.DataObj] = eeeid;

    formparam.arryinput = format_forminputelem()

    formparam.arryitemdata = arryitemdata;

    let arrybtn2 = [
        [null, 'Edit', undefined, employeeprofile_update, undefined]
    ];
    formparam.arrybutton = load_divbutton(arrybtn2, false, true);

    let profileform = vssfnc_formpopulate(formparam);
    profileform.onsubmit = function (e) {
        e.preventDefault();
    }

    profileform.setAttribute('style', 'width:90%;margin:0 auto;');
    divcontentemployee.appendChild(profileform);

    update_detailtitle_timedatafetched(eeeid ? dataobj.Name : strNewDataObjInst);

}

async function employeeprofile_update() {
    // send an http request to server to update profile of employee //
    // construct object to be sent to server //

    let profileitem = await dataobj_get(null, DataObjID.EmployeeProfileItem);
    let arryjsonobj = [];
    let jsonobj;

    let frm = this.parentElement.parentElement;
    for (var i = 0; i < frm.elements.length; i++) {
        if (frm.elements[i].nodeName === 'SELECT' || frm.elements[i].nodeName === 'INPUT') {
            jsonobj = new Object();
            DataObj.EmployeeProfile.DataCol.forEach(datacol => {
                jsonobj[datacol[0]] = '';
            })
            jsonobj.ID = i + 1;
            jsonobj.Employee = parseInt(this.dataset.id);
            jsonobj.ProfileItem = profileitem.find(pfitem => pfitem.Name === frm.elements[i].name).ID;
            jsonobj.Value = frm.elements[i].value;
            arryjsonobj.push(jsonobj);
        }
    }

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            promptmessage('Employee Profile updated.')
            toggle_logoinfo(true);
        }
    }

    xhttp.open('POST', DataObj.EmployeeProfile.URL.UpdateByEmployee);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(arryjsonobj));
}


function httprequest_sendpost(requesttype) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            toggle_logoinfo(true);
        }
    }

    xhttp.open('POST', dataobj_url(requesttype));
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(arryjsonobj));
}

function DataStrTODataObj(strData) {
    // eg: '1, Chinese; 2, Malay; 3, Indian; 4, Bangladesh'//
    let arrydataobj = [];
    let arrydatacol = strData.split(';')
    let datacol;
    let arryprop = []
    arrydatacol.forEach(datacol => {
        arryprop = datacol.split(',');
        datacol = new Object();
        datacol['ID'] = arryprop[0].trim();
        datacol['Name'] = arryprop[1].trim();
        arrydataobj.push(datacol);
    })
    return arrydataobj;
}

async function employeeprofileoption_loaddetail(currid) {
    // load salary item detail by ID //
    //let arrydataobj = await dataobj_get(currid);
    //let dataobj = arrydataobj[0];

    let dataobj;
    if (currid) {
        // load salary item detail by ID //
        let arrydataobj = await dataobj_get(currid);
        dataobj = arrydataobj[0];
    } else {
        dataobj = [];
        DataObj.EmployeeProfileOption.DataCol.forEach(datacol => {
            dataobj[datacol[DataColIndex.FieldName]] = '';
        })
    }


    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    let datacol = arraydatacol_clone(DataObj.EmployeeProfileOption.DataCol);

    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = null;

    let arrybtn = [
        [null, 'Edit', undefined, undefined, DataObj.EmployeeProfileOption.URL.Update],
        ['POST', 'Add', undefined, undefined, DataObj.EmployeeProfileOption.URL.Add]
    ];
    dataobj_form[divcontent_formitemidx.Button] = load_divbutton(arrybtn, true, true);

    init_divcontent(currid, dataobj_form, null);

    // update content title //
    update_detailtitle_timedatafetched(currid ? dataobj.Name : strNewDataObjInst);
}

function load_divbutton(arrysetbtn, boolbtndir, boolbtnreset) {
    // arrysetbtn index: 0 - Type; 1 - Desc; 2 - fncOnClick; 3 - actionURL //

    let arrybtnparam = [];
    let arrybtn = [];

    if (boolbtndir) {
        arrybtn = [];
        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
        arrybtnparam.push(arrybtn);
    }

    arrysetbtn.forEach(btn => {
        arrybtnparam.push(btn);
    })

    if (boolbtnreset) {
        arrybtn = [];
        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
        arrybtnparam.push(arrybtn);
    }

    if (boolbtndir) {
        arrybtn = [];
        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
        arrybtnparam.push(arrybtn);
    }

    return arrybtnparam;
}

async function payitem_loaddetail(currid) {

    let dataobj;
    if (currid) {
        // load salary item detail by ID //
        let arrydataobj = await dataobj_get(currid);
        dataobj = arrydataobj[0];
    } else {
        dataobj = [];
        DataObj.PayItem.DataCol.forEach(datacol => {
            dataobj[datacol[DataColIndex.FieldName]] = '';
        })
    }

    let datacol = arraydatacol_clone(DataObj.PayItem.DataCol);

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = await divcontentparam_loaddataobj(datacol);

    let arrybtn = [
        [null, 'Formula', undefined, payitemformula_clicked, null],
        ['POST', 'Edit', undefined, undefined, DataObj.PayItem.URL.Update],
        ['POST', 'Add', undefined, undefined, DataObj.PayItem.URL.Add]
    ];
    dataobj_form[divcontent_formitemidx.Button] = load_divbutton(arrybtn, true, true);

    //init_divcontent(currid, dataobj_form, null);

    // payitem x statitem table //

    let pisi_curr = await dataobj_get(currid * -1, DataObjID.PayItemXStatItem);

    let dataobj_table = init_divcontent_getdataobjtable();
    dataobj_table[divcontent_tableitemidx.Caption] = 'Pay Item x Stat Item';

    dataobj_table[divcontent_tableitemidx.TableDataObj] = pisi_curr;
    // arrybutton - an array of 0: button text, 1: button column, 2: button_clicked function
    // // dataobj_table[2] = [['=', 2, payprofileitemedit_clicked]];
    dataobj_table[divcontent_tableitemidx.DataCol] = [
        ['ID', '5%', 0,],
        ['Name', '5%', -1,],
        ['PayItem', '45%', 0,],
        ['StatItem', '45%', -1,]
    ];

    dataobj_table[divcontent_tableitemidx.FncDatarowOnClick] = payitemxstatitem_clicked;



    let divdetail = init_divcontent(currid, dataobj_form, dataobj_table);

    // new payitem x statitem form //

    // get a copy of the array datacol //
    let arrydatacol = arraydatacol_clone(DataObj.PayItemXStatItem.DataCol);

    let objparam = vssfnc_formpopulate_param();

    objparam.arrydatacol = arrydatacol;

    let emptydataobj = new Object();
    DataObj.PayItemXStatItem.DataCol.forEach(datacol => {
        emptydataobj[datacol[0]] = '';
    })
    objparam.jsondata = emptydataobj;

    objparam.arrydataid = [strPayItemXStatItemFormID, strDetailFormID];

    objparam.arryinput = format_forminputelem();

    objparam.arryitemdata = await divcontentparam_loaddataobj(arrydatacol);

    let arrybtn2 = [
        ['submit', 'Edit', undefined, undefined, DataObj.PayItemXStatItem.URL.Update],
        ['submit', 'New', undefined, undefined, DataObj.PayItemXStatItem.URL.Add],
    ]

    objparam.arrybutton = load_divbutton(arrybtn2, false, true);


    let newform = vssfnc_formpopulate(objparam);

    divdetail.appendChild(newform);

    update_detailtitle_timedatafetched(currid ? dataobj.Name : strNewDataObjInst);
}


async function statitem_loaddetail(currid) {

    let dataobj;
    if (currid) {
        // load salary item detail by ID //
        let arrydataobj = await dataobj_get(currid);
        dataobj = arrydataobj[0];
    } else {
        dataobj = [];
        DataObj.StatItem.DataCol.forEach(datacol => {
            dataobj[datacol[DataColIndex.FieldName]] = '';
        })
    }

    let datacol = arraydatacol_clone(DataObj.StatItem.DataCol);

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = await divcontentparam_loaddataobj(datacol);

    let arrybtn = [
        ['POST', 'Edit', undefined, undefined, DataObj.StatItem.URL.Update],
        ['POST', 'Add', undefined, undefined, DataObj.StatItem.URL.Add]
    ];
    dataobj_form[divcontent_formitemidx.Button] = load_divbutton(arrybtn, true, true);


    // profile table //
    //let sprofile = await dataobj_get(null, DataObjID.StatProfile);
    //statprofile_curr = sprofile.filter(item => {
    //    return item.StatItem === parseInt(currid);
    //})
    let statprofile_curr = await dataobj_get(currid * -1, DataObjID.StatProfile);

    let dataobj_table = init_divcontent_getdataobjtable();
    dataobj_table[divcontent_tableitemidx.Caption] = 'Profile';

    dataobj_table[divcontent_tableitemidx.TableDataObj] = statprofile_curr;
    // arrybutton - an array of 0: button text, 1: button column, 2: button_clicked function
    // // dataobj_table[2] = [['=', 2, payprofileitemedit_clicked]];
    dataobj_table[divcontent_tableitemidx.DataCol] = [
        ['ID', '5%', 0,],
        ['Name', '35%', -1,],
        ['Stat Item', '5%', 0,],
        ['Rate', '55%', -1,]
    ];

    dataobj_table[divcontent_tableitemidx.FncDatarowOnClick] = statitemprofile_clicked;



    let divdetail = init_divcontent(currid, dataobj_form, dataobj_table);

    // new stat profile form //

    // get a copy of the array datacol //
    let arrydatacol = arraydatacol_clone(DataObj.StatProfile.DataCol);
    //let arrydatacol = DataObj.StatProfile.DataCol.map(datacol => {
    //    return datacol.slice(0);
    //})

    let objparam = vssfnc_formpopulate_param();

    objparam.arrydatacol = arrydatacol;

    let emptydataobj = new Object();
    DataObj.StatProfile.DataCol.forEach(datacol => {
        emptydataobj[datacol[0]] = '';
    })
    objparam.jsondata = emptydataobj;

    objparam.arrydataid = [strStatProfileFormID, strDetailFormID];

    objparam.arryinput = format_forminputelem();

    objparam.arryitemdata = await divcontentparam_loaddataobj(arrydatacol);

    let arrybtn2 = [
        ['submit', 'Edit', undefined, undefined, DataObj.StatProfile.URL.Update],
        ['submit', 'New', undefined, undefined, DataObj.StatProfile.URL.Add],
    ]

    objparam.arrybutton = load_divbutton(arrybtn2, false, true);


    let newform = vssfnc_formpopulate(objparam);

    divdetail.appendChild(newform);

    update_detailtitle_timedatafetched(currid ? dataobj.Name : strNewDataObjInst);
}

async function employeeprofileitem_loaddetail(currid) {

    let dataobj;
    if (currid) {
        // load salary item detail by ID //
        let arrydataobj = await dataobj_get(currid);
        dataobj = arrydataobj[0];
    } else {
        dataobj = [];
        DataObj.EmployeeProfileItem.DataCol.forEach(datacol => {
            dataobj[datacol[DataColIndex.FieldName]] = '';
        })
    }

    let datacol = arraydatacol_clone(DataObj.EmployeeProfileItem.DataCol);


    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = await divcontentparam_loaddataobj(datacol);

    let arrybtn = [
        ['POST', 'Edit', undefined, undefined, DataObj.EmployeeProfileItem.URL.Update],
        ['POST', 'Add', undefined, undefined, DataObj.EmployeeProfileItem.URL.Add]
    ];
    dataobj_form[divcontent_formitemidx.Button] = load_divbutton(arrybtn, true, true);



    init_divcontent(currid, dataobj_form, null);

    update_detailtitle_timedatafetched(currid ? dataobj.Name : strNewDataObjInst);
}

async function payunit_loaddetail(currid) {

    let dataobj;
    if (currid) {
        // load salary item detail by ID //
        let arrydataobj = await dataobj_get(currid);
        dataobj = arrydataobj[0];
    } else {
        dataobj = [];
        DataObj.PayUnit.DataCol.forEach(datacol => {
            dataobj[datacol[DataColIndex.FieldName]] = '';
        })
    }

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    let datacol = arraydatacol_clone(DataObj.PayUnit.DataCol);

    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = null;

    let arrybtn = [
        ['POST', 'Edit', undefined, undefined, DataObj.PayUnit.URL.Update],
        ['POST', 'Add', undefined, undefined, DataObj.PayUnit.URL.Add]
    ];
    dataobj_form[divcontent_formitemidx.Button] = load_divbutton(arrybtn, true, true);

    init_divcontent(currid, dataobj_form, null);

    update_detailtitle_timedatafetched(currid ? dataobj.Name : strNewDataObjInst);

}


async function payprocess_loaddetail(currid) {

    // load salary item detail by ID //
    let arrydataobj = await dataobj_get(currid);
    let dataobj = arrydataobj[0];
    let datacol = arraydatacol_clone(DataObj.PayProcess.DataCol);

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = null;

    let arrybtn = [];

    let acturl;
    let fncbtn;
    switch (parseInt(currid)) {
        case PayProcess.MidMonth.ID:
            fncbtn = processmidmonth_clicked;
            acturl = PayProcess.MidMonth.URL;
            break;
        case PayProcess.EndMonth.ID:
            fncbtn = processendmonth_clicked;
            acturl = PayProcess.EndMonth.URL;
            break;
        case PayProcess.YearEnd.ID:
            fncbtn = processyearend_clicked;
            acturl = PayProcess.YearEnd.URL;
            break;
    }

    arrybtn = [
        //[null, 'Edit', undefined, undefined, undefined],
        //['GET', '>> RUN >>', undefined, undefined, acturl]
        ['GET', '>> RUN >>', undefined, fncbtn, acturl]
    ];

    dataobj_form[divcontent_formitemidx.Button] = load_divbutton(arrybtn, true, false);

    init_divcontent(currid, dataobj_form, null);

    update_detailtitle_timedatafetched(currid ? dataobj.Name : strNewDataObjInst);
}

async function accrueditem_loaddetail(currid) {

    let dataobj;
    if (currid) {
        let arrydataobj = await dataobj_get(currid);
        dataobj = arrydataobj[0];
    }
    else {
        dataobj = [];
        DataObj.AccruedItem.DataCol.forEach(datacol => {
            dataobj[datacol[DataColIndex.FieldName]] = '';
        })
    }


    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    let datacol = arraydatacol_clone(DataObj.AccruedItem.DataCol);

    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = null;

    let arrybtn = [
        ['POST', 'Edit', undefined, undefined, DataObj.AccruedItem.URL.Update],
        ['POST', 'Add', undefined, undefined, DataObj.AccruedItem.URL.Add],
    ];
    dataobj_form[divcontent_formitemidx.Button] = load_divbutton(arrybtn, true, true);

    init_divcontent(currid, dataobj_form, null);

    update_detailtitle_timedatafetched(currid ? dataobj.Name : strNewDataObjInst);
}

async function payprofile_loaddetail(profileid) {

    let profiledata;
    if (profileid) {
        let arrydataobj = await dataobj_get(profileid);
        // server returns as array of one profiledata //
        profiledata = arrydataobj[0];
    }
    else {
        // create an empty object //
        profiledata = new Object();
        DataObj.PayProfile.DataCol.forEach(datacol => {
            profiledata[datacol[DataColIndex.FieldName]] = '';
        })
    }

    // profile form //

    let dataobj_form = init_divcontent_getdataobjform();
    let datacol = arraydatacol_clone(DataObj.PayProfile.DataCol);

    dataobj_form[divcontent_formitemidx.FormDataObj] = profiledata;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = null;

    let arrybtn = [
        ['POST', 'Edit', undefined, undefined, DataObj.PayProfile.URL.Update],
        ['RESET', 'Reset', undefined, undefined, undefined],
        ['POST', 'Add', undefined, undefined, DataObj.PayProfile.URL.Add],
    ];
    dataobj_form[divcontent_formitemidx.Button] = load_divbutton(arrybtn, true, true);

    // profile item table //

    payprofileitem_curr = [];
    let pprofileitem = await dataobj_get(null, DataObjID.PayProfileItem);
    payprofileitem_curr = pprofileitem.filter(item => {
        return item.PayProfile === parseInt(profileid);
    })

    // insert name of payitem in payprofile item //
    let pitem = await dataobj_get(null, DataObjID.PayItem);
    let profiledetaildata = payprofileitem_curr.map(item => {
        return {
            ID: item.ID,
            PayItem: pitem.find(pi => { return pi.ID === item.PayItem }).Name,
            PayRate: item.Rate
        };
    })

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
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Rate';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '20%';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
    dataobj_table[divcontent_tableitemidx.DataCol].push(arryheader);

    dataobj_table[divcontent_tableitemidx.FncDatarowOnClick] = payprofileitemdatarow_clicked;



    let divdetail = init_divcontent(profileid, dataobj_form, dataobj_table);
    console.log(divdetail);


    // NEW / EDIT PAYPROFILE ITEM //

    let divnewitem = document.createElement('div');
    divnewitem.id = strDivObjectItem;
    divnewitem.setAttribute('style', 'width:90%; margin:2% auto; padding:2%; border-top:1px gray solid;');

    let dataobjX = new Object;
    DataObj.PayProfileItem.DataCol.forEach(datacol => {
        dataobjX[datacol[DataColIndex.FieldName]] = '';
    })

    let datacol2 = arraydatacol_clone(DataObj.PayProfileItem.DataCol);
    let arryitemdata = await divcontentparam_loaddataobj(datacol2);
    let newform = dataobj_loaditem('New Pay Profile Item:', dataobjX, datacol2, arryitemdata, [DataObj.PayProfileItem.URL.Add, DataObj.PayProfileItem.URL.Update]);

    divnewitem.appendChild(newform);

    divdetail.appendChild(divnewitem);


    update_detailtitle_timedatafetched(profileid ? profiledata.Name : strNewDataObjInst);

}

async function payprofileitemdatarow_clicked() {
    let divitem = document.querySelector('#' + strDivObjectItem);

    let dataobjX;
    let arrydataobj = await dataobj_get(this.dataset.id, DataObjID.PayProfileItem);

    // server returns as array of one profiledata //
    dataobjX = arrydataobj[0];

    let datacol2 = arraydatacol_clone(DataObj.PayProfileItem.DataCol);
    let arryitemdata = await divcontentparam_loaddataobj(datacol2);
    let newform = dataobj_loaditem(dataobjX.Name, dataobjX, datacol2, arryitemdata, [DataObj.PayProfileItem.URL.Add, DataObj.PayProfileItem.URL.Update]);

    newform.setAttribute('style', 'width:100%;');
    let divnewitem = document.createElement('div');
    divnewitem.appendChild(newform);

    // remove immediately before append new items to avoid screen flickering //
    while (divitem.firstChild) {
        divitem.firstChild.parentNode.removeChild(divitem.firstChild);
    }
    divitem.appendChild(divnewitem);
}

async function calcsheetitemdatarow_clicked() {
    let divitem = document.querySelector('#' + strDivObjectItem);

    let dataobjX;
    let arrydataobj = await dataobj_get(this.dataset.id, DataObjID.WorkSheetItem);

    // server returns as array of one profiledata //
    dataobjX = arrydataobj[0];

    let datacol2 = arraydatacol_clone(DataObj.WorkSheetItem.DataCol);
    let arryitemdata = await divcontentparam_loaddataobj(datacol2);
    let newform = dataobj_loaditem(dataobjX.Name, dataobjX, datacol2, arryitemdata, [DataObj.WorkSheetItem.URL.Add, DataObj.WorkSheetItem.URL.Update]);

    newform.setAttribute('style', 'width:100%;');
    let divnewitem = document.createElement('div');
    divnewitem.appendChild(newform);

    // remove immediately before append new items to avoid screen flickering //
    while (divitem.firstChild) {
        divitem.firstChild.parentNode.removeChild(divitem.firstChild);
    }
    divitem.appendChild(divnewitem);
}

function dataobj_loaditem(formcaption, dataobjX, datacol, arryitemdata, arrybtnfnc) {

    let objparam = vssfnc_formpopulate_param();
    objparam.actionurl = dataobj_url('post');

    objparam.arrydatacol = datacol;
    objparam.jsondata = dataobjX;
    objparam.caption = formcaption;

    objparam.arrydataid[vssfnc_formpopparam_item.arrydataid.Form] = '';
    objparam.arrydataid[vssfnc_formpopparam_item.arrydataid.DataObj] = '';
    objparam.arryitemdata = arryitemdata;

    objparam.arryinput = format_forminputelem();
    //let arryinp = [];
    //arryinp[vssfnc_formpopparam_item.arryinput.Label.WidthRatio] = '30%';
    //arryinp[vssfnc_formpopparam_item.arryinput.Label.Align] = -1;
    //objparam.arryinput.push(arryinp);

    //arryinp = [];
    //arryinp[vssfnc_formpopparam_item.arryinput.Input.WidthRatio] = '70%';
    //arryinp[vssfnc_formpopparam_item.arryinput.Input.Align] = -1;
    //objparam.arryinput.push(arryinp);

    let arrybtn2 = [
        ['POST', 'Edit', undefined, undefined, arrybtnfnc[1]],
        ['POST', 'Add', undefined, undefined, arrybtnfnc[0]]
    ];
    //arrybtn2[vssfnc_formpopparam_item.arrybutton.Type] = 'POST';
    //arrybtn2[vssfnc_formpopparam_item.arrybutton.Desc] = 'Edit';
    //arrybtn2[vssfnc_formpopparam_item.arrybutton.ActionURL] = arrybtnfnc[1];
    //objparam.arrybutton.push(arrybtn2);

    //arrybtn2 = [];
    //arrybtn2[vssfnc_formpopparam_item.arrybutton.Type] = 'POST';
    //arrybtn2[vssfnc_formpopparam_item.arrybutton.Desc] = 'New';
    //arrybtn2[vssfnc_formpopparam_item.arrybutton.ActionURL] = arrybtnfnc[0];
    objparam.arrybutton = load_divbutton(arrybtn2, false, true);

    return vssfnc_formpopulate(objparam);
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
//  - 4. caption
//  ]
// 
const divcontent_tableitemidx = {
    TableDataObj: 0,
    DataCol: 1,
    Button: 2,
    FncDatarowOnClick: 3,
    Caption: 4
}
function init_divcontent_getdataobjform() { return [null, [], [], []] }
function init_divcontent_getdataobjtable() { return [null, [], [], null, null, null] }
function init_divcontent(dataobj_ID, dataobj_form, dataobj_table, img) {

    toggle_logoinfo(false);

    // main content box //

    // 1. determine which div is empty and to be used
    // 2. load empty div
    // 3. slide in new div
    // 4. empty previous div
    let boolClearX;

    let divcontentdetailX = document.getElementById(strDivContentDetailIDX);
    let divcontentdetailY = document.getElementById(strDivContentDetailIDY);
    let divcontentdetail;

    if (divcontentdetailX.firstChild) {
        boolClearX = true;
        divcontentdetail = divcontentdetailY;
        strDivContentDetailID = strDivContentDetailIDY;
    } else {
        boolClearX = false;
        divcontentdetail = divcontentdetailX;
        strDivContentDetailID = strDivContentDetailIDX;
    }

    divcontentdetail.style.width = '100%';
    divcontentdetail.style.margin = '0 auto';
    divcontentdetail.style.display = 'flex';
    divcontentdetail.style.flexDirection = 'column';


    // contentdetailtitle //
    let divcontenttitle = document.createElement('div');
    divcontenttitle.id = strClsContentDetailTitle;
    divcontenttitle.classList.add(strClsContentDetailTitle);
    divcontentdetail.appendChild(divcontenttitle);
    contentdetailtitle = divcontenttitle;

    // contentbox //
    let divcontentbox = document.createElement('div');
    divcontentbox.style.width = '95%';
    divcontentbox.style.margin = '1% auto';
    divcontentbox.style.display = 'flex';
    divcontentbox.style.flexDirection = 'row';//

    if (img) {
        let divimg = document.createElement('div');
        divimg.setAttribute('style', 'width:30%; margin:0 2%;border:1px solid gray;box-shadow:2px 2px 3px gray;');
        let img = document.createElement('img');
        divimg.appendChild(img);
        img.setAttribute('src', 'image/banner_bg.jpg');
        img.setAttribute('alt', 'image photo');
        img.setAttribute('style', 'width:100%;');
        divcontentbox.appendChild(divimg);
        //divcontentbox.appendChild(loadnavdetail(dataobj_ID, './image/banner_bg.jpg'));
    }


    // form content //
    let newform;
    if (dataobj_form && dataobj_form[0]) {

        // navdetail //
        //if (img) {
        //    alert('in');
        //    let img = document.createElement('image');
        //    img.imgsrc = './image/banner_bg.jpg';
        //    divcontentbox.appendChild(img);
        //    //divcontentbox.appendChild(loadnavdetail(dataobj_ID, './image/banner_bg.jpg'));
        //}

        // formdetail //
        let objparam = vssfnc_formpopulate_param();
        objparam.actionurl = dataobj_url('post');

        objparam.arrydatacol = dataobj_form[divcontent_formitemidx.DataCol];
        objparam.jsondata = dataobj_form[divcontent_formitemidx.FormDataObj];

        objparam.arrydataid[vssfnc_formpopparam_item.arrydataid.Form] = strDetailFormID;
        objparam.arrydataid[vssfnc_formpopparam_item.arrydataid.DataObj] = dataobj_ID;

        objparam.arryinput = format_forminputelem();

        objparam.arryitemdata = dataobj_form[divcontent_formitemidx.DataColObj];
        objparam.arrybutton = dataobj_form[divcontent_formitemidx.Button];

        newform = vssfnc_formpopulate(objparam);

        divcontentbox.appendChild(newform);
    }

    // table content //
    if (dataobj_table && dataobj_table[0]) {
        let objparam = vssfnc_tablepopulate_param();
        objparam.caption = dataobj_table[divcontent_tableitemidx.Caption];
        objparam.arryjsondata = dataobj_table[divcontent_tableitemidx.TableDataObj];
        objparam.arryheadercol = dataobj_table[divcontent_tableitemidx.DataCol];
        objparam.boolitemcount = true;
        objparam.arrydataid = [strDetailTableID, strListID];
        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Ascd] = ' (v)';
        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Dscd] = ' (^)';

        if (dataobj_table[2]) {
            // objparam.arrybutton = dataobj_table[2][0];
            objparam.arrybutton = dataobj_table[divcontent_tableitemidx.Button];
        }
        objparam.fncdatarowclicked = dataobj_table[divcontent_tableitemidx.FncDatarowOnClick];

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

    if (boolClearX) {
        slide_in(divcontentdetailY, divcontentdetailX, 1);
        // while (divcontentdetailX.firstChild) {
        //     divcontentdetailX.removeChild(divcontentdetailX.firstChild);
        // }
        // if (divcontentdetailX.parentElement) {
        //     divcontentdetailX.parentElement.removeChild(divcontentdetailX);
        // }
    } else {
        slide_in(divcontentdetailX, divcontentdetailY, 1);
        // while (divcontentdetailY.firstChild) {
        //     divcontentdetailY.removeChild(divcontentdetailY.firstChild);
        // }
        // if (divcontentdetailY.parentElement) {
        //     divcontentdetailY.parentElement.removeChild(divcontentdetailY);
        // }
    }

    // divcontentdetail.id = strDivContentDetailID;

    contentdetail.appendChild(divcontentdetail);


    if (dataobj_form && dataobj_table) {
        return newform;
    }
    else {
        return divcontentdetail;
    }
}


//function init_divcontent(dataobj_ID, dataobj_form, dataobj_table, img) {

//    toggle_logoinfo(false);

//    // main content box //
//    let divcontentdetail = document.getElementById(strDivContentDetailID);
//    if (divcontentdetail) {
//        while (divcontentdetail.firstChild) {
//            divcontentdetail.removeChild(divcontentdetail.firstChild);
//        }
//    }
//    else {
//        divcontentdetail = document.createElement('div');
//        divcontentdetail.id = strDivContentDetailID;
//        divcontentdetail.classList.add(strClsContentDetail);
//        contentdetail.appendChild(divcontentdetail);
//    }

//    divcontentdetail.setAttribute('style',
//        `width:100%;
//        margin:1% auto;
//        display:flex;
//        flex-direction:column;
//        `);


//    // contentdetailtitle //
//    let divcontenttitle = document.createElement('div');
//    // divcontenttitle.innerHTML = dataobj.Name;
//    divcontenttitle.id = strClsContentDetailTitle;
//    divcontenttitle.classList.add(strClsContentDetailTitle);
//    divcontentdetail.appendChild(divcontenttitle);

//    // contentbox //
//    let divcontentbox = document.createElement('div');
//    divcontentbox.style.width = '95%';
//    divcontentbox.style.margin = '1% auto';
//    divcontentbox.style.display = 'flex';
//    divcontentbox.style.flexDirection = 'row';//

//    // form content //
//    let newform;
//    if (dataobj_form && dataobj_form[0]) {

//        // navdetail //
//        if (img) {
//            divcontentbox.appendChild(loadnavdetail(dataobj_ID, './img/banner_bg.jpg'));
//        }

//        // formdetail //
//        let objparam = vssfnc_formpopulate_param();
//        objparam.actionurl = dataobj_url('post');

//        objparam.arrydatacol = dataobj_form[divcontent_formitemidx.DataCol];
//        objparam.jsondata = dataobj_form[divcontent_formitemidx.FormDataObj];
//        objparam.arrydataid[vssfnc_formpopparam_item.arrydataid.Form] = strDetailFormID;
//        objparam.arrydataid[vssfnc_formpopparam_item.arrydataid.DataObj] = dataobj_ID;

//        let arryinp = [];
//        arryinp[vssfnc_formpopparam_item.arryinput.Label.WidthRatio] = '30%';
//        arryinp[vssfnc_formpopparam_item.arryinput.Label.Align] = -1;
//        objparam.arryinput.push(arryinp);

//        arryinp = [];
//        arryinp[vssfnc_formpopparam_item.arryinput.Input.WidthRatio] = '70%';
//        arryinp[vssfnc_formpopparam_item.arryinput.Input.Align] = -1;
//        objparam.arryinput.push(arryinp);

//        objparam.arryitemdata = dataobj_form[2];
//        objparam.arrybutton = dataobj_form[3];

//        newform = vssfnc_formpopulate(objparam);

//        divcontentbox.appendChild(newform);
//    }

//    // table content //
//    if (dataobj_table && dataobj_table[0]) {
//        let objparam = vssfnc_tablepopulate_param();
//        objparam.arryjsondata = dataobj_table[0];
//        objparam.arryheadercol = dataobj_table[1];
//        objparam.boolitemcount = true;
//        objparam.arrydataid = [strDetailTableID, strListID];
//        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Ascd] = ' (v)';
//        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Dscd] = ' (^)';

//        if (dataobj_table[2]) {
//            // objparam.arrybutton = dataobj_table[2][0];
//            objparam.arrybutton = dataobj_table[2];
//        }
//        objparam.fncdatarowclicked = dataobj_table[3];

//        //  append to form element if both form and table element are required //
//        if (dataobj_form) {
//            let detailtable = vssfnc_tablepopulate(objparam);
//            detailtable.style.margin = '2% auto';
//            detailtable.style.width = '100%';
//            newform.appendChild(detailtable);
//            // contentdetail.style.flexDirection='columns';
//            // divcontentbox.appendChild(detailtable);
//        }
//        else {
//            let detailtable = vssfnc_tablepopulate(objparam);
//            detailtable.style.margin = '2% auto';
//            detailtable.style.width = '100%';
//            divcontentbox.appendChild(detailtable);
//        }
//    }

//    divcontentdetail.appendChild(divcontentbox);
//    //contentdetail.appendChild(divcontentdetail);

//    if (dataobj_form && dataobj_table) {
//        return newform;
//    }
//    else {
//        return divcontentdetail;
//    }
//}

function format_forminputelem() {
    let arryreturn = []
    let arryinp = [];
    arryinp[vssfnc_formpopparam_item.arryinput.Label.WidthRatio] = '30%';
    arryinp[vssfnc_formpopparam_item.arryinput.Label.Align] = -1;
    arryreturn.push(arryinp);

    arryinp = [];
    arryinp[vssfnc_formpopparam_item.arryinput.Input.WidthRatio] = '70%';
    arryinp[vssfnc_formpopparam_item.arryinput.Input.Align] = -1;
    arryreturn.push(arryinp);

    return arryreturn;
}

function slide_in(divin, divout, direction) {

    if (slide_direction != 0) {
        direction = slide_direction;
    }

    let slidein, slideout;
    switch (direction) {
        case 1:
            slidein = strClsSlideInLeft;
            slideout = strClsSlideOutLeft;
            break;
        case -1:
            slidein = strClsSlideInRight;
            slideout = strClsSlideOutRight;
            break;

    }

    // handle outgoing //
    divout.classList.remove(strClsSlideInLeft, strClsSlideOutLeft, strClsSlideInRight, strClsSlideOutRight);
    divout.classList.add(slideout);
    divout.style.display = 'none';

    setTimeout(() => {
        while (divout.firstChild) {
            divout.removeChild(divout.firstChild);
        }
    }, 0)


    // handle incoming //
    divin.classList.remove(strClsSlideInLeft, strClsSlideOutLeft, strClsSlideInRight, strClsSlideOutRight);
    divin.classList.add(slidein);


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


function employeenew_clicked(e) {
    employee_loaddetail();
    e.preventDefault();
}

function payprofilenew_clicked(e) {
    payprofile_loaddetail();
    e.preventDefault();
}

function payitemnew_clicked(e) {
    payitem_loaddetail();
    e.preventDefault();
}

function statitemnew_clicked(e) {
    statitem_loaddetail();
    e.preventDefault();
}

function accrueditemnew_clicked(e) {
    accrueditem_loaddetail();
    e.preventDefault();
}

function payunitnew_clicked(e) {
    payunit_loaddetail();
    e.preventDefault();
}

function employeeprofileoptionnew_clicked(e) {
    employeeprofileoption_loaddetail();
    e.preventDefault();
}

function employeeprofileitemnew_clicked(e) {
    employeeprofileitem_loaddetail();
    e.preventDefault();
}

async function calcsheetnew_clicked(e) {

    let dataobj = [];
    DataObj.WorkSheet.DataCol.forEach(datacol => {
        dataobj[datacol[DataColIndex.FieldName]] = '';
    })


    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();
    let datacol = arraydatacol_clone(DataObj.WorkSheet.DataCol);

    dataobj_form[divcontent_formitemidx.DataColObj] = await divcontentparam_loaddataobj(datacol);
    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;


    let arrybtn = [
        ['POST', 'Edit', undefined, undefined, DataObj.WorkSheet.URL.Update],
        ['POST', 'Add', undefined, undefined, DataObj.WorkSheet.URL.Add],
    ];
    dataobj_form[divcontent_formitemidx.Button] = load_divbutton(arrybtn, true, true);

    console.log(dataobj_form);

    init_divcontent(null, dataobj_form, null);

    update_detailtitle_timedatafetched(strNewDataObjInst);

    e.preventDefault();
}

async function fulllist_clicked() {
    
    let dataobj_list = await dataobj_get(null, null);
    let datacol = dataobj_prop(dataobjid_curr).DataCol;

    let dataobj_table = init_divcontent_getdataobjtable();
    dataobj_table[divcontent_tableitemidx.Caption] = 'Full List';

    dataobj_table[divcontent_tableitemidx.TableDataObj] = dataobj_list;
    //dataobj_table[divcontent_tableitemidx.DataCol] = [
    //    ['ID', '5%', 0,],
    //    ['Name', '35%', -1,],
    //    ['Stat Item', '5%', 0,],
    //    ['Rate', '55%', -1,]
    //];
    //dataobj_table[divcontent_tableitemidx.FncDatarowOnClick] = statitemprofile_clicked;
    
    init_divcontent(null, null, dataobj_table);

    update_detailtitle_timedatafetched(arryMainNavItem[dataobjid_curr][MainNavItem_Index.Desc]);
}

function processmidmonth_clicked(e) {
    alert('Mid-Month Processing ...');
    e.preventDefault();
}

function processendmonth_clicked(e) {

    // receive on same page //

    //let xhttp = new XMLHttpRequest();
    //xhttp.onreadystatechange = function () {
    //    if (this.readyState === 4 && this.status === 200) {
    //        //console.log(xhttp.responseText);

    //        let payrollobj = JSON.parse(xhttp.responseText);

    //        let dataobj_table = init_divcontent_getdataobjtable()
    //        dataobj_table[divcontent_tableitemidx.TableDataObj] = payrollobj;
    //        dataobj_table[divcontent_tableitemidx.FncDatarowOnClick] = processendmonth_eeeclicked;
    //        let divcontent = init_divcontent('', null, dataobj_table);

    //        // content title //
    //        document.getElementById(strClsContentDetailTitle).innerHTML = 'End-Month Process';

    //        // add an invisible individual employee payroll object and 'back' button //
    //        let diveeepayroll = document.createElement('div');
    //        diveeepayroll.id = strDivEeePayrollID;
    //        diveeepayroll.style.display = 'none';
    //        divcontent.appendChild(diveeepayroll);

    //        payrollobj_curr = payrollobj;

    //        update_detailtitle_timedatafetched('End-Month Process');
    //    }
    //}
    //xhttp.open('GET', PayProcess.EndMonth.URL);
    //xhttp.send();
    //e.preventDefault();

    // receive in new page //
    window.open(PayProcess.EndMonth.URL);
    e.preventDefault();

}

//function processendmonth() {
//    // for each employee
//    //      extract PayProfile
//    //          apply attached CalcSheet to each PayItem in PayProfile
//    //              apply extracted PayQuantity (from CalcSheet) to extracted PayRate (from PayItem) for each PayItem

//    let eeelist = [];
//    let payrollobj = []; // properties: Name, Pay Item, Quantity, Rate, Amount //

//    employee.forEach(eee => {

//        // extract PayProfile of Employee //
//        let eeepprofile = payprofile.find(profile => {
//            return profile.ID === eee.PayProfile;
//        })

//        if (eeepprofile) {
//            // extract list of PayItem (ID only) of PayProfile //
//            let arryprofilepayitem = payprofileitem.filter(pfitem => {
//                return pfitem.PayProfile === eeepprofile.ID;
//            })

//            if (arryprofilepayitem) {

//                // extract info of PayItem and then
//                // apply extracted PayQuantity to PayRate to get PayAmount //

//                arryprofilepayitem.forEach(profilepayitem => {
//                    let eeecalcsheet;

//                    let payitemX = payitem.find(item => {
//                        return item.ID === profilepayitem.PayItem;
//                    })

//                    // 
//                    // process payroll item: PayQuantity * PayRate = PayAmount //
//                    // 

//                    let payqty, payrate;
//                    eeecalcsheet = calcsheet.find(calc => calc.Employee === eee.ID);


//                    // PAYQTY //
//                    payqty = processendmonth_getPayQty(payitemX, eeecalcsheet);


//                    // PAYRATE //
//                    payrate = processendmonth_getPayRate(eee, eeecalcsheet, profilepayitem, payrollobj, payitemX);


//                    // load payroll table //
//                    let payu = payunit.find(unit => unit.ID === payitemX.PayUnit);
//                    payrollobj.push(
//                        {
//                            ID: eee.ID,
//                            Name: eee.Name,
//                            Profile: eeepprofile.Name,
//                            PayItemID: payitemX.ID,
//                            PayItem: payitemX.Name,
//                            PayUnit: payu ? payu.Name : '',
//                            PayQuantity: payqty,
//                            PayRate: payrate,
//                            PayAmount: payqty * payrate
//                        });

//                    // if PayItem is attached to an Accrued Item //
//                    if (payitemX.AccruedItem) {
//                        // alert(`Update balance of Accrued Item ${payitemX.Name} ...`)
//                    }
//                })
//            }
//            else {
//                alert('No Pay Item in Pay Profile + ' + eeepprofile.Name);
//            }
//        }
//        else {
//            alert('No attached Pay Profile for ' + eee.Name);
//        }

//        // update employee list //
//        eeelist.push({ ID: eee.ID, Name: eee.Name, Profile: eeepprofile.Name });
//    })

//    payrollobj_curr = payrollobj;

//    // payroll object //
//    let dataobj_table = init_divcontent_getdataobjtable()
//    dataobj_table[divcontent_tableitemidx.TableDataObj] = payrollobj;
//    dataobj_table[divcontent_tableitemidx.FncDatarowOnClick] = processendmonth_eeeclicked;
//    let divcontent = init_divcontent('', null, dataobj_table);

//    // content title //
//    document.getElementById(strClsContentDetailTitle).innerHTML = 'End-Month Process';

//    // add an invisible individual employee payroll object and 'back' button //
//    let diveeepayroll = document.createElement('div');
//    diveeepayroll.id = strDivEeePayrollID;
//    diveeepayroll.style.display = 'none';
//    divcontent.appendChild(diveeepayroll);

//    // if (e) {
//    //     e.preventDefault();
//    // }
//    // else {

//    // }
//}

async function processendmonth_eeeclicked(e) {

    let arryemployee = await dataobj_get(this.dataset[strListID], DataObjID.Employee);
    let employee = arryemployee[0];

    let payrollobj_eee = payrollobj_curr.filter(item => {
        return item.Name === employee.Name;
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
        //promptmessage(payrollobj_eee[0].Name,tbl);

        diveeepayroll.appendChild(tbl);

        let btnback = document.createElement('button');
        btnback.innerHTML = 'Back to List';
        btnback.setAttribute('style', 'margin:2% 0 0 85%;');
        btnback.onclick = function () {
            let tablepayroll = document.getElementById(strDetailTableID);
            let diveeepayroll = document.getElementById(strDivEeePayrollID);
            diveeepayroll.style.display = 'none';
        }

        diveeepayroll.appendChild(btnback);
        diveeepayroll.style.display = 'block';

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

async function calcsheet_loaddetail3(sheetid) {

    let sheetdata;
    if (sheetid) {
        let arrydataobj = await dataobj_get(sheetid);
        // server returns as array of one profiledata //
        sheetdata = arrydataobj[0];
    }
    else {
        // create an empty object //
        sheetdata = new Object();
        DataObj.WorkSheet.DataCol.forEach(datacol => {
            sheetdata[datacol[DataColIndex.FieldName]] = '';
        })
    }

    // worksheet info form //

    let dataobj_form = init_divcontent_getdataobjform();
    let datacol = arraydatacol_clone(DataObj.WorkSheet.DataCol);
    dataobj_form[divcontent_formitemidx.FormDataObj] = sheetdata;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = await divcontentparam_loaddataobj(datacol);

    let arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'SUBMIT';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Edit';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
    arrybtn[vssfnc_formpopparam_item.arrybutton.ActionURL] = DataObj.WorkSheet.URL.Update;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'POST';
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'New';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
    arrybtn[vssfnc_formpopparam_item.arrybutton.ActionURL] = DataObj.WorkSheet.URL.Add;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    arrybtn = [];
    arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
    arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
    arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
    dataobj_form[divcontent_formitemidx.Button].push(arrybtn);

    // worksheet item table //

    let worksheetitem_curr = [];
    let worksheetitem = await dataobj_get(null, DataObjID.WorkSheetItem);
    worksheetitem_curr = worksheetitem.filter(item => {
        return item.WorkSheet === parseInt(sheetid);
    })

    // insert name of payunit in worksheet item //
    let punit = await dataobj_get(null, DataObjID.PayUnit);
    let worksheetitemdata = worksheetitem_curr.map(item => {
        return {
            ID: item.ID,
            PayUnit: punit.find(pu => { return pu.ID === item.PayUnit }).Name,
            PayQty: item.PayQty
        };
    })

    let dataobj_table = init_divcontent_getdataobjtable();
    dataobj_table[divcontent_tableitemidx.TableDataObj] = worksheetitemdata

    let arryheader = [];
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'ID';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '10%';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
    dataobj_table[divcontent_tableitemidx.DataCol].push(arryheader);

    arryheader = [];
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Pay Unit';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '70%';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
    dataobj_table[divcontent_tableitemidx.DataCol].push(arryheader);

    arryheader = [];
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Pay Quantity';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '20%';
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
    dataobj_table[divcontent_tableitemidx.DataCol].push(arryheader);

    dataobj_table[divcontent_tableitemidx.FncDatarowOnClick] = calcsheetitemdatarow_clicked;

    let divdetail = init_divcontent(sheetid, dataobj_form, dataobj_table);



    // NEW / EDIT WORKSHEET ITEM //

    let divnewitem = document.createElement('div');
    divnewitem.id = strDivObjectItem;
    divnewitem.setAttribute('style', 'width:90%; margin:2% auto; padding:2%; border-top:1px gray solid;');

    let dataobjX = new Object;
    DataObj.WorkSheetItem.DataCol.forEach(datacol => {
        dataobjX[datacol[DataColIndex.FieldName]] = '';
    })

    let datacol2 = arraydatacol_clone(DataObj.WorkSheetItem.DataCol);
    let arryitemdata = await divcontentparam_loaddataobj(datacol2);
    let newform = dataobj_loaditem('New Worksheet Item:', dataobjX, datacol2, arryitemdata, [DataObj.WorkSheetItem.URL.Add, DataObj.WorkSheetItem.URL.Update]);

    divnewitem.appendChild(newform);

    divdetail.appendChild(divnewitem);


    update_detailtitle_timedatafetched(sheetid ? sheetdata.Name : strNewDataObjInst);

}

async function calcsheet_loaddetail(eeeid) {
    let calcsheettitle = '';

    // remove previously added update button //
    let btnnode = document.getElementById(strDivTableFunctionID)
    if (btnnode) { btnnode.parentNode.removeChild(btnnode) }

    // worksheet:id => worksheetitem:worksheet //
    // worksheet:employee =>
    calcsheet_curr = [];

    //console.log(eeeid);

    let worksheet = await dataobj_get(null, DataObjID.WorkSheet);
    //console.log(worksheet);

    let currworksheet = worksheet.find(wsheet => wsheet.Employee === parseInt(eeeid));

    //console.log(currworksheet);

    let eeecalcsheet = await dataobj_get(currworksheet.ID * -1, DataObjID.WorkSheetItem);

    //console.log(worksheetitem);
    //console.log(currworksheet.ID);

    //console.log(eeecalcsheet);    

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
        item.Employee = eee.find(ee => ee.ID === parseInt(eeeid)).Name;
        calcsheettitle = item.Employee;
        let csitem = eeecalcsheet.find(csitem => csitem.PayUnit === item.PayUnitID);
        item.PayQuantity = csitem ? csitem.PayQty : 0;
    })

    let dataobj_table = init_divcontent_getdataobjtable();
    dataobj_table[0] = calcsheet_curr;

    // customise table //
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
    //arrydatacol[vssfnc_tablepopparam_item.arryheadercol.Input][vssfnc_tablepopparam_item.arryheadercol.Input.OnChange] = calcsheetitemedit_clicked;

    dataobj_table[1].push(arrydatacol);

    let divcontent = init_divcontent('', null, dataobj_table);

    // update content title //
    contentdetailtitle.innerHTML = calcsheettitle;

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

async function calcsheetupdate_clicked() {
    // send an http request to server to update profile of employee //
    // construct object to be sent to server //

    //alert(this.dataset.id);
    //let worksheetitem = await dataobj_get(null, DataObjID.WorkSheetItem);
    let arryjsonobj = [];
    let jsonobj;

    let tbl = this.parentElement.parentElement.getElementsByTagName('table');
    let inputelem = tbl[0].getElementsByTagName('input');

    for (var i = 0; i < inputelem.length; i++) {
        jsonobj = new Object();
        DataObj.WorkSheetItem.DataCol.forEach(datacol => {
            jsonobj[datacol[0]] = '';
        })
        jsonobj.ID = i + 1;
        jsonobj.WorkSheet = parseInt(this.dataset.id);
        jsonobj.PayUnit = parseInt(inputelem[i].dataset.id);
        jsonobj.PayQty = parseInt(inputelem[i].value);
        arryjsonobj.push(jsonobj);
    }

    //console.log(arryjsonobj);


    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            toggle_logoinfo(true);
            //console.log(xhttp.responseText);
        }
    }

    xhttp.open('POST', DataObj.WorkSheetItem.URL.UpdateByEmployee);
    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.send(JSON.stringify(arryjsonobj));
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

//function dataobj_add(e) {
//    let xhttp = new XMLHttpRequest();

//    xhttp.onreadystatechange = function () {
//        if (xhttp.readyState === 4 && xhttp.status === 200) {
//            toggle_logoinfo(true);
//        }
//    }

//    //let strUrl = dataobj_url('post', null);
//    //console.log(strUrl);
//    xhttp.open('POST', dataobj_url('post', null));
//    xhttp.setRequestHeader('Content-Type', 'application/json');
//    xhttp.send();
//    e.preventDefault();
//}


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
    slide_direction = -1;
    objectid_curr = dataobjlist_search(-1).ID;
    dataobj_loaddetail(objectid_curr);
    e.preventDefault();
}

function dataobjnext_clicked(e) {
    slide_direction = 1;
    objectid_curr = dataobjlist_search(1).ID;
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

//async function statitemprofile_clicked(e) {

//    let statpeeeitem = await dataobj_get(null, DataObjID.StatProfileItem);
//    let profileeeeitem = statpeeeitem.filter(item => {
//        return item.StatProfile === this.dataset[strListID];
//    })

//    if (profileeeeitem) {
//        let divcontentdetail = document.getElementById(strDivContentDetailID);
//        //     // let tablepayroll = document.getElementById(strDetailTableID);
//        //     // tablepayroll.style.display = 'none';

//        let divprofileeeeitem = document.getElementById(strDivStatProfileEeeItemID);
//        if (divprofileeeeitem) {
//            while (divprofileeeeitem.firstChild) {
//                divprofileeeeitem.firstChild.parentNode.removeChild(divprofileeeeitem.firstChild);
//            }
//            divprofileeeeitem.style.display = 'block';
//        }
//        else {
//            divprofileeeeitem = document.createElement('div');
//            divprofileeeeitem.id = strDivStatProfileEeeItemID;
//        }

//        divprofileeeeitem.setAttribute('style',
//            'border:1px solid lightgrey;padding:1%;');

//        // title //
//        let title = document.createElement('h3');
//        title.innerHTML = statprofile.find(prf => prf.ID === profileeeeitem[0].StatProfile).Name;
//        divprofileeeeitem.appendChild(title);

//        // profile employee item //
//        let objparam = vssfnc_tablepopulate_param();
//        // objparam.caption = payrollobj_eee[0].Name;
//        // objparam.arryheadercol = [
//        //     ['ID', '5%', 0, null],
//        //     ['Stat Profile', '30%', 0, null],
//        //     ['Employee Data', '30%', 0, null],
//        //     ['Operator', '5%', 0, null],
//        //     ['Operand', '10%', 0, null],
//        //     ['Criteria', '10%', 0, null]
//        // ];
//        let headercol = [];
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'ID';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '5%';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
//        objparam.arryheadercol.push(headercol);

//        headercol = [];
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Stat Profile';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '30%';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
//        objparam.arryheadercol.push(headercol);

//        headercol = [];
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Employee Data';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '30%';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
//        objparam.arryheadercol.push(headercol);

//        headercol = [];
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Operator';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '5%';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
//        objparam.arryheadercol.push(headercol);

//        headercol = [];
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Operand';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '10%';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
//        objparam.arryheadercol.push(headercol);

//        headercol = [];
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Criteria';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Width] = '10%';
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
//        headercol[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
//        objparam.arryheadercol.push(headercol);

//        objparam.arryjsondata = profileeeeitem;

//        objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Table] = 'table';
//        objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Datarow] = strListID;

//        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Ascd] = ' (v)';
//        objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Dscd] = ' (^)';

//        let tbl = vssfnc_tablepopulate(objparam);
//        tbl.setAttribute('style', 'width:90%; margin:0 auto; border-collapse:collapse;');
//        divprofileeeeitem.appendChild(tbl);


//        // new profile employee item form //
//        objparam = vssfnc_formpopulate_param();

//        let arrydatacol = [];
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'ID';
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 'text';
//        objparam.arrydatacol.push(arrydatacol);

//        arrydatacol = [];
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'Stat Profile';
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 0;
//        objparam.arrydatacol.push(arrydatacol);

//        arrydatacol = [];
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'Employee Profile Item';
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 1;
//        objparam.arrydatacol.push(arrydatacol); arrydatacol = [];

//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'Operator';
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 'text';
//        objparam.arrydatacol.push(arrydatacol);

//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'Operand';
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 'text';
//        objparam.arrydatacol.push(arrydatacol);

//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Desc] = 'Criteria';
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Required] = false;
//        arrydatacol[vssfnc_formpopparam_item.arrydatacol.Type] = 'text';
//        objparam.arrydatacol.push(arrydatacol);

//        objparam.arryjsondata = { ID: '', StatProfile: '', ProfileItem: '', Operator: '', Criteria: '' };
//        objparam.arrydataid = [strDetailFormID, strDetailFormID];

//        let arryinp = [];
//        arryinp[vssfnc_formpopparam_item.arryinput.Label.WidthRatio] = '30%';
//        arryinp[vssfnc_formpopparam_item.arryinput.Label.Align] = -1;
//        objparam.arryinput.push(arryinp);

//        arryinp = [];
//        arryinp[vssfnc_formpopparam_item.arryinput.Input.WidthRatio] = '70%';
//        arryinp[vssfnc_formpopparam_item.arryinput.Input.Align] = -1;
//        objparam.arryinput.push(arryinp);

//        objparam.arryitemdata = [statprofile, employeeitem];

//        let arrybtn = [];
//        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
//        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
//        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
//        objparam.arrybutton.push(arrybtn);

//        arrybtn = [];
//        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
//        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Edit';
//        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = functionudefined_clicked;
//        objparam.arrybutton.push(arrybtn);

//        arrybtn = [];
//        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
//        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
//        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
//        objparam.arrybutton.push(arrybtn);

//        arrybtn = [];
//        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'POST';
//        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'New';
//        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = functionudefined_clicked;
//        objparam.arrybutton.push(arrybtn);

//        arrybtn = [];
//        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
//        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
//        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
//        objparam.arrybutton.push(arrybtn);

//        let newform = vssfnc_formpopulate(objparam);
//        newform.setAttribute('style', 'width:80%; margin:2% auto');
//        divprofileeeeitem.appendChild(newform);

//        // back to list button //
//        let btnback = document.createElement('button');
//        btnback.innerHTML = 'Back to List';
//        btnback.setAttribute('style', 'margin:2% 0 0 85%;');
//        btnback.onclick = function () {
//            let divstatprofileeeeitem = document.getElementById(strDivStatProfileEeeItemID);
//            divstatprofileeeeitem.style.display = 'none';
//        }
//        divprofileeeeitem.appendChild(btnback);

//        divcontentdetail.appendChild(divprofileeeeitem);
//    }
//    e.preventDefault();
//}

async function payitemxstatitem_clicked() {

    //let payitemxstatitem = await dataobj_get(parseInt(this.dataset[strListID]) , DataObjID.PayItemXStatItem);

    //let profileeeeitem = statpeeeitem.filter(item => {
    //    return item.StatProfile === this.dataset[strListID] || item.StatProfile === parseInt(this.dataset[strListID]);
    //})


    //let divcontentdetail = document.getElementById(strDivContentDetailID);
    //let divprofileeeeitem = document.getElementById(strDivStatProfileEeeItemID);
    //if (divprofileeeeitem) {
    //    while (divprofileeeeitem.firstChild) {
    //        divprofileeeeitem.firstChild.parentNode.removeChild(divprofileeeeitem.firstChild);
    //    }
    //    divprofileeeeitem.style.display = 'block';
    //}
    //else {
    //    divprofileeeeitem = document.createElement('div');
    //    divprofileeeeitem.id = strDivStatProfileEeeItemID;
    //}

    //divprofileeeeitem.setAttribute('style',
    //    'border:1px solid lightgrey;padding:1%;');

    // load profile detail form //
    let pisi = await dataobj_get(this.dataset.id, DataObjID.PayItemXStatItem);

    let frm = document.getElementById(strPayItemXStatItemFormID);

    let inputelem = frm.querySelectorAll('input,select');

    for (var ppt in pisi[0]) {
        for (var i = 0; i < inputelem.length; i++) {
            if (inputelem[i].name === ppt) {
                inputelem[i].value = pisi[0][ppt];
                break;
            }
        }
    }

}

async function statitemprofile_clicked(e) {



    let divcontentdetail = document.getElementById(strDivContentDetailID);
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

    // load profile detail form //
    let statprofile = await dataobj_get(this.dataset.id, DataObjID.StatProfile);

    let frm = document.getElementById(strStatProfileFormID);

    let inputelem = frm.querySelectorAll('input,select');

    for (var ppt in statprofile[0]) {
        for (var i = 0; i < inputelem.length; i++) {
            if (inputelem[i].name === ppt) {
                inputelem[i].value = statprofile[0][ppt];
                break;
            }
        }
    }

    // profile employee item //

    let statpeeeitem = await dataobj_get(null, DataObjID.StatProfileItem);

    let profileeeeitem = statpeeeitem.filter(item => {
        return item.StatProfile === this.dataset[strListID] || item.StatProfile === parseInt(this.dataset[strListID]);
    })

    // title //
    let title = document.createElement('h3');

    if (profileeeeitem && profileeeeitem.length > 0) {
        title.innerHTML = statprofile.find(prf => prf.ID === profileeeeitem[0].StatProfile || prf.ID === parseInt(profileeeeitem[0].StatProfile)).Name;
    } else {
        title.innerHTML = strNewDataObjInst;
    }
    divprofileeeeitem.appendChild(title);

    let objparam = vssfnc_tablepopulate_param();

    // get a copy of the array datacol //
    let arrydatacol = DataObj.StatProfileItem.DataCol.map(datacol => {
        return datacol.slice(0);
    })
    objparam.arryheadercol = arrydatacol;

    objparam.arryjsondata = profileeeeitem;

    objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Table] = 'table';
    objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Datarow] = strListID;

    objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Ascd] = ' (v)';
    objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Dscd] = ' (^)';

    objparam.fncdatarowclicked = statitemprofileitem_clicked;

    let tbl = vssfnc_tablepopulate(objparam);
    tbl.setAttribute('style', 'width:90%; margin:0 auto; border-collapse:collapse;');
    divprofileeeeitem.appendChild(tbl);


    // new profile employee item form //

    let newform = await statitemprofileitem_form(arrydatacol);

    newform.setAttribute('style', 'width:80%; margin:2% auto');
    divprofileeeeitem.appendChild(newform);


    divcontentdetail.appendChild(divprofileeeeitem);

    e.preventDefault();
}

async function statitemprofileitem_clicked(e) {

    // to convert input text to input select for ID'ed data //
    let eeeprofileitem = await dataobj_get(null, DataObjID.EmployeeProfileItem);
    let eeeprofileoption = await dataobj_get(null, DataObjID.EmployeeProfileOption);
    let profileoption;


    // fill in form input value //
    let arrydataobj = await dataobj_get(this.dataset.id, DataObjID.StatProfileItem);
    let dataobj = arrydataobj[0];

    let frm = document.getElementById(strStatProfileItemFormID);

    let inputelem = frm.querySelectorAll('input,select');

    for (var ppt in dataobj) {

        for (var i = 0; i < inputelem.length; i++) {
            if (inputelem[i].name === ppt) {
                if (inputelem[i].name === 'ProfileItem') {
                    let IDedItem = eeeprofileitem.find(item => item.ID === dataobj[ppt]);
                    if (IDedItem) {
                        profileoption = eeeprofileoption.find(item => item.ID === IDedItem.Type);
                    }
                    inputelem[i].value = dataobj[ppt];
                } else if (inputelem[i].name === 'Criteria') {
                    if (profileoption) {
                        // if ProfileItem is IDed Data ... 
                        // convert input elem of Criteria to option-populated select elem //
                        let selectelem = document.createElement('select');
                        selectelem.name = ppt;
                        selectelem.style.width = '100%';
                        selectelem.required = inputelem[i].Required;
                        let optlist = DataStrTODataObj(profileoption.Option);
                        optlist.forEach(opt => {
                            let optelem = document.createElement('option');
                            optelem.value = opt.ID;
                            optelem.text = opt.Name;
                            selectelem.appendChild(optelem);
                        })
                        selectelem.value = dataobj[ppt];
                        inputelem[i].parentElement.replaceChild(selectelem, inputelem[i]);
                    } else {
                        let textelem = document.createElement('input');
                        textelem.style.width = '100%';
                        textelem.required = inputelem[i].Required;
                        textelem.name = ppt;
                        textelem.value = dataobj[ppt];
                        inputelem[i].parentElement.replaceChild(textelem, inputelem[i]);
                    }
                } else {
                    inputelem[i].value = dataobj[ppt];

                }

                //break;
            }
        }
    }

    e.preventDefault();
}


async function statitemprofileitem_form(arrydatacol) {

    let objparam = vssfnc_formpopulate_param();

    objparam.arrydatacol = arrydatacol;


    let emptydataobj = new Object();
    DataObj.StatProfileItem.DataCol.forEach(datacol => {
        emptydataobj[datacol[0]] = '';
    })
    objparam.jsondata = emptydataobj;


    objparam.arrydataid = [strStatProfileItemFormID, strDetailFormID];

    objparam.arryinput = format_forminputelem();

    objparam.arryitemdata = await divcontentparam_loaddataobj(arrydatacol);

    let arrybtn = [
        ['submit', 'Edit', undefined, undefined, DataObj.StatProfileItem.URL.Update],
        ['submit', 'New', undefined, undefined, DataObj.StatProfileItem.URL.Add],
    ]
    objparam.arrybutton = load_divbutton(arrybtn, true, true);

    let newform = vssfnc_formpopulate(objparam);


    // change event of ProfileItem input //
    let arryinput = newform.getElementsByTagName('select');
    for (var i = 0; i < arryinput.length; i++) {

        if (arryinput[i].name === 'ProfileItem') {

            let eeeprofileitem = await dataobj_get(null, DataObjID.EmployeeProfileItem);
            let eeeprofileoption = await dataobj_get(null, DataObjID.EmployeeProfileOption);
            let profileoption;

            arryinput[i].onchange = function () {

                // form -> div of label div + input div -> input div -> input //
                let inputcriteria = this.parentElement.parentElement.parentElement.querySelectorAll('input,select');
                inputcriteria.forEach(input => {
                    if (input.name === 'Criteria') {

                        let IDedItem = eeeprofileitem.find(item => item.ID === parseInt(this.value));
                        if (IDedItem.Type && !isNaN(IDedItem.Type)) {
                            profileoption = eeeprofileoption.find(item => item.ID === IDedItem.Type);
                            let selectelem = document.createElement('select');
                            selectelem.name = input.name;
                            selectelem.style.width = '100%';
                            selectelem.required = input.Required;
                            let optlist = DataStrTODataObj(profileoption.Option);
                            optlist.forEach(opt => {
                                let optelem = document.createElement('option');
                                optelem.value = opt.ID;
                                optelem.text = opt.Name;
                                selectelem.appendChild(optelem);
                            })
                            input.parentElement.replaceChild(selectelem, input);
                        } else {
                            let textelem = document.createElement('input');
                            textelem.style.width = '100%';
                            textelem.required = input.Required;
                            textelem.name = input.name;
                            input.parentElement.replaceChild(textelem, input);
                        }

                    }
                })
            }
            break;
        }

    }


    return newform;
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
    display:flex;
    flex-direction:column;
    `);


    if (strmessage && htmlelem) {
        let msgdiv = document.createElement('div');
        msgdiv.setAttribute('style',
            `width:50%;
            height:50%;
            top:25%;
            left:25%;
            flex-basis:1fr;
            `);
        //position: absolute;

        msgdiv.innerHTML = strmessage;
        promptdiv.appendChild(msgdiv);

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

async function employee_statprofile(statprofile, eeeprofile) {

    let strDebug;

    let StatProfileItem = await dataobj_get(null, DataObjID.StatProfileItem);
    for (let sprofile of statprofile) {
        let sprofileitem = StatProfileItem.filter(pitem => {
            return pitem.StatProfile === sprofile.ID;
        })

        if (sprofileitem) {
            let boolDiscrep = false;
            for (let spitem of sprofileitem) {
                let eeeprofileitem = eeeprofile.find(epitem => epitem.ProfileItem === spitem.ProfileItem);

                //strDebug += spitem.ProfileItem;
                console.log(spitem.ProfileItem);

                if (eeeprofileitem) {
                    // compare eeeprofileitem and spfofileitem based on operator //
                    let boolOK = employee_statprofile_compare(eeeprofileitem.Value, spitem.Operator, spitem.Operand, spitem.Criteria);
                    if (!boolOK) {

                        //strDebug += "discrep";
                        console.log('discrep');

                        boolDiscrep = true;
                        break;
                    }
                }
                else {

                    //strDebug += "discrep - non-exist";
                    console.log('discrep - non-exist');

                    boolDiscrep = true;
                    break;
                }
            }
            if (!boolDiscrep) {

                //strDebug += "found and return";
                console.log('found and return');

                //alert(strDebug);

                return sprofile;
            }
        }
    }
}

// const ProfileItemComparer = [
//     { ID: 1, Name: '=' },
//     { ID: 2, Name: '<>' },
//     { ID: 3, Name: '>' },
//     { ID: 4, Name: '>=' },
//     { ID: 5, Name: '<' },
//     { ID: 6, Name: '<=' },
//     { ID: 7, Name: '#=' },
//     { ID: 8, Name: '#>=' },
//     { ID: 9, Name: '#<=' },
//     { ID: 10, Name: '()' }
// ]
function employee_statprofile_compare(value, operator, operand, criteria) {
    // apply the operator to the value and the operand and match the result to the criteria //
    // result = value + operator + operand //
    // result = critera = true else false //

    console.log('comparer: val-' + value + ' opr-' + operator + ' opd-' + operand + ' crt-' + criteria);

    // let testdata = new Date(operand);
    // let valuedate;
    // if (testdata instanceof Date && !isNaN(testdata)) {
    //     valuedate = new Date(value);
    //     console.log(operand + ' isdate');
    // }

    let testdata;
    let valuedate;
    if (isdate(value)) {
        valuedate = new Date(value);
        if (valuedate instanceof Date && !isNaN(valuedate)) {
            testdata = new Date(operand);
            if (testdata instanceof Date && !isNaN(testdata)) {
                // do nothing //
            }
            else {
                testdata = new Date();
            }

            console.log(value + ' isdate value');
            console.log(testdata + ' isdate operand');
        }
    }
    switch (operator) {
        // = 
        case 1:
            if (valuedate) {
                if (!isNaN(criteria)) {
                    if (date_compare(valuedate, testdata)[0] === parseFloat(criteria)) { console.log('true >='); return true; }
                    else { console.log('false ='); return false; }
                } else {
                    if (valuedate.getTime() === testdata.getTime()) { console.log('true ='); return true; }
                    else { console.log('false ='); return false; }
                }
            }
            else {
                if (value == criteria) { console.log('true ='); return true; }
                else { console.log('false ='); return false; }
            }

        //  <>
        case 2:
            if (valuedate) {
                if (valuedate.getTime() !== testdata.getTime()) { console.log('true date <>'); return true; }
                else { console.log('false date <>'); return false; }
            } else {
                if (value != criteria) { console.log('true <>'); return true; }
                else { console.log('false <>'); return false; }
            }

        //  >=
        case 4:
            if (valuedate) {
                console.log(valuedate + ' isalsodate');
                console.log(criteria);
                if (!isNaN(criteria)) {
                    let valueyear = valuedate.getFullYear();
                    let testyear = testdata.getFullYear();
                    if (testyear - valueyear >= parseFloat(criteria)) { console.log('true >='); return true; }
                    else { console.log('false >='); return false; }
                } else {
                    if (valuedate.getTime() >= testdata.getTime()) { console.log('true >='); return true; }
                    else { console.log('false >='); return false; }
                }
            }
            else if (!isNaN(value) && !isNaN(criteria)) {
                if (operand && !isNaN(operand)) {
                    if (parseFloat(operand) - parseFloat(value) >= parseFloat(criteria)) { console.log('true >='); return true; }
                    else { console.log('false not null opd >='); return false; }
                } else {
                    if (parseFloat(criteria) >= parseFloat(value)) { console.log('true >='); return true; }
                    else { console.log('false null opd >='); return false; }
                }

            }
            else {
                console.log('false >=');
                return false;
            }


        //  <=
        case 6:
            break;


        case 7: // #=
        case 8: // #>=
        case 9: // #<=
            let arryocc = value.split(';')
            let itemcount = arryocc.length;
            let newcount = 0;

            // secondary matching //
            if (operand) {
                let secondops = operand.split(',');
                // 0:operator; 1:operand; 2:criteria //

                let op2 = ProfileItemComparer.find(op => op.Name === secondops[0]);

                if (op2) {
                    if (isdate(secondops[1]) || !secondops[1]) {
                        // let testdate;
                        // if (secondops[1]) { testdate = new Date(testdate) }
                        // else { testdate = new Date(secondops[1]) }


                        // valuedate = new Date(value);
                    } else if (!isNaN(secondops[1])) {

                        arryocc.forEach(item => {
                            if (employee_statprofile_compare(item, op2.ID, secondops[1], secondops[2])) {
                                newcount += 1;
                            } else { alert('false'); }
                        })
                    }
                }
            }
            if (newcount !== 0) {
                itemcount = newcount;
                console.log(newcount);
            }

            if (!isNaN(criteria)) {
                let testnumber = parseInt(criteria);
                switch (operator) {
                    case 7: // #=
                        if (itemcount === testnumber) { console.log('true #='); return true; } else { console.log('false #='); return false; }
                    case 8: // #>=
                        if (itemcount >= testnumber) { console.log('true #>='); return true; } else { console.log('false #>='); return false; }
                    case 9: // #<=
                        if (itemcount <= testnumber) { console.log('true #<='); return true; } else { console.log('false #<='); return false; }
                }
            } else {
                return false;
            }

        //  ()
        case 10:
            if (value.includes(criteria)) { console.log('true ()'); return true; }
            else { console.log('false ()'); return false; }

        // ()#=
        case 11:
        case 12:
        case 13:
            if (value.includes(operand)) {
                // secondary matching //
                // value:primary;primary;secondary
                // operator: ()#= / ()#>= / ()#<=
                // operand: primary
                // criteria: 2
                if (operand && criteria) {
                    let arryocc = value.split(';');
                    let numocc = 0;
                    arryocc.forEach(occ => {
                        if (occ === operand) {
                            numocc++;
                        }
                    })
                    switch (operator) {
                        case 11: // ()#=
                            if (numocc == criteria) { console.log('true ()#='); return true }
                            else { console.log('false ()#='); return false }
                        case 12: // ()#>=
                            if (numocc >= criteria) { console.log('true ()#>='); return true }
                            else { console.log('false ()#>='); return false }
                        case 13: // ()#<=
                            if (numocc <= criteria) { console.log('true ()#<='); return true }
                            else { console.log('false ()#<='); return false }
                    }
                }
                else {
                    console.log('false ()# null operand null criteria');
                    return false;
                }

            }
            else { console.log('false ()# no inclusion'); return false; }


        default:
            return false;
    }

}

function isdate(string) {
    return /\d{1,2}[-\/]?\d{1,2}[-\/]?\d{4}/.test(string);
}

function date_compare(date1, date2) {
    // 0:year; 1:month; 2:day
    let arryresult = [];
    if (isdate(date1) && isdate(date2)) {
        arryresult.push(date2.getFullYear() - date1.getFullYear());
        arryresult.push(date2.getMonth() - date1.getMonth());
        arryresult.push(date2.getDate() - date1.getDate());
    }
    return arryresult;
}



