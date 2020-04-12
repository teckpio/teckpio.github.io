const NavBar = document.getElementById("NavBar");

const MenuProduct = document.getElementById("MenuProduct");
const MenuOrder = document.getElementById("MenuOrder");
const MenuOrderSummary = document.getElementById("MenuOrderSummary");
const MenuDelivery = document.getElementById("MenuDelivery");
const MenuUser = document.getElementById("MenuUser");
const MenuResources = document.getElementById("MenuResources");
const MenuSetting = document.getElementById("MenuSetting");

const DivContentList = document.getElementById("ContentList");
const DivContentDetail = document.getElementById("ContentDetail");

const ClassMenuItem = "MenuItem";
const ClassMenuItemSelected = "MenuItemSelected";
const IDTrans = "Trans";

MenuProduct.onclick = MenuProductClicked;
MenuOrder.onclick = MenuOrderClicked;
MenuOrderSummary.onclick = MenuOrderSummaryClicked;
MenuDelivery.onclick = MenuDeliveryClicked;
MenuUser.onclick = MenuUserClicked;
MenuResources.onclick = MenuResourcesClicked;
MenuSetting.onclick = MenuSettingClicked;



function unselectAllMenuItem() {
    for (var i = 0; i < NavBar.children.length; i++) {
        NavBar.children[i].classList.remove(ClassMenuItemSelected);
        NavBar.children[i].classList.add(ClassMenuItem);
    }
}

function selectMenuItem(divmenuitem) {
    unselectAllMenuItem();
    divmenuitem.classList.add(ClassMenuItemSelected);
}

function MenuProductClicked() {
    selectMenuItem(MenuProduct);
    let ProductList = [];

    getProductList().forEach(itm => {
        ProductList.push({ ID: itm.ID, Name: itm.Name });
    });

    loadContentList(ProductList, ProductListClicked);
}


function getProductList() {
    return DataProduct;
}

function getOrdreSummaryPickupList() {
    return DataOrderSummaryPickup;
}

function getOrderSummaryProductList() {
    return DataOrderSummaryProduct;
}

function getOrderPickupDetail() {
    return DataOrderPickupDetail;
}

function MenuOrderClicked() {
    selectMenuItem(MenuOrder);
    loadContentList(getOrderList(OrderListClicked), OrderListClicked);
}

function MenuOrderSummaryClicked() {
    selectMenuItem(MenuOrderSummary);
    let ProductList = [];

    getProductList().forEach(itm => {
        ProductList.push({ ID: itm.ID, Product: itm.Name });
    });

    loadContentList(ProductList, OrderSummaryProductListClicked);
}

function getOrderList() {
    return DataOrderHeader;
}

function MenuDeliveryClicked() {
    selectMenuItem(MenuDelivery);

    loadContentList(getOrdreSummaryPickupList(), OrderSummaryPickupListClicked);
}

function MenuUserClicked() {
    selectMenuItem(MenuUser);
    DivContentDetail.innerHTML = "";
    DivContentDetail.innerHTML = "Display registered users"
}

function MenuResourcesClicked() {
    selectMenuItem(MenuResources);
    DivContentDetail.innerHTML = "";
    DivContentDetail.innerHTML = "Add / Update / Delete Resources"
}

function MenuSettingClicked() {
    selectMenuItem(MenuSetting);
    DivContentDetail.innerHTML = "";
    // DivContentDetail.innerHTML = "System Setting"

    let img = document.createElement("img");
    img.src = "SystemStruct.svg";
    DivContentDetail.appendChild(img);

    let img2 = document.createElement("img");
    img2.src = "ProcessFlow.svg";
    DivContentDetail.appendChild(img2);
}

function loadContentList(ListData, FncDataRowClicked) {
    DivContentDetail.innerHTML = "";
    DivContentList.innerHTML = "";

    let param = vssfnc_tablepopulate_param();

    param.arryjsondata = ListData;
    param.arrydataid = [null, "ID"];
    param.fncdatarowclicked = FncDataRowClicked;

    table = vssfnc_tablepopulate(param);
    table.style.width = "90%";
    table.style.margin = "5% auto";

    DivContentList.appendChild(table);
}


function ProductListClicked(ID) {
    loadProductDetail(ID);
}


function loadProductDetail(DetailID) {
    DivContentDetail.style.transition = "all .2s";

    DivContentDetail.style.opacity = "0";

    setTimeout(() => {
        DivContentDetail.innerHTML = "";
        DivContentDetail.style.display = "flow";
        DivContentDetail.style.flexDirection = "column";
        DivContentDetail.style.alignItems = "Center";

        let detail = DataProduct.find((itm) => {
            return itm.ID === parseInt(DetailID);
        })

        let divimg = document.createElement("div");
        divimg.style.width = "100%";
        divimg.style.display = "flex";
        divimg.style.flexDirection = "column";
        divimg.style.alignItems = "center";
        divimg.style.margin = "1%";
        // divimg.style.height = "50%";


        let img = document.createElement("img");
        img.src = detail.ImageURL;
        // img.style.height = "100%";
        img.style.Width = "90%";
        // img.style.margin = "0 auto";
        img.style.boxShadow = "2px 2px 2px lightgray";
        divimg.appendChild(img);

        let divdesc = document.createElement("div");
        divdesc.innerHTML = detail.Name;
        divdesc.style.width = "100%";
        divdesc.style.textAlign = "center";
        divdesc.style.margin = "1%";

        let divprice = document.createElement("div");
        divprice.style.width = "100%";
        divprice.innerHTML = detail.Price;
        divprice.style.textAlign = "center";
        divprice.style.margin = "1%";

        let divbal = document.createElement("div");
        divbal.style.width = "100%";
        divbal.innerHTML = detail.Balance;
        divbal.style.textAlign = "center";
        divbal.style.margin = "1%";


        DivContentDetail.appendChild(divimg);
        DivContentDetail.appendChild(divdesc);
        DivContentDetail.appendChild(divprice);
        DivContentDetail.appendChild(divbal);

        DivContentDetail.style.opacity = "1";
    }, 200);
}

function OrderListClicked(OrderID) {
    DivContentDetail.innerHTML = "";
    DivContentDetail.appendChild(getDivInvoice(OrderID));

    // DivContentDetail.style.boxShadow = "0 0 2px 2px rgba(100,100,100,.2)";
    // let divheader = document.createElement('div');
    // divheader.innerHTML = `Customer: Tan <br> 
    //     Date: 1/3/2020 <br> 
    //     Reference: OR001 <br> 
    //     Address: 12, Jalan Tiga Empat, Taman Lima Enam, Kuala Lumpur 20000 <br>
    //     Total: RM30.00`;
    // divheader.style.width = "90%";
    // divheader.style.margin = "5% auto";
    // divheader.style.textAlign = "left";

    // DivContentDetail.appendChild(divheader);

    // let param = vssfnc_tablepopulate_param();

    // param.arryjsondata = DataOrderDetail;
    // param.arrydataid = [null, "ID"];
    // param.fncdatarowclicked = undefined;

    // table = vssfnc_tablepopulate(param);
    // table.style.width = "90%";
    // table.style.margin = "5% auto";

    // DivContentDetail.appendChild(table);
}

function OrderSummaryPickupListClicked() {
    DivContentDetail.innerHTML = "";
    DivContentDetail.style.transition = "all .2s";
    DivContentDetail.style.opacity = "0";

    setTimeout(() => {
        DivContentDetail.style.display = "flow";
        DivContentDetail.style.flexDirection = "column";
        DivContentDetail.style.alignItems = "Center";

        // let detail = DataProduct.find((itm) => {
        //     return itm.ID === parseInt(ProductID);
        // })

        // let divimg = document.createElement("div");
        // divimg.style.width = "100%";
        // divimg.style.display = "flex";
        // divimg.style.flexDirection = "column";
        // divimg.style.alignItems = "center";
        // divimg.style.margin = "1%";

        // let img = document.createElement("img");
        // img.src = detail.ImageURL;
        // img.style.Width = "90%";
        // img.style.boxShadow = "2px 2px 2px lightgray";
        // divimg.appendChild(img);

        // let divdesc = document.createElement("div");
        // divdesc.innerHTML = detail.Name;
        // divdesc.style.width = "100%";
        // divdesc.style.textAlign = "center";
        // divdesc.style.margin = "1%";

        // let divprice = document.createElement("div");
        // divprice.style.width = "100%";
        // divprice.innerHTML = detail.Price;
        // divprice.style.textAlign = "center";
        // divprice.style.margin = "1%";

        // let divbal = document.createElement("div");
        // divbal.style.width = "100%";
        // divbal.innerHTML = detail.Balance;
        // divbal.style.textAlign = "center";
        // divbal.style.margin = "1%";


        // DivContentDetail.appendChild(divimg);
        // DivContentDetail.appendChild(divdesc);
        // DivContentDetail.appendChild(divprice);
        // DivContentDetail.appendChild(divbal);

        let divpickup = document.createElement("div");
        divpickup.innerHTML = "Pickup: Puchong";

        DivContentDetail.appendChild(divpickup);

        let param = vssfnc_tablepopulate_param();

        param.arryjsondata = getOrderPickupDetail();
        param.arrydataid = [null, "ID"];
        param.fncdatarowclicked = OrderSummaryPickupOrderClicked;

        table = vssfnc_tablepopulate(param);
        table.style.width = "90%";
        table.style.margin = "5% auto";

        DivContentDetail.appendChild(table);

        let divsummary = document.createElement('div');
        divsummary.innerHTML = "Total Collection: RM 150.00";

        DivContentDetail.appendChild(divsummary);


        // let divbtn = document.createElement('div');
        // divbtn.style.display = "flex";
        // divbtn.style.justifyContent = "space-around";
        // divbtn.style.border = "1px solid rgba(200,200,200,1)";
        // divbtn.style.padding = "1%";
        // divbtn.style.margin = "1% auto";
        // divbtn.style.width = "90%";
        // divbtn.style.boxSizing = "border-box";

        // let btn = document.createElement('button');
        // btn.innerHTML = "Generate Pickup Note";
        // // btn.style.float="right";
        // divbtn.appendChild(btn);

        // let btn2 = document.createElement('button');
        // btn2.innerHTML = "Generate Invoice";
        // // btn.style.float="right";
        // divbtn.appendChild(btn2);

        let paramfncbtn = vssfnc_buttonpopulate_param();
        paramfncbtn.class = null;
        paramfncbtn.width = "90%";
        paramfncbtn.arrybutton = [
            [null, "Pickup Note", undefined, undefined],
            [null, "Invoice", undefined, undefined]
        ]
        DivContentDetail.appendChild(vssfnc_buttonpopulate(paramfncbtn));

        // DivContentDetail.appendChild(getDivButton("90%", [["Pickup Note", undefined], ["Invoice", undefined]]));

        DivContentDetail.style.opacity = "1";
    }, 200);
}

// function getDivButton(divwidth, arrybtn) {
//     let divbtn = document.createElement('div');
//     divbtn.style.display = "flex";
//     divbtn.style.justifyContent = "space-around";
//     divbtn.style.border = "1px solid rgba(200,200,200,1)";
//     divbtn.style.padding = "1%";
//     divbtn.style.margin = "1% auto";
//     divbtn.style.width = divwidth;
//     divbtn.style.boxSizing = "border-box";

//     let btn;

//     arrybtn.forEach(btn => {
//         buttonx = document.createElement('button');
//         buttonx.innerHTML = btn[0];
//         buttonx.onclick = btn[1];
//         divbtn.appendChild(buttonx);
//     })
//     // let btn = document.createElement('button');
//     // btn.innerHTML = "Generate Pickup Note";
//     // // btn.style.float="right";
//     // divbtn.appendChild(btn);

//     // let btn2 = document.createElement('button');
//     // btn2.innerHTML = "Generate Invoice";
//     // // btn.style.float="right";
//     // divbtn.appendChild(btn2);

//     return divbtn;
// }


function getDivInvoice(trxID) {
    let divinvoice = document.createElement('div');

    divinvoice.id = IDTrans;
    divinvoice.style.boxShadow = "0 0 2px 2px rgba(100,100,100,.2)";
    divinvoice.style.margin = "1% auto";
    divinvoice.style.boxSizing = "border-box";
    divinvoice.style.padding = "1%";


    let divheader = document.createElement('div');
    divheader.innerHTML = `Customer: Tan <br> 
        Date: 1/3/2020 <br> 
        Reference: OR001 <br> 
        Address: 12, Jalan Tiga Empat, Taman Lima Enam, Kuala Lumpur 20000 <br>
        Total: RM30.00`;
    divheader.style.width = "90%";
    divheader.style.margin = "5% auto";
    divheader.style.textAlign = "left";

    divinvoice.appendChild(divheader);

    let param = vssfnc_tablepopulate_param();

    param.arryjsondata = getOrderDetail(trxID);
    param.arrydataid = [null, "ID"];
    param.fncdatarowclicked = undefined;

    table = vssfnc_tablepopulate(param);
    table.style.width = "90%";
    table.style.margin = "5% auto";

    divinvoice.appendChild(table);

    return divinvoice;
}

function getOrderDetail(ID) {
    if (ID) {
        let found=DataOrderDetail.filter(trx => {
            return trx.Order === parseInt(ID);
        })
        console.log(found);
        return found;
    } else {
        return DataOrderDetail;
    }
}


function OrderSummaryPickupOrderClicked(trxID) {
    let divinvoice = document.getElementById(IDTrans);

    if (divinvoice) {
        divinvoice.innerHTML = "";
        let tempdiv = getDivInvoice(trxID);
        divinvoice.innerHTML=tempdiv.innerHTML;
    }else{
        divinvoice = getDivInvoice(trxID);
    }

    divinvoice.style.width = "90%";
    DivContentDetail.appendChild(divinvoice);
}

function OrderSummaryProductListClicked(ProductID) {
    DivContentDetail.innerHTML = "";
    DivContentDetail.style.transition = "all .2s";
    DivContentDetail.style.opacity = "0";

    setTimeout(() => {
        DivContentDetail.style.display = "flow";
        DivContentDetail.style.flexDirection = "column";
        DivContentDetail.style.alignItems = "Center";

        let detail = DataProduct.find((itm) => {
            return itm.ID === parseInt(ProductID);
        })

        let divimg = document.createElement("div");
        divimg.style.width = "100%";
        divimg.style.display = "flex";
        divimg.style.flexDirection = "column";
        divimg.style.alignItems = "center";
        divimg.style.margin = "1%";


        let img = document.createElement("img");
        img.src = detail.ImageURL;
        // img.style.height = "100%";
        img.style.Width = "90%";
        // img.style.margin = "0 auto";
        img.style.boxShadow = "2px 2px 2px lightgray";
        divimg.appendChild(img);

        let divdesc = document.createElement("div");
        divdesc.innerHTML = detail.Name;
        divdesc.style.width = "100%";
        divdesc.style.textAlign = "center";
        divdesc.style.margin = "1%";

        let divprice = document.createElement("div");
        divprice.style.width = "100%";
        divprice.innerHTML = detail.Price;
        divprice.style.textAlign = "center";
        divprice.style.margin = "1%";

        let divbal = document.createElement("div");
        divbal.style.width = "100%";
        divbal.innerHTML = detail.Balance;
        divbal.style.textAlign = "center";
        divbal.style.margin = "1%";


        DivContentDetail.appendChild(divimg);
        DivContentDetail.appendChild(divdesc);
        DivContentDetail.appendChild(divprice);
        DivContentDetail.appendChild(divbal);


        let param = vssfnc_tablepopulate_param();

        param.arryjsondata = getOrderSummaryProductList();
        param.arrydataid = [null, "ID"];
        param.fncdatarowclicked = undefined;

        table = vssfnc_tablepopulate(param);
        table.style.width = "90%";
        table.style.margin = "5% auto";

        DivContentDetail.appendChild(table);

        let paramfncbtn = vssfnc_buttonpopulate_param();
        paramfncbtn.class = undefined;
        paramfncbtn.width = "90%";
        paramfncbtn.arrybutton = [
            [null, "Packing Note", undefined, undefined],
            [null, "Supplier Order", undefined, undefined]
        ]
        DivContentDetail.appendChild(vssfnc_buttonpopulate(paramfncbtn));

        DivContentDetail.style.opacity = "1";
    }, 200);

}

