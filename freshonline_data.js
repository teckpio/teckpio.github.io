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

const DataPickupArea = [
    {
        ID: 1,
        Name: "Puchong",
        Location: "OR001"
    },
    {
        ID: 2,
        Name: "Kepong",
        Location: "OR001"
    },
    {
        ID: 3,
        Name: "Subang",
        Location: "OR001"
    },
    {
        ID: 4,
        Name: "Petaling Jaya",
        Location: "OR001"
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
    },
    {
        ID: 4,
        Order: 2,
        Item: 'Celery',
        Quantity: '10kg',
        Price: 'Rm1.00',
        Total: 'RM10.00'
    },
    {
        ID: 5,
        Order: 2,
        Item: 'Wasabi',
        Quantity: '10kg',
        Price: 'Rm1.00',
        Total: 'RM10.00'
    },
    {
        ID: 6,
        Order: 2,
        Item: 'Cucumber',
        Quantity: '10kg',
        Price: 'Rm1.00',
        Total: 'RM10.00'
    },
    {
        ID: 7,
        Order: 3,
        Item: 'Broccoli',
        Quantity: '10kg',
        Price: 'Rm1.50',
        Total: 'RM15.00'
    },
    {
        ID: 8,
        Order: 3,
        Item: 'Celery',
        Quantity: '10kg',
        Price: 'Rm1.00',
        Total: 'RM10.00'
    },
    {
        ID: 9,
        Order: 3,
        Item: 'Capsicum',
        Quantity: '10kg',
        Price: 'Rm1.00',
        Total: 'RM10.00'
    }

]


const DataOrderSummaryProduct = [
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

const DataOrderSummaryPickup = [
    {
        ID: 1,
        Area:"Kepong",
        Orders:"20"
    },
    {
        ID: 2,
        Area:"Petaling Jaya",
        Orders:"20"
    },
    {
        ID: 3,
        Area:"Puchong",
        Orders:"20"
    },
    {
        ID: 4,
        Area:"Subang",
        Orders:"20"
    }

]

const DataOrderPickupDetail = [
    {
        ID: 1,
        Order:"OR001",
        Date:"01/03/2020",
        Customer:"Tan",
        Product:"Tomato",
        Quantity: "100kg",
    },
    {
        ID: 2,
        Order:"OR001",
        Date:"01/03/2020",
        Customer:"Tan",
        Product:"Broccoli",
        Quantity: "100kg",
    },
    {
        ID: 3,
        Order:"OR001",
        Date:"01/03/2020",
        Customer:"Tan",
        Product:"Broccoli",
        Quantity: "100kg",
    },
    {
        ID: 4,
        Order:"OR002",
        Date:"02/03/2020",
        Customer:"Ali",
        Product:"Broccoli",
        Quantity: "100kg",
    },
    {
        ID: 5,
        Order:"OR002",
        Date:"02/03/2020",
        Customer:"Ali",
        Product:"Cucumber",
        Quantity: "100kg",
    },
    {
        ID: 6,
        Order:"OR003",
        Date:"02/03/2020",
        Customer:"Siti",
        Product:"Broccoli",
        Quantity: "100kg",
    }
]
