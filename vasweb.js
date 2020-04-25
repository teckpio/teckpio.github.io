const divmenubar = document.getElementById('menubar');

// let xhttp = new XMLHttpRequest;
// xhttp.open('GET', 'localhost:3000');
// xhttp.onreadystatechange=function(){
//     if (this.readyState==4 && this.status==200){
//         alert(this.responseText);
//     }
// }
// xhttp.send();


const MenuItem = [
    ["Driver", "PTIconDriver.svg", undefined, , , [
        ["Manage", "PTIconDriver.svg", undefined, , ,
            [
                ["Personal Particulars", "PTIconDriver.svg", menuClicked, , ,],
                ["Driving License", "PTIconDriver.svg", undefined, , ,],
                ["PSV License", "PTIconDriver.svg", undefined, , ,],
                ["Commission", "PTIconDriver.svg", undefined, , ,]
            ]
        ],
        ["Report", "PTIconDriver.svg", undefined, , ,
            [
                ["Commission", "PTIconDriver.svg", undefined, , ,]
            ]
        ]
    ]
    ],
    ["Bus", "PTIconDriver.svg", undefined, , , [
        ["Manage", , undefined, , , [
            ["Bus Particulars", , undefined, ,],
            ["Road Tax", , undefined, ,],
            ["Puspakom", , undefined, ,],
            ["Insurance", , undefined, ,]
        ]],
        ["Report", , undefined, ,]]
    ],
    ["Route", "PTIconDriver.svg", undefined, , , [
        ["Manage", "PTIconDriver.svg", undefined, , , [
            ["Personal Particulars", "PTIconDriver.svg", menuClicked, , ,],
            ["Driving License", "PTIconDriver.svg", undefined, , ,],
            ["PSV License", "PTIconDriver.svg", undefined, , ,],
            ["Commission", "PTIconDriver.svg", undefined, , ,]
        ]],
        ["Report", "PTIconDriver.svg", undefined, , , [
            ["Commission", "PTIconDriver.svg", undefined, , ,]
        ]]]
    ]
    // ,
    // ["Report", "PTIconDriver.svg", undefined, , , [
    //     ["Manage", "PTIconDriver.svg", undefined, , , [
    //         ["Personal Particulars", "PTIconDriver.svg", menuClicked, , ,],
    //         ["Driving License", "PTIconDriver.svg", undefined, , ,],
    //         ["PSV License", "PTIconDriver.svg", undefined, , ,],
    //         ["Commission", "PTIconDriver.svg", undefined, , ,]
    //     ]],
    //     ["Report", "PTIconDriver.svg", undefined, , ,[
    //         ["Commission", "PTIconDriver.svg", undefined, , ,]
    //     ]]]
    // ]
]



// start loading page //

populateManu();

// end loading page //


function populateManu() {
    let menuparam = vssfnc_menupopulate_param();
    menuparam.arrymenu = MenuItem;
    // menuparam.arrycolor=['rgba(0,250,0,1)', 'red','gray'];
    divmenubar.appendChild(vssfnc_menupopulate(menuparam, 1, null))

}


function menuClicked() {
    alert('menu callback clicked');
}