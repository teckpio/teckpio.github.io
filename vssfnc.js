'use strict';

// vssfnc_tablepopulate_param
// vssfnc_tablepopulate
// vssfnc_tablepaintoddevenrow
// vssfnc_sortarrydata

// vssfnc_formpopulate_param
// vssfnc_formpopulate

const VssTableID = "VssTable";

// const VssTableDSID = "VssTableDSID";
const VssTableDSDataObj = "VssTableDSDataObj";
const VssTableDSDataObjX = "VssTableDSDataObjX";
const VssTableDSXrefDataObjX = "VssTableDSXrefDataObjX";
// const VssTabldDSSelectedRow = "VssTabldDSSelectedRow";


const VssTableDatarowDSID = "VssTableDatarowDSID";
const VssTableDatarowXDSIndex = "VssTableDatarowXDSIndex";

const VssTableColDSKey = "VssTableColDSKey";
const VssTableColDSVal = "VssTableColDSVal";

const VssTableEditRowID = "VssTableEditRowID";
const VssTableEditRowBtn = "VssTableEditRowBtn";
const VssTableEditDRAdd = "+";
const VssTableEditDRDelete = "-";
const VssTableEditDREdit = "=";
const VssTableDRSelectEdit = "^";
const VssTableDRSelectFnc = "VssTableDRSelectFnc";

const VssTableItemCount = "VssTableItemCount";
const VssTableStrItemCount = "Item Count: ";

const VssTableDRClassSelect = "VssTableDRClassSelect";

const VssFormHTMLID = "VssForm";
const VssFormDSDataObj = "VssFormDSDataObj";
const VssFormDSDataObjX = "VssFormDSDataObjX";
const VssFormColDSKey = "VssFormColDSKey";


const VssColorTableCaptionBG = "black";
const VssColorTableCaptionFG = "white";

const VssColorTableHeaderRow = "black";
const VssColorTableOddRow = "lightgray";
const VssColorTableEvenRow = "white";

const VssBorderTable = "";
const VssBoxShadowTable = "";

const VssColorFormCaptionBG = "black";
const VssColorFormCaptionFG = "white";

const VssColorFormButtonBG = "white";
const VssColorFormButtonnFG = "black";
const VssBorderFormButton = "1px solid black";
const VssBorderFormButtonnBoxShadow = "0 0 1px 1px black";

const VssBorderItemCount = "1px solid gray";

const VssTransitionPeriodStr = ".2s";
const VssTransitionPeriod = 200;

const VssInitDisplay = "VSSInitDisplay";
const VssMenu = "VssMenu";


// arrybutton (button for td in a set column) - a 2-dim array of 
//          [[0: button text, 1: button column, 2: button_clicked function, 3: css class of button]]

function vssfnc_tablepopulate_param() {
    // caption - caption of table (optional)
    // arryheadercol - a 2-dim array of:
    //                  [header col[0: description strings, 1: col-width, 2: text-alignment, 3: [input type, input data, onchange function], 4: [button text, click function, css class]]]
    //                  (col-width - set to '0%' to hide column - col-width is checked in both <th> and <td> to determine whether to <display:none>)
    //                  (text-alignment - 0:center, -1:left, 1:right (default - left))
    //                  (input type - 1: input element, 2: select element)
    //               - if arryheadercol is not provided, header col info will be extracted from arryJSON's properties - col-width will be defaulted, text-alignment - ?)
    // arryJSON - a json data object 
    // arryitemdata - if one of the field of the table is an ID of a data object, then arryitemdata with the index of that field would
    //                  contain an array of that data object (with ID + Name)
    //              - a 2-dim array (eg: [null, null, [], null, [], [], null] where non-null entry is a list of the data object options)
    // arryfooteragg - an array of aggregate functions (sum or ave) on required column
    // boolitemcount - a boolean to indicate whether to list number of items at the bottom of table
    // tablelistX - html element of the table to be created (if the html table element is not provided, the function will return a table element)
    // tableid - id of source datatable (for sorting by column purposes - obsolete?)
    // arryclass - an array of css classes - 
    //          0:table
    //          1:datarow
    //          2:<caption> 
    //          3:<thead><tr>
    //          4:<thead><tr><th>
    //          5:<tr><td>
    //          6:<tr><button>
    //          7:<tfoot><tr>
    // arryclassdatarow - an array of 3 classes for datarow - 
    //          0:odd-numbered row
    //          1:even-numbered row
    //          2:selected row
    // arrydataid - an array of data attributes - 
    //          0:data object type
    //          1:id of data object instance
    //          2:id of xref dataobject instance
    // arrysortind - an array of 2 strings indicator for column sorting - 
    //          0:ascending
    //          1:descending
    // arrybuttontable - a 2-dim array of 
    //          [[0: button text, 1: button_clicked function, 2: css class of button]]
    // fncdatarowclicked - function to call on datarow clicked (used as a callback with dataset-ID as the parameter)
    // arryeditrow - an array of:
    //          (if arryeditrow is set table.Dataset.DataObj will be set to indicate the data object that the data cells refer to) //
    //          0. DataObj (NOT USING)
    //          1. a 2-dim array with an array of data item options in its corresponding index (eg. [[], null, null,[], null, null])
    //              (options with ID + Name)
    //          2. datatype (html string for input type (eg, text, number))
    //              - an array of datatype with index corresponding to header datacol
    //          3. datatype attributes
    //              - an array of 2-elem array attributes type and value (eg, [['step','0.01'],['pattern','[0-9]']) with index
    //                  corresponding to header datacol
    //          4. CSS Style
    //              - an array of 2-dim array of 2-elem: 1. CSS Style; 2. CSS Value (eg [['textAlign', 'center'], ['color', 'black']]) with index
    //                  corresponding to header datacol
    //          5. call back function for each input
    //              - an array of call back function for onchange corresponding to each input
    //          6. call back function (with array of datacell values as parameter) when done is clicked
    // boolselectcolumn to indicate whether a datarow select column is available for datarow selection

    return {
        caption: null,
        arryheadercol: [],
        arryjsondata: null,
        arryitemdata: null,
        arryfooteragg: null,
        boolitemcount: false,
        htmltable: null,
        htmltableid: null,
        arrydataid: [],
        arryclass: [],
        arryclassdatarow: [],
        arrysortind: [],
        // arrybutton: [],
        arrybuttontable: [],
        fncdatarowclicked: undefined,
        arryeditrow: [],
        boolselectcolumn: false
    }
}

const vssfnc_tablepopparam_item = {
    arryheadercol: {
        Desc: 0,
        Width: 1,
        Align: 2,
        Input: {
            ArryIndex: 3,
            Type: 0,
            Data: 1,
            OnChange: 2
        },
        Button: {
            ArryIndex: 4,
            Desc: 0,
            OnClick: 1,
            CssClass: 2
        }
    },
    arryclass: {
        Table: 0,
        Caption: 1,
        Datarow: 2,
        TheadTr: 3,
        TheadTrTh: 4,
        TrTd: 5,
        TrButton: 6,
        TfootTr: 7
    },
    arryclassdatarow: {
        OddNumRow: 0,
        EvnNumRow: 1,
        SelectedRow: 2
    },
    arrydataid: {
        DataObj: 0,
        DataObjX: 1,
        XrefDataObjX: 2
    },
    arrysortind: {
        Ascd: 0,
        Dscd: 1
    },
    // arrybutton: {
    //     ArryID: 0,
    //     Desc: 0,
    //     Col: 1,
    //     OnClick: 2,
    //     CSSClass: 3
    // },
    arrybuttontable: {
        Button: {
            ArryID: 0,
            Desc: 0,
            OnClick: 1,
            CSSClass: 2
        },
    },
    arryeditrow: {
        DataObj: 0,
        ArryItemData: 1,
        ArryItemDataType: 2,
        ArryItemDataTypeAttr: 3,
        ArryCSSStyle: 4,
        ArryInputChangeCallback: 5,
        FncDone: 6
    },
    tdinputtype: {
        Input: 1,
        Select: 2
    }

}

function vssfnc_tablepopulate(objparam) {
    // 4 tasks are executed:
    // - load caption <caption>
    // - load header <thead>
    // - load body + datarow <tbody>
    // - load footer <tfoot>
    // - add eventhandler for datarow (to be before paint datarow)
    // - paint datarow (odd/even)
    // - add eventhandler for:
    //      - header
    //      - datarow button

    let param_item = vssfnc_tablepopparam_item;
    let arrydataobjectkey = [];



    // whether there's an addtional row at top as the editing row //

    let booleditrow = objparam.arryeditrow && objparam.arryeditrow.length > 0;

    // whether to return the table element //
    // or setting being made to the pre-loaded table element //

    let boolReturnElem = false;
    if (objparam.htmltable) {
        objparam.htmltable.innerHTML = "";
    }
    else {
        objparam.htmltable = document.createElement('table');
        boolReturnElem = true;
    }

    objparam.htmltable.id = objparam.htmltableid ? objparam.htmltableid : VssTableID;



    // handling of null param //

    if (!objparam.arryclass) {
        objparam.arryclass = [];
    }
    if (!objparam.arryclassdatarow) {
        objparam.arryclassdatarow = [];
    }

    if (objparam.arrydataid && objparam.arrydataid[param_item.arrydataid.DataObj]) {
        objparam.htmltable.dataset[VssTableDSDataObj] = objparam.arrydataid[param_item.arrydataid.DataObj];
    }
    if (objparam.arrydataid && objparam.arrydataid[param_item.arrydataid.DataObjX]) {
        objparam.htmltable.dataset[VssTableDSDataObjX] = objparam.arrydataid[param_item.arrydataid.DataObjX];
    }
    if (objparam.arrydataid && objparam.arrydataid[param_item.arrydataid.XrefDataObjX]) {
        objparam.htmltable.dataset[VssTableDSXrefDataObjX] = objparam.arrydataid[param_item.arrydataid.XrefDataObjX];
    }



    // set css style of table element //

    if (objparam.arryclass[param_item.arryclass.Table]) {
        objparam.htmltable.classList.add(objparam.arryclass[param_item.arryclass.Table]);
    } else {
        // set default if table class not set 
        // objparam.htmltable.style.borderCollapse = 'collapse';

        objparam.htmltable.setAttribute('style',
            `border-collapse:collapse;
            width:100%;
            margin: 0 auto;
            box-sizing: border-box;
            border:1px solid black;`);
    }

    // caption //

    if (objparam.caption) {
        let caption = document.createElement('caption');
        if (objparam.arryclass[param_item.arryclass.Caption]) {
            caption.classList.add(objparam.arryclass[param_item.arryclass.Caption]);
        } else {
            caption.style.backgroundColor = VssColorTableCaptionBG;
            caption.style.color = VssColorTableCaptionFG;
            caption.style.textAlign = "left";
            caption.style.padding = "1%";
        }

        caption.innerHTML = objparam.caption;
        objparam.htmltable.appendChild(caption);
    }

    // table header //

    let thead = document.createElement('thead');

    // populate array of properties / keys of object //

    // arryjsondata must not be empty //
    // in cases having an edit row for addition of new object, an empty //
    // object must be passed in as the single element in arryjsondata //

    if (objparam.arryjsondata) {
        // extract header col from first json object //
        for (var ppt in objparam.arryjsondata[0]) {
            arrydataobjectkey.push(ppt);
        }
    }

    // table header row //

    let trheader = document.createElement('tr');

    // add first a datarow select column //

    if (objparam.boolselectcolumn) {
        let tselect = document.createElement('td');
        let selectcheck = document.createElement('input');
        selectcheck.setAttribute('type', 'checkbox');
        selectcheck.onclick = () => {
            let drselectcheck = objparam.htmltable.querySelectorAll(`.${VssTableDRClassSelect}`);
            if (drselectcheck) {
                drselectcheck.forEach(cbox => {
                    cbox.checked = selectcheck.checked;
                })
            }
        }
        tselect.appendChild(selectcheck);

        trheader.appendChild(tselect);
    }

    // add a datarow action column //

    if (booleditrow) {
        let taction = document.createElement('td');
        taction.innerHTML = ">+";

        taction.onclick = () => {

            // thead is parent to 0: header row, 1: edit row //
            let editrow = taction.parentElement.parentElement.children[1];
            let tactioncellindex = objparam.boolselectcolumn ? 1 : 0;
            let editrowtaction = editrow.children[tactioncellindex].firstChild;
            if (editrowtaction) {
                if (editrowtaction.innerHTML !== VssTableEditDRAdd) {
                    // // re-init edit row //

                    for (let i = 0; i < editrow.children.length; i++) {
                        if (objparam.boolselectcolumn && i == 0) {
                            // do nothing 
                        }
                        else if (objparam.boolselectcolumn && i == 1 || !objparam.boolselectcolumn && i == 0) {
                            editrow.children[i].firstChild.innerHTML = VssTableEditDRAdd;
                        } else {
                            editrow.children[i].firstChild.value = null;
                        }
                    }
                }
            }
        }

        trheader.appendChild(taction);
    }

    if (objparam.arryclass) {
        trheader.classList.add(objparam.arryclass[param_item.arryclass.TheadTr]);
    }

    if (objparam.arryheadercol && objparam.arryheadercol.length > 0) {

        objparam.arryheadercol.forEach((datacol, index) => {
            let th = document.createElement('th');
            th.innerHTML = datacol[param_item.arryheadercol.Desc];
            // th.id = index;
            // th.dataset[objparam.arrydataid[param_item.arrydataid.DataObj]] = objparam.htmltableid;
            if (objparam.arryclass && objparam.arryclass[param_item.arryclass.TheadTrTh]) {
                th.classList.add(objparam.arryclass[param_item.arryclass.TheadTrTh]);
            } else {
                th.setAttribute('style',
                    `width:${objparam.arryheadercol[index][param_item.arryheadercol.Width]} ${objparam.arryheadercol[index][param_item.arryheadercol.Width] === '0%' || objparam.arryheadercol[index][param_item.arryheadercol.Width] === '0' ? ';display:none' : ''}`);
            }

            trheader.appendChild(th);
        });
    }
    else if (arrydataobjectkey) {
        // extract header col from first json object //
        objparam.arryheadercol = [];
        let header;
        let index = 0;
        arrydataobjectkey.forEach(ppt => {
            let th = document.createElement('th');
            if (objparam.arryclass) {
                th.classList.add(objparam.arryclass[param_item.arryclass.TheadTr]);
            }
            th.innerHTML = ppt;
            trheader.appendChild(th);

            let arryheader = [];
            arryheader[param_item.arryheadercol.Desc] = ppt;
            arryheader[param_item.arryheadercol.Align] = 0;
            objparam.arryheadercol.push(arryheader);
            index += 1;
        })
    }

    thead.appendChild(trheader);

    // data edit row / search (?) //

    if (booleditrow) {

        let tredit = document.createElement('tr');
        tredit.id = VssTableEditRowID;
        tredit.style.fontFamily = "inherit";

        // add first a non-functioning select column //

        if (objparam.boolselectcolumn) {
            let tselect = document.createElement('td');
            tredit.appendChild(tselect);
            if (objparam.arryclass[param_item.arryclass.TrButton]) {
                tselect.classList = objparam.arryclass[param_item.arryclass.TrButton];
            } else {
                tselect.style.border = "2px solid lightgray";
            }
        }

        // add first an action column //
        let taction = document.createElement('td');
        let btnaction = document.createElement('button');
        btnaction.id = VssTableEditRowBtn;
        btnaction.innerHTML = VssTableEditDRAdd;
        taction.appendChild(btnaction);

        if (objparam.arryclass[param_item.arryclass.TrButton]) {
            taction.classList = objparam.arryclass[param_item.arryclass.TrButton];
        } else {
            taction.style.border = "2px solid lightgray";
        }

        // edit row clicked //

        // taction.onclick = function () {
        btnaction.onclick = function () {

            let tbl = document.getElementById(objparam.htmltableid);
            let editRow = this.parentElement.parentElement;
            let drops = this.innerHTML.includes(VssTableEditDRAdd) ? VssTableEditDRAdd : (this.innerHTML.includes(VssTableEditDREdit) ? VssTableEditDREdit : VssTableEditDRDelete);

            switch (drops) {
                case VssTableEditDRDelete:

                    // editrow - delete row //

                    tbl.deleteRow(editRow.dataset[VssTableDatarowXDSIndex]);
                    vssfnc_tablepaintoddevenrow(tbl, objparam.arryclassdatarow, objparam.arryheadercol, booleditrow, objparam.boolselectcolumn);
                    break;

                case VssTableEditDREdit:

                    // editrow - edit row //

                    let selectedRow = tbl.rows[editRow.dataset[VssTableDatarowXDSIndex]];
                    // skip 0, which is the edit row action button //
                    let startI = objparam.boolselectcolumn && booleditrow ? 2 : objparam.boolselectcolumn || booleditrow ? 1 : 0;
                    for (let i = startI; i < editRow.children.length; i++) {

                        switch (editRow.children[i].firstChild.nodeName) {
                            case 'INPUT':
                                selectedRow.children[i].innerHTML = editRow.children[i].firstChild.value;
                                break;
                            case 'SELECT':
                                // -1 to offset first column of edit row action button //
                                // arryitemdata has no reference to edit row //
                                if (objparam.arryitemdata[i - startI]) {
                                    let xitem = objparam.arryitemdata[i - startI].find(item => {
                                        return item.ID == editRow.children[i].firstChild.value;
                                    })
                                    // selectedRow.children[i].dataset[VssTableColDSVal] = editRow.children[i].firstChild.value;
                                    selectedRow.children[i].innerHTML = xitem ? xitem.Name : '';
                                }
                                break;
                        }
                        selectedRow.children[i].dataset[VssTableColDSVal] = editRow.children[i].firstChild.value;

                        // add back any preset cell button //

                        if (objparam.arryheadercol &&
                            objparam.arryheadercol[i - startI] &&
                            objparam.arryheadercol[i - startI][param_item.arryheadercol.Button.ArryIndex] &&
                            objparam.arryheadercol[i - startI][param_item.arryheadercol.Button.ArryIndex][param_item.arryheadercol.Button.OnClick]) {

                            // let button = document.createElement('button');
                            let button = document.createElement('div');

                            if (objparam.arryclass[param_item.arryclass.TrButton]) {
                                button.classList.add(objparam.arryclass[param_item.arryclass.TrButton]);
                            }
                            else {
                                // ?? do nothing ??
                            }

                            button.innerHTML = objparam.arryheadercol[i - startI][param_item.arryheadercol.Button.ArryIndex][param_item.arryheadercol.Button.Desc];
                            button.style.display = "inline-block";
                            button.style.float = "right";
                            button.style.marginLeft = "10%";
                            button.style.alignSelf = "flex-end";
                            button.onclick = objparam.arryheadercol[i - startI][param_item.arryheadercol.Button.ArryIndex][param_item.arryheadercol.Button.OnClick];
                            selectedRow.children[i].appendChild(button);
                        }
                    }
                    break;

                case VssTableEditDRAdd:

                    // editrow - add/insert new row onto the top //

                    let tbody = tbl.getElementsByTagName('tbody')[0];
                    let newRow = tbody.insertRow(0);
                    newRow.dataset[VssTableDatarowDSID] = editRow.dataset[VssTableDatarowDSID];
                    newRow.dataset[VssTableDatarowXDSIndex] = editRow.dataset[VssTableDatarowXDSIndex];

                    let startX = objparam.boolselectcolumn && booleditrow ? 2 : objparam.boolselectcolumn || booleditrow ? 1 : 0;

                    for (let i = 0; i < editRow.children.length; i++) {
                        let newCell = newRow.insertCell(i);

                        // datarow select column //
                        if (objparam.boolselectcolumn && i == 0) {
                            let tdrselect = document.createElement('input');
                            tdrselect.setAttribute('type', 'checkbox');
                            newCell.appendChild(tdrselect);
                        }

                        // datarow action column //
                        else if ((objparam.boolselectcolumn && i == 1) || (!objparam.boolselectcolumn && i == 0)) {
                            // action column //
                            newCell.innerHTML = VssTableDRSelectEdit;
                            newCell.onclick = vssfnc_tablepopdrselected;

                            // datarow data column //
                        } else {
                            newCell.dataset[VssTableColDSKey] = arrydataobjectkey[i - startX];
                            switch (editRow.children[i].firstChild.nodeName) {
                                case 'INPUT':
                                    newCell.innerHTML = editRow.children[i].firstChild.value;
                                    break;
                                case 'SELECT':
                                    // -1 to offset first column of edit row action button //
                                    // arryitemdata has no reference to edit row //
                                    if (objparam.arryitemdata[i - startX]) {
                                        let xitem = objparam.arryitemdata[i - startX].find(item => {
                                            return item.ID == editRow.children[i].firstChild.value;
                                        })
                                        // newCell.dataset[VssTableColDSVal] = editRow.children[i].firstChild.value;
                                        newCell.innerHTML = xitem ? xitem.Name : '';
                                    }
                                    break;
                            }
                            newCell.dataset[VssTableColDSVal] = editRow.children[i].firstChild.value;
                        }

                        // add back any preset cell button //

                        if (objparam.arryheadercol &&
                            objparam.arryheadercol[i - startX] &&
                            objparam.arryheadercol[i - startX][param_item.arryheadercol.Button.ArryIndex] &&
                            objparam.arryheadercol[i - startX][param_item.arryheadercol.Button.ArryIndex][param_item.arryheadercol.Button.OnClick]) {

                            // let button = document.createElement('button');
                            let button = document.createElement('div');

                            if (objparam.arryclass[param_item.arryclass.TrButton]) {
                                button.classList.add(objparam.arryclass[param_item.arryclass.TrButton]);
                            }
                            else {
                                // ?? do nothing ??
                            }

                            button.innerHTML = objparam.arryheadercol[i - startX][param_item.arryheadercol.Button.ArryIndex][param_item.arryheadercol.Button.Desc];
                            button.style.display = "inline-block";
                            button.style.float = "right";
                            button.style.marginLeft = "10%";
                            button.style.alignSelf = "flex-end";
                            button.onclick = objparam.arryheadercol[i - startX][param_item.arryheadercol.Button.ArryIndex][param_item.arryheadercol.Button.OnClick];
                            newCell.appendChild(button);
                        }
                    }

                    // add back the datarow click event //

                    // action td (index: 0) has different event handler than data td //
                    if (objparam.fncdatarowclicked !== undefined) {
                        // skip td action column, starts at 1 //
                        for (var k = 1; k < newRow.children.length; k++) {
                            newRow.children[k].onclick = function () {
                                objparam.fncdatarowclicked(this.dataset[VssTableDatarowDSID]);
                            }
                        }
                    } else {
                        for (var k = 1; k < newRow.children.length; k++) {
                            newRow.children[k].onclick = vssfnc_tablepopdrselected;
                        }
                    }

                    // paint odd-even row //

                    vssfnc_tablepaintoddevenrow(tbl, objparam.arryclassdatarow, objparam.arryheadercol, booleditrow, objparam.boolselectcolumn);
                    break;
            }

            // re-init edit row //
            for (let i = 0; i < editRow.children.length; i++) {
                if (objparam.boolselectcolumn && i == 0) {
                    // do nothing //
                }
                else if ((objparam.boolselectcolumn && i == 1) || (!objparam.boolselectcolumn && i == 0)) {
                    editRow.children[i].firstChild.innerHTML = VssTableEditDRAdd;
                } else {
                    editRow.children[i].firstChild.value = null;
                }
            }

        }

        tredit.appendChild(taction);

        arrydataobjectkey.forEach((ppt, idx) => {
            let tedit = document.createElement('td');
            tedit.style.border = "2px solid lightgray";
            let ipt;

            // select (IDed data) OR input //
            if (objparam.arryeditrow[param_item.arryeditrow.ArryItemData] && objparam.arryeditrow[param_item.arryeditrow.ArryItemData][idx]) {

                ipt = document.createElement('select');
                let opt = document.createElement('option');
                opt.value = null;
                opt.text = "";
                ipt.add(opt);
                objparam.arryeditrow[param_item.arryeditrow.ArryItemData][idx].forEach((obj, index) => {
                    opt = document.createElement('option');
                    opt.value = obj.ID;
                    opt.text = obj.Name;
                    ipt.add(opt);
                })
            } else {
                ipt = document.createElement('input');

                // data type //
                if (objparam.arryeditrow[param_item.arryeditrow.ArryItemDataType]) {
                    ipt.setAttribute('type', objparam.arryeditrow[param_item.arryeditrow.ArryItemDataType][idx]);
                }
                if (objparam.arryeditrow[param_item.arryeditrow.ArryItemDataTypeAttr] && objparam.arryeditrow[param_item.arryeditrow.ArryItemDataTypeAttr][idx]) {
                    for (let k = 0; k < objparam.arryeditrow[param_item.arryeditrow.ArryItemDataTypeAttr][idx].length; k++) {
                        ipt.setAttribute(objparam.arryeditrow[param_item.arryeditrow.ArryItemDataTypeAttr][idx][k][0],
                            objparam.arryeditrow[param_item.arryeditrow.ArryItemDataTypeAttr][idx][k][1]);
                    }
                }

            }

            // dataset-key //
            ipt.dataset[VssTableColDSKey] = arrydataobjectkey[idx];

            // style //
            if (objparam.arryeditrow[param_item.arryeditrow.ArryCSSStyle] && objparam.arryeditrow[param_item.arryeditrow.ArryCSSStyle][idx]) {
                objparam.arryeditrow[param_item.arryeditrow.ArryCSSStyle][idx].forEach(CSS => {
                    ipt.style[CSS[0]] = CSS[1];
                })
            }
            // default style //
            ipt.style.width = "100%";
            ipt.style.border = "none";

            ipt.onchange = function () {
                // change taction to update op //
                let ptt = this.getAttribute('pattern')
                if (ptt) {
                    let testPtt = new RegExp(ptt);
                    if (!testPtt.test(this.value)) {
                        this.value = "";
                        alert('Invalid input format.');
                    }
                }
                if (objparam.arryeditrow[param_item.arryeditrow.ArryInputChangeCallback] && objparam.arryeditrow[param_item.arryeditrow.ArryInputChangeCallback][idx]) {
                    objparam.arryeditrow[param_item.arryeditrow.ArryInputChangeCallback][idx](this);
                }

                let actbutton = document.getElementById(VssTableEditRowBtn);
                actbutton.innerHTML = actbutton.innerHTML.replace(VssTableEditDRDelete, VssTableEditDREdit);

            }
            tedit.appendChild(ipt);
            tredit.appendChild(tedit);
        })

        thead.appendChild(tredit);
    }

    objparam.htmltable.appendChild(thead);

    // load datarow //

    // if table is used with edit row to add new data object, an empty object will be passed in as 
    // arryjsondata for its properties values, discard the arryjsondata to show an empty table
    // with its property
    if (objparam.arryjsondata && objparam.arryjsondata.length == 1) {
        let empty = true;
        for (var ppt in objparam.arryjsondata[0]) {
            if (objparam.arryjsondata[0][ppt] && typeof (objparam.arryjsondata[0][ppt]) != 'object') {
                empty = false;
                break;
            }
        }

        if (empty) {
            objparam.arryjsondata.length = 0;
        }
    }

    if (objparam.arryjsondata) {
        let tbody = document.createElement('tbody');

        // an array for total for each datacol of arrjJSON item //

        if (objparam.arryjsondata.length > 0) {
            let arrydatasum = new Array(Object.keys(objparam.arryjsondata[0]).length);
            if (objparam.arryfooteragg) {
                // initialise arrydatasum //
                for (var i = 0; i < arrydatasum.length; i++) {
                    arrydatasum[i] = 0;
                }
            }
        }

        objparam.arryjsondata.forEach((item, index) => {

            let tr = document.createElement('tr');

            // add first a datarow select column //

            if (objparam.boolselectcolumn) {
                let tdrselect = document.createElement('td');
                let selectcheck = document.createElement('input');
                selectcheck.setAttribute('type', 'checkbox');
                selectcheck.classList.add(VssTableDRClassSelect);
                tdrselect.appendChild(selectcheck);

                tr.appendChild(tdrselect);
            }

            // add first an edit row datarow select column //

            if (booleditrow) {

                // select datarow for edit //
                // add first an select column, which draw the selected datarow into the edit row when clicked //

                let tselect = document.createElement('td');
                tselect.innerHTML = VssTableDRSelectEdit + (index + 1).toString();
                if (objparam.arryclass[param_item.arryclass.TrButton]) {
                    tselect.classList = objparam.arryclass[param_item.arryclass.TrButton];
                }
                tselect.onclick = vssfnc_tablepopdrselected;

                tr.appendChild(tselect);
            }

            tr.classList.add(objparam.arryclass[param_item.arryclass.TrTd]);
            // all object presumed to start with column <ID> //
            tr.dataset[VssTableDatarowDSID] = Object.values(item)[0];

            // go throught the properties of current item / datarow //

            Object.values(item).forEach((val, index) => {

                // construct the td element //
                // add button AFTER input/data element //

                let td = document.createElement('td');

                // css for td //

                let tdstyle = '';
                if (objparam.arryheadercol[index]) {
                    let textalign = !objparam.arryheadercol[index][param_item.arryheadercol.Align] ? 'left' : (objparam.arryheadercol[index][param_item.arryheadercol.Align] === 1 ? 'right' : (objparam.arryheadercol[index][param_item.arryheadercol.Align] === 0 ? 'center' : 'left'));
                    let coldisplay = !objparam.arryheadercol[index][param_item.arryheadercol.Width] ? '' : (objparam.arryheadercol[index][param_item.arryheadercol.Width] === '0%' || objparam.arryheadercol[index][param_item.arryheadercol.Width] === '0' ? 'display:none' : '');

                    tdstyle = `text-align:${textalign}; ${coldisplay}`
                }

                // td is either for display or input //
                // 3: [input type, input data, onchange function]]

                if (objparam.arryheadercol[index] && objparam.arryheadercol[index][param_item.arryheadercol.Input]) {

                    // for input //

                    let inputtype = objparam.arryheadercol[index][param_item.arryheadercol.Input][param_item.arryheadercol.Input.Type] === param_item.tdinputtype.Select ? 'select' : 'input';
                    let inputelem = document.createElement(inputtype);
                    inputelem.value = val;
                    inputelem.setAttribute('style', tdstyle);
                    inputelem

                    td.appendChild(inputelem);
                }
                else {

                    // for display //

                    // value is either
                    //  - plain text or 
                    //  - ID of a data object (options of data object to be retrieved from arryitemdata according to the index of data col)

                    td.setAttribute('style', tdstyle);
                    // if data col is ID of a data object, extract name from arryitemdata provided //
                    if (objparam.arryitemdata && objparam.arryitemdata[index] && objparam.arryitemdata[index].length > 0) {
                        let xitem = objparam.arryitemdata[index].find(item => {
                            return item.ID == val;
                        })
                        // to reflect whether .innerHTML is actually an ID of data object, thus saving the 
                        // it as ID instead of the name that is shown as innerHTML //
                        if (xitem) {
                            // td.dataset[VssTableColDSVal] = val;
                            td.innerHTML = xitem ? xitem.Name : "";
                        }
                        else {
                            td.innerHTML = null;
                        }

                    } else {
                        td.innerHTML = val;
                    }

                }

                // each td has a dataset for Key that reflects the property'a name //
                // each td has a dataset for Value that reflects the value //
                td.dataset[VssTableColDSVal] = val;
                td.dataset[VssTableColDSKey] = Object.keys(item)[index];

                // cell button element //

                if (objparam.arryheadercol &&
                    objparam.arryheadercol[index] &&
                    objparam.arryheadercol[index][param_item.arryheadercol.Button.ArryIndex] &&
                    objparam.arryheadercol[index][param_item.arryheadercol.Button.ArryIndex][param_item.arryheadercol.Button.OnClick]) {

                    // let button = document.createElement('button');
                    let button = document.createElement('div');

                    if (objparam.arryclass[param_item.arryclass.TrButton]) {
                        button.classList.add(objparam.arryclass[param_item.arryclass.TrButton]);
                    }
                    else {
                        // ?? do nothing ??
                    }

                    button.innerHTML = objparam.arryheadercol[index][param_item.arryheadercol.Button.ArryIndex][param_item.arryheadercol.Button.Desc];
                    // button.dataset[VssTableDatarowDSID] = Object.values(item)[0];
                    // button.dataset.ID = val;
                    button.style.display = "inline-block";
                    button.style.float = "right";
                    button.style.marginLeft = "10%";
                    // button.style.marginRight="0";
                    button.style.alignSelf = "flex-end";
                    button.onclick = objparam.arryheadercol[index][param_item.arryheadercol.Button.ArryIndex][param_item.arryheadercol.Button.OnClick];
                    td.appendChild(button);
                }

                // collect aggregate details (count and total) //
                if (objparam.arryfooteragg) {
                    arrydatasum[index] = parseInt(arrydatasum[index]) + parseInt(isNaN(val) ? 0 : val);
                }
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });

        objparam.htmltable.appendChild(tbody);

        // table footer //

        let tfoot = document.createElement('tfoot');

        // aggregate function
        if (objparam.arryfooteragg) {
            let trfooter = document.createElement('tr');
            trfooter.classList.add(objparam.arryclass[param_item.arryclass.TfootTr]);
            objparam.arryfooteragg.forEach((fnc, index) => {
                let td = document.createElement('td');

                switch (fnc) {
                    case 'sum':
                        strfooterhtml += arrydatasum[index];
                        break;
                    case 'ave':
                        strfooterhtml += (arrydatasum[index] / objparam.arryjsondata.length).toFixed(2);
                        break;
                    default:
                        break;
                }
                td.innerHTML = strfooterhtml;
            })
            trfooter.appendChild(td);
            tfoot.appendChild(trfooter);
        }


        // item count //
        if (objparam.boolitemcount) {

            let tritemcount = document.createElement('tr');
            let tditemcount = document.createElement('td');
            tditemcount.id = VssTableItemCount;
            tritemcount.appendChild(tditemcount);
            tditemcount.colSpan = booleditrow ? objparam.arryheadercol.length + 1 : objparam.arryheadercol.length;
            // divitemcount.style.width = "100%";
            tditemcount.style.padding = "2%";
            tditemcount.style.fontStyle = "italic";
            tditemcount.style.textAlign = "left";
            // tditemcount.style.backgroundColor = VssColorTableCaptionBG;
            // tditemcount.style.color = VssColorTableCaptionFG;
            tditemcount.style.border = VssBorderItemCount;
            tditemcount.innerHTML = VssTableStrItemCount + objparam.arryjsondata.length;
            // vssfnc_tablepopitemcount();

            // objparam.htmltable.appendChild(divitemcount);
            // objparam.htmltable.appendChild(tritemcount);
            tfoot.appendChild(tritemcount);
        }


        // eventhandler for table datarow clicked //

        // !! do it before formatting odd/even row, which changes the class of the datarow !! //
        // 

        // !! cannot use getElementsByClassName(objparam.arryclass[3] !!
        // !! if arryclass is not specified, all elements will have same class name !!
        // let tabledatarow = document.getElementsByClassName(objparam.arryclass[3]);
        let tabledatarow = objparam.htmltable.getElementsByTagName('tr');
        let parent = tabledatarow.parentElement;

        for (var i = 0; i < tabledatarow.length; i++) {
            // header row and date edit row (if any) //
            if (i == 0 || (booleditrow && i == 1)) {
                // do nothing //
            } else {
                if (booleditrow) {
                    // action td (index: 0) has different event handler than data td //
                    if (objparam.fncdatarowclicked !== undefined) {
                        // skip td action column, starts at 1 //
                        for (var k = 1; k < tabledatarow[i].children.length; k++) {
                            tabledatarow[i].children[k].onclick = function () {
                                objparam.fncdatarowclicked(this.dataset[VssTableDatarowDSID]);
                            }
                        }
                    } else {
                        for (var k = 1; k < tabledatarow[i].children.length; k++) {
                            tabledatarow[i].children[k].onclick = vssfnc_tablepopdrselected;
                        }
                    }
                } else {
                    // whole datarow has same click event //
                    tabledatarow[i].onclick = function () {

                        vssfnc_tablepaintoddevenrow(parent, objparam.arryclassdatarow, objparam.arryheadercol, booleditrow, objparam.boolselectcolumn);

                        this.classList.add(objparam.arryclassdatarow[param_item.arryclassdatarow.SelectedRow]);

                        // call back to user-defined function with ID //
                        // if none set, and if column select row is set, check current row as selected/unselected //
                        if (objparam.fncdatarowclicked !== undefined) {
                            objparam.fncdatarowclicked(this.dataset[VssTableDatarowDSID]);
                        } else if (objparam.boolselectcolumn) {
                            this.children[0].children[0].checked = this.children[0].children[0].checked ? false : true;
                        }
                    }
                }
            }
        }

        // paint table datarow - odd/even //

        vssfnc_tablepaintoddevenrow(objparam.htmltable, objparam.arryclassdatarow, objparam.arryheadercol, booleditrow, objparam.boolselectcolumn);

        // add function button for table //

        if (objparam.arrybuttontable && objparam.arrybuttontable.length > 0) {

            let trbtn = document.createElement('tr');
            let tdbtn = document.createElement('td');
            trbtn.appendChild(tdbtn);

            // tdbtn.style.display = "flex";
            // tdbtn.style.flexDirection = "row";
            // tdbtn.style.justifyContent = "space-around";
            // tdbtn.style.border="1px solid gray";
            tdbtn.style.padding = "1%";
            tdbtn.style.backgroundColor = "gray";
            tdbtn.style.color = "white";
            tdbtn.colSpan = booleditrow ? objparam.arryheadercol.length + 1 : objparam.arryheadercol.length;

            for (var i = 0; i < objparam.arrybuttontable.length; i++) {
                let btn = document.createElement('button');
                // btn.style.backgroundColor = "black";
                // btn.style.color="white";

                btn.innerHTML = objparam.arrybuttontable[i][param_item.arrybuttontable.Button.Desc];
                btn.addEventListener('click', objparam.arrybuttontable[i][param_item.arrybuttontable.Button.OnClick]);
                if (objparam.arrybuttontable[i][param_item.arrybuttontable.Button.CSSClass]) {
                    btn.className = objparam.arrybuttontable[i][param_item.arrybuttontable.Button.CSSClass];
                } else {
                    btn.style.margin = "1%";
                    btn.style.padding = "1%";
                }
                // console.log(btn);
                tdbtn.appendChild(btn);
            }
            // objparam.htmltable.appendChild(trbtn);
            tfoot.appendChild(trbtn);
        }

        if (tfoot.children && tfoot.children.length > 0) {
            objparam.htmltable.appendChild(tfoot);
        }

        // add event handler //

        //!! eventhandler for datarow is done before paintoddevenrow !!//

        // table header click-sort eventhandler //

        // !! cannot use getElementsByClassName(objparam.arryclass[2] !!
        // !! if arryclass is not specified, all elements will have same class name !!
        // let tablecolheaderX = objparam.htmltable.getElementsByClassName(objparam.arryclass[2]);
        let tablecolheaderX = objparam.htmltable.getElementsByTagName('th');
        for (var i = 0; i < tablecolheaderX.length; i++) {
            tablecolheaderX[i].onclick = function () {
                // try {

                let colidx = this.id;
                let dir = ((this.innerHTML).indexOf(objparam.arrysortind[param_item.arrysortind.Ascd]) < 0 ? -1 : 1);

                let ascChar = objparam.arrysortind[param_item.arrysortind.Ascd] == null ? '' : objparam.arrysortind[param_item.arrysortind.Ascd];
                let dscChar = objparam.arrysortind[param_item.arrysortind.Dscd] == null ? '' : objparam.arrysortind[param_item.arrysortind.Dscd];

                // revert sortedtablecol to original headercol //
                let sortedtablecol = objparam.arryheadercol.map(function (datacol) {
                    // datacol[0] = datacol[0].includes(objparam.arrysortind[param_item.arrysortind.Ascd]) ? datacol[0].replace(objparam.arrysortind[param_item.arrysortind.Ascd], '') : datacol[0].includes(objparam.arrysortind[param_item.arrysortind.Dscd]) ? datacol[0].replace(objparam.arrysortind[param_item.arrysortind.Dscd], '') : datacol[0];
                    datacol[0] = datacol[0].includes(ascChar) ? datacol[0].replace(ascChar, '') : datacol[0].includes(dscChar) ? datacol[0].replace(dscChar, '') : datacol[0];

                    return datacol;
                })

                if (objparam.arrysortind && objparam.arrysortind.length > 0) {
                    // rename sorted headercol //
                    sortedtablecol[colidx][0] += (dir < 0) ? ascChar : dscChar;
                }

                // reload sorted table //
                objparam.arryheadercol = sortedtablecol;
                objparam.arryjsondata = vssfnc_sortarrydata(objparam.arryjsondata, colidx, dir);
                vssfnc_tablepopulate(objparam);

            }
        }

        // table input field eventhandler  //

        if (objparam.arryheadercol) {
            objparam.arryheadercol.forEach(headercol => {
                if (headercol[param_item.arryheadercol.Input]) {

                    //?? how to extract input/select elements of specific column //
                    let tableinput = objparam.htmltable.getElementsByTagName('Input');
                    if (tableinput) {
                        for (var i = 0; i < tableinput.length; i++) {
                            tableinput[i].onchange = headercol[param_item.arryheadercol.Input][param_item.arryheadercol.Input.OnChange];
                        }
                    }
                }
            })
        }

        // eventhandler for table datarow button //
        //!! table datarow button has since been converted to allow multiple column button per datarow !! //
        // if (objparam.arrybutton) {
        //     let tablerowbutton = objparam.htmltable.getElementsByTagName('button');
        //     for (var i = 0; i < tablerowbutton.length; i++) {
        //         if (objparam.arrybutton[param_item.arrybutton.DataRow.ArryID][param_item.arrybutton.DataRow.OnClick]) {
        //             tablerowbutton[i].onclick = objparam.arrybutton[param_item.arrybutton.DataRow.ArryID][param_item.arrybutton.DataRow.OnClick];
        //         }
        //     }
        // }

        // if (boolReturnElem) {
        //     return objparam.htmltable;
        // }
    }
    if (boolReturnElem) {
        return objparam.htmltable;
    }


}

// }
// catch (e) {
//     alert('loadtablelist error: ' + e);
// }

// function vssfnc_populateTableDataEditRow(editrow, selectedrowdata) {
//     for (var i = 0; i < editrow.children.length; i++) {
//         // edit datarow's children is td whose children is either input or select //
//         // action td element would have no children element //
//         if (editrow.children[i].children.length > 0) {
//             if (editrow.children[i].children[0].nodeName == 'INPUT') {
//                 editrow.children[i].children[0].value = selectedrowdata[i].innerHTML;
//             } else if (editrow.children[i].children[0].nodeName == 'SELECT') {

//                 // go through option of select //
//                 for (var x = 0; x < editrow.children[i].children[0].length; x++) {
//                     if (editrow.children[i].children[0].children[x].text === selectedrowdata[i].innerHTML) {
//                         editrow.children[i].children[0].value = editrow.children[i].children[0].children[x].value;
//                         break;
//                     }
//                 }
//             }
//         }
//     }
// }


// 2 possible trigger event:
//      1. when edit select td of a datarow is clicked
//      2. if no callback is set for datarow clicked, when any td of a datarow is clicked
function vssfnc_tablepopdrselected() {

    //!! THIS has the advantage in situation where the document has multiple tables created
    //!! with vssfnc_tablepopulate

    // this: td : parentlement -> tr : parentelement -> tbody : parentelement -> table //
    let table = this.parentElement.parentElement.parentElement;
    // console.log(table);
    let thead = table.children[0];
    // table has 2 children: thead and tbody //
    // thead has 2 children: header row (th) and edit datarow //
    let editrow = thead.children[1];
    // there is only one button in editrow //
    let editrowbtn = editrow.getElementsByTagName('BUTTON')[0];
    let editCellIndex = editrowbtn.parentElement.cellIndex;
    let currCellIndex = this.cellIndex;
    let currDR = this.parentElement;

    // if editrowbtn is situated at the 2nd column, then column select datarow is enabled //
    let booldrselectcol = editCellIndex == 1 ? true : false;

    // 2 possible trigger event:
    //      1. when select td of a datarow is clicked
    //      2. if no callback is set for datarow clicked, when any td of a datarow is clicked
    let editbtnstr;
    if ((booldrselectcol && currCellIndex == 1) || (!booldrselectcol && currCellIndex == 0)) {
        editbtnstr = this.innerHTML.replace(VssTableDRSelectEdit, VssTableEditDRDelete);
    } else {
        // editbtnstr = this.parentElement.children[editCellIndex].innerHTML.replace(VssTableDRSelectEdit, VssTableEditDRDelete);
        editbtnstr = currDR.children[editCellIndex].innerHTML.replace(VssTableDRSelectEdit, VssTableEditDRDelete);
    }
    editrowbtn.innerHTML = editbtnstr;

    // set dataset value of selected row //
    editrow.dataset[VssTableDatarowXDSIndex] = currDR.rowIndex;

    // i starts from after the action td -  1 if no datarow select column, 2 if datarow select column //

    for (let i = editCellIndex + 1; i < editrow.children.length; i++) {
        // edit datarow's children is td whose children is either input or select //
        // this is action td. parent element is tr //
        if (editrow.children[i].children[0].nodeName == 'INPUT') {

            // if cell button is present, it will be a child of the td //
            // and the first child will be the required text, whereas, the button will
            // be the second child 
            if (currDR.children[i].children.length > 0) {
                editrow.children[i].children[0].value = currDR.children[i].firstChild.textContent;
            } else {
                editrow.children[i].children[0].value = currDR.children[i].innerHTML;
            }

        } else if (editrow.children[i].children[0].nodeName == 'SELECT') {

            // go through option of select search for match text string //
            for (let x = 0; x < editrow.children[i].children[0].length; x++) {
                // matching Name to get ID //
                if (editrow.children[i].children[0].children[x].text === currDR.children[i].innerHTML) {
                    editrow.children[i].children[0].value = editrow.children[i].children[0].children[x].value;
                    break;
                }
                // matching ID to ID //
                // if (editrow.children[i].children[0].children[x].value === currDR.children[i].innerHTML) {
                //     editrow.children[i].children[0].value = editrow.children[i].children[0].children[x].value;
                //     break;
                // }
            }
        }
    }
}

// function vssfnc_tablepopitemcount(){
//     let tbl = document.getElementById(VssTableID);
//     let tblbody = tbl.getElementsByTagName('tbody')[0];
//     let tditemcount = document.getElementById(VssTableItemCount);

//     tditemcount.innerHTML = VssTableStrItemCount + tblbody.children.length;
// }

function vssfnc_tablepaintoddevenrow(tablex, classdatarow, arryheadercol, booleditrow, boolselectcolumn) {
    // if user-set css class //
    if (classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.OddNumRow] &&
        classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.EvnNumRow] &&
        classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.SelectedRow]) {
        let cssstyle = classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.OddNumRow];

        // remove selected row class, if any //

        for (let i = 0; i < tablex.rows.length; i++) {
            tablex.rows[i].classList.remove(classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.SelectedRow]);
            cssstyle = (cssstyle === classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.EvnNumRow]) ? classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.OddNumRow] : classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.EvnNumRow];
            tablex.rows[i].classList.add(cssstyle);
        }
    }
    else {

        // default style //
        if (tablex) {
            tablex.style.border = 'solid 1px gray';

            // header row //
            tablex.rows[0].style.color = 'white';
            tablex.rows[0].style.backgroundColor = 'gray';
            for (var cell of tablex.rows[0].cells) {
                cell.style.border = 'solid 1px white';
                cell.style.padding = '5px';
            }

            // data row //
            let odd = true;
            for (let i = 1; i < tablex.rows.length; i++) {
                tablex.rows[i].style.color = 'black';

                tablex.rows[i].style.backgroundColor = odd ? 'white' : 'rgb(246,246,240)';
                odd = odd ? false : true;

                // start x according to whether dr select column is set and edit row is enabled //
                let startx = booleditrow && boolselectcolumn ? 2 : booleditrow || boolselectcolumn ? 1 : 0;
                for (let x = startx; x < tablex.rows[i].cells.length; x++) {
                    // cell.style.border = 'solid 1px gray';
                    tablex.rows[i].cells[x].style.padding = '5px';
                    tablex.rows[i].cells[x].style.borderLeft = "1px solid gray";
                    tablex.rows[i].cells[x].style.borderRight = "1px solid gray";

                    // let y = booleditrow ? x - 1 : x;
                    let y = x - startx;
                    if (arryheadercol[y]) {

                        if (arryheadercol[y][vssfnc_tablepopparam_item.arryheadercol.Align]) {
                            tablex.rows[i].cells[y].style.textAlign = arryheadercol[y][vssfnc_tablepopparam_item.arryheadercol.Align] === 1 ? 'right' : (arryheadercol[y][vssfnc_tablepopparam_item.arryheadercol.Align] === 0 ? 'center' : 'left')
                        }
                        if (arryheadercol[y][vssfnc_tablepopparam_item.arryheadercol.Width] === '0%' || arryheadercol[y][vssfnc_tablepopparam_item.arryheadercol.Width] === '0') {
                            tablex.rows[i].cells[x].style.display = 'none';
                        }
                    }

                };
            }
        }
    }
}



function vssfnc_sortarrydata(arryJSON, colidx, dir) {
    // use the first data object in arryJSON to extract the property 

    try {
        let x, y;

        return arryJSON.sort(function (a, b) {
            switch (typeof a[Object.keys(arryJSON[0])[colidx]]) {
                case 'string':
                    x = a[Object.keys(arryJSON[0])[colidx]].toLowerCase();
                    y = b[Object.keys(arryJSON[0])[colidx]].toLowerCase();
                    break;
                default:
                    x = a[Object.keys(arryJSON[0])[colidx]];
                    y = b[Object.keys(arryJSON[0])[colidx]];
                    break;
            }

            let rtn = 0;
            if (x < y) { rtn = 1; }
            if (x > y) { rtn = -1; }
            return rtn * dir;
        });
    }
    catch (e) {
        alert('sortarrydata error: ' + e);
    }
}


function vssfnc_formpopulate_param() {
    // specified form is a flex (by col/row) with one div (divwrapper) for one pair of key/value (label(divlabel)/input(divinput))
    // within divlabel is a label element and within divinput is an input element
    // 
    // caption - caption of form (optional)
    // actionurl - url to add / edit
    // arrydatacol - a 2-dim array of  [key[field name, description strings, required, type, attr]]
    //      (attr -> an 2-dim array of 2 elem array (ie can set multiple attributes): 
    //                  1. for type (eg pattern / step) 
    //                  2. for value (eg [0-9] / 0.01)
    //                  (eg: [['pattern','[0-9]'],['step','0.01]])
    // jsondata - a json data object 
    // arryfooter - ??
    // htmlform - html element of the form container (if a form html is not provided, a form element will be returned)
    // formid - id of source datatable (for sorting by column purposes - obsolete?)
    // arryitemdata - an array of constituent json data object with properties: [[{ID:xx, Name:yy},{...},{...}], [{ID:xx, Name:yy},{...},{...}]]
    // arryinput - a array of 3 elements:
    //      1. label (array: [width ration, text-align])
    //      2. input (array: [width ratio, text-align]) 
    //      3. fncOnChange
    //      - [[xx%, -1], [yy%, 0], fncOnChange]
    //      * text-align - -1:left, 0:center, 1:right
    // arryclass - an array of css classes - 
    //          0:caption
    //          1:label
    //          2:input
    //          3:divbutton
    //          4:button
    // arrydataid - an array of data attributes - 
    //          0:DataObj - Data Object
    //          1:DataObjX - Instance of Data Object
    // arrybutton - a 2-dim array of [button[(0)type, (1)text, (2)class, (3) colorborder (4)clickedfunction (5)formactionurl]]
    //                  - colorborder is an array of [bgcolor, fgcolor, border, boxshadow]
    // fnconsubmit - a callback function before submitting the form for input type submit

    return {
        caption: null,
        actionurl: null,
        arrydatacol: [],
        jsondata: null,
        arryfooter: null,
        htmlform: null,
        htmlformid: null,
        arryitemdata: [],
        arryinput: [],
        arryclass: [],
        arrydataid: [],
        arrybutton: [],
        fnconsubmit: null
    }
}

const vssfnc_formpopparam_item = {
    arrydatacol: {
        FieldName: 0,
        Desc: 1,
        Required: 2,
        Type: 3,
        Attr: 4,
        ReadOnly: 5
    },
    arrydatacolattr: {
        Name: 0,
        Value: 1
    },
    arryinput: {
        Label: {
            ArryID: 0,
            WidthRatio: 0,
            Desc: 1,
            Align: 2
        },
        Input: {
            ArryID: 1,
            WidthRatio: 0,
            Align: 1
        },
        FncOnChange: {
            ArryID: 2
        }
    },
    arryclass: {
        Caption: 0,
        Label: 1,
        Input: 2,
        DivButton: 3,
        Button: 4
    },
    arrydataid: {
        DataObj: 0,
        DataObjX: 1
    },
    arrybutton: {
        Type: 0,
        Desc: 1,
        CSSClass: 2,
        ColorBorder: {
            ArryID: 3,
            BGColor: 0,
            FGColor: 1,
            Border: 2,
            BoxShadow: 3
        },
        OnClick: 4,
        ActionURL: 5
    }
}
// arrydataid: {
//     Form: 0,
//     DataObj: 1
// }
// used to populate a form (display / addition / edit) for a single object with multiple properties //
function vssfnc_formpopulate(objparam) {

    let param_item = vssfnc_formpopparam_item;

    // set returned form element //

    let boolReturnElem = false;
    if (objparam.htmlform) {
        // remove existing elements //
        while (objparam.htmlform.firstChild) {
            objparam.htmlform.removeChild(objparam.htmlform.firstChild);
        }
    }
    else {
        objparam.htmlform = document.createElement('form');
        boolReturnElem = true;
    }

    // .id and .dataset //

    objparam.htmlform.id = objparam.htmlformid ? objparam.htmlformid : VssFormHTMLID;


    if (objparam.arrydataid[param_item.arrydataid.DataObj]) {
        objparam.htmlform.dataset[VssFormDSDataObj] = objparam.arrydataid[param_item.arrydataid.DataObj];
    }

    if (objparam.arrydataid[param_item.arrydataid.DataObjX]) {
        objparam.htmlform.dataset[VssFormDSDataObjX] = objparam.arrydataid[param_item.arrydataid.DataObjX];
    }


    // datacol 

    // if (!objparam.arrydatacol) {
    //     // objparam.arrydatacol=[];
    //     // var ppt;
    //     // let record=[];
    //     // for(ppt in objparam.arryjsondata[0]){

    //     // }
    // }

    // 
    // format form //
    // a form is a flex (row or col depending on layout) with one div for each property //

    // form action url //

    // if an url for form action is provided, it's a POST request, else default to GET //
    if (objparam.actionurl) {
        objparam.htmlform.method = 'POST';
        objparam.htmlform.action = objparam.actionurl;
    }

    // default setting //

    objparam.htmlform.style.width = '100%';
    objparam.htmlform.style.display = 'flex';
    objparam.htmlform.style.flexDirection = 'column';

    // caption //

    if (objparam.caption) {
        let captionelement = document.createElement('div');
        captionelement.innerHTML = objparam.caption;
        if (objparam.arryclass && objparam.arryclass.length > 0 && objparam.arryclass[param_item.arryclass.Caption]) {
            captionelement.classList.add(objparam.arryclass[param_item.arryclass.Caption]);
        }
        else {
            captionelement.style.marginBottom = "2%";
            captionelement.style.padding = "1%";
            captionelement.style.backgroundColor = VssColorFormCaptionBG;
            captionelement.style.color = VssColorFormCaptionFG;
        }
        objparam.htmlform.appendChild(captionelement);
    }

    // load key and value //

    // readonly attribute //

    // set true only if for display and not addition //
    let boolsetreadonly = false;
    // if (objparam.jsondata && !objparam.jsondata['ID'] && objparam.jsondata['ID'] != '' && objparam.jsondata['ID'] != '0') {
    boolsetreadonly = true;
    // }

    var ppt;
    var idxarrydatacol = 0;

    if (objparam.jsondata) {

        // jsondata should not be null. for form being an entry form, jsondata would have all fields without value //

        for (ppt in objparam.jsondata) {

            // property wrapper - a div (row or column flex depending on layout) with: divlabel + divinput //

            var divwrapper = document.createElement('div');
            divwrapper.width = '100%';
            divwrapper.style.display = "flex";

            // label - a label element in a div element //

            var divlabel = document.createElement('div');
            divlabel.style.flexBasis = objparam.arryinput[param_item.arryinput.Label.ArryID][param_item.arryinput.Label.WidthRatio] ? objparam.arryinput[param_item.arryinput.Label.ArryID][param_item.arryinput.Label.WidthRatio] : "3";
            divlabel.style.textAlign = objparam.arryinput[param_item.arryinput.Label.ArryID][param_item.arryinput.Label.Align] === 0 ? 'center' : (objparam.arryinput[param_item.arryinput.Label.ArryID][param_item.arryinput.Label.Align] === 1 ? 'right' : 'left');

            var labelelement = document.createElement('LABEL');
            labelelement.style.width = "100%";

            if (objparam.arrydatacol && objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Desc]) {
                labelelement.innerHTML = objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Desc];
            }
            else {
                labelelement.innerHTML = ppt;
            }

            if (objparam.arryclass && objparam.arryclass[param_item.arryclass.Label]) {
                labelelement.classList.add(objparam.arryclass[param_item.arryclass.Label]);
            }

            divlabel.appendChild(labelelement);


            // data input box - an input OR select element in a div element //

            var divinput = document.createElement('div');
            divinput.style.flexBasis = objparam.arryinput[param_item.arryinput.Input.ArryID][param_item.arryinput.Input.WidthRatio] ? objparam.arryinput[param_item.arryinput.Input.ArryID][param_item.arryinput.Input.WidthRatio] : "7";

            // dataobj vs non-dataobj //

            // non-dataobj -> radio button vs checkbox vs text/number/date //
            let inputelement;

            // dataobj vs non-dataobj //

            if (objparam.arrydatacol && isNaN(objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type])) {

                // non-dataobj -> checkbox vs text //
                if (objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type] === 'radio') {

                    // radio button //

                    // inputelement for radio is a div with 2 radio
                    inputelement = document.createElement('div');

                    const idradioYes = 'rY';
                    const idradioNo = 'rN';

                    // yes radio //
                    let radioY = document.createElement('INPUT');
                    // name is required by as formdata to formactionurl
                    radioY.setAttribute('name', ppt);
                    radioY.dataset[VssFormColDSKey] = ppt;
                    radioY.required = objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Required];
                    radioY.setAttribute('type', objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type]);
                    radioY.value = 1;
                    radioY.id = idradioYes;
                    inputelement.appendChild(radioY);

                    let labelY = document.createElement('label');
                    labelY.setAttribute('for', idradioYes);
                    labelY.innerHTML = 'YES';
                    inputelement.appendChild(labelY);

                    // no radio //
                    let radioN = document.createElement('INPUT');
                    // name is required by as formdata to formactionurl
                    radioN.setAttribute('name', ppt);
                    radioN.dataset[VssFormColDSKey] = ppt;
                    radioN.required = objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Required];
                    radioN.setAttribute('type', objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type]);
                    radioN.style.margin = '0 0 0 5%';
                    radioN.value = 0;
                    radioN.id = idradioNo;
                    inputelement.appendChild(radioN);

                    let labelN = document.createElement('label');
                    labelN.setAttribute('for', idradioNo);
                    labelN.innerHTML = 'NO';
                    inputelement.appendChild(labelN);

                    if (objparam.jsondata[ppt]) {
                        radioY.checked = true;
                    }
                    else {
                        radioN.checked = true;
                    }
                }
                else if (objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type] === 'checkbox') {

                    // check box //

                    inputelement = document.createElement('div');
                    let chkbox = document.createElement('INPUT');
                    // name is required by as formdata to formactionurl
                    chkbox.setAttribute('name', ppt);
                    chkbox.dataset[VssFormColDSKey] = ppt;
                    chkbox.required = objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Required];
                    chkbox.setAttribute('type', objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type]);
                    chkbox.value = 1;
                    inputelement.appendChild(chkbox);

                    chkbox.checked = objparam.jsondata[ppt];
                }
                else {

                    // text and number and date //

                    inputelement = document.createElement('INPUT');
                    // name is required by as formdata to formactionurl
                    inputelement.setAttribute('name', ppt);
                    inputelement.dataset[VssFormColDSKey] = ppt;
                    inputelement.required = objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Required];

                    // required //

                    //!! doesn't work !! required is a reflected property //
                    // inputelement.setAttribute('required', objparam.arrydatacol[idxarrydatacol][1]);//

                    // input type //

                    inputelement.setAttribute('type', objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type]);

                    // input attributes //

                    if (objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Attr]) {
                        for (let k = 0; k < objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Attr].length; k++) {
                            if (objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Attr][k][0]) {
                                inputelement.setAttribute(objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Attr][k][0], objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Attr][k][1]);

                                if (objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Attr][k][0] === 'pattern') {

                                    // 1 of 3 places to add onchange event //
                                    // 1. pattern; 2. selection lock; 3. user callback //
                                    inputelement.addEventListener("change", () => {
                                        let ptt = this.getAttribute('pattern')
                                        if (ptt) {
                                            let testPtt = new RegExp(ptt);
                                            if (!testPtt.test(this.value)) {
                                                this.value = "";
                                                alert('Invalid input format.');
                                            }
                                        }
                                    })
                                }
                            }
                        }
                    }

                    // if (objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type] === 'number') {
                    //     if (objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Attr] && !isNaN(objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Attr]) && !objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Attr].includes('.')) {
                    //         let NumDecimal = '';
                    //         for (let i = 0; i < objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Attr] - 1; i++) {
                    //             NumDecimal += '0';
                    //         }
                    //         if (NumDecimal != '') {
                    //             inputelement.setAttribute('step', `0.${NumDecimal}1`);
                    //         }
                    //     }
                    // } 

                    if (ppt === 'ID') {
                        // .diabled will not send data to server //

                        // comment out for TESTING ONLY //
                        // inputelement.readOnly = true;
                        if (objparam.jsondata[ppt] === '') {
                            inputelement.value = '0';
                        }
                        else {
                            inputelement.value = objparam.jsondata[ppt];
                        }
                    }
                    else {

                        if (objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type] === 'date') {

                            // input type date takes the value of date in the format of YYYY-MM-DD //
                            // date string format: "2011-10-10T14:48:00" //
                            // date string format: "2011-10-10" //
                            // date string format: 1580515200000 (number of miliseconds since 01-01-1970) //
                            if (objparam.jsondata[ppt]) {
                                try {
                                    if (!isNaN(objparam.jsondata[ppt])) {
                                        //returned format: Wed Mar 25 2015 08:00:00 GMT+0800 (Malaysia Time) //
                                        let datevalue = new Date(objparam.jsondata[ppt]);

                                        let dddate = /\d{2}/;

                                        let mon = (datevalue.getMonth() + 1).toString();
                                        let monthstr = dddate.test(mon) ? mon : `0${mon}`;

                                        let day = (datevalue.getDate()).toString();
                                        let datestr = dddate.test(day) ? day : `0${day}`;

                                        inputelement.value = `${datevalue.getFullYear()}-${monthstr}-${datestr}`;
                                    } else {
                                        if (objparam.jsondata[ppt].indexOf('T') != -1) {
                                            let tidx = objparam.jsondata[ppt].indexOf('T');
                                            inputelement.value = objparam.jsondata[ppt].substring(0, tidx);
                                        }
                                    }
                                }
                                catch{
                                    inputelement.value = new Date(objparam.jsondata[ppt])
                                }


                                // tidx = objparam.jsondata[ppt].indexOf('T');
                                // inputelement.value = tidx === -1 ? objparam.jsondata[ppt].substring(0) : objparam.jsondata[ppt].substring(0, tidx);
                            }
                        } else {
                            inputelement.value = objparam.jsondata[ppt];
                        }
                    }
                }
            }
            else {

                // value data by id //

                inputelement = document.createElement('select');

                // name is required by as formdata to formactionurl
                inputelement.setAttribute('name', ppt);
                inputelement.dataset[VssFormColDSKey] = ppt;
                if (objparam.arrydatacol) {
                    inputelement.setAttribute('required', objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Required]);
                }

                // populate select list item //

                if (objparam.arryitemdata && objparam.arryitemdata[objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type]]) {

                    // a null value as option if data field not required //
                    if (!objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Required]) {
                        var opt = document.createElement('option');
                        opt.value = null;
                        opt.text = '';
                        inputelement.add(opt);
                    }

                    objparam.arryitemdata[objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type]].forEach(value => {
                        var opt = document.createElement('option');
                        // asuumption: ppt0 = ID, ppt1 = Name //
                        let ppt;
                        let i = 0;
                        for (ppt in value) {
                            switch (i) {
                                case 0: opt.value = value[ppt]; break;
                                case 1: opt.text = value[ppt]; break;
                                default: break;
                            }
                            if (i > 1) { break } else { i++ }
                        }
                        inputelement.add(opt);
                    });

                    // find the data in the list //
                    var dataobjX = objparam.arryitemdata[objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type]].find(function (dataobj) {
                        return dataobj.ID === objparam.jsondata[ppt];
                    });
                    if (dataobjX) {
                        inputelement.value = dataobjX.ID;
                    }
                    else {
                        inputelement.value = null;
                    }
                }

            }

            // readonly attribute //
            // input select does not have readonly attribute and disabled won't get it selected in POSt/GET //

            if (boolsetreadonly) {

                if (objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.ReadOnly]) {

                    // input select //
                    // 1 of 3 places to add onchange event //
                    // 1. pattern; 2. selection lock; 3. user callback //
                    if (objparam.arrydatacol && !isNaN(objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type])) {
                        inputelement.addEventListener('change', () => {
                            this.selectedIndex = this.defaultIndex;
                            alert('Selection locked.');
                        })

                    } else {
                        inputelement.readOnly = objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.ReadOnly]
                    }
                }
            }

            // 1 of 3 places to add onchange event //
            // 1. pattern; 2. selection lock; 3. user callback //

            if (objparam.arryinput[param_item.arryinput.FncOnChange.ArryID]) {
                inputelement.addEventListener('change', objparam.arryinput[param_item.arryinput.FncOnChange.ArryID]);
            }

            // input format //

            if (objparam.arryclass && objparam.arryclass[param_item.arryclass.Input]) {
                inputelement.classList.add(objparam.arryclass[param_item.arryclass.Input]);
            } else {
                inputelement.style.width = "100%";
                inputelement.style.padding = ".5%";
                inputelement.style.boxSizing = "border-box";
            }
            inputelement.style.textAlign = objparam.arryinput[param_item.arryinput.Input.ArryID][param_item.arryinput.Input.Align] === 0 ? 'center' : (objparam.arryinput[param_item.arryinput.Input.ArryID][param_item.arryinput.Input.Align] === 1 ? 'right' : 'left');

            divinput.appendChild(inputelement);
            divwrapper.appendChild(divlabel);
            divwrapper.appendChild(divinput);

            objparam.htmlform.appendChild(divwrapper);

            idxarrydatacol++
        }
    }


    //  button //

    let divbutton = document.createElement('div');
    if (objparam.arryclass && objparam.arryclass[param_item.arryclass.DivButton] && objparam.arryclass[param_item.arryclass.DivButton] != null) {
        divbutton.classList.add(objparam.arryclass[param_item.arryclass.DivButton]);
    }
    else {
        divbutton.style.display = "flex";
        divbutton.style.justifyContent = "space-around";
        divbutton.style.border = VssBorderFormButton;
        divbutton.style.boxSizing = "border-box";
        divbutton.style.width = "100%";
        divbutton.style.margin = "2% auto";
        divbutton.style.padding = "1%";
    }

    if (objparam.arrybutton) {

        for (let i = 0; i < objparam.arrybutton.length; i++) {

            let buttonelement = document.createElement('button');

            buttonelement.innerHTML = objparam.arrybutton[i][param_item.arrybutton.Desc];
            if (objparam.arrydataid[param_item.arrydataid.DataObj]) {
                buttonelement.dataset[VssFormDSDataObj] = objparam.arrydataid[param_item.arrydataid.DataObj];
            }
            if (objparam.arrydataid[param_item.arrydataid.DataObjX]) {
                buttonelement.dataset[VssFormDSDataObjX] = objparam.arrydataid[param_item.arrydataid.DataObjX];
            }

            if (objparam.arrybutton[i][param_item.arrybutton.Type]) {
                buttonelement.setAttribute('type', objparam.arrybutton[i][param_item.arrybutton.Type]);
            } else {
                buttonelement.setAttribute('type', 'button');
            }

            // css class //

            if (objparam.arryclass && objparam.arryclass[param_item.arryclass.Button]) {
                buttonelement.classList.add(objparam.arryclass[param_item.arryclass.Button]);
            } else {
                buttonelement.style.boxSizing = "border-box";
                buttonelement.style.padding = "1%";
                buttonelement.style.margin = "1%";
                buttonelement.style.width = "80%";
            }

            // bgcolor, fgcolor, border, boxshadow //
            // console.log(objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID]);

            if (objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID] && objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID][param_item.arrybutton.ColorBorder.BGColor]) {
                buttonelement.style.backgroundColor = objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID][param_item.arrybutton.ColorBorder.BGColor];
            } else {
                buttonelement.style.backgroundColor = VssColorFormButtonBG;
            }
            if (objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID] && objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID][param_item.arrybutton.ColorBorder.FGColor]) {
                buttonelement.style.color = objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID][param_item.arrybutton.ColorBorder.FGColor];
            } else {
                buttonelement.style.color = VssColorFormButtonnFG;
            }
            if (objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID] && objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID][param_item.arrybutton.ColorBorder.Border]) {
                buttonelement.style.border = objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID][param_item.arrybutton.ColorBorder.Border];
            } else {
                buttonelement.style.border = VssBorderFormButton;
            }
            if (objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID] && objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID][param_item.arrybutton.ColorBorder.BoxShadow]) {
                buttonelement.style.boxShadow = objparam.arrybutton[i][param_item.arrybutton.ColorBorder.ArryID][param_item.arrybutton.ColorBorder.BoxShadow];
            } else {
                buttonelement.style.boxShadow = VssBorderFormButtonnBoxShadow;
            }


            // events of button //

            buttonelement.setAttribute('formaction', objparam.arrybutton[i][param_item.arrybutton.ActionURL]);

            if (objparam.arrybutton[i][param_item.arrybutton.Type] !== 'submit' && objparam.arrybutton[i][param_item.arrybutton.Type] !== 'reset') {
                buttonelement.onclick = objparam.arrybutton[i][param_item.arrybutton.OnClick];
            }

            buttonelement.onmouseover = function (e) {
                gainfocus(this);
                // this.style.opacity = "0.5";
                // setTimeout(() => {
                //     let bgcolor = this.style.backgroundColor;
                //     this.style.backgroundColor = this.style.color;
                //     this.style.color = bgcolor;
                //     this.style.fontStyle = "italic";
                //     this.style.opacity = "1";
                // }, VssTransitionPeriod / 2);

                e.stopPropagation();
            }

            buttonelement.onfocus = function (e) {
                gainfocus(this);
                // this.style.opacity = "0.5";
                // setTimeout(() => {
                //     let bgcolor = this.style.backgroundColor;
                //     this.style.backgroundColor = this.style.color;
                //     this.style.color = bgcolor;
                //     this.style.fontStyle = "italic";
                //     this.style.opacity = "1";
                // }, VssTransitionPeriod / 2);

                e.stopPropagation();
            }

            function gainfocus(btn) {
                btn.style.opacity = "0.5";
                setTimeout(() => {
                    let bgcolor = btn.style.backgroundColor;
                    btn.style.backgroundColor = btn.style.color;
                    btn.style.color = bgcolor;
                    btn.style.fontStyle = "italic";
                    btn.style.opacity = "1";
                }, VssTransitionPeriod / 2);
            }

            buttonelement.onmouseleave = function (e) {
                lostfocus(this);
                // this.style.opacity = "0.5";
                // setTimeout(() => {
                //     let bgcolor = this.style.backgroundColor;
                //     this.style.backgroundColor = this.style.color;
                //     this.style.color = bgcolor;
                //     this.style.fontStyle = "normal";
                //     this.style.opacity = "1";
                // }, VssTransitionPeriod / 2);

                e.stopPropagation();
            }
            buttonelement.onblur = function (e) {
                lostfocus(this);
                // this.style.opacity = "0.5";
                // setTimeout(() => {
                //     let bgcolor = this.style.backgroundColor;
                //     this.style.backgroundColor = this.style.color;
                //     this.style.color = bgcolor;
                //     this.style.fontStyle = "normal";
                //     this.style.opacity = "1";
                // }, VssTransitionPeriod / 2);

                e.stopPropagation();
            }
            function lostfocus(btn) {
                btn.style.opacity = "0.5";
                setTimeout(() => {
                    let bgcolor = btn.style.backgroundColor;
                    btn.style.backgroundColor = btn.style.color;
                    btn.style.color = bgcolor;
                    btn.style.fontStyle = "normal";
                    btn.style.opacity = "1";
                }, VssTransitionPeriod / 2);

                // e.stopPropagation();
            }



            divbutton.appendChild(buttonelement);
        }

        objparam.htmlform.appendChild(divbutton);
    }

    // onsubmit of form //

    if (objparam.fnconsubmit) {
        objparam.htmlform.onsubmit = objparam.fnconsubmit;
    }




    // let frm = document.getElementById(objparam.arrydataid[param_item.arrydataid.Form]);
    // console.log(objparam.arrydataid[param_item.arrydataid.Form]);


    // objparam.htmlform.setAttribute('onsubmit', "onsub()");
    // console.log(objparam.htmlform);
    // objparam.htmlform.addEventListener('submit', onsub);    

    // onsubmit is required to convert checkbox / radio value //
    // objparam.htmlform.onsubmit = function (evt) {
    // let eleminput = this.querySelectorAll('input');
    // eleminput.forEach(elem => {
    //     if (elem.type == 'checkbox') {
    //         elem.value = elem.checked ? 1 : 0;
    //     }
    // })
    // evt.preventDefault();
    // }

    if (boolReturnElem) {
        return objparam.htmlform;
    }
}


function vssfnc_scrollright() {
    if (this.innerHTML === strUserProfile) {
        // scroll right //
        listtitle.innerHTML = strUserProfile;
        userprofile.style = 'display:block';
        setTimeout(function () {
            tablelist.style = 'transform: translateX(100%)';
            userprofile.style = 'right:0';

        }, numContentScrollDelay);

        this.innerHTML = strUserList;
    }
    else {
        // scroll left //
        listtitle.innerHTML = strBlackListWhite;
        tablelist.style = 'transform: translateX(0)';
        userprofile.style = 'right:-100%';
        setTimeout(function () {
            userprofile.style = 'display:none';

        }, numContentScrollDelay * 3);
        this.innerHTML = strUserProfile;
    }
}




// arrymenu - a 2-dim array of menu attributes - 
//          0:form id
//          1:dataobj id (id of record of form)
// max levels of menu: 3

function vssfnc_menupopulate_param() {
    return {
        arrymenu: [],
        arrycolor: [],
        arrysize: []
    }
}

const vssfnc_menupopparam_item = {
    arrymenu: {
        MenuIndex: 0,
        Text: 0,
        Img: 1,
        OnClick: 2,
        DatasetID: 3,
        Class: 4,
        SubMenu: 5
    },
    arryColor: {
        BG: 0,
        FG: 1,
        Border: 2
    },
    arrySize: {
        Width: 0,
        Height: 1
    }
}

// maximum number of levels in menu: 3 //

// 4 elements for manipulation:
//      1. divmenu
//      2. menuitem
//      2. divmenutitle
//      3. submenu

// 1 elements within divmenu:
//      - menuitem
//
// 2 elements within menuitem:
//      1. divmenutitle
//      2. submenu (if any)
//
// 2 elements within divmenutitle:
//      1. img
//      2. text

// all menu items has a class VssMenu

// when init:
//  only 1st level menu is visible
//  1st level has no additional class ??
//  2nd and 3rd level has one class for its parent menu item id

// for every menu item 
// Dataset.ID = parentclass + this.Text (for root menu item, parentclass is null)
// Class += parent.Dataset.ID 
// parent.dataset.ID is passed recursively as the parentclass

// dataset:
// 4 dataset attribute: 
//      1. ID 
//      2. Level
//      3. Display (1 for visible, 0 for non-visible)
//      4. SubExpanded (1 for sub menu expanded, 0 for none)
// each menu item has a dataset.ID that is its text
// this dataset.ID is used as one of the Classes of its children (if any) for tracing purposes
// every menu item has a dataset.Level correspond to its level
// dataset.Display is to indicate visibility of menu item
// dataset.SubExpanded in parent has its sub menu item expanded

// if root menu item is expanded when clicked, it will be hidden

// initialisation after activation:
// apart from the 1st level menu, all menu items has a class: VssInitDisplay
// which is used to invisible the menu items during initialisation.

// to display, style.display is toggled between 'flex' and 'none'
// however, flex direction is preset in menu item during creation

function vssfnc_menupopulate(objparam, initlevel, parentclass) {

    let DefualtBGColor = 'rgba(20, 140, 90, 1)';
    let DefaultFGColor = 'white';
    // const DefualtBGColor = 'black';
    // const DefaultFGColor = 'rgba(255, 255, 255, 1)';
    let DefaultBorder = "1px solid rgba(210,210,210,.8)";
    let DefaultLevel1Border = "2px solid rgba(250,250,250,.8)";
    let DefaultMenuWidth = "100%"
    let DefaultMenuHeight = "20%";
    let DefaultPadding = "2px";
    let DefaultBoxShadow = "5px 5px 2px rgba(210,210,210,.8)";
    // const DefaultBoxShadow = "0 0 2px 2px rgb(250,250,250)";

    let CurrMenuBGColor;
    let CurrMenuFGColor;


    let MenuWidth = parseInt(100 / objparam.arrymenu.length);

    // default //
    // if (!objparam.arrySize || objparam.arrySize && objparam.arrySize.length == 0) {
    //     objparam.arrySize[vssfnc_menupopparam_item.arrySize.Width] = DefaultMenuWidth;
    //     objparam.arrySize[vssfnc_menupopparam_item.arrySize.Height] = DefaultMenuHeight;
    // }
    let menulevel = initlevel ? initlevel : 1;
    parentclass = menulevel > 1 && parentclass ? parentclass : '';


    let divmenu = menulevel === 1 ? document.createElement('div') : menulevel === 2 ? document.createElement('div') : document.createElement('div');


    if (menulevel == 1) {
        divmenu.style.display = "flex";
        divmenu.style.overflow = "hidden";
        // divmenu.style.border = DefaultBorder; //rgba(250,250,250,.8)';
        divmenu.style.justifyContent = "space-around";
        divmenu.dataset.Display = '1';
        divmenu.dataset.SubExpanded = '0';

        // divmenu.style.boxShadow = DefaultBoxShadow;     

        // divmenu.onmouseleave = function () {
        //     vssfnc_menuInitDisplay();
        // }


    } else if (menulevel == 2) {
        divmenu.style.display = "none";
        divmenu.classList.add(VssInitDisplay);
        divmenu.dataset.Display = '0';
        divmenu.dataset.SubExpanded = '0';


    } else if (menulevel == 3) {
        divmenu.style.display = "none";
        divmenu.style.flexDirection = "column";
        divmenu.style.alignItems = "flex-end";
        // divmenu.style.left = "100%";

        divmenu.classList.add(VssInitDisplay);
        divmenu.dataset.Display = '0';
        // to avoid null reference
        divmenu.dataset.SubExpanded = '0';

    }
    divmenu.dataset.Level = menulevel;

    divmenu.style.transition = "all " + VssTransitionPeriodStr;
    divmenu.style.height = "100%";
    divmenu.classList.add('divmenu');
    divmenu.classList.add(VssMenu);


    // css style //
    if (objparam.arrycolor && objparam.arrycolor.length > 0) {
        DefualtBGColor = objparam.arrycolor[vssfnc_menupopparam_item.arryColor.BG];
        DefaultFGColor = objparam.arrycolor[vssfnc_menupopparam_item.arryColor.FG];
        DefaultBorder = DefaultBorder;

        CurrMenuBGColor = objparam.arrycolor[vssfnc_menupopparam_item.arryColor.BG];
        CurrMenuFGColor = objparam.arrycolor[vssfnc_menupopparam_item.arryColor.FG];
    }


    divmenu.style.backgroundColor = DefualtBGColor;
    divmenu.style.color = DefaultFGColor;
    divmenu.style.border = DefaultBorder;
    if (menulevel > 1) {
        divmenu.style.boxShadow = DefaultBoxShadow;
    }


    CurrMenuBGColor = DefualtBGColor;
    CurrMenuFGColor = DefaultFGColor;



    // there must be a height for overflow:hidden to work //
    if (objparam.arrysize && objparam.arrysize.length > 0) {
        divmenu.style.width = objparam.arrysize[vssfnc_menupopparam_item.arrySize.Width];
        divmenu.style.Height = objparam.arrysize[vssfnc_menupopparam_item.arrySize.Height];
    } else {
        divmenu.style.width = DefaultMenuWidth;
        divmenu.style.Height = DefaultMenuHeight;
    }


    // FOR EACH MENU IN ARRAYMENU //

    objparam.arrymenu.forEach((mitem) => {

        let menuitem = menulevel == 1 ? document.createElement('div') : menulevel == 2 ? document.createElement('div') : document.createElement('li');

        menuitem.style.flexDirection = menulevel == 1 ? "column" : menulevel == 2 ? "column" : "row";
        if (menulevel == 1) {
            menuitem.style.border = DefaultLevel1Border;
            menuitem.style.padding = "2px";

            // menuitem.style.margin="0 1% 0 1%";
            menuitem.dataset.Display = '1';
            menuitem.dataset.SubExpanded = '0';

            menuitem.onmouseleave = function () {
                vssfnc_menuInitDisplay();
            }

        }
        else if (menulevel == 2) {
            menuitem.classList.add(VssInitDisplay);
            // menuitem.style.border = DefaultBorder;
            menuitem.dataset.Display = '0';
            menuitem.dataset.SubExpanded = '0';
        } else if (menulevel == 3) {
            menuitem.classList.add(VssInitDisplay);
            menuitem.style.justifyContent = "flex-end";
            menuitem.style.padding = "1%";
            menuitem.style.width = "100%";
            // menuitem.style.border = DefaultBorder;
            menuitem.dataset.Display = '0';
            menuitem.dataset.SubExpanded = '0';
        }
        menuitem.style.boxSizing = "border-box";
        menuitem.style.flexGrow = "1";
        menuitem.style.transition = "all " + VssTransitionPeriodStr;
        menuitem.classList.add('menuitem');
        menuitem.classList.add(VssMenu);

        menuitem.dataset.ID = parentclass + mitem[vssfnc_menupopparam_item.arrymenu.Text];
        menuitem.dataset.Level = menulevel;


        menuitem.style.textAlign = menulevel == 1 || menulevel == 2 ? "center" : "right";

        // process submenu of level 1 and level 2 //
        let submenu;

        // only 1st and 2nd level menu could have submenu //
        if (menulevel == 1 || menulevel == 2) {

            if (mitem[vssfnc_menupopparam_item.arrymenu.SubMenu] && mitem[vssfnc_menupopparam_item.arrymenu.SubMenu].length > 0) {

                submenu = menulevel == 1 ? document.createElement('div') : document.createElement('div');

                submenu.style.position = "absolute";
                submenu.style.flexGrow = "1";
                submenu.style.flexDirection = "column";
                submenu.style.display = "none";
                submenu.style.width = MenuWidth + "%";
                submenu.style.boxSizing = "border-box";
                submenu.style.transition = "all " + VssTransitionPeriodStr;
                if (menulevel == 2) {
                    submenu.style.marginTop = "-100%";
                }

                // submenu.style.padding="1%";

                submenu.style.justifyContent = "space-around";

                submenu.dataset.Level = menulevel;
                submenu.dataset.Display = '0';

                submenu.classList.add(VssInitDisplay);
                submenu.classList.add('submenu');
                submenu.classList.add(VssMenu);


                submenu.dataset.ID = parentclass + mitem[vssfnc_menupopparam_item.arrymenu.Text];

                // at level 1, parentclass would by default be null //
                if (menulevel == 1) {
                    submenu.classList.add(mitem[vssfnc_menupopparam_item.arrymenu.Text]);
                    submenu.dataset.Display = "0";
                    submenu.dataset.SubExpanded = "0";
                } else {
                    submenu.classList.add(parentclass);
                    submenu.dataset.Display = "0";
                    submenu.dataset.SubExpanded = "0";
                }

                // menulevel == 2 after recurse to submenu from menulevel == 1 //
                if (menulevel == 1) {
                    mitem[vssfnc_menupopparam_item.arrymenu.SubMenu].forEach((submenuitem) => {

                        // no parent menu => no Class for root menu //

                        // carry over all original parameter except arrymenu //
                        let objparam2 = vssfnc_menupopulate_param();
                        objparam2 = Object.assign(objparam2, objparam);
                        objparam2.arrymenu = [];
                        objparam2.arrymenu.push(submenuitem);

                        submenu.appendChild(vssfnc_menupopulate(objparam2, menulevel + 1, submenu.dataset.ID));
                    })
                }
                else if (menulevel == 2) {

                    // max level is 3, therefore if menulevel is at 2, it's submenu would be the last level //

                    // carry over all original parameter except arrymenu //
                    let objparam2 = vssfnc_menupopulate_param();
                    objparam2 = Object.assign(objparam2, objparam);
                    objparam2.arrymenu = mitem[vssfnc_menupopparam_item.arrymenu.SubMenu];

                    submenu = vssfnc_menupopulate(objparam2, menulevel + 1, menuitem.dataset.ID);
                }

            }
        }



        // divmenutitle contains icon and text

        let divmenutitle = document.createElement('div');
        divmenutitle.classList.add("divmenutitle");
        divmenutitle.style.display = "flex";
        if (menulevel == 3) {
            divmenutitle.style.flexDirection = "row-reverse";
        }
        // divmenutitle.style.margin = "0 5%";
        divmenutitle.style.width = "100%";
        divmenutitle.style.justifyContent = menulevel == 1 || menulevel == 2 ? "center" : "flex-end";




        // icon
        if (mitem[vssfnc_menupopparam_item.arrymenu.Img]) {
            var divimg = document.createElement('div');
            divimg.innerHTML = "<img src='" + mitem[vssfnc_menupopparam_item.arrymenu.Img] + "'></img>"
            divimg.classList.add('divmenutitleimg');
            divimg.style.margin = "1%";
            // divimg.style.justifySelf = "flex-end";
            divimg.style.alignSelf = "center";

            if (menulevel == 3) {
                divimg.style.flexGrow = "1";
            } else {
                // divimg.style.justifyItems="end";
            }

            divmenutitle.appendChild(divimg);
        }

        // text
        var divtext = document.createElement('div');
        divtext.classList.add('divmenutitletext');
        divtext.style.boxSizing = "border-box";
        // divtext.style.width = "100%";
        divtext.style.margin = "1%";
        divtext.style.padding = "1%";
        divtext.style.textAlign = menulevel == 1 || menulevel == 2 ? "center" : "right";
        if (menulevel == 3) {
            divtext.style.flexGrow = "9";
        } else {
            // divtext.style.justifyItems="start";
        }

        divtext.innerHTML = mitem[vssfnc_menupopparam_item.arrymenu.Text];

        divmenutitle.appendChild(divtext);




        // OnClick, OnMouseOve, OnMouseOut //

        // when clicked, either
        // this menu has been expanded / closed OR
        // other menu has expanded

        // when a menuitem is clicked, click event of all its parent will also be triggerred //
        // use e.stopPropagation() to stop propagation //
        menuitem.onclick = function (e) {

            switch (this.dataset.Level) {
                case "3":
                    // re-init menu display and call back, if any //

                    // init menu display //
                    vssfnc_menuInitDisplay();

                    // call back //
                    if (mitem[vssfnc_menupopparam_item.arrymenu.OnClick]) {
                        mitem[vssfnc_menupopparam_item.arrymenu.OnClick]();
                    }

                    break;

                case "1":

                    vssfnc_menuInitDisplay();
                    if (mitem[vssfnc_menupopparam_item.arrymenu.OnClick]) {

                        mitem[vssfnc_menupopparam_item.arrymenu.OnClick]();
                    } else {
                        // dataset.SubExpaned would have been defaulted to 0 when vssfnc_menuInitDisplay
                        let boolExpand = false;
                        if (this.dataset.SubExpanded == "0") {
                            boolExpand = true;
                        }

                        // vssfnc_menuInitDisplay();

                        if (boolExpand) {

                            // expand submenu //
                            this.dataset.SubExpanded = "1";
                            let submenux = document.querySelectorAll("." + this.dataset.ID);
                            if (submenux.length > 0) {
                                for (let i = 0; i < submenux.length; i++) {
                                    // if(submenux[i].dataset.Level != this.dataset.Level){
                                    submenux[i].style.display = "flex";
                                    submenux[i].style.opacity = "0";

                                    submenux[i].dataset.Display = "1";
                                    submenux[i].dataset.SubExpanded = "0";

                                    setTimeout(() => {

                                        // submenux[i].style.marginTop = "0";
                                        submenux[i].style.opacity = "1";
                                    }, VssTransitionPeriod);
                                    // }
                                }
                            }
                        }
                    }

                    break;

                case "2":
                    if (mitem[vssfnc_menupopparam_item.arrymenu.OnClick]) {
                        vssfnc_menuInitDisplay();
                        mitem[vssfnc_menupopparam_item.arrymenu.OnClick]();
                    } else {

                        let boolexpand = false;
                        if (this.dataset.SubExpanded == "0") {
                            boolexpand = true;
                        }

                        // collapse all sub level menu //
                        // let allmenuitem = document.querySelectorAll("." + VssInitDisplay);
                        // for (let k = 0; k < allmenuitem.length; k++) {

                        //     if (allmenuitem[k].dataset.Level == "3") {
                        //         allmenuitem[k].style.display = "none";
                        //         allmenuitem[k].dataset.Display = "0";
                        //     }
                        //     allmenuitem[k].dataset.SubExpanded = "0";
                        // }

                        // if (this.dataset.SubExpanded == "1") {
                        //     this.dataset.SubExpanded = "0";

                        // } else
                        //  if (this.dataset.SubExpanded == "0") {
                        if (boolexpand) {

                            this.dataset.SubExpanded = "1";

                            let submenux = document.querySelectorAll("." + this.dataset.ID);
                            if (submenux.length > 0) {
                                for (let i = 0; i < submenux.length; i++) {
                                    submenux[i].style.display = "flex";
                                    submenux[i].style.opacity = "0";

                                    submenux[i].dataset.Display = "1";

                                    setTimeout(() => {

                                        // submenux[i].style.marginTop = "0";
                                        submenux[i].style.opacity = "1";
                                    }, VssTransitionPeriod);
                                }
                            }
                        }
                        else {
                            this.dataset.SubExpanded = "0";

                            let allmenuitem = document.querySelectorAll("." + this.dataset.ID);
                            for (let k = 0; k < allmenuitem.length; k++) {

                                if (allmenuitem[k].dataset.Level == "3") {
                                    allmenuitem[k].style.display = "none";
                                    allmenuitem[k].dataset.Display = "0";
                                }
                                allmenuitem[k].dataset.SubExpanded = "0";
                            }
                        }

                    }
                    break;
            }
            e.stopPropagation();
        }


        menuitem.onmouseover = function (e) {
            this.style.opacity = "0.5";
            setTimeout(() => {
                this.style.backgroundColor = CurrMenuFGColor;
                this.style.color = CurrMenuBGColor;
                this.style.opacity = "1";
                this.style.fontStyle = "italic";
            }, VssTransitionPeriod / 2);

            e.stopPropagation();
        }

        menuitem.onmouseout = function (e) {
            this.style.opacity = "0.5";
            setTimeout(() => {
                this.style.backgroundColor = CurrMenuBGColor;
                this.style.color = CurrMenuFGColor;
                this.style.opacity = "1";
                this.style.fontStyle = "normal";
            }, VssTransitionPeriod / 2);


            e.stopPropagation();
        }

        // Class //
        // class of submenu is added when processing submenu //
        // No Class required for root menu (no parent) //
        if (menulevel > 1) {
            menuitem.classList.add(parentclass);
            divmenu.classList.add(parentclass);
        }


        // append elements //

        menuitem.appendChild(divmenutitle);

        if (submenu) {
            menuitem.appendChild(submenu);
        }

        divmenu.appendChild(menuitem);
    })


    return divmenu;

}

function vssfnc_menuInitDisplay() {
    let allmenuitem = document.querySelectorAll("." + VssMenu);
    for (let k = 0; k < allmenuitem.length; k++) {

        if (allmenuitem[k].dataset.Level != "1") {
            allmenuitem[k].style.display = "none";
            allmenuitem[k].dataset.Display = "0";
        }
        allmenuitem[k].dataset.SubExpanded = "0";
    }
}

