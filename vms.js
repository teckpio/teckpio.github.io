'use strict';

const tablecol = [
    'Vehicle Number',
    'Status',
    'Time In',
    'Check Out',
    'Max Time Out',
    'Block/Unit',
    'Visitor Detail',
    'Purpose',
    'Category',
    'Blacklist',
    'Status',
    'Created By'
]

var sampledata = [
    { 'vnum': 'AHW8868', 'status': 'x', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'A-10-5', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'CD' },
    { 'vnum': 'AEK8899', 'status': 'o', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'B-X2-X', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'AB' },
    { 'vnum': 'BBC889', 'status': 'x', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'B-9-6', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'CD' },
    { 'vnum': 'BEK8899', 'status': 'x', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'B-4-12', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'AB' },
    { 'vnum': 'CHW8868', 'status': 'o', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'B-9-8', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'AB' },
    { 'vnum': 'DBC889', 'status': 'o', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'A-2-10', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'EF' },
    { 'vnum': 'AEK6127', 'status': 'x', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'A-5-11', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'EF' },
    { 'vnum': 'AHW8791', 'status': 'x', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'A-6-1', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'GH' },
    { 'vnum': 'PBC617', 'status': 'o', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'B-12-1', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'EF' },
    { 'vnum': 'PEK9801', 'status': 'o', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'B-10-10', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'EF' },
    { 'vnum': 'AHW5646', 'status': 'o', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'A-1-12', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'GH' },
    { 'vnum': 'BBC912', 'status': 'x', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'B-6-12', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'AB' },
    { 'vnum': 'WEK567', 'status': 'o', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'B-10-1', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'AB' },
    { 'vnum': 'BHW9182', 'status': 'x', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'B-4-9', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'GH' },
    { 'vnum': 'BBC6633', 'status': 'x', 'in': 'c', 'out': 'x', 'max': 'x', 'bu': 'A-3-10', 'visit': 'x', 'pp': 'x', 'cat': 'x', 'bl': 'x', 'stt': 'x', 'created': 'GH' }
]

const tablecolBlacklist = [
    'Vehicle Number', 'Date Blacklisted', 'Reason'
]

const sampledataBlacklist = [
    { 'vnum': 'ABC123', 'Date': 'xxx', 'Reason': 'Unknown' },
    { 'vnum': 'XYZ6789', 'Date': 'xxx', 'Reason': 'Unknown' },
    { 'vnum': 'DEF4321', 'Date': 'xxx', 'Reason': 'Unknown' }
]


let sortedtablecol;
let sortedtablecolblack;

const strSortAsc = ' (v)';
const strSortDsc = ' (^)';

const strtabledataid = 'table';
const strtableidcurr = 'current';
const strtableidblack = 'black';

const strtableheadercol = 'tableheadercol';
const strtabledatarow = 'tabledatarow';
const strtabledatarowbutton = 'tabledatarowbutton';
const strtablerowidcol = 'vnum';

const strEntityHTML = "entity.html"

const strcsstabledatarowodd = 'tabledatarowodd';
const strcsstabledataroweven = 'tabledataroweven';
const strcsstabledatarowselected = 'tabledatarowselected';

const strUserProfile = 'Profile';
const strUserList = 'List';
const strNewUser = 'New User';

const strBlackListBlack = 'Black List';
const strBlackListWhite = 'Current List';

const numContentScrollDelay = 200;


// document elements //
const navbarfncprofile = document.getElementById('navbarfncprofile');
const navbarfncnewuser = document.getElementById('navbarfncnewuser');
const navbarfnclogout = document.getElementById('navbarfnclogout');

const content = document.getElementById('content');

const userprofile = document.getElementById('userprofile');
const newuser = document.getElementById('newuser');
const tablecont = document.getElementById('tablecont');
const tablelist = document.getElementById('tablelist');
const tableblacklist = document.getElementById('tableblacklist');

const tablecolheader = document.getElementsByClassName(strtableheadercol);
const tabledatarow = document.getElementsByClassName(strtabledatarow);
const tabledatarowbutton = document.getElementsByClassName(strtabledatarowbutton);

const tfncnew = document.getElementById('tablefncNew');
const tfncblacklist = document.getElementById('tablefncBlacklist');
const tfncexport = document.getElementById('tablefncExport');



// initial load //

// - load current tablelist //
loadtablelist(tablecol, sampledata, tablelist);
sortedtablecol = tablecol.slice();

// load blacklist tablelist //
loadtablelist(tablecolBlacklist, sampledataBlacklist, tableblacklist);
sortedtablecolblack = tablecolBlacklist.slice();


// format userprofile + new user //
userprofile.style = 'display:none';
newuser.style = 'display:none';

// format navbar function user profile + new user //
navbarfncprofile.innerHTML = strUserProfile;
navbarfncnewuser.innerHTML = strNewUser;

// format blacklist //
tableblacklist.style = 'display:none';


// format table functions //
tfncblacklist.innerHTML = strBlackListBlack;






// Event Management //
// * event on table is done during loadtablelist, which (after the initial loading) is called and refreshed at every column sortings //

// - navbar function profile
// - navbar function new user
// - navbar function logout
// - table function new
// - table function blacklist
// - table function export



// navbar function profile //
navbarfncprofile.onclick = function () {
    // ensure blacklist and newuser is in original state //
    if (tfncblacklist.innerHTML === strBlackListWhite) {
        tfncblacklist.onclick.apply(tfncblacklist);
    }
    if (navbarfncnewuser.innerHTML === strUserList) {
        navbarfncnewuser.onclick.apply(navbarfncnewuser);
    }

    if (this.innerHTML === strUserProfile) {
        // scroll right //
        userprofile.style = 'display:block';
        setTimeout(function () {
            tablelist.style = 'transform: translateX(100%)';
            userprofile.style = 'right:0';
        }, numContentScrollDelay);

        this.innerHTML = strUserList;
    }
    else {
        // scroll left //
        tablelist.style = 'transform: translateX(0)';
        userprofile.style = 'right:-100%';
        setTimeout(function () {
            userprofile.style = 'display:none';
        }, numContentScrollDelay * 3);
        this.innerHTML = strUserProfile;
    }
}

navbarfncnewuser.onclick = function () {
    // ensure blacklist and userprofile is in original state //
    if (tfncblacklist.innerHTML === strBlackListWhite) {
        tfncblacklist.onclick.apply(tfncblacklist);
    }
    if (navbarfncprofile.innerHTML === strUserList) {
        navbarfncprofile.onclick.apply(navbarfncprofile);
    }

    if (this.innerHTML === strNewUser) {
        // scroll right //
        newuser.style = 'display:block';
        setTimeout(function () {
            tablelist.style = 'transform: translateX(100%)';
            newuser.style = 'right:0';
        }, numContentScrollDelay);

        this.innerHTML = strUserList;
    }
    else {
        // scroll left //
        tablelist.style = 'transform: translateX(0)';
        newuser.style = 'right:-100%';
        setTimeout(function () {
            newuser.style = 'display:none';
        }, numContentScrollDelay * 3);
        this.innerHTML = strNewUser;
    }
}

// navbar function logout //
navbarfnclogout.onclick = function () {
    alert('Logging out ...');
}


// table functions //
tfncnew.onclick = function () {

    let strTitle = tfncblacklist.innerHTML === strBlackListBlack ? 'Add to Current List:' : 'Add to Black List:';

    let resp = prompt(strTitle + 'Vehicle Number:', 'ABC123');
    alert(resp);
    resp += prompt(strTitle + 'Entry Date:', window.Date.now());
    alert(resp);
    resp += prompt(strTitle + 'Entry Time:', 'ABC123');
    alert(resp);
}

// table function: blacklist //
tfncblacklist.onclick = function () {
    // ensure userprofile and newuser are in original state //
    if (navbarfncnewuser.innerHTML === strUserList) {
        navbarfncnewuser.onclick.apply(navbarfncnewuser);
    }
    if (navbarfncprofile.innerHTML === strUserList) {
        navbarfncprofile.onclick.apply(navbarfncprofile);
    }
    if (this.innerHTML === strBlackListBlack) {
        // scroll up //
        tableblacklist.style = 'display:block';
        setTimeout(function () {
            tablelist.style = 'transform: translateY(-100%)';
            tableblacklist.style = 'top:0';
        }, numContentScrollDelay);

        this.innerHTML = strBlackListWhite;
    }
    else {
        // scroll down //
        tablelist.style = 'transform: translateY(0)';
        tableblacklist.style = 'top:100%';
        setTimeout(function () {
            tableblacklist.style = 'display:none';
        }, numContentScrollDelay * 3);
        this.innerHTML = strBlackListBlack;
    }
}

// table function: export //
tfncexport.onclick = function () {
    switch (tfncblacklist.innerHTML) {
        case strBlackListBlack:
            alert('Export Current List ...');
            break;
        case strBlackListWhite:
            alert('Export Black List ...');
            break;
        default:
            break;
    }
}


// functions //
// - painttabledatarow
// - sortarrydata
// - loadtablelist


function painttabledatarow(tablelistX) {
    try {
        let cssstyle = strcsstabledatarowodd;
        for (let i = 0; i < tablelistX.rows.length; i++) {
            tablelistX.rows[i].className = '';
            cssstyle = (cssstyle === strcsstabledataroweven) ? strcsstabledatarowodd : strcsstabledataroweven;
            tablelistX.rows[i].classList.add(cssstyle);
        }
    }
    catch (e) { alert(e); }
}


function sortarrydata(arrydata, colidx, dir) {
    // use the first data object in arrydata to extract the property 

    try {
        // compare string
        return arrydata.sort(function (a, b) {
            let x = a[Object.keys(arrydata[0])[colidx]].toLowerCase();
            let y = b[Object.keys(arrydata[0])[colidx]].toLowerCase();

            let rtn = 0;
            if (x < y) { rtn = 1; }
            if (x > y) { rtn = -1; }
            return rtn * dir;
        });

        // compare number

        // compare date

    }
    catch (e) {
        alert('sortarrydata error: ' + e);
    }
}


function loadtablelist(arryheader, arrydata, tablelistX) {
    // 4 tasks are executed:
    // - load header
    // - load datarow
    // - paint datarow
    // - add eventhandler for:
    //      - header
    //      - datarow button
    try {
        // load header //
        let strHeaderCol = '<thead><tr class = "tablerow">';

        arryheader.forEach((item, index) => {
            strHeaderCol += `<th class = "${strtableheadercol}" data-${strtabledataid} = "${tablelistX.dataset.table}">${item}</th>`;
        });
        strHeaderCol += '</tr></thead>';
        tablelistX.innerHTML = strHeaderCol;

        // load datarow //
        let strVehicleData = '<tbody>'
        let boolbtnadded;
        let strbtn;
        arrydata.forEach((item, index) => {
            // attach vehicle number (index: 0) as an identifier //
            strVehicleData += `<tr class = "${strtabledatarow}" data-${strtablerowidcol} = "${Object.values(item)[0]}">`;

            // data //
            // there is an action button for datacol:vehicle number (1st datacol) //
            boolbtnadded = false;
            strbtn = '';
            Object.values(item).forEach((val, index) => {
                // construct str for button element //
                strbtn = boolbtnadded ? '' : `<button class = ${strtabledatarowbutton} data-${strtablerowidcol} = ${Object.values(item)[0]}>..</button>`;

                // construct the td element //
                strVehicleData += `<td> ${strbtn} ${val} </td>`;
                boolbtnadded = true;
            });
            strVehicleData += '</tr>';
        });
        strVehicleData += '</tbody>';
        tablelistX.innerHTML += strVehicleData;

        // paint table datarow //
        painttabledatarow(tablelistX);

        // add event handler //
        // eventhandler for table header //
        for (var i = 0; i < tablecolheader.length; i++) {
            tablecolheader[i].onclick = function () {
                try {
                    // determine the curr / black objects to use //
                    var sortedtablecolX;
                    let tablecolX, arrydataX, tablelistX;
                    if (this.dataset[strtabledataid] === strtableidcurr) {
                        sortedtablecolX = sortedtablecol;
                        tablecolX = tablecol;
                        arrydataX = sampledata;
                        tablelistX = tablelist;
                    }
                    else {
                        sortedtablecolX = sortedtablecolblack
                        tablecolX = tablecolBlacklist;
                        arrydataX = sampledataBlacklist;
                        tablelistX = tableblacklist;
                    }


                    // extract selected col id //
                    let colidx = sortedtablecolX.indexOf(this.innerHTML);
                    let dir = ((this.innerHTML).indexOf(strSortAsc) < 0 ? -1 : 1);


                    // rewrite sortedtablecol //
                    if (this.dataset[strtabledataid] === strtableidcurr) {
                        sortedtablecol = tablecolX.slice();
                        sortedtablecol[colidx] += (dir < 0) ? strSortAsc : strSortDsc;

                        // reload table with sorted array
                        loadtablelist(sortedtablecol, sortarrydata(arrydataX, colidx, dir), tablelistX);
                    }
                    else {
                        sortedtablecolblack = tablecolX.slice();
                        sortedtablecolblack[colidx] += (dir < 0) ? strSortAsc : strSortDsc;

                        // reload table with sorted array
                        loadtablelist(sortedtablecolblack, sortarrydata(arrydataX, colidx, dir), tablelistX);
                    }
                }
                catch (e) {
                    alert('Add Event Handler for Table Header: ' + e);
                }
            }
        }

        // eventhandler for table datarow button //
        for (var i = 0; i < tabledatarowbutton.length; i++) {
            tabledatarowbutton[i].onclick = function () {
                alert('Enter Exit Time for: ' + this.dataset
                [strtablerowidcol]);
            }
        }

        // eventhandler for table datarow //
        // for (var i = 0; i < tablelist.rows.length; i++) {
        //     tablelist.rows[i].onclick = function () {
        //         painttabledatarow();
        //         alert('table datarow clicked: ' + this.dataset
        //         [strtablerowidcol]);
        //         this.classList.add(strcsstabledatarowselected);
        //     }
        //     // ! double clicked not working //
        //     tablelist.rows[i].ondblclick = function () {
        //         alert('table row double-clicked.');
        //     }
        // }
        // for (var i = 0; i < tabledatarow.length; i++) {
        //     tabledatarow[i].onclick = function () {
        //         alert('table datarow clicked: ' + tabledatarow[i].dataset[strtablerowidcol]);
        //     }
        // }

    }
    catch (e) {
        alert('loadtablelist error: ' + e);
    }
}

