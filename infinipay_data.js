// sample data //

var employee = [
    { ID: '101', Name: 'M Adam', PayType: 'Monthly', Address1: '33, Jalan K', Address2: '', Address3: '', IC: '890910-08-1289', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '101' },
    { ID: '102', Name: 'E Michael', PayType: 'Monthly', Address1: '68, Jalan Long', Address2: '', Address3: '', IC: '897998-08-8798', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '102' },
    { ID: '104', Name: 'Lee Meng', PayType: 'Monthly', Address1: '6, Jalan Mid Road', Address2: '', Address3: '', IC: '901098-08-8798', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '104' },
    { ID: '105', Name: 'Siti N', PayType: 'Monthly', Address1: '36, Jalan KKM', Address2: '', Address3: '', IC: '091810-08-1289', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '105' },
    { ID: '106', Name: 'Tan Ah Loong', PayType: 'Monthly', Address1: '8, Jalan Short', Address2: '', Address3: '', IC: '635798-08-8798', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '105' }
]

var employeeitem = [
    { ID: '', Name: 'ID' },
    { ID: '', Name: 'Name' },
    { ID: '', Name: 'PayType' },
    { ID: '', Name: 'Address1' },
    { ID: '', Name: 'Address2' },
    { ID: '', Name: 'Address3' },
    { ID: '', Name: 'IC' },
    { ID: '', Name: 'Passport' },
    { ID: '', Name: 'Tel1' },
    { ID: '', Name: 'Tel2' },
    { ID: '', Name: 'Permit' },
    { ID: '', Name: 'Marital' },
    { ID: '', Name: 'DateOfBirth' },
    { ID: '', Name: 'Nationality' },
    { ID: '', Name: 'Religion' },
    { ID: '', Name: 'Race' },
    { ID: '', Name: 'PayProfile' }
]

var payprofile = [
    { ID: '101', Name: 'Managerial', Accomodation: 'Yes', CompanyCar: 'Yes' },
    { ID: '102', Name: 'Executive1', Accomodation: 'Yes', CompanyCar: 'No' },
    { ID: '103', Name: 'Executive2', Accomodation: 'Yes', CompanyCar: 'No' },
    { ID: '104', Name: 'Clerical', Accomodation: 'No', CompanyCar: 'No' },
    { ID: '105', Name: 'Production', Accomodation: 'No', CompanyCar: 'No' },
    { ID: '106', Name: 'Contract', Accomodation: 'No', CompanyCar: 'No' }
]


var payitem = [
    {
        ID: '101',
        Name: 'Monthly Basic',
        Remark: '',
        PayType: '',
        PayQty: 0, // if PayQty is non-0, CalcSheet quantity is igored and PayQty is defaulted to the value of PayItem:PayQty
        PayUnit: '101',

        // Range and RangeBase is optional to come up with a PerRate or Rate //
        Range: '',
        RangeBase: '', // RangeBase can be quantity of PayUnit (prefixed:1.) (check with CalcSheet) or value of PayItem (prefixed:2) (check with ProcessedPayItem) //
        RangeQty: '', // if RangeQty is speficied, pay_quantity in CalcSheet will be used as Range Criteria

        // when Rate (%) is specified, PerBase or PerBaseRate is used //
        // when PerBase is specified, processed amount of Base will be used //
        // when PerBaseRate is specified, Rate of Base (PayItem) will be used //
        PerRate: 0,
        PerBase: '',
        PerBaseRate: '',

        Rate: 2500, // the Amount to be applied to PayQuantity in the Payroll Process //

        // MinMax and ValidPeriod are checks on the processed value //
        MinMax: '',
        ValidPeriod: '',

        // link to AccruedItems //
        AccruedItem: '',

        // check with statutory requirement //
        StatRequired: ''
    },
    {
        ID: '102',
        Name: 'Daily Rate',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '101',
        Range: '',
        RangeBase: '',
        RangeQty: '',
        PerRate: 0,
        PerBase: '',
        PerBaseRate: '',
        Rate: 80,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '103',
        Name: 'Hourly Rate',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '106',
        Range: '',
        RangeBase: '',
        RangeQty: '',
        PerRate: 0,
        PerBase: '',
        PerBaseRate: '',
        Rate: 10,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '104',
        Name: 'Car Allowance',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '101',
        Range: '0,1000,50;1001,2500,80;2501,10000,10',
        RangeBase: '101',
        RangeQty: '',
        PerRate: 0,
        PerBase: '101',
        PerBaseRate: '',
        Rate: 0,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '105',
        Name: 'Full Attendance',
        Remark: '',
        PayType: '',
        PayQty: 1,
        PayUnit: '103',
        Range: '0,0,100;1,999,0',
        RangeBase: '',
        RangeQty: '103',
        PerRate: 0,
        PerBase: '',
        PerBaseRate: '',
        Rate: 0,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '106',
        Name: 'OT Rate1',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '107',
        Range: '',
        RangeBase: '',
        RangeQty: '',
        PerRate: 1.5,
        PerBase: '',
        PerBaseRate: '103',
        Rate: 0,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '107',
        Name: 'OT Rate2',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '108',
        Range: '',
        RangeBase: '',
        RangeQty: '',
        PerRate: 2,
        PerBase: '',
        PerBaseRate: '103',
        Rate: 0,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '108',
        Name: 'Contract Piece1',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '109',
        Range: '',
        RangeBase: '',
        RangeQty: '',
        PerRate: 0,
        PerBase: '',
        PerBaseRate: '',
        Rate: 0.20,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '109',
        Name: 'Contract Piece2',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '109',
        Range: '',
        RangeBase: '',
        RangeQty: '',
        PerBaseRate: '',
        PerRate: 0,
        PerBase: '',
        Rate: 0.30,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '110',
        Name: 'Mileage Claims',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '110',
        Range: '0,1000,.3;1001,3000,.2;3001,5000,.1',
        RangeBase: '110',
        RangeQty: '110',
        PerRate: 0,
        PerBase: '',
        PerBaseRate: '',
        Rate: 0,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '111',
        Name: 'Advance Deduction',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '110',
        Range: '0,1000,.3;1001,3000,.2;3001,5000,.1',
        RangeBase: '110',
        RangeQty: '',
        PerRate: 0,
        PerBase: '',
        PerBaseRate: '',
        Rate: 0,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '101',
        StatRequired: ''
    },
    {
        ID: '112',
        Name: 'Monthly Basic - Daily Rate',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '',
        Range: '',
        RangeBase: '',
        RangeQty: '',
        PerRate: 0.03846,
        PerBase: '',
        PerBaseRate: '101',
        Rate: 0,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '113',
        Name: 'No Pay Leave',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '103',
        Range: '',
        RangeBase: '',
        RangeQty: '',
        PerRate: 1,
        PerBase: '',
        PerBaseRate: '112',
        Rate: 0,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '114',
        Name: 'Transport Allowance',
        Remark: '',
        PayType: '',
        PayQty: 0,
        PayUnit: '102',
        Range: '',
        RangeBase: '',
        RangeQty: '',
        PerRate: 0,
        PerBase: '',
        PerBaseRate: '',
        Rate: 5,
        MinMax: '',
        ValidPeriod: '',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '115',
        Name: 'Festive Goodwill',
        Remark: '',
        PayType: '',
        PayQty: 1,
        PayUnit: '',
        Range: '',
        RangeBase: '',
        RangeQty: '',
        PerRate: 0,
        PerBase: '',
        PerBaseRate: '',
        Rate: 500,
        MinMax: '',
        ValidPeriod: '10-10-2019',
        AccruedItem: '',
        StatRequired: ''
    },
    {
        ID: '116',
        Name: 'Bonus',
        Remark: '',
        PayType: '',
        PayQty: 1,
        PayUnit: '',
        Range: '',
        RangeBase: '',
        RangeQty: '',
        PerRate: 2,
        PerBase: '101',
        PerBaseRate: '',
        Rate: 0,
        MinMax: '',
        ValidPeriod: '10-10-2019',
        AccruedItem: '',
        StatRequired: ''
    }
]

var payprofileitem = [
    { ID: '1', PayProfile: '101', PayItem: '101', PayRate: 5000 },
    { ID: '2', PayProfile: '101', PayItem: '104', PayRate: null },
    { ID: '3', PayProfile: '101', PayItem: '110', PayRate: null },
    { ID: '4', PayProfile: '101', PayItem: '113', PayRate: null },
    { ID: '5', PayProfile: '102', PayItem: '101', PayRate: null },
    { ID: '6', PayProfile: '102', PayItem: '104', PayRate: null },
    { ID: '7', PayProfile: '102', PayItem: '113', PayRate: null },
    { ID: '8', PayProfile: '103', PayItem: '102', PayRate: 50 },
    { ID: '9', PayProfile: '103', PayItem: '104', PayRate: null },
    { ID: '10', PayProfile: '102', PayItem: '110', PayRate: null },
    { ID: '11', PayProfile: '104', PayItem: '103', PayRate: null },
    { ID: '12', PayProfile: '104', PayItem: '101', PayRate: null },
    { ID: '13', PayProfile: '105', PayItem: '103', PayRate: null },
    { ID: '14', PayProfile: '105', PayItem: '106', PayRate: null },
    { ID: '15', PayProfile: '105', PayItem: '107', PayRate: null },
    { ID: '16', PayProfile: '105', PayItem: '105', PayRate: null },
    { ID: '17', PayProfile: '105', PayItem: '111', PayRate: null },
    { ID: '18', PayProfile: '105', PayItem: '108', PayRate: null },
    { ID: '19', PayProfile: '105', PayItem: '109', PayRate: null },
    { ID: '20', PayProfile: '105', PayItem: '114', PayRate: null },
    { ID: '21', PayProfile: '101', PayItem: '116', PayRate: null }
]

var statitem = [
    { ID: '101', Name: 'EPF', PersonInCharge: '' },
    { ID: '102', Name: 'SOCSO', PersonInCharge: '' },
    { ID: '104', Name: 'EIS', PersonInCharge: '' },
    { ID: '105', Name: 'PCB', PersonInCharge: '' },
    { ID: '106', Name: 'HRDF', PersonInCharge: '' },
    { ID: '107', Name: 'FOMEMA', PersonInCharge: 's' }
]

var statprofile = [
    { ID: '1', Name: 'Malaysian Age <60', StatItem: '101', Rate: '0,5000,11%,13%;5001,1000,11%,12%' },
    { ID: '2', Name: 'Malaysian Age >=60', StatItem: '101', Rate: '0,100000,0%,4%' },
    { ID: '3', Name: 'Non-Malaysian Age <60', StatItem: '101', Rate: '0,5000,11%,13%;5001,10000,11%,12%' },
    { ID: '4', Name: 'Non-Malaysian Age >=60', StatItem: '101', Rate: '0,5000,5.5%,6.5%;5001,1000,5.5%,6%' },
    { ID: '5', Name: 'SOCSO', StatItem: '102', Rate: '0,30,.4,.1;31,50,.7,.2;51,70,1.1,.3' }
]

var statprofileiemployeeitem = [
    { ID: '1', StatProfile: '1', ProfileItem: 'Nationality', Operator: '=', Operand: '', Criteria: 'Malaysian' },
    { ID: '2', StatProfile: '1', ProfileItem: 'Birthdate', Operator: '-', Operand: 'Current Date', Criteria: '<60' },
    { ID: '3', StatProfile: '1', ProfileItem: 'NumberOfChildren', Operator: '#>', Operand: '', Criteria: '2' },
    { ID: '4', StatProfile: '1', ProfileItem: 'NumberOfChildren', Operator: '$>', Operand: '', Criteria: '18' },
    { ID: '5', StatProfile: '2', ProfileItem: 'Nationality', Operator: '=', Operand: '', Criteria: 'Malaysian' },
    { ID: '6', StatProfile: '2', ProfileItem: 'Birthdate', Operator: '-', Operand: 'Current Date', Criteria: '>=60' },
    { ID: '7', StatProfile: '3', ProfileItem: 'Nationality', Operator: '=', Operand: '', Criteria: 'Malaysian' },
    { ID: '8', StatProfile: '3', ProfileItem: 'Birthdate', Operator: '-', Operand: 'Current Date', Criteria: '<60' },
    { ID: '9', StatProfile: '4', ProfileItem: 'Nationality', Operator: '=', Operand: '', Criteria: 'Malaysian' },
    { ID: '10', StatProfile: '4', ProfileItem: 'Birthdate', Operator: '-', Operand: 'Current Date', Criteria: '>=60' },
    { ID: '11', StatProfile: '5', ProfileItem: 'Nationality', Operator: '=', Operand: '', Criteria: 'Malaysian' }
]

var accrueditem = [
    { ID: '101', Name: 'Advance', Date: '', Balance: 0 },
    { ID: '102', Name: 'Loan', Date: '', Balance: 0 },
    { ID: '104', Name: 'Ex-Gratia', Date: '', Balance: 0 },
    { ID: '105', Name: 'Retirement', Date: '', Balance: 0 }
]

var payunit = [
    { ID: '101', Name: 'pay_month' },
    { ID: '102', Name: 'pay_day' },
    { ID: '103', Name: 'npl_day' },
    { ID: '104', Name: 'abs_day' },
    { ID: '105', Name: 'pbh_day' },
    { ID: '106', Name: 'pay_hour' },
    { ID: '107', Name: 'ot_hour1' },
    { ID: '108', Name: 'ot_hour2' },
    { ID: '109', Name: 'contract_pcs' },
    { ID: '110', Name: 'mileage' }
]

var payprocess = [
    { ID: '101', Name: 'Mid-Month Process', Setting1: '', Setting2: '' },
    { ID: '102', Name: 'End-Month Process', Setting1: '', Setting2: '' },
    { ID: '103', Name: 'Year-End Process', Setting1: '', Setting2: '' }
]

var calcsheet = [
    {
        ID: '1',
        Employee: '101',
        pay_quantity: [['101', 1], ['102', 26], ['103', 1], ['104', 0], ['105', 0], ['106', 0], ['107', 0], ['108', 0], ['109', 0], ['110', 0]]
    },
    {
        ID: '2',
        Employee: '102',
        pay_quantity: [['101', 1], ['102', 25], ['103', 1], ['104', 0], ['105', 0], ['106', 0], ['107', 0], ['108', 0], ['109', 0], ['110', 500]]
    },
    {
        ID: '3',
        Employee: '104',
        pay_quantity: [['101', 1], ['102', 24], ['103', 0], ['104', 0], ['105', 0], ['106', 0], ['107', 0], ['108', 0], ['109', 0], ['110', 0]]
    },
    {
        ID: '4',
        Employee: '105',
        pay_quantity: [['101', 1], ['102', 22], ['103', 0], ['104', 0], ['105', 0], ['106', 100], ['107', 5], ['108', 3], ['109', 1000], ['110', 0]]
    },
    {
        ID: '5',
        Employee: '106',
        pay_quantity: [['101', 1], ['102', 23], ['103', 1], ['104', 0], ['105', 0], ['106', 90], ['107', 5], ['108', 3], ['109', 2000], ['110', 0]]
    }
];


