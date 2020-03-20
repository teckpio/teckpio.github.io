//const ProfileItemComparer = [
//    { ID: 1, Name: '=' },
//    { ID: 2, Name: '<>' },
//    { ID: 3, Name: '>' },
//    { ID: 4, Name: '>=' },
//    { ID: 5, Name: '<' },
//    { ID: 6, Name: '<=' },
//    { ID: 7, Name: '#=' },
//    { ID: 8, Name: '#>=' },
//    { ID: 9, Name: '#<=' },
//    { ID: 10, Name: '()' },
//    { ID: 11, Name: '()#=' },
//    { ID: 12, Name: '()#>=' },
//    { ID: 13, Name: '()#<=' }
//]

// key to correspond to infinipay.js:arryMainNavItem
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

// 0: field name; 1: display text; 2: required; 3: datatype //
const DataColIndex = { FieldName: 0, DisplayText: 1, Required: 2, DataType: 3 }

const DataObj = {
    Employee: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text'],
            ['PayProfile', 'Pay Profile', false, DataObjID.PayProfile]
        ],
        URL: {
            List: 'http://localhost:49951/data/employeelist',
            Get: 'http://localhost:49951/data/employeelist',
            Add: 'http://localhost:49951/data/employeepost',
            Update: 'http://localhost:49951/data/employeepost'
        }
    },

    EmployeeProfileOption: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text'],
            ['Option', 'Option', false, 'text'],
        ],
        URL: {
            Get: 'http://localhost:49951/data/employeeprofileoptionget',
            Add: 'http://localhost:49951/data/employeeprofileoptionpost',
            Update: 'http://localhost:49951/data/employeeprofileoptionpost'
        }
    },

    EmployeeProfileItem: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text'],
            ['Type', 'Type', false, DataObjID.EmployeeProfileOption],
            ['Required', 'Required', false, 'radio']
        ],
        URL: {
            Get: 'http://localhost:49951/data/employeeprofileitemget',
            Add: 'http://localhost:49951/data/employeeprofileitempost',
            Update: 'http://localhost:49951/data/employeeprofileitempost'
        }
    },

    EmployeeProfile: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text'],
            ['Employee', 'Employee', false, 'text'],
            ['ProfileItem', 'ProfileItem', false, 'text'],
            ['Value', 'Value', false, 'text'],
        ],
        URL: {
            Get: 'http://localhost:49951/data/employeeprofileget',
            Add: 'http://localhost:49951/data/employeeprofilepost',
            Update: 'http://localhost:49951/data/employeeprofilepost',
            UpdateByEmployee: 'http://localhost:49951/data/employeeprofileupdate'
        }
    },

    PayItem: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text'],
            ['PayQty', 'Pay Quantity', false, 'text'],
            ['PayUnit', 'Pay Unit', false, DataObjID.PayUnit],
            ['Range', 'Range', false, 'text'],
            ['RangeBase', 'Range Base', false, DataObjID.PayItem],
            ['RangeQty', 'Range Quantity', false, DataObjID.PayUnit],
            ['PerRate', 'Per Rate', false, 'text'],
            ['PerBase', 'Per Base', false, DataObjID.PayItem],
            ['PerBaseRate', 'Per BaseRate', false, DataObjID.PayItem],
            ['Rate', 'Rate', false, 'text'],
            ['MinMax', 'Min-Max', false, 'text'],
            ['Validity', 'Valid Period', false, 'text'],
            ['AccruedItem', 'Accrued Item', false, DataObjID.AccruedItem],
            ['StatRequired', 'Statutory Required', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/payitemget',
            Add: 'http://localhost:49951/data/payitempost',
            Update: 'http://localhost:49951/data/payitempost'
        }
    },

    PayProfile: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/payprofileget',
            Add: 'http://localhost:49951/data/payprofilepost',
            Update: 'http://localhost:49951/data/payprofilepost'
        }
    },

    AccruedItem: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/accrueditemget',
            Add: 'http://localhost:49951/data/accrueditempost',
            Update: 'http://localhost:49951/data/accrueditempost'
        }
    },

    StatItem: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text'],
            ['PersonInCharge', 'Person In Charge', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/statitemget',
            Add: 'http://localhost:49951/data/statitempost',
            Update: 'http://localhost:49951/data/statitempost'
        }
    },

    StatProfile: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text'],
            ['StatItem', 'Stat Item', false, DataObjID.StatItem],
            ['Rate', 'Rate', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/statprofileget',
            Add: 'http://localhost:49951/data/statprofilepost',
            Update: 'http://localhost:49951/data/statprofilepost'
        }
    },

    StatProfileItem: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text'],
            ['StatProfile', 'Stat Profile', false, DataObjID.StatProfile],
            ['ProfileItem', 'Profile Item', false, DataObjID.EmployeeProfileItem],
            ['Operator', 'Operator', false, DataObjID.ProfileItemComparer],
            ['Operand', 'Operand', false, 'text'],
            ['Criteria', 'Criteria', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/statprofileitemget',
            Add: 'http://localhost:49951/data/statprofileitempost',
            Update: 'http://localhost:49951/data/statprofileitempost'
        }
    },

    PayItemXStatItem: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text'],
            ['PayItem', 'Pay Item', false, DataObjID.PayItem],
            ['StatItem', 'Stat Item', false, DataObjID.StatItem]
        ],
        URL: {
            Get: 'http://localhost:49951/data/payitemxstatitemget',
            Add: 'http://localhost:49951/data/payitemxstatitempost',
            Update: 'http://localhost:49951/data/payitemxstatitempost',
        }
    },

    PayUnit: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/payunitget',
            Add: 'http://localhost:49951/data/payunitpost',
            Update: 'http://localhost:49951/data/payunitpost'
        }
    },

    WorkSheet: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text'],
            ['Employee', 'Employee', false, DataObjID.Employee],
            ['Payroll Date', 'PayrollDate', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/worksheetget',
            Add: 'http://localhost:49951/data/worksheetpost',
            Update: 'http://localhost:49951/data/worksheetpost'
        }
    },

    WorkSheetItem: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['WorkSheet', 'WorkSheet', false, DataObjID.WorkSheet],
            ['PayUnit', 'Pay Unit', false, DataObjID.PayUnit],
            ['PayQty', 'Pay Quantity', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/worksheetitemget',
            Add: 'http://localhost:49951/data/worksheetitempost',
            Update: 'http://localhost:49951/data/worksheetitempost',
            UpdateByEmployee: 'http://localhost:49951/data/employeeworksheetupdate'
        }
    },

    PayProcess: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/payprocessget',
            Add: 'http://localhost:49951/data/payprocesspost',
            Update: 'http://localhost:49951/data/payprocesspost'
        }
    },

    Output: {
        DataCol: [],
        URL: {}
    },

    // composite data object

    PayProfileItem: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text'],
            ['PayProfile', 'Pay Profile', false, DataObjID.PayProfile],
            ['PayItem', 'Pay Item', false, DataObjID.PayItem],
            ['Rate', 'Rate', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/payprofileitemget',
            Add: 'http://localhost:49951/data/payprofileitempost',
            Update: 'http://localhost:49951/data/payprofileitempost'
        }
    },

    ProfileItemComparer: {
        DataCol: [
            ['ID', 'ID', false, 'text'],
            ['Name', 'Name', false, 'text']
        ],
        URL: {
            Get: 'http://localhost:49951/data/profileitemcomparerget',
            //Add: 'http://localhost:49951/data/payprofileitempost',
            //Update: 'http://localhost:49951/data/payprofileitempost'
        }
    }
}

const PayProcess = {
    MidMonth: {
        ID: 1,
        URL: 'http://localhost:49951/process/midmonth'
    },
    EndMonth: {
        ID: 2,
        URL: 'http://localhost:49951/process/endmonth'
    },
    YearEnd: {
        ID: 3,
        URL: 'http://localhost:49951/process/yearend'
    }
}




