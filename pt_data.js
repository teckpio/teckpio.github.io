const DataObjID = {
    Employee: 0,
    PayItem: 1,
    PayProfile: 2,
    AccruedItem: 3,
    StatItem: 4,
    PayUnit: 5,
    WorkSheet: 6,
    PayProcess: 7,
    Output: 8,
    // composite data object
    PayProfileItem: 9,
    StatProfile: 10,
    StatProfileItem: 11,
    EmployeeProfile: 12,
    EmployeeProfileOption: 13,
    EmployeeProfileItem: 14,
    ProfileItemComparer: 15,
    Payroll: 16,
    WorkSheetItem: 17,
    PayItemXStatItem: 18
}


const DataColIndex = { FieldName: 0, DisplayText: 1, Required: 2, DataType: 3 }

// const DataObj = {
//     EmployeeParticulars: {
//         DataCol: [
//             ['ID', 'ID', false, 'text'],
//             ['Name', 'Name', false, 'text'],
//             ['PayProfile', 'Pay Profile', false, DataObjID.PayProfile]
//         ],
//         URL: {
//             List: 'http://localhost:49951/data/employeelist',
//             Get: 'http://localhost:49951/data/employeelist',
//             Add: 'http://localhost:49951/data/employeepost',
//             Update: 'http://localhost:49951/data/employeepost'
//         }
//     }
// }

const SampleRouteData = [
    { 'vnum': 'AHW8868', 'status': 'x', 'in': 'c' },
    { 'vnum': 'AEK8899', 'status': 'o', 'in': 'c' },
    { 'vnum': 'BBC889', 'status': 'x', 'in': 'c' },
    { 'vnum': 'BEK8899', 'status': 'x', 'in': 'c' },
    { 'vnum': 'CHW8868', 'status': 'o', 'in': 'c' },
    { 'vnum': 'DBC889', 'status': 'o', 'in': 'c' },
    { 'vnum': 'AEK6127', 'status': 'x', 'in': 'c' },
    { 'vnum': 'AHW8791', 'status': 'x', 'in': 'c' },
    { 'vnum': 'PBC617', 'status': 'o', 'in': 'c' },
    { 'vnum': 'PEK9801', 'status': 'o', 'in': 'c' },
    { 'vnum': 'AHW5646', 'status': 'o', 'in': 'c' },
    { 'vnum': 'BBC912', 'status': 'x', 'in': 'c' },
    { 'vnum': 'WEK567', 'status': 'o', 'in': 'c' },
    { 'vnum': 'BHW9182', 'status': 'x', 'in': 'c' },
    { 'vnum': 'PBd615', 'status': 'o', 'in': 'c' },
    { 'vnum': 'PEJ9802', 'status': 'o', 'in': 'c' },
    { 'vnum': 'AHH5647', 'status': 'o', 'in': 'c' },
    { 'vnum': 'BBD913', 'status': 'x', 'in': 'c' },
    { 'vnum': 'BBC6633', 'status': 'x', 'in': 'c' }
]

const SampleEmployeeData = [
    { ID: '101', Code: '101', Name: 'M Adam', Password: 'Position', Employment: '33, Jalan K', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '890910-08-1289', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '101', Picture: 'who1.jpg' },
    { ID: '102', Code: '101', Name: 'E Michael', Password: 'Position', Employment: '68, Jalan Long', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '897998-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '102', Picture: 'who2.jpg' },
    { ID: '104', Code: '101', Name: 'Lee Meng', Password: 'Position', Employment: '6, Jalan Mid Road', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '901098-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '104', Picture: 'who3.jpg' },
    { ID: '105', Code: '101', Name: 'Siti N', Password: 'Position', Employment: '36, Jalan KKM', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '091810-08-1289', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '105', Picture: 'who4.jpg' },
    { ID: '106', Code: '101', Name: 'Tan Ah Loong', Password: 'Position', Employment: '8, Jalan Short', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '635798-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '105', Picture: 'who5.jpg' }
]

const APADReport1 = [
    { ID: '101', Code: '101', Name: 'M Adam', Password: 'Position', Employment: '33, Jalan K', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '890910-08-1289', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '101' },
    { ID: '102', Code: '101', Name: 'E Michael', Password: 'Position', Employment: '68, Jalan Long', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '897998-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '102' },
    { ID: '104', Code: '101', Name: 'Lee Meng', Password: 'Position', Employment: '6, Jalan Mid Road', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '901098-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '104' },
    { ID: '105', Code: '101', Name: 'Siti N', Password: 'Position', Employment: '36, Jalan KKM', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '091810-08-1289', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '105' },
    { ID: '106', Code: '101', Name: 'Tan Ah Loong', Password: 'Position', Employment: '8, Jalan Short', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '635798-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '105' },
    { ID: '101', Code: '101', Name: 'M Adam', Password: 'Position', Employment: '33, Jalan K', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '890910-08-1289', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '101' },
    { ID: '102', Code: '101', Name: 'E Michael', Password: 'Position', Employment: '68, Jalan Long', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '897998-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '102' },
    { ID: '104', Code: '101', Name: 'Lee Meng', Password: 'Position', Employment: '6, Jalan Mid Road', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '901098-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '104' },
    { ID: '105', Code: '101', Name: 'Siti N', Password: 'Position', Employment: '36, Jalan KKM', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '091810-08-1289', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '105' },
    { ID: '101', Code: '101', Name: 'M Adam', Password: 'Position', Employment: '33, Jalan K', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '890910-08-1289', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '101' },
    { ID: '102', Code: '101', Name: 'E Michael', Password: 'Position', Employment: '68, Jalan Long', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '897998-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '102' },
    { ID: '104', Code: '101', Name: 'Lee Meng', Password: 'Position', Employment: '6, Jalan Mid Road', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '901098-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '104' },
    { ID: '105', Code: '101', Name: 'Siti N', Password: 'Position', Employment: '36, Jalan KKM', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '091810-08-1289', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '105' },
    { ID: '106', Code: '101', Name: 'Tan Ah Loong', Password: 'Position', Employment: '8, Jalan Short', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '635798-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '105' },
    { ID: '101', Code: '101', Name: 'M Adam', Password: 'Position', Employment: '33, Jalan K', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '890910-08-1289', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '101' },
    { ID: '102', Code: '101', Name: 'E Michael', Password: 'Position', Employment: '68, Jalan Long', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '897998-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '102' },
    { ID: '104', Code: '101', Name: 'Lee Meng', Password: 'Position', Employment: '6, Jalan Mid Road', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '901098-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '104' },
    { ID: '105', Code: '101', Name: 'Siti N', Password: 'Position', Employment: '36, Jalan KKM', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '091810-08-1289', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Malay', Religion: 'Islam', PayProfile: '105' },
    { ID: '106', Code: '101', Name: 'Tan Ah Loong', Password: 'Position', Employment: '8, Jalan Short', IC: '', Gender: 'F', Religion: 'Buddhist', Race: 'Chinese', Address: '', Joined: '635798-08-8798', Terminated: '', Contact: '05-2550909', Emergency: '', Sector: '', Marital: 'Married', DateOfBirth: '01012000', Nationality: 'Malaysian', Race: 'Chinese', Religion: 'Buddhist', PayProfile: '105' }

]

const APADReport2 = [
    { ID: '101', Code: '101', Name: 'M Adam', Password: 'Position', Employment: '33, Jalan K', IC: '', Gender: 'F' },
    { ID: '102', Code: '101', Name: 'E Michael', Password: 'Position', Employment: '68, Jalan Long', IC: '', Gender: 'F' },
    { ID: '104', Code: '101', Name: 'Lee Meng', Password: 'Position', Employment: '6, Jalan Mid Road', IC: '', Gender: 'F' },
    { ID: '105', Code: '101', Name: 'Siti N', Password: 'Position', Employment: '36, Jalan KKM', IC: '', Gender: 'F' },
    { ID: '106', Code: '101', Name: 'Tan Ah Loong', Password: 'Position', Employment: '8, Jalan Short', IC: '', Gender: 'F' },
    { ID: '101', Code: '101', Name: 'M Adam', Password: 'Position', Employment: '33, Jalan K', IC: '', Gender: 'F' },
    { ID: '102', Code: '101', Name: 'E Michael', Password: 'Position', Employment: '68, Jalan Long', IC: '', Gender: 'F' },
    { ID: '104', Code: '101', Name: 'Lee Meng', Password: 'Position', Employment: '6, Jalan Mid Road', IC: '', Gender: 'F' },
    { ID: '105', Code: '101', Name: 'Siti N', Password: 'Position', Employment: '36, Jalan KKM', IC: '', Gender: 'F' },
    { ID: '101', Code: '101', Name: 'M Adam', Password: 'Position', Employment: '33, Jalan K', IC: '', Gender: 'F' },
    { ID: '102', Code: '101', Name: 'E Michael', Password: 'Position', Employment: '68, Jalan Long', IC: '', Gender: 'F' },
    { ID: '104', Code: '101', Name: 'Lee Meng', Password: 'Position', Employment: '6, Jalan Mid Road', IC: '', Gender: 'F' },
    { ID: '105', Code: '101', Name: 'Siti N', Password: 'Position', Employment: '36, Jalan KKM', IC: '', Gender: 'F' },
    { ID: '106', Code: '101', Name: 'Tan Ah Loong', Password: 'Position', Employment: '8, Jalan Short', IC: '', Gender: 'F' },
    { ID: '101', Code: '101', Name: 'M Adam', Password: 'Position', Employment: '33, Jalan K', IC: '', Gender: 'F' },
    { ID: '102', Code: '101', Name: 'E Michael', Password: 'Position', Employment: '68, Jalan Long', IC: '', Gender: 'F' },
    { ID: '104', Code: '101', Name: 'Lee Meng', Password: 'Position', Employment: '6, Jalan Mid Road', IC: '', Gender: 'F' },
    { ID: '105', Code: '101', Name: 'Siti N', Password: 'Position', Employment: '36, Jalan KKM', IC: '', Gender: 'F' },
    { ID: '106', Code: '101', Name: 'Tan Ah Loong', Password: 'Position', Employment: '8, Jalan Short', IC: '', Gender: 'F' }

]

const SampleBusStopData = [
    { 'ID': '001', 'Code': 'T001', 'Name': 'Ipoh Garden', 'Area': 'Ipoh Garden', 'Latitude': 'c', 'Longitude': 'c', 'Status': 'Active', 'Picture': 'busstop1.jfif' },
    { 'ID': '002', 'Code': 'T002', 'Name': 'Jaya Jusco', 'Area': 'Ipoh Garden', 'Latitude': 'c', 'Longitude': 'c', 'Status': 'Active', 'Picture': 'busstop2.jfif' },
    { 'ID': '003', 'Code': 'T003', 'Name': 'Pantai Hospital', 'Area': 'Ipoh Garden', 'Latitude': 'c', 'Longitude': 'c', 'Status': 'Active', 'Picture': 'busstop3.jfif' },
    { 'ID': '004', 'Code': 'T004', 'Name': 'Tambun', 'Area': 'Tambun', 'Latitude': 'c', 'Longitude': 'c', 'Status': 'Active', 'Picture': 'busstop4.jfif' }
]

const SampleBusBreakDownData = [
    { 'ID': '001', 'Reference': '1234', 'Route': 'Route89', 'Bus Number': 'AHL2398', 'Date': '01/01/2019', 'Location': 'Silibin', 'Replacement Bus': 'AKL8778', 'Driver': 'Tan K', 'Checked By': 'Mazlan', 'Initial Assessment': 'Engine Problem', 'Follow up Action': '', 'Follow up By': '', 'Completion Date': '01/02/2020', 'Picture': ['breakdown1.jfif', 'breakdown2.jfif', 'breakdown3.jfif'] },
    { 'ID': '002', 'Reference': '1234', 'Route': 'Route123', 'Bus Number': 'AHL2398', 'Date': '04/08/2019', 'Location': 'Ipoh Garden', 'Replacement Bus': 'AEL5265', 'Driver': 'Tan K', 'Checked By': 'Muthu', 'Initial Assessment': 'Wiring Problem', 'Follow up Action': '', 'Follow up By': '', 'Completion Date': '', 'Picture': ['breakdown2.jfif', 'breakdown3.jfif'] },
    { 'ID': '003', 'Reference': '1234', 'Route': 'Route89', 'Bus Number': 'AHL2398', 'Date': '05/11/2019', 'Location': 'Tambun', 'Replacement Bus': 'ABK245', 'Driver': 'Tan K', 'Checked By': 'Lee', 'Initial Assessment': 'Air Cond Problem', 'Follow up Action': '', 'Follow up By': '', 'Completion Date': '05/01/2020', 'Picture': ['breakdown3.jfif'] },
    { 'ID': '004', 'Reference': '1234', 'Route': 'Route66', 'Bus Number': 'AHL2398', 'Date': '19/12/2019', 'Location': 'Tambun', 'Replacement Bus': 'ACP4535', 'Driver': 'Ali M', 'Checked By': 'Kok', 'Initial Assessment': 'Brake Problem', 'Follow up Action': '', 'Follow up By': '', 'Completion Date': '', 'Picture': ['breakdown4.jfif'] }
]

const SampleDutyRoster = [
    { 'ID': '001', 'Reference': '1234', 'Date': '01/03/2020', 'Route': '66', 'Schedule': '06:00', 'Assigned Bus': 'ABK6789', 'Assigned Driver': 'Mat Salleh' }
]


// used by ArryDataObjCol and ArryDataObjBtn to access index
const DataObj = {
    DriverPersonalParticular: 0,
    BusBreakDown: 1,
    BusStop: 2,
    DutyRoster: 3
}

const ArryDataObjCol = [
    [
        ['ID', 'ID', false, 'text'],
        ['Name', 'Name', true, 'text'],
        ['PayType', 'PayType', true, 'text'],
        ['Address1', 'Address1', true, 'text'],
        ['Address2', 'Address2', true, 'text'],
        ['Address3', 'Address3', true, 'text'],
        ['IC', 'IC', false, 'radio'],
        ['Passport', 'Passport', false, 'text'],
        ['Tel1', 'Tel1', true, 'text'],
        ['Tel2', 'Tel2', true, 'text'],
        ['Permit', 'Permit', true, 'text'],
        ['Marital', 'Marital', true, 'text'],
        ['DOB', 'DOB', true, 'text'],
        ['Nationality', 'Nationality', false, 'radio'],
        ['Race', 'Race', true, 'text'],
        ['Religion', 'Religion', true, 'text'],
        ['PayProfile', 'PayProfile', false, 'radio'],
        ['Race', 'Race', true, 'text'],
        ['Religion', 'Religion', true, 'text'],
        ['PayProfile', 'PayProfile', false, 'radio'],
        ['Picture', 'Picture', false, 'radio']
    ],
    [
        ['ID', 'ID', false, 'text'],
        ['Reference', 'Reference', false, 'text'],
        ['Route', 'Route', false, 0],
        ['Bus NUmber', 'Bus Number', false, 1],
        ['Date', 'Date', true, 'text'],
        ['Location', 'Location', true, 'text'],
        ['Replacement Bus', 'Replacement Bus', true, 'text'],
        ['Driver', 'Driver', false, 2],
        ['Checked By', 'Checked By', false, 'text'],
        ['Initial Assessment', 'Initial Assessment', false, 'text'],
        ['Follow up Action', 'Follow up Action', false, 'text'],
        ['Follow up By', 'Follow up By', false, 'text'],
        ['Completion Date', 'Completion Date', false, 'text'],
        ['Picture', 'Picture', false, 'text']
    ],
    [
        ['ID', 'ID', false, 'text'],
        ['Code', 'Code', false, 'text'],
        ['Name', 'Name', false, 'text'],
        ['Area', 'Area', false, 'text'],
        ['Latitude', 'Latitude', true, 'text'],
        ['Longitude', 'Longitude', true, 'text'],
        ['Status', 'Status', true, 'radio'],
        ['Picture', 'Picture', false, 'text']
    ],
    [

    ]
];

const ArryDataRoute = [{ ID: 1, Name: 'Route66' }, { ID: 2, Name: 'Route89' }, { ID: 3, Name: 'Route123' }, { ID: 4, Name: 'Route783' }];
const ArryDataBus = [{ ID: 1, Name: 'ABC123' }, { ID: 2, Name: 'AKM8293' }, { ID: 3, Name: 'AHL2398' }, { ID: 4, Name: 'ADE2309' }];
const ArryDataDriver = [{ ID: 1, Name: 'Ali M' }, { ID: 2, Name: 'Tan K' }, { ID: 3, Name: 'E Adam' }, { ID: 4, Name: 'Mark Lee' }];

const ArryDataItem = [
    [],
    [
        null,
        null,
        ArryDataRoute,
        ArryDataBus,
        null,
        null,
        ArryDataBus,
        ArryDataDriver,
        ArryDataDriver,
        null,
        null,
        ArryDataDriver,
        null,
        null
    ],
    [],
    [
        null,
        null,
        null,
        ArryDataRoute,
        null,
        ArryDataBus,
        ArryDataDriver
    ]
]


const ArryDataObjBtn = [
    [
        [null, 'Edit', undefined, undefined, undefined],
        [null, 'New', undefined, undefined, undefined],
        [null, 'Upload Picture', undefined, undefined, undefined],
    ],
    [
        [null, 'Edit', undefined, undefined, undefined],
        [null, 'New', undefined, undefined, undefined],
        [null, 'Location in Map', undefined, undefined, undefined],
        [null, 'Upload Picture', undefined, undefined, undefined],
    ],
    [
        [null, 'Edit', undefined, undefined, undefined],
        [null, 'New', undefined, undefined, undefined],
        [null, 'Upload Picture', undefined, undefined, undefined],
        [null, 'Location in Map', undefined, undefined, undefined]
    ]
];