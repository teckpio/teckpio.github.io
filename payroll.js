const tasklist = document.getElementById('tasklist');


const arrytasklist = [
    {
        ID: 1,
        Description: 'Pages to populate tables',
        TimeRequired:1
    },
    {
        ID: 2,
        Description: 'Pages to enter live data',
        TimeRequired:1
    },
    {
        ID: 3,
        Description: 'Output: Payslip, Government Forms, Reporting',
        TimeRequired:1
    },
    {
        ID: 4,
        Description: 'Pages to initiate process - half-monthly and monthly',
        TimeRequired:1
    },
    {
        ID: 5,
        Description: 'One API for each statutory requirement',
        TimeRequired:1
    },
    {
        ID: 6,
        Description: 'Pages to input internal formulae and live data',
        TimeRequired:1
    },
    {
        ID: 7,
        Description: 'One API for each type of document / form / report',
        TimeRequired:1
    },
    {
        ID: 7,
        Description: 'One API for each type of document / form / report',
        TimeRequired:1
    },
    {
        ID: 8,
        Description: 'One API for each process - half-monthly and monthly',
        TimeRequired:1
    },
    {
        ID: 9,
        Description: 'Database Design',
        TimeRequired:1
    }
];


let objparam = vssfnc_tablepopulate_param();
// objparam.caption = "Entity";
objparam.htmltable = tasklist;
objparam.htmltableid = 'tasklist';
objparam.arryjsondata = arrytasklist;
objparam.arryheadercol = [['Task ID', '10%', 0], ['Description', '80%',], ['Time', '10%',0]];
objparam.arryfooter = ['Item Count']
objparam.arrydataid = ['table', ''];
objparam.arryclass = ['tablerow', 'tableheadercol', 'tabledatarow', 'tabledatarowbutton'];
objparam.arryclassdatarow = ['narbartabletrodd', 'narbartabletreven', 'narbartabletrselected'];
objparam.arrysortind = [' (v)', ' (^)'];
objparam.addbutton = false;
// objparam.fncdatarowclicked = datarowclicked;
vssfnc_tablepopulate(objparam);