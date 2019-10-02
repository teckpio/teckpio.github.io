const tasklist = document.getElementById('tasklist');


const arrytasklist = [
    { ID: 1, Desc1: "User Login", Desc2: "", Desc3: "", TimeRequired: 1 },
    { ID: 2, Desc1: "", Desc2: "User validation", Desc3: "", TimeRequired: 1 },
    { ID: 3, Desc1: "Main Menu (Create/Read/Update/Delete)", Desc2: "", Desc3: "", TimeRequired: 1 },
    { ID: 4, Desc1: "", Desc2: "User info", Desc3: "", TimeRequired: 1 },
    { ID: 5, Desc1: "", Desc2: "Company info", Desc3: "", TimeRequired: 1 },
    { ID: 6, Desc1: "", Desc2: "Employee", Desc3: "", TimeRequired: 1 },
    { ID: 7, Desc1: "", Desc2: "Employee categories", Desc3: "", TimeRequired: 1 },
    { ID: 8, Desc1: "", Desc2: "Attachment categories", Desc3: "", TimeRequired: 1 },
    { ID: 9, Desc1: "", Desc2: "Profile items", Desc3: "", TimeRequired: 1 },
    { ID: 10, Desc1: "", Desc2: "", Desc3: "Nationality", TimeRequired: 1 },
    { ID: 11, Desc1: "", Desc2: "", Desc3: "Position", TimeRequired: 1 },
    { ID: 12, Desc1: "", Desc2: "", Desc3: "Race", TimeRequired: 1 },
    { ID: 13, Desc1: "", Desc2: "", Desc3: "Religion", TimeRequired: 1 },
    { ID: 14, Desc1: "", Desc2: "", Desc3: "Skill", TimeRequired: 1 },
    { ID: 15, Desc1: "", Desc2: "", Desc3: "Hobby", TimeRequired: 1 },
    { ID: 16, Desc1: "", Desc2: "Salary basic", Desc3: "", TimeRequired: 1 },
    { ID: 17, Desc1: "", Desc2: "Salart item categories", Desc3: "", TimeRequired: 1 },
    { ID: 18, Desc1: "", Desc2: "", Desc3: "Leave", TimeRequired: 1 },
    { ID: 19, Desc1: "", Desc2: "", Desc3: "Overtime", TimeRequired: 1 },
    { ID: 20, Desc1: "", Desc2: "", Desc3: "Benefit in value", TimeRequired: 1 },
    { ID: 21, Desc1: "", Desc2: "", Desc3: "Benefit in kind", TimeRequired: 1 },
    { ID: 22, Desc1: "", Desc2: "Salary structure", Desc3: "", TimeRequired: 1 },
    { ID: 23, Desc1: "", Desc2: "Public holidays", Desc3: "", TimeRequired: 1 },
    { ID: 24, Desc1: "", Desc2: "Reimbursement", Desc3: "", TimeRequired: 1 },
    { ID: 25, Desc1: "", Desc2: "Bonus", Desc3: "", TimeRequired: 1 },
    { ID: 26, Desc1: "", Desc2: "Loan", Desc3: "", TimeRequired: 1 },
    { ID: 27, Desc1: "", Desc2: "Bank info", Desc3: "", TimeRequired: 1 },
    { ID: 28, Desc1: "", Desc2: "Statutory items", Desc3: "", TimeRequired: 1 },
    { ID: 29, Desc1: "", Desc2: "", Desc3: "EPF", TimeRequired: 1 },
    { ID: 30, Desc1: "", Desc2: "", Desc3: "SOCSO", TimeRequired: 1 },
    { ID: 31, Desc1: "", Desc2: "", Desc3: "Income Tax", TimeRequired: 1 },
    { ID: 32, Desc1: "", Desc2: "", Desc3: "HRDF", TimeRequired: 1 },
    { ID: 33, Desc1: "", Desc2: "", Desc3: "SKHPPA", TimeRequired: 1 },
    { ID: 34, Desc1: "", Desc2: "", Desc3: "FOMEMA", TimeRequired: 1 },
    { ID: 35, Desc1: "", Desc2: "", Desc3: "Levy", TimeRequired: 1 },
    { ID: 36, Desc1: "Main Menu (Process)", Desc2: "", Desc3: "", TimeRequired: 1 },
    { ID: 37, Desc1: "", Desc2: "Mid-month", Desc3: "", TimeRequired: 1 },
    { ID: 38, Desc1: "", Desc2: "End-month", Desc3: "", TimeRequired: 1 },
    { ID: 39, Desc1: "", Desc2: "Year-end", Desc3: "", TimeRequired: 1 },
    { ID: 40, Desc1: "Output", Desc2: "", Desc3: "", TimeRequired: 1 },
    { ID: 41, Desc1: "", Desc2: "Document", Desc3: "", TimeRequired: 1 },
    { ID: 42, Desc1: "", Desc2: "", Desc3: "Payslip - Mid-Month", TimeRequired: 1 },
    { ID: 43, Desc1: "", Desc2: "", Desc3: "Payslip - End-Month", TimeRequired: 1 },
    { ID: 44, Desc1: "", Desc2: "Reports", Desc3: "", TimeRequired: 1 },
    { ID: 45, Desc1: "", Desc2: "", Desc3: "EPF Borang A", TimeRequired: 1 },
    { ID: 46, Desc1: "", Desc2: "", Desc3: "SOCSO Borang 2", TimeRequired: 1 },
    { ID: 47, Desc1: "", Desc2: "", Desc3: "SOCSO Borang 3", TimeRequired: 1 },
    { ID: 48, Desc1: "", Desc2: "", Desc3: "SOCSO Borang 8A", TimeRequired: 1 },
    { ID: 49, Desc1: "", Desc2: "", Desc3: "Income Tax - Borang E", TimeRequired: 1 },
    { ID: 50, Desc1: "", Desc2: "", Desc3: "Income Tax - Borang EA", TimeRequired: 1 },
    { ID: 51, Desc1: "", Desc2: "", Desc3: "Income Tax - Borang CP39 p1", TimeRequired: 1 },
    { ID: 52, Desc1: "", Desc2: "", Desc3: "Income Tax - Borang CP39 p2", TimeRequired: 1 },
    { ID: 53, Desc1: "", Desc2: "", Desc3: "Income Tax - CP22A", TimeRequired: 1 },
    { ID: 54, Desc1: "", Desc2: "", Desc3: "Income Tax - CP159", TimeRequired: 1 },
    { ID: 55, Desc1: "", Desc2: "", Desc3: "Other Internal Report", TimeRequired: 1 },
    { ID: 56, Desc1: "", Desc2: "Report builder", Desc3: "", TimeRequired: 1 },
    { ID: 57, Desc1: "System Operation", Desc2: "", Desc3: "", TimeRequired: 1 },
    { ID: 58, Desc1: "", Desc2: "User profile and authority", Desc3: "", TimeRequired: 1 },
    { ID: 59, Desc1: "", Desc2: "Backup", Desc3: "", TimeRequired: 1 },
    { ID: 60, Desc1: "", Desc2: "Restore", Desc3: "", TimeRequired: 1 },
    { ID: 61, Desc1: "", Desc2: "Interface with other systems", Desc3: "", TimeRequired: 1 },
    { ID: 62, Desc1: "Database design", Desc2: "", Desc3: "", TimeRequired: 1 }

]
// const arrytasklist2 = [
//     {
//         ID: 1,
//         Description: 'Pages to populate tables',
//         TimeRequired:1
//     },
//     {
//         ID: 2,
//         Description: 'Pages to enter live data',
//         TimeRequired:1
//     },
//     {
//         ID: 3,
//         Description: 'Output: Payslip, Government Forms, Reporting',
//         TimeRequired:1
//     },
//     {
//         ID: 4,
//         Description: 'Pages to initiate process - half-monthly and monthly',
//         TimeRequired:1
//     },
//     {
//         ID: 5,
//         Description: 'One API for each statutory requirement',
//         TimeRequired:1
//     },
//     {
//         ID: 6,
//         Description: 'Pages to input internal formulae and live data',
//         TimeRequired:1
//     },
//     {
//         ID: 7,
//         Description: 'One API for each type of document / form / report',
//         TimeRequired:1
//     },
//     {
//         ID: 7,
//         Description: 'One API for each type of document / form / report',
//         TimeRequired:1
//     },
//     {
//         ID: 8,
//         Description: 'One API for each process - half-monthly and monthly',
//         TimeRequired:1
//     },
//     {
//         ID: 9,
//         Description: 'Database Design',
//         TimeRequired:1
//     }
// ];


let objparam = vssfnc_tablepopulate_param();
// objparam.caption = "Entity";
objparam.htmltable = tasklist;
objparam.htmltableid = 'tasklist';
objparam.arryjsondata = arrytasklist;
// objparam.arryheadercol = [['Task ID', '10%', 0], ['Description', '80%',], ['Time', '10%', 0]];
objparam.arryheadercol = [['Task ID', '5%', 0], ['User Interface', '30%',], ['API L1', '20%',], ['API L2', '40%',], ['Time Required', '5%', 0]];
objparam.arryfooter = ['Item Count']
objparam.arrydataid = ['table', ''];
objparam.arryclass = ['tablerow', 'tableheadercol', 'tabledatarow', 'tabledatarowbutton'];
objparam.arryclassdatarow = ['narbartabletrodd', 'narbartabletreven', 'narbartabletrselected'];
objparam.arrysortind = [' (v)', ' (^)'];
objparam.addbutton = false;
// objparam.fncdatarowclicked = datarowclicked;
vssfnc_tablepopulate(objparam);