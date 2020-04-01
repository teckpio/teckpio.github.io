const DataProduct = [
    {
        ID: 1,
        Name: "Tomato",
        Description: "Not Fruite. Red in Color",
        Price: "RM1.00/kg",
        Balance: "Balance in hand: 100kg",
        ImageURL: "tomato.jfif"
    },
    {
        ID: 2,
        Name: "Cucumber",
        Description: "Not Fruite. Green in Color",
        Price: "RM1.00/kg",
        Balance: "Balance in hand: 100kg",
        ImageURL: "cucumber.jfif"
    },
    {
        ID: 3,
        Name: "Capsicum",
        Description: "Not Fruite. Purple in Color",
        Price: "RM1.00/kg",
        Balance: "Balance in hand: 100kg",
        ImageURL: "capsicum.jfif"
    },
    {
        ID: 4,
        Name: "Broccoli",
        Description: "Not Fruite. Green in Color",
        Price: "RM1.00/kg",
        Balance: "Balance in hand: 100kg",
        ImageURL: "broccoli.jfif"
    }

]

const DataOrderHeader = [
    {
        ID: 1,
        User: "Tan",
        Reference: "OR001",
        Date: "1/3/2020",
        Delivered: 'o'
    },
    {
        ID: 2,
        User: "Tan",
        Reference: "OR001",
        Date: "1/3/2020",
        Delivered: 'o'
    },
    {
        ID: 3,
        User: "Tan",
        Reference: "OR001",
        Date: "1/3/2020",
        Delivered: 'x'
    },
    {
        ID: 4,
        User: "Tan",
        Reference: "OR001",
        Date: "1/3/2020",
        Delivered: 'o'
    }
]

const DataOrderDetail = [
    {
        ID: 1,
        Order: 1,
        Item: 'Tomato',
        Quantity: '10kg',
        Price: 'Rm1.00',
        Total: 'RM10.00'
    },
    {
        ID: 2,
        Order: 1,
        Item: 'Cucumber',
        Quantity: '10kg',
        Price: 'Rm1.00',
        Total: 'RM10.00'
    },
    {
        ID: 3,
        Order: 1,
        Item: 'Capsicum',
        Quantity: '10kg',
        Price: 'Rm1.00',
        Total: 'RM10.00'
    }
]


const DataOrderSummary = [
    {
        ID: 1,
        Order:"OR001",
        Date:"01/03/2020",
        Customer:"Tan",
        Pickup:"Kaula Selangor",
        Quantity: "100kg",
    },
    {
        ID: 2,
        Order:"OR002",
        Date:"01/03/2020",
        Customer:"Siti",
        Pickup:"Petaling Jaya",
        Quantity: "100kg",
    },
    {
        ID: 3,
        Order:"OR004",
        Date:"01/03/2020",
        Customer:"Ali",
        Pickup:"Ipoh",
        Quantity: "100kg",
    },
    {
        ID: 4,
        Order:"OR005",
        Date:"01/03/2020",
        Customer:"Cheong",
        Pickup:"Kuantan",
        Quantity: "100kg",
    }

]