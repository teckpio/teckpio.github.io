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
        ["Manage", , undefined, , , [
            ["Personal Particulars", , undefined, , ,],
            ["Driving License", , undefined, , ,],
            ["PSV License", , undefined, , ,],
            ["Commission", , undefined, , ,]
        ]],
        ["Report", , undefined, , ,[
            ["Commission", , undefined, , ,]
        ]]]
    ],
    ["Bus", "PTIconDriver.svg", undefined, , , [
        ["Manage", , undefined, , , [
            ["Bus Particulars", , undefined, ,],
            ["Road Tax", , undefined, ,],
            ["Puspakom", , undefined, ,],
            ["Insurance", , undefined, ,]
        ]],
        ["Report", , undefined, ,]]
    ]
]



// start loading page //

populateManu();

// end loading page //


function populateManu() {
    let menuparam = vssfnc_menupopulate_param();
    menuparam.arrymenu = MenuItem;
    divmenubar.appendChild(vssfnc_menupopulate(menuparam, 1, null))

}