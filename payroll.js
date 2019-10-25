const tasklist = document.getElementById('tasklist');
const payrateextract = document.getElementById('payrateextract');
const systembuild = document.getElementById('systembuild');
const payitem = document.getElementById('payitem');



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

const arrypayrateextract = [
    {
        'ProfilePayItem PayRate':'r',
        'PayItem Rate': '',
        'PayItem Per + PerBase': '',
        'PayItem Range + RangeBase': '',
        'PayItem PayUnit (if null -> PayQty defaulted to 1)': 'q',
        'Processed PayQty of PayItem PayUnit':'q',
        'Processed PayAmount (if null -> PayItem Rate)':'',
        'PayRate':'R',
        'PayQty':'Q'
    },
    {
        'ProfilePayItem PayRate':'',
        'PayItem Rate': 'r',
        'PayItem Per + PerBase': '',
        'PayItem Range + RangeBase': '',
        'PayItem PayUnit (if null -> Processed PayQty ignored and PayQty defaulted to 1)': 'q',
        'Processed PayQty of PayItem PayUnit':'q',
        'Processed PayAmount (if null -> PayItem Rate)':'',
        'PayRate':'R',
        'PayQty':'Q'
    },
    {
        'ProfilePayItem PayRate':'',
        'PayItem Rate': '',
        'PayItem Per + PerBase': 'r',
        'PayItem Range + RangeBase': '',
        'PayItem PayUnit (if null -> Processed PayQty ignored and PayQty defaulted to 1)': 'q',
        'Processed PayQty of PayItem PayUnit':'q',
        'Processed PayAmount (if null -> PayItem Rate)':'r',
        'PayRate':'R',
        'PayQty':'Q'
    },
    {
        'ProfilePayItem PayRate':'',
        'PayItem Rate': '',
        'PayItem Per + PerBase': '',
        'PayItem Range + RangeBase ($ OR %)': 'r',
        'PayItem PayUnit (if null -> Processed PayQty ignored and PayQty defaulted to 1)': 'q',
        'Processed PayQty of PayItem PayUnit':'q',
        'Processed PayAmount (if null -> PayItem Rate)':'r',
        'PayRate':'R',
        'PayQty':'Q'
    }
]

const arrysystembuild = [
    // employee //
    { Object: "Empoyee", Desc: "Personal Info of Employee and tags to stat items", Built: "Employees" },

    // pay item //
    { Object: "Pay Item", Desc: "Pay item with info on:", Built: "Pay Items to be attached to Pay Profile" },
    { Object: "", Desc: "1. how pay quantity is extracted (user input / generated by Calc Sheet)", Built: "" },
    { Object: "", Desc: "2. the pay rate to apply to the extracted pay quantity.", Built: "" },
    { Object: "", Desc: "Properties include: valid period", Built: "" },

    // pay profile //
    { Object: "Pay Profile", Desc: "A list of Pay Items", Built: "A list of Pay Items to be attached to Employees" },
    { Object: "", Desc: "Properties include: valid period", Built: "" },

    // calc sheet //
    { Object: "Calc Sheet", Desc: "A formula to convert work time recorded to pay quantity", Built: "A set of formula to be attached to Employees to convert actual work time recorded to Pay Quantity to be used for payroll processing" },
    { Object: "", Desc: "", Built: "eg of pay units: pay_month," },
    { Object: "", Desc: "", Built: "pay_day, npl_day, al_day, travel_day," },
    { Object: "", Desc: "", Built: "pay_shift, pay_shift1, pay_shift2," },
    { Object: "", Desc: "", Built: "pay_hour, ot_hour1, ot_hour2," },
    { Object: "", Desc: "", Built: "pay_piece1, pay_piece2" },

    // process //
    { Object: "Payroll Process1", Desc: "A process which takes as input from 1. Pay Item (for pay rate) and 2. Calc Sheet (for pay quantity) and process tha pay amount", Built: "* hard-coded" },
    { Object: "Payroll Process2", Desc: "Takes the output from Payroll Process1 and applies stat requirements", Built: "* hard-coded" },
    { Object: "Payroll Process3", Desc: "Checks with Leave Management for any required calculation", Built: "* hard-coded" }
]

const arrypayitem = [
    { Item: "Monthly Basic", Quantity: "pay_month", Rate: 5000, Base: "" },
    { Item: "Daily Basic", Quantity: "pay_day", Rate: 40, Base: "" },
    { Item: "Hourly Rate1", Quantity: "pay_hour1", Rate: 4, Base: "" },
    { Item: "Hourly Rate2", Quantity: "pay_hour2", Rate: 4.50, Base: "" },
    { Item: "Piece Rate 1", Quantity: "pay_piece1", Rate: 0.80, Base: "" },
    { Item: "Piece Rate 2", Quantity: "pay_piece2", Rate: 1.00, Base: "" },
    { Item: "Car Allowance", Quantity: "pay_month", Rate: 5000, Base: "" },
    { Item: "Meal Allowance", Quantity: "pay_month", Rate: "1000-2000: 200", Base: "Monthly Basic" },
    { Item: "", Quantity: "", Rate: "2001-3000: 250", Base: "" },
    { Item: "", Quantity: "", Rate: "3001-?: 300", Base: "" },
    { Item: "Mileage Claims", Quantity: "*User Input", Rate: "0-300: 0.20", Base: "Mileage Claims" },
    { Item: "", Quantity: "", Rate: "301-?: 0.15", Base: "" },
    { Item: "Full Attendance", Quantity: "npl_day", Rate: "0: 500", Base: "" },
    { Item: "", Quantity: "", Rate: "1-?: 0", Base: "" },
    { Item: "OT Hour1", Quantity: "ot_hour1", Rate: 6.00, Base: "" },
    { Item: "OT Hour2", Quantity: "ot_hour2", Rate: 9.00, Base: "" }
]

// task list //
///////////////
let objparam = vssfnc_tablepopulate_param();
objparam.htmltable = tasklist;
objparam.htmltableid = 'tasklist';
objparam.arryjsondata = arrytasklist;
objparam.arryheadercol = [['Task ID', '5%', 0], ['User Interface', '30%',], ['API L1', '20%',], ['API L2', '40%',], ['Time Required', '5%', 0]];
objparam.arryfooter = ['Item Count']
objparam.arrydataid = ['table', ''];
objparam.arryclass = ['tablerow', 'tableheadercol', 'tabledatarow', 'tabledatarowbutton'];
objparam.arryclassdatarow = ['narbartabletrodd', 'narbartabletreven', 'narbartabletrselected'];
objparam.arrysortind = [' (v)', ' (^)'];
objparam.addbutton = false;
// objparam.fncdatarowclicked = datarowclicked;
vssfnc_tablepopulate(objparam);


// system building //
/////////////////////
objparam = vssfnc_tablepopulate_param();
// objparam.caption = "Entity";
objparam.htmltable = systembuild;
objparam.htmltableid = 'systembuild';
objparam.arryjsondata = arrysystembuild;
objparam.arryheadercol = [['Object', '20%', -1], ['Description', '60%',], ['Built', '20%',]];
objparam.arryfooter = ['Item Count']
objparam.arrydataid = ['table', ''];
objparam.arryclass = ['tablerow', 'tableheadercol', 'tabledatarow', 'tabledatarowbutton'];
objparam.arryclassdatarow = ['narbartabletrodd', 'narbartabletreven', 'narbartabletrselected'];
objparam.arrysortind = [' (v)', ' (^)'];
objparam.addbutton = false;
// objparam.fncdatarowclicked = datarowclicked;
vssfnc_tablepopulate(objparam);

// pay rate extract //
/////////////////////
objparam = vssfnc_tablepopulate_param();
objparam.htmltable = payrateextract;
objparam.htmltableid = 'payrateextract';
objparam.arryjsondata = arrypayrateextract;
// objparam.arryheadercol = [['Task ID', '5%', 0], ['User Interface', '30%',], ['API L1', '20%',], ['API L2', '40%',], ['Time Required', '5%', 0]];
objparam.arryfooter = ['Item Count']
objparam.arrydataid = ['table', ''];
objparam.arryclass = ['tablerow', 'tableheadercol', 'tabledatarow', 'tabledatarowbutton'];
objparam.arryclassdatarow = ['narbartabletrodd', 'narbartabletreven', 'narbartabletrselected'];
objparam.arrysortind = [' (v)', ' (^)'];
objparam.addbutton = false;
vssfnc_tablepopulate(objparam);

// pay item //
/////////////////////
objparam = vssfnc_tablepopulate_param();
// objparam.caption = "Entity";
objparam.htmltable = payitem;
objparam.htmltableid = 'payitem';
objparam.arryjsondata = arrypayitem;
objparam.arryheadercol = [['Item', '40%', -1], ['Quantity', '20%',], ['Rate', '20%',], ['Base', '20%',]];
objparam.arryfooter = ['Item Count']
objparam.arrydataid = ['table', ''];
objparam.arryclass = ['tablerow', 'tableheadercol', 'tabledatarow', 'tabledatarowbutton'];
objparam.arryclassdatarow = ['narbartabletrodd', 'narbartabletreven', 'narbartabletrselected'];
objparam.arrysortind = [' (v)', ' (^)'];
objparam.addbutton = false;
// objparam.fncdatarowclicked = datarowclicked;
vssfnc_tablepopulate(objparam);
