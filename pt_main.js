const MenuItemIndexText = 0;
const MenuItemIndexSvg = 1;
const MenuItemIndexClicked = 2;
const MenuItemIndexSubMenu = 3;

const FlexMenuItemLogo = 3;
const FlexMenuItemText = 6;
const FlexManuItemDirLeft = 1;

const transitionPeriod = "0.5s";

const IDDataList = "DataList";
const IDDataDetail = "DataDetail";
const IDDetailImgCounter = "DetailImageCounter";

const ClassMainMenuDirection = "MainMenuDirection";
const ClassSubMenu = "submenu";
const ClassFunctionButton = "FunctionButton";

const styleNavBarSideMenuHidden = "margin-left:-20%; margin-top:10%; opacity:0;";
const styleNavBarSideMenuShow = "margin-left:0; margin-top:10%; opacity:1";

const styleSubMenuHidden = "display:none; transition:" + transitionPeriod + " margin; margin-top:-100px; ";
const styleSubMenuShow = "display:block; transition:1s margin; margin-top:0;";

const strImgDirectionRight = "PTIconDirectionRight.svg";
const strImgDirectionDown = "PTIconDirectionDown.svg";

const strMenuDirection = "MenuDirection";

// Document Items
const NavBarLogoDateTime = document.getElementById("NavBar_LogoDateTime");

const NavBarMenu = document.getElementById("NavBar_MenuItem");
const NavBarSideMenu = document.getElementById("NavBar_SubMenu");

const ContentList = document.getElementById("Content_List");
const ContentDetail = document.getElementById("Content_Detail");

const MenuTitleLogo = document.getElementById("Content_TitleLogo");
const MenuTitleText = document.getElementById("Content_TitleText");


//MenuDriverManageClicked

const MenuItem = [
    ["Driver", "PTIconDriver.svg", MainMenuClicked, [
        ["Manage", , SubMenuClicked, [
            ["Personal Particulars", , SubMenuItemClicked],
            ["Driving License", , SubMenuItemClicked],
            ["PSV License", , SubMenuItemClicked],
            ["Commission", , SubMenuItemClicked]
        ]],
        ["Report", , MenuDriverReportClicked]]
    ],
    ["Bus", "PTIconBus.svg", MainMenuClicked, [
        ["Manage", , SubMenuClicked, [
            ["Vehicle Particulars", , SubMenuItemClicked],
            ["Road Tax", , SubMenuItemClicked],
            ["Puspakom Inspection", , SubMenuItemClicked],
            ["Insurance", , SubMenuItemClicked],
            ["GPS Device", , SubMenuItemClicked],
            ["Ticketing Machine", , SubMenuItemClicked],
            ["Service and Maintenance", , SubMenuItemClicked],
            ["Fuelling", , SubMenuItemClicked],
            ["Tyres", , SubMenuItemClicked],
            ["Breakdown", , SubMenuItemClicked]
        ]],
        ["Report", , MenuBusReportClicked]]
    ],
    ["Route", "PTIconRoute.svg", MainMenuClicked, [
        ["Manage", , SubMenuClicked, [
            ["Area", , SubMenuItemClicked],
            ["Bus Stop", , SubMenuItemClicked],
            ["Route", , SubMenuItemClicked],
            ["Route Stops", , SubMenuItemClicked],
            ["Route Schedule", , SubMenuItemClicked],
            ["Route Fares", , SubMenuItemClicked],
            ["Drivers' Duties", , SubMenuItemClicked],
            ["Duty Roster", , SubMenuItemClicked]
        ]],
        ["Report", , MenuBusReportClicked]]
    ],
    ["Driver Duty Roster", "PTIconUser.svg", MainMenuClicked, [
        ["Manage", , SubMenuClicked, [
            ["Duty Codes", , SubMenuItemClicked],
            ["Duty Roster", , SubMenuItemClicked]
        ]],
        ["Report", , MenuBusReportClicked]]
    ],
    ["Live Tracking", "PTIconTripManagement.svg", MainMenuClicked, [
        ["By Map", , MenuLiveMapClicked],
        ["By Line", , MenuLiveLineClicked],
        ["By Grid", , MenuLiveTableClicked]]
    ],
    ["Reporting", "PTIconReport.svg", MainMenuClicked, [
        ["APAD", , SubMenuClicked, [
            ["APAD Report 1", , SubMenuItemClicked],
            ["APAD Report 2", , SubMenuItemClicked],
            ["APAD Report 3", , SubMenuItemClicked],
            ["APAD Report 4", , SubMenuItemClicked]]
        ],
        ["Ticketing", , SubMenuClicked, [
            ["Ticketing Report 1", , SubMenuItemClicked],
            ["Ticketing Report 2", , SubMenuItemClicked],
            ["Ticketing Report 3", , SubMenuItemClicked]]
        ],
        ["Admin", , SubMenuClicked, [
            ["Admin Report 1", , SubMenuItemClicked],
            ["Admin Report 2", , SubMenuItemClicked],
            ["Admin Report 3", , SubMenuItemClicked]]
        ],
        ["Management", , SubMenuClicked, [
            ["Management Report 1", , SubMenuItemClicked],
            ["Management Report 2", , SubMenuItemClicked],
            ["Management Report 3", , SubMenuItemClicked],
            ["Management Report 4", , SubMenuItemClicked],
            ["Management Report 5", , SubMenuItemClicked],
            ["Management Report 6", , SubMenuItemClicked]]
        ]],
    ],
    ["System Parameter", "PTIconAdd.svg", MainMenuClicked, [
        ["Employee Code", , undefined],
        ["Operation Sector", , undefined],
        ["Misc", , undefined]]
    ]


]










// load starts
setCurrentDateTime();
setTimeByMinute();
populateMenuItem(MenuItem, '', NavBarMenu, 1);


// load ends



// Functions
// main menu - menulevel = 1
// sub menu - menulevel = 2
// sub menu item - menulevel = 3
// Events: MainMenuClicked (level 1) / SubMenuClicked (level 2) / SubMenuItemClicked (level 3)
// Class: MainMenu =  / SubMenu = / SubMenuItem = 
// id: text of menu
function populateMenuItem(menuarray, menuname, htmlmenu, menulevel) {

    // only 2 levels of menu sidebar

    htmlmenu.innerHTML = "";


    menuarray.forEach((mitem) => {

        // 1st level menu - add 2nd level menu
        if (menulevel == 1) {
            var submenu = document.createElement('ul');

            populateMenuItem(mitem[MenuItemIndexSubMenu], mitem[MenuItemIndexText], submenu, 2);
        }


        var lineitem = document.createElement('li');
        if (menulevel == 2 && menuname) {
            lineitem.className = menuname;
        }

        // // !! testing
        // lineitem.style.border='1px solid white';

        if (menulevel == 3) {
            lineitem.style.width = "100%";
            lineitem.style.textAlign = "center";
        }

        // icon
        if (menulevel == 1) {
            var divimg = document.createElement('div');
            if (mitem[MenuItemIndexSvg]) {
                divimg.innerHTML = "<img src='" + mitem[MenuItemIndexSvg] + "'></img>"
            }

            divimg.style = "flex-grow:" + FlexMenuItemLogo + ";'"
                ;


            lineitem.appendChild(divimg);
        }

        // text
        var divtext = document.createElement('div');
        divtext.innerHTML = mitem[MenuItemIndexText];
        divtext.style = "flex-grow:" + FlexMenuItemText + "; " + (menuname ? "text-align:right; box-sizing:border-box; padding-right:10%" : "text-align:left;");
        lineitem.appendChild(divtext);

        // direction
        if (menulevel == 2) {

            var divimgdir = document.createElement('div');
            divimgdir.innerHTML = "<img src='" + strImgDirectionRight + "' id='" + menuname + mitem[MenuItemIndexText] + strMenuDirection + "' class = '" + ClassMainMenuDirection + "'></img>"
            divimgdir.style = "flex-grow:" + FlexManuItemDirLeft + "; text-align:right;"
            lineitem.appendChild(divimgdir);

        } else if (menulevel == 1) {

            var divimgdir = document.createElement('div');
            divimgdir.innerHTML = "<img src='" + strImgDirectionDown + "' id='" + mitem[MenuItemIndexText] + strMenuDirection + "' class = '" + ClassMainMenuDirection + "'></img>"
            divimgdir.style = "flex-grow:" + FlexManuItemDirLeft + "; text-align:right;"
            lineitem.appendChild(divimgdir);

        }


        lineitem.dataset.id = mitem[MenuItemIndexText];

        lineitem.addEventListener('click', mitem[MenuItemIndexClicked]);

        htmlmenu.appendChild(lineitem)
        if (menulevel == 1) {
            htmlmenu.appendChild(submenu);

        }
        else {
            htmlmenu.className = ClassSubMenu;
            htmlmenu.dataset.id = menuname;
            htmlmenu.style = styleSubMenuHidden;
        }
    })


}

function InvisibleAllSubMenu(ignoreid) {
    let menuitem = document.getElementsByClassName(ClassSubMenu);

    for (var i = 0; i < menuitem.length; i++) {
        if (menuitem[i].dataset.id != ignoreid) {
            menuitem[i].style = styleSubMenuHidden;
        }
    }

    SubMenuItemSlideIn();

    // revert menu direction
    let menudirection = document.getElementsByClassName(ClassMainMenuDirection);
    for (var i = 0; i < menudirection.length; i++) {

        RotateDirectionMenuClose(menudirection[i].dataset.id);

    }
}

function MainMenuClicked() {

    InvisibleAllSubMenu(this.dataset.id);


    const menuitem = document.getElementsByClassName(this.dataset.id);

    //!! doesn't work if no submenu !!!!!
    if (menuitem[0].parentNode) {

        if (menuitem[0].parentNode.style.display == "none") {
            menuitem[0].parentNode.style = styleSubMenuShow;

            RotateDirectionMenuClose(this.dataset.id);

        } else {
            menuitem[0].parentNode.style = styleSubMenuHidden;
            RotateDirectionMenuOpen(this.dataset.id);
        }
    }

    // SetMenuTitle(this.dataset.id);
}


function SubMenuClicked() {

    //?? best way to test whether NavBarSideMenu opened ??
    if (NavBarSideMenu.style.marginLeft == "0px") {
        SubMenuItemSlideIn(this.parentNode.dataset.id + this.dataset.id);
    }
    else {
        NavBarSideMenu.innerHTML = "";

        var MainMenuIdx = SearchMenuIndex(MenuItem, this.parentNode.dataset.id);
        var submenuarray = MenuItem[MainMenuIdx][MenuItemIndexSubMenu];

        var SubMenuIdx = SearchMenuIndex(submenuarray, this.dataset.id);


        populateMenuItem(submenuarray[SubMenuIdx][MenuItemIndexSubMenu], submenuarray[SubMenuIdx][MenuItemIndexText], NavBarSideMenu, 3);
        SubMenuItemSlideOut(this.parentNode.dataset.id + this.dataset.id);

    }

}

function SubMenuItemSlideIn(menuid) {
    NavBarSideMenu.style = styleNavBarSideMenuHidden;
    RotateDirectionMenuOpen(menuid);
}

function SubMenuItemSlideOut(menuid) {
    NavBarSideMenu.style = styleNavBarSideMenuShow;
    RotateDirectionMenuClose(menuid);
}

function RotateDirectionMenuClose(imgdirid) {

    if (imgdirid) {
        const MMenuDirection = document.getElementById(imgdirid + strMenuDirection);
        MMenuDirection.style.transition = "transform " + transitionPeriod;
        MMenuDirection.style.transform = "rotate(180deg)";
    }
}

function RotateDirectionMenuOpen(imgdirid) {
    if (imgdirid) {
        const MMenuDirection = document.getElementById(imgdirid + strMenuDirection);
        MMenuDirection.style.transition = "transform " + transitionPeriod;
        MMenuDirection.style.transform = "rotate(0deg)";
    }
}


function PushSubMenuDown() {

}

function PushSubMenuUp() {

}

// returns an array of 2 arrays: 1. main menu array 2. submenu array
function SearchMainSubMenuArray(submenuitem) {


    // to search for all parent menus - start
    let found = false;

    let i = 0;
    let j = 0;
    let ItemIdx = 0;
    while (i < MenuItem.length && !found) {

        j = 0;
        while (j < MenuItem[i][MenuItemIndexSubMenu].length && !found) {
            let submenu = MenuItem[i][MenuItemIndexSubMenu];

            if (submenu[j][MenuItemIndexSubMenu]) {
                ItemIdx = SearchMenuIndex(submenu[j][MenuItemIndexSubMenu], submenuitem);
                if (ItemIdx != -1) {
                    found = true;
                }
                else {
                    j++;
                }
            } else {
                j++;
            }

        }
        if (!found) {
            i++;
        }
    }
    if (found) {
        let main = MenuItem[i];
        let sub = main[MenuItemIndexSubMenu][j];
        return [main, sub];
    } else {
        return null;
    }

    // sub[MenuItemIndexClicked]();
    // to search for all parent menus - end

}

function SubMenuItemClicked() {

    SubMenuItemSlideIn(null);
    InvisibleAllSubMenu(null);

    //!! assumption: all sub menu item are unique in description !!
    switch (this.dataset.id) {
        case 'Personal Particulars':
            DriverPersonalParticulars();
            break;
        case 'Driving License':
            DriverDrivingLicense();
            break;
        case 'APAD Report 1':
        case 'APAD Report 2':

            ReportAPAD(this.dataset.id);
            break;
        case 'Bus Stop':
            RouteBusStopParticular();
            break;
        case 'Breakdown':
            BusManageBreakdown();
            break;
        case 'Duty Roster':
            DutyRoster();
            break;
        default:
            break;
    }

    SetMenuTitle(this.dataset.id);

}

function BusStopListClicked() {

    SwitchListToDetail();

    let BusStopData = SampleBusStopData.find((eee) => {
        return eee.ID === this.dataset.ID || eee.ID === parseInt(this.dataset.ID);
    });


    ContentDetail.innerHTML = "";
    ContentDetail.style.margin = "1%";

    ContentDetail.appendChild(getDivBusStopByID(BusStopData));
}

function getDivBusStopByID(busstopdata) {
    let arrydatacol = ArryDataObjCol[DataObj.BusStop];
    let arrybtn = ArryDataObjBtn[DataObj.BusStop];

    return loadDivDetail("Bus Stop", busstopdata, arrydatacol, null, arrybtn, busstopdata.Picture);

}

function getIFrameMap() {
    ContentDetail.appendChild(createMap());
    // ContentDetail.appendChild(getMap());
    // getMap();
}

function createMap() {
    let divmap = document.createElement('iframe');
    // divmap.style.flexGrow = "7";
    divmap.style.margin = "1%";
    divmap.style.width = "50%";

    // divmap.src = "http://www.google.com/maps?q=24.197611,120.780512";

    divmap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.989442890688!2d101.08790571461427!3d4.595913396661126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caec611a9d9c41%3A0xfe76e16d137449b4!2sIpoh+Parade%2C+105%2C+Jalan+Sultan+Abdul+Jalil%2C+31350+Ipoh%2C+Negeri+Perak!5e0!3m2!1sen!2smy!4v1565011877345!5m2!1sen!2smy"
    return divmap;
}

// display: row flex: List + Map
function RouteBusStopParticular() {
    loadDivList(SampleBusStopData, BusStopListClicked, [undefined, undefined, undefined, undefined, undefined]);


    // arrybuttontable - a 2-dim array of 
    // [[0: button text, 1: button_clicked function, 2: css class of button]]
    let arrybtn = [
        ["Full List", RouteBusStopParticularFull, ClassFunctionButton],
        ["Show Map", RouteBusStopParticularMap, ClassFunctionButton]
    ];

    let divmap = document.createElement('iframe');
    divmap.style.flexGrow = "7";
    divmap.style.margin = "1%";

    divmap.src = "http://www.google.com/maps?q=24.197611,120.780512";

    // divmap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.989442890688!2d101.08790571461427!3d4.595913396661126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caec611a9d9c41%3A0xfe76e16d137449b4!2sIpoh+Parade%2C+105%2C+Jalan+Sultan+Abdul+Jalil%2C+31350+Ipoh%2C+Negeri+Perak!5e0!3m2!1sen!2smy!4v1565011877345!5m2!1sen!2smy"


    // divmap.width = "600";
    // divmap.height = "450";
    // divmap.frameBorder="1";
    // divmap.style = "border:0";
    // divmap.iframe.allowfullscreen = true;

    ContentList.appendChild(divmap);
};

function RouteBusStopParticularFull() {
    alert("full list");
}
function RouteBusStopParticularMap() {
    alert("show map");
}

function init_divcontent_getdataobjform() { return [null, [], [], []] }
function init_divcontent_getdataobjtable() { return [null, [], [], null, null, null] }
function arraydatacol_clone(oriarry) {
    let newarry = [];
    oriarry.forEach(item => {
        let subarry = [];
        item.forEach(subitem => {
            subarry.push(subitem);
        })
        newarry.push(subarry);
    })
    return newarry;
}
async function xx(eeeid) {

    //console.log('employee_loaddetail');

    let dataobj;
    if (eeeid) {
        // load employee detail by ID //
        let arrydataobj = await dataobj_get(eeeid);
        // server returns an array of one employee //
        dataobj = arrydataobj[0];
    }
    else {
        // new employee - create an empty employee object //
        // dataobj = new Object();
        // DataObj.Employee.DataCol.forEach(datacol => {
        //     dataobj[datacol[DataColIndex.FieldName]] = '';
        // })
    }

    //console.log(dataobj);

    // initial detail display area //
    let dataobj_form = init_divcontent_getdataobjform();

    // let datacol = arraydatacol_clone(DataObj.Employee.DataCol);

    dataobj_form[divcontent_formitemidx.FormDataObj] = dataobj;
    dataobj_form[divcontent_formitemidx.DataCol] = datacol;
    dataobj_form[divcontent_formitemidx.DataColObj] = await divcontentparam_loaddataobj(datacol);

    let arrybtn = [
        ['post', 'Edit', undefined, undefined, DataObj.Employee.URL.Update],
        ['post', 'Add', undefined, undefined, DataObj.Employee.URL.Add],
        ['post', 'Upload Photo', undefined, undefined, undefined]
    ];
    dataobj_form[divcontent_formitemidx.Button] = load_divbutton(arrybtn, true, true);

    let divcontentemployee = init_divcontent(eeeid, dataobj_form, null, true);


}

function DriverListClicked() {

    SwitchListToDetail();

    let DriverData = SampleEmployeeData.find((eee) => {
        return eee.ID === this.dataset.ID || eee.ID === parseInt(this.dataset.ID);
    });


    ContentDetail.innerHTML = "";
    // ContentDetail.style.display="grid";
    // ContentDetail.style.gridTemplateColumns="30% 70%";
    // ContentDetail.style.gridTemplateRows="70% 30%";
    // ContentDetail.style.display = "flex";
    ContentDetail.style.margin = "1%";

    ContentDetail.appendChild(getDivDriverPersonalParticularsByID(DriverData));

}

function getDetailImage() {
    imgpicture = document.createElement('img');
    imgpicture.style.width = "auto";
    imgpicture.style.height = "auto";
    imgpicture.style.margin = "3% auto";
    imgpicture.style.flexBasis = "1fr";
    imgpicture.style.boxShadow = "1px 1px 1px gray";
    imgpicture.style.gridArea = "1/1/9/2";

    return imgpicture;
}

function loadDivDetail(formtitle, jsondata, arrydatacol, arryitemdata, arrybtn, imgsrc) {
    let divDetail = document.createElement('div');
    divDetail.style.display = "grid";
    divDetail.style.gridTemplateColumns = "30% 70%";
    divDetail.style.gridTemplateRows = "10% 10% 10% 10% 10% 10% 10% 10% 10% 10%";
    divDetail.style.width = "100%";
    divDetail.style.height = "100%";
    divDetail.style.border = "1px solid gray";

    // load picture
    // let divpicture = document.createElement('div');
    // let imgpicture;
    if (Array.isArray(imgsrc)) {
        for (var i = 0; i < imgsrc.length; i++) {
            let imgpicture = getDetailImage();
            imgpicture.src = imgsrc[i];
            // imgpicture.style.transition="margin-left 1s";
            imgpicture.dataset.id = i;
            if (i > 0) {
                imgpicture.style.display = "none";
                // imgpicture.style.marginLeft="-100%";
            }

            imgpicture.onmousemove = function () {
                this.style.boxShadow = "2px 2px 2px gray";
            }

            imgpicture.onmouseleave = function () {
                this.style.boxShadow = "1px 1px 1px gray";
            }

            imgpicture.onclick = function () {

                let arryimg = this.parentNode.querySelectorAll('img');
                let imgcounter = document.getElementById(IDDetailImgCounter);

                if (arryimg.length > 1) {
                    for (var i = 0; i < arryimg.length; i++) {

                        if (i === parseInt(this.dataset.id)) {
                            arryimg[i].style.display = "none";
                            // arryimg[i].style.marginLeft="-100%";
                        }
                        else if (i === parseInt(this.dataset.id) + 1) {
                            arryimg[i].style.display = "block";
                            // arryimg[i].style.marginLeft="0";
                            imgcounter.innerHTML = `Image ${i + 1} of ${arryimg.length}`;
                        }
                        else if (parseInt(this.dataset.id) === arryimg.length - 1) {
                            arryimg[0].style.display = "block";
                            // arryimg[0].style.marginLeft="0";
                            imgcounter.innerHTML = `Image 1 of ${arryimg.length}`;
                        }
                    }

                }
            }
            divDetail.appendChild(imgpicture);
        }
    } else {
        let imgpicture = getDetailImage();
        imgpicture.src = imgsrc;
        divDetail.appendChild(imgpicture);
    }

    if (Array.isArray(imgsrc)) {
        let divdirection = document.createElement('div');
        divdirection.style.border = "1px solid gray";
        divdirection.style.gridArea = "9/1/10/2";
        divdirection.style.display = "flex";
        divdirection.style.boxSizing = "border-box";
        divdirection.style.margin = "1%";
        divdirection.style.padding = "1%";
        divdirection.style.justifyContent = "space-around";

        // let dirleft = document.createElement('div');
        // dirleft.innerHTML = "&lt&lt";
        // dirleft.className = ClassFunctionButton;
        // divdirection.appendChild(dirleft);

        let divtext = document.createElement('div');
        divtext.id = IDDetailImgCounter;
        if (Array.isArray(imgsrc)) {
            divtext.innerHTML = `Number of Images: ${imgsrc.length} ${imgsrc.length > 1 ? "<br>&ltClick on Image to Rotate&gt" : ""}`;
        } else {
            divtext.innerHTML = "Image";
        }
        divtext.style.fontStyle = "italic";
        divdirection.appendChild(divtext);

        // let dirright = document.createElement('div');
        // dirright.innerHTML = "&gt&gt";
        // dirright.className = ClassFunctionButton;
        // divdirection.appendChild(dirright);

        divDetail.appendChild(divdirection);
    }

    let divBackList = document.createElement('div');
    divBackList.innerHTML = "Back To List";
    divBackList.className = ClassFunctionButton;
    divBackList.onclick = SwitchDetailToList;
    divBackList.style.gridArea = "10/1/11/2";

    divDetail.appendChild(divBackList);

    detailform = populateForm(formtitle, arrydatacol, jsondata, arryitemdata, arrybtn);
    detailform.style = "margin:1% auto; width:50%;";
    detailform.style.flexBasis = "3fr";
    detailform.style.gridArea = "1/2/11/3";
    detailform.style.width = "95%";
    divDetail.appendChild(detailform);


    return divDetail;
}

// 3 components: profile image, detail forms, back-to-list button
function getDivDriverPersonalParticularsByID(driverdata) {

    let arrydatacol = ArryDataObjCol[DataObj.DriverPersonalParticular];
    let arrybtn = ArryDataObjBtn[DataObj.DriverPersonalParticular];

    return loadDivDetail("Personal Particulars", driverdata, arrydatacol, null, arrybtn, driverdata.Picture);
}

function SwitchDetailToList() {
    ContentDetail.style.display = "none";
    ContentList.style.display = "block";
    SubMenuItemSlideIn();
}

function SwitchListToDetail() {
    ContentList.style.display = "none";
    ContentDetail.style.display = "block";
    SubMenuItemSlideIn();
}

function setStyleDivList(divelem) {
    ContentList.style.display = "flex";
    ContentList.style.flexDirection = "column";
    ContentList.style.margin = "1%";
}

function loadDivList(ListData, ListClicked, arryExportFunction) {

    SwitchDetailToList();

    ContentList.innerHTML = "";
    ContentList.style.width = "98%"
    ContentList.style.margin = "0 auto";
    setStyleDivList(ContentList);

    ContentList.appendChild(getExportDiv(arryExportFunction));

    // search function
    let divsearchfnc = document.createElement('div');
    divsearchfnc.innerHTML = "Search Functions ...";
    divsearchfnc.style.width = "100%";
    divsearchfnc.style.boxSizing = "border-box";
    divsearchfnc.style.padding = "2%";
    divsearchfnc.style.border = "1px solid gray";
    ContentList.appendChild(divsearchfnc);

    // load list table - start
    let ListTable = pupulateTable(null, ListData, ListClicked, null);
    ListTable.style.width = '100%';
    // ListTable.style.margin = '1%';
    ContentList.appendChild(ListTable);
    // load list table - end

}


function DriverPersonalParticulars() {
    loadDivList(SampleEmployeeData, DriverListClicked, [undefined, undefined, undefined, undefined, undefined]);
}

function load_divbutton(arrysetbtn, boolbtndir, boolbtnreset) {
    // arrysetbtn index: 0 - Type; 1 - Desc; 2 - fncOnClick; 3 - actionURL //

    let arrybtnparam = [];
    let arrybtn = [];

    if (boolbtndir) {
        arrybtn = [];
        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '<<';
        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjprev_clicked;
        arrybtnparam.push(arrybtn);
    }

    arrysetbtn.forEach(btn => {
        arrybtnparam.push(btn);
    })

    if (boolbtnreset) {
        arrybtn = [];
        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = 'RESET';
        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = 'Reset';
        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = undefined;
        arrybtnparam.push(arrybtn);
    }

    if (boolbtndir) {
        arrybtn = [];
        arrybtn[vssfnc_formpopparam_item.arrybutton.Type] = null;
        arrybtn[vssfnc_formpopparam_item.arrybutton.Desc] = '>>';
        arrybtn[vssfnc_formpopparam_item.arrybutton.OnClick] = dataobjnext_clicked;
        arrybtnparam.push(arrybtn);
    }

    return arrybtnparam;
}

function dataobjprev_clicked(e) {
    slide_direction = -1;
    // objectid_curr = dataobjlist_search(-1).ID;
    // dataobj_loaddetail(objectid_curr);
    e.preventDefault();
}

function dataobjnext_clicked(e) {
    slide_direction = 1;
    // objectid_curr = dataobjlist_search(1).ID;
    // dataobj_loaddetail(objectid_curr);
    e.preventDefault();
}


function format_forminputelem() {
    let arryreturn = []
    let arryinp = [];
    arryinp[vssfnc_formpopparam_item.arryinput.Label.WidthRatio] = '30%';
    arryinp[vssfnc_formpopparam_item.arryinput.Label.Align] = -1;
    arryreturn.push(arryinp);

    arryinp = [];
    arryinp[vssfnc_formpopparam_item.arryinput.Input.WidthRatio] = '70%';
    arryinp[vssfnc_formpopparam_item.arryinput.Input.Align] = -1;
    arryreturn.push(arryinp);

    return arryreturn;
}

function DriverDrivingLicense() {
    ContentDetail.innerHTML = "";
    ContentDetail.innerHTML = "<br><br>>>>>>>>> Driving License ... >>>>>>>>";
}

function MenuDriverReportClicked() {
    alert(DriverReportItem);
}

function MenuBusReportClicked() {
    alert(BusReportItem);
}

function BusBreakDownListClicked() {

    SwitchListToDetail();

    let BreakDownData = SampleBusBreakDownData.find((eee) => {
        return eee.ID === this.dataset.ID || eee.ID === parseInt(this.dataset.ID);
    });


    ContentDetail.innerHTML = "";
    ContentDetail.style.margin = "1%";

    ContentDetail.appendChild(getDivBusBreadDownByID(BreakDownData));
}

function getDivBusBreadDownByID(breakdowndata) {

    let arrydatacol = ArryDataObjCol[DataObj.BusBreakDown];
    let arrybtn = ArryDataObjBtn[DataObj.BusBreakDown];
    arrybtn[2][3] = getIFrameMap;

    // route, bus, driver
    let arryitemdata = [
        [{ ID: 1, Name: "66" }, { ID: 2, Name: "68" }, { ID: 3, Name: "57" }, { ID: 4, Name: "89" }],
        [{ ID: 1, Name: "AMK209" }, { ID: 2, Name: "AKL8398" }, { ID: 3, Name: "AEP8987" }, { ID: 4, Name: "ABM1234" }],
        [{ ID: 1, Name: "Ali" }, { ID: 2, Name: "Muthu" }, { ID: 3, Name: "Samy" }, { ID: 4, Name: "Ah Meng" }]
    ]


    return loadDivDetail("Bus Breakdown", breakdowndata, arrydatacol, arryitemdata, arrybtn, breakdowndata.Picture);
}

function BusManageBreakdown() {
    loadDivList(SampleBusBreakDownData, BusBreakDownListClicked, [undefined, undefined, undefined, undefined, undefined]);
}

function DutyRoster() {
    loadDivList(SampleDutyRoster, DutyRosterListClicked, [undefined, undefined, undefined, undefined, undefined]);
}

function DutyRosterListClicked() {

}

// arryExportFunction=[NewPage, Print, Excel, PDF, CSV]
function getExportDiv(arryExportFunction) {

    let divexportfnc = document.createElement('div');
    divexportfnc.style.display = "flex";
    divexportfnc.style.justifyContent = "space-around";
    divexportfnc.style.flexDirection = "row";
    divexportfnc.style.boxSizing = "border-box";
    divexportfnc.style.width = "100%";
    // divexportfnc.style.margin="0 auto";
    divexportfnc.style.border = "1px solid gray";


    let divExportNewPage = document.createElement('div');
    divExportNewPage.className = ClassFunctionButton;
    divExportNewPage.innerHTML = "New Page";
    divExportNewPage.onclick = arryExportFunction[0];

    let divExportPrint = document.createElement('div');
    divExportPrint.className = ClassFunctionButton;
    divExportPrint.innerHTML = "Print";

    let divExportExcel = document.createElement('div');
    divExportExcel.className = ClassFunctionButton;
    divExportExcel.innerHTML = "Excel";

    let divExportPDF = document.createElement('div');
    divExportPDF.className = ClassFunctionButton;
    divExportPDF.innerHTML = "PDF";

    let divExportCSV = document.createElement('div');
    divExportCSV.className = ClassFunctionButton;
    divExportCSV.innerHTML = "CSV";

    divexportfnc.appendChild(divExportNewPage);
    divexportfnc.appendChild(divExportPrint);
    divexportfnc.appendChild(divExportExcel);
    divexportfnc.appendChild(divExportPDF);
    divexportfnc.appendChild(divExportCSV);

    return divexportfnc;
}

function ReportAPAD(ReportID) {

    SwitchListToDetail();

    ContentDetail.innerHTML = "";
    ContentDetail.style.display = "flex";
    ContentDetail.style.flexDirection = "column";
    ContentDetail.style.margin = "1%";

    ContentDetail.appendChild(getExportDiv([ExportNewPage, undefined, undefined, undefined, undefined]));

    // search function
    let divsearchfnc = document.createElement('div');
    divsearchfnc.style.boxSizing = "border-box";
    divsearchfnc.style.width = "100%";
    divsearchfnc.style.padding = "1%";
    divsearchfnc.style.border = "1px solid gray";
    divsearchfnc.innerHTML = "Search Functions (to be built)";
    ContentDetail.appendChild(divsearchfnc);


    // load report table 

    let ReportData = null;
    switch (ReportID) {

        case "APAD Report 1":
            ReportData = APADReport1;
            break;

        case "APAD Report 2":
            ReportData = APADReport2;
            break;

        default:
            ContentDetail.innerHTML = "<br><br>>>>>>>>> Report building in progress: " + ReportID + ">>>>>>>>";
            break;
    }
    if (ReportData) {
        let ListTable = pupulateTable(ReportID, ReportData, undefined, null);
        // ListTable.style.width = '50%';
        ListTable.style.boxShadow = "2px 2px 2px gray";
        ContentDetail.appendChild(ListTable);
    }


}

function ExportNewPage() {

    let newwindow = window.open("");

    //?? how best to slice out only the table element ??

    let tablenode = ContentDetail.childNodes[2].cloneNode(true);
    let divtable = document.createElement('div');
    divtable.appendChild(tablenode);
    newwindow.document.write(divtable.innerHTML);

    //?? need to remove tablenode ??
}

function MenuReportManageClicked() {
    NavBarSideMenu.innerHTML = "";

    populateMenuItem(MenuReportManageItem, MenuReportManageItem[MenuItemIndexText], NavBarSideMenu, 3);

    SubMenuItemSlideOut();

    ContentDetail.innerHTML = "";
    ContentDetail.innerHTML = "<br><br>>>>>>>>> Report List: " + this.dataset.id + ">>>>>>>>";
}

function MenuReportTicketClicked() {
    NavBarSideMenu.innerHTML = "";

    populateMenuItem(MenuReportTicketItem, MenuReportTicketItem[MenuItemIndexText], NavBarSideMenu, 3);

    SubMenuItemSlideOut();

    ContentDetail.innerHTML = "";
    ContentDetail.innerHTML = "<br><br>>>>>>>>> Report List: " + this.dataset.id + ">>>>>>>>";
}

function MenuLiveMapClicked() {
    ContentDetail.innerHTML = "";
    ContentDetail.innerHTML = "<div><img src='PT_LiveTrackMap.png' style='width:90%'></div>"
}
function MenuLiveLineClicked() {
    ContentDetail.innerHTML = "";
    ContentDetail.innerHTML = "<div><img src='PT_LiveTrackLine.png' style='width:90%'></div>"
}
function MenuLiveTableClicked() {
    ContentDetail.innerHTML = "";
    ContentDetail.innerHTML = "<div><img src='PT_LiveTrackTable.png' style='width:90%'></div>"
}


function SetMenuTitle(MenuID) {

    // SearchMainSubMenArray() returns an array of 2 array: 1. MainMenu 2. SubMenu
    let arryMenu = SearchMainSubMenuArray(MenuID);
    if (arryMenu) {
        MenuTitleLogo.innerHTML = "";
        MenuTitleLogo.innerHTML = "<img src='" + arryMenu[0][MenuItemIndexSvg] + "' style='margin-right:5%;'>" + arryMenu[0][MenuItemIndexText] + ' - ' + arryMenu[1][MenuItemIndexText] + ' - ' + MenuID;
    }

    // var i = SearchMenuIndex(MenuItem, MenuID);

    // MenuTitleLogo.innerHTML = "";
    // MenuTitleLogo.innerHTML = "<img src='" + MenuItem[i][MenuItemIndexSvg] + "' style='margin-right:5%;'>" + MenuItem[i][MenuItemIndexText];
}

function SearchMenuIndex(MenuArray, MenuID) {
    var found = false;
    var i = 0;
    while (!found && i < MenuArray.length) {
        if (MenuArray[i][MenuItemIndexText] == MenuID) {
            found = true;
        }
        else {
            i++;
        }
    }
    return found ? i : -1;
}

// function MenuRouteManageBusStop() {
//     SubMenuItemSlideIn();
//     InvisibleAllSubMenu(null);

//     let tablelist1 = pupulateTable("Bus Stop Listing", SampleRouteData, undefined, null);
//     // tablelist1.dataset[strListTableNavItem] = navitem[MainNavItem_Index.HTMLID];
//     // tablelist1.classList.add(strClsListInTable);
//     ContentDetail.innerHTML = "";
//     ContentDetail.appendChild(tablelist1);
// }

function populateForm(formtitle, arrydatacol, jsondata, arryitemdata, arrybtn) {
    // load detail form - start
    let objparam = vssfnc_formpopulate_param();
    objparam.caption = formtitle;
    // objparam.actionurl = serverendpoint;
    // [description strings, requird, type]]
    objparam.arrydatacol = arrydatacol;
    objparam.jsondata = jsondata;


    objparam.arryitemdata = arryitemdata;
    // objparam.htmlform = formdetails;
    objparam.arryinput = format_forminputelem();
    // objparam.arryinput = [
    //     ['50%',, 0],
    //     ['50%', -1]
    // ];
    // objparam.arryclass = ['contentcaption', 'contentlabel', 'contentinput', 'contentbutton'];

    objparam.arrybutton = load_divbutton(arrybtn, true, true);

    return vssfnc_formpopulate(objparam);
    // objparam.arryitemdata.push(listobj.account);
    // objparam.arryitemdata.push(listobj.account);
}

function pupulateTable(tabletitle, datalist, function_clicked, arrybtn) {
    // load listing in table element //
    // contentlisttable.innerHTML = '';
    // contentlisttable.style.display = 'block';

    var tablelist = document.createElement('table');
    tablelist.id = "ListingBusStop";

    let objparam = vssfnc_tablepopulate_param();
    objparam.caption = tabletitle;
    objparam.htmltable = tablelist;
    objparam.arryjsondata = datalist;

    // let arryheader = [];
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'ID';
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '30%';
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = 0;
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
    // objparam.arryheadercol.push(arryheader);

    // arryheader = [];
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Name';
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '70%';
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = -1;
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
    // objparam.arryheadercol.push(arryheader);

    // arryheader = [];
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Desc] = 'Sector';
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Width] = '70%';
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Align] = -1;
    // arryheader[vssfnc_tablepopparam_item.arryheadercol.Input] = null;
    // objparam.arryheadercol.push(arryheader);

    objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Table] = 'table'
    objparam.arrydataid[vssfnc_tablepopparam_item.arrydataid.Datarow] = "ID";

    objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Ascd] = ' (v)';
    objparam.arrysortind[vssfnc_tablepopparam_item.arrysortind.Dscd] = ' (^)';

    objparam.arrybuttontable = arrybtn;

    objparam.fncdatarowclicked = function_clicked;

    vssfnc_tablepopulate(objparam);

    return tablelist;
}

function setCurrentDateTime() {

    let currtime = new Date();
    NavBarLogoDateTime.innerHTML = currtime.getDate() + '/' + (currtime.getMonth() + 1) + '/' + currtime.getFullYear() + ' - ' + currtime.getHours() + ':' + currtime.getMinutes() + ':' + ('0' + currtime.getSeconds()).slice(-2);

}

function setTimeByMinute() {
    setInterval(() => {
        setCurrentDateTime();
    }, 1000);
}


function InitializeMap() {
    var map;

    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions =
    {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };
    
    map = new google.maps.Map(document.getElementById("map"), myOptions);

    return map;
}

function getMap() {
    // function InitializeMap() {

    //     var latlng = new google.maps.LatLng(-34.397, 150.644);
    //     var myOptions =
    //     {
    //         zoom: 8,
    //         center: latlng,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP,
    //         disableDefaultUI: true
    //     };
    //     map = new google.maps.Map(document.getElementById("map"), myOptions);
    // }
    // let divmap = document.createElement('div');
    // divmap.id = "map";

    var geocoder = new google.maps.Geocoder();
    var map = InitializeMap();

    // divmap.appendChild(map);

    // var address = document.getElementById("addressinput").value;
    // geocoder.geocode({ 'address': address }, function (results, status) {
    //     if (status == google.maps.GeocoderStatus.OK) {
    //         map.setCenter(results[0].geometry.location);
    //         var marker = new google.maps.Marker({
    //             map: map,
    //             position: results[0].geometry.location
    //         });

    //     }
    //     else {
    //         alert("Geocode was not successful for the following reason: " + status);
    //     }
    // });
    // return divmap;


}