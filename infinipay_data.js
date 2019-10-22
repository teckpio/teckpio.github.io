// sample data //

var employee = [
    { ID: '101', Name: 'Ali Ali', PayType: 'Monthly', Address1: '33, Jalan K', Address2: '', Address3: '', IC: '890910-08-1289', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '101' },
    { ID: '102', Name: 'Muthu', PayType: 'Monthly', Address1: '68, Jalan Long', Address2: '', Address3: '', IC: '897998-08-8798', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '102' },
    { ID: '104', Name: 'Ah Meng', PayType: 'Monthly', Address1: '6, Jalan Mid Road', Address2: '', Address3: '', IC: '901098-08-8798', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '104' },
    { ID: '105', Name: 'Siti', PayType: 'Monthly', Address1: '36, Jalan KKM', Address2: '', Address3: '', IC: '091810-08-1289', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '103' },
    { ID: '106', Name: 'Ah Loong', PayType: 'Monthly', Address1: '8, Jalan Short', Address2: '', Address3: '', IC: '635798-08-8798', Passport: '', Tel1: '05-2550909', Tel2: '', Permit: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '103' }
]

var payprofile = [
    { ID: '101', Name: 'Managerial', Accomodation: 'Yes', CompanyCar: 'Yes' },
    { ID: '102', Name: 'Executive1', Accomodation: 'Yes', CompanyCar: 'No' },
    { ID: '104', Name: 'Executive2', Accomodation: 'Yes', CompanyCar: 'No' },
    { ID: '103', Name: 'Clerical', Accomodation: 'No', CompanyCar: 'No' }
]

var payprofileitem = [
    { ID: '1', PayProfile: '101', PayItem: '101', PayRate: 5500 },
    { ID: '2', PayProfile: '101', PayItem: '103', PayRate: null },
    { ID: '3', PayProfile: '101', PayItem: '106', PayRate: null },
    { ID: '4', PayProfile: '102', PayItem: '101', PayRate: 3000 },
    { ID: '5', PayProfile: '102', PayItem: '103', PayRate: null },
    { ID: '6', PayProfile: '103', PayItem: '102', PayRate: 50 },
    { ID: '5', PayProfile: '103', PayItem: '104', PayRate: null },
    { ID: '7', PayProfile: '104', PayItem: '101', PayRate: 3500 },
    { ID: '8', PayProfile: '104', PayItem: '103', PayRate: null },
]

var payitem = [
    { ID: '101', Name: 'Monthly Basic', Remark: '', PayType: 'Monthly', PayUnit: '101', Rate: 2500, RateBase: '101' },

    { ID: '102', Name: 'Daily Rated', Remark: '', PayType: 'Daily', PayUnit: '102', Rate: 50, RateBase: '102' },

    { ID: '103', Name: 'Car Allowance', Remark: '', PayType: 'Monthly', PayUnit: '101', Rate: [[1000, 3000, 300], [3001, 5000, 500], [5001, 10000, 800]], RateBase: '101' },

    { ID: '104', Name: 'Car Allowance2', Remark: '', PayType: 'Monthly', PayUnit: '101', Rate: [[1000, 3000, 200], [3001, 5000, 300], [5001, 10000, 500]], RateBase: '102' },

    { ID: '105', Name: 'Mileage Claims', Remark: '', PayType: 'Monthly', PayUnit: '101', Rate: [[2000, 3000, 350], [3001, 5000, 550], [5001, 10000, 850]], RateBase: '105' },

    { ID: '106', Name: 'Travelling Allowance', Remark: '', PayType: 'Monthly', PayUnit: '101', Rate: [[2000, 3000, 100], [3001, 5000, 150], [5001, 10000, 200]], RateBase: '101' }
]

var statitem = [
    { ID: '101', Name: 'EPF' },
    { ID: '102', Name: 'SOCSO' },
    { ID: '104', Name: 'EIS' },
    { ID: '105', Name: 'HRDF' },
    { ID: '106', Name: 'FOMEMA' }
]

var payunit = [
    { ID: '101', Name: 'pay_month' },
    { ID: '102', Name: 'pay_day' },
    { ID: '103', Name: 'npl_day' },
    { ID: '104', Name: 'abs_day' },
    { ID: '105', Name: 'pbh_day' },
    { ID: '106', Name: 'pay_hour' },
    { ID: '107', Name: 'ot_hour1' },
    { ID: '108', Name: 'ot_hour2' }
]

var calcsheet = [
    {
        ID: '1',
        Employee: '101',
        pay_quantity: [['101', 1], ['102', 26]]
    },
    {
        ID: '2',
        Employee: '102',
        pay_quantity: [['101', 1], ['102', 25]]
    },
    {
        ID: '3',
        Employee: '104',
        pay_quantity: [['101', 1], ['102', 24]]
    },
    {
        ID: '4',
        Employee: '105',
        pay_quantity: [['101', 1], ['102', 22], ['107', 5], ['108', 3]]
    },
    {
        ID: '5',
        Employee: '106',
        pay_quantity: [['101', 1], ['102', 23]]
    }
];


