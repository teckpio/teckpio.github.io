const tasklist = document.getElementById('tasklist');


const arrytasklist = [
    {
        ID: 1,
        Description: 'Pages to populate tables'
    },
    {
        ID: 2,
        Description: 'Pages to enter live data'
    },
    {
        ID: 3,
        Description: 'Output: Payslip, Government Forms, Reporting'
    },
    {
        ID: 4,
        Description: 'Pages to initiate process - half-monthly and monthly'
    },
    {
        ID: 5,
        Description: 'One API for each statutory requirement'
    },
    {
        ID: 6,
        Description: 'Pages to input internal formulae and live data'
    },
    {
        ID: 7,
        Description: 'One API for each type of document / form / report'
    },
    {
        ID: 7,
        Description: 'One API for each type of document / form / report'
    },
    {
        ID: 8,
        Description: 'One API for each process - half-monthly and monthly'
    },
    {
        ID: 9,
        Description: 'Database Design'
    }
];


let objparam = vssfnc_tablepopulate_param();
// objparam.caption = "Entity";
objparam.htmltable = tasklist;
objparam.htmltableid = 'tasklist';
objparam.arryjsondata = arrytasklist;
objparam.arryheadercol = [['Task ID', '20%', 0], ['Description', '80%',]];
objparam.arryfooter = ['Item Count']
objparam.arrydataid = ['table', ''];
objparam.arryclass = ['tablerow', 'tableheadercol', 'tabledatarow', 'tabledatarowbutton'];
objparam.arryclassdatarow = ['narbartabletrodd', 'narbartabletreven', 'narbartabletrselected'];
objparam.arrysortind = [' (v)', ' (^)'];
objparam.addbutton = false;
// objparam.fncdatarowclicked = datarowclicked;
vssfnc_tablepopulate(objparam);