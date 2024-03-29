'use strict';

// vssfnc_tablepopulate_param
// vssfnc_tablepopulate
// vssfnc_paintoddevenrow
// vssfnc_sortarrydata

// vssfnc_formpopulate_param
// vssfnc_formpopulate






function vssfnc_tablepopulate_param() {
    // caption - caption of table (optional)
    // arryheadercol - a 2-dim array of:
    //                  [header col[0: description strings, 1: col-width, 2: text-alignment, 3: [input type, input data, onchange function]]]
    //                  (col-width - set to '0%' to hide column - col-width is checked in both <th> and <td> to determine whether to <display:none>)
    //                  (text-alignment - 0:center, -1:left, 1:right (default - left))
    //                  (input type - 1: input element, 2: select element)
    //               - if arryheadercol is not provided, header col info will be extracted from arryJSON's properties - col-width will be defaulted, text-alignment - ?)
    // arryJSON - a json data object 
    // arryfooteragg - an array of aggregate functions (sum or ave) on required column
    // boolitemcount - a boolean to indicate whether to list number of items at the bottom of table
    // tablelistX - html element of the table to be created (if the html table element is not provided, the function will return a table element)
    // tableid - id of source datatable (for sorting by column purposes - obsolete?)
    // arryclass - an array of css classes - 
    //
    //          0:<caption> 
    //          1:<thead><tr>
    //          2:<thead><tr><th>
    //          3:<tr><td>
    //          4:<tr><button>
    //          5:<tfoot><tr>
    // arryclassdatarow - an array of 3 classes for datarow - 
    //          0:odd-numbered row
    //          1:even-numbered row
    //          2:selected row
    // arrydataid - an array of data attributes - 
    //          0:table id
    //          1:datarow id
    // arrysortind - an array of 2 strings indicator for column sorting - 
    //          0:ascending
    //          1:descending
    // arrybutton - a 2-dim array of 
    // [0: datarow button: [0: button text, 1: button column, 2: button_clicked function, 3: css class of button]]
    // ?? [1: table button: [0: button text, 1: button column, 2: button_clicked function, 3: css class of button]]
    // fncdatarowclicked - function to call on datarow clicked

    return {
        caption: null,
        arryheadercol: [],
        arryjsondata: null,
        arryfooteragg: null,
        boolitemcount: false,
        htmltable: null,
        htmltableid: null,
        arryclass: [],
        arryclassdatarow: [],
        arrydataid: [],
        arrysortind: [],
        arrybutton: [],
        fncdatarowclicked: undefined,
    }
}

const vssfnc_tablepopparam_item = {
    arryheadercol: {
        Desc: 0,
        Width: 1,
        Align: 2,
        Input: {
            Type: 0,
            Data: 1,
            OnChange: 2
        }
    },
    arryclass: {
        Caption: 0,
        TheadTr: 1,
        TheadTrTh: 2,
        TrTd: 3,
        TrButton: 4,
        TfootTr: 5
    },
    arryclassdatarow: {
        OddNumRow: 0,
        EvnNumRow: 1,
        SelectedRow: 2
    },
    arrydataid: {
        Table: 0,
        Datarow: 1
    },
    arrysortind: {
        Ascd: 0,
        Dscd: 1
    },
    // arrybutton - a 2-dim array of 
    // [0: datarow button: [0: button text, 1: button column, 2: button_clicked function, 3: css class of button]]
    // ?? [1: table button: [0: button text, 1: button column, 2: button_clicked function, 3: css class of button]]
    // fncdatarowclicked - function to call on datarow clicked
    arrybutton: {
        DataRow: {
            ArryID: 0,
            Desc: 0,
            Col: 1,
            OnClick: 2,
            CSSClass: 3
        },
        Table: {
            ArryID: 1,
            Desc: 0,
            OnClick: 1,
            CSSClass: 2
        }
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

    // try {
    let boolReturnElem = false;
    if (objparam.htmltable) {
        objparam.htmltable.innerHTML = "";
    }
    else {
        objparam.htmltable = document.createElement('table');
        objparam.htmltable.id = objparam.arrydataid[param_item.arrydataid.Table];
        boolReturnElem = true;
    }

    // set css style of table element //
    if (true) {
        // set default if table class not set 
        // objparam.htmltable.style.borderCollapse = 'collapse';
        objparam.htmltable.setAttribute('style',
            `border-collapse:collapse;
            width:100%;
            margin: 0 auto;`);
    }

    // handling of null param //
    if (!objparam.arryclass) {
        objparam.arryclass = [];
    }
    if (!objparam.arryclassdatarow) {
        objparam.arryclassdatarow = [];
    }
    if (!objparam.arrydataid) {
        objparam.arrydataid = [];
    }

    // caption //

    if (objparam.caption) {
        let caption = document.createElement('caption');
        caption.classList.add(objparam.arryclass[param_item.arryclass.Caption]);
        caption.innerHTML = objparam.caption;
        objparam.htmltable.appendChild(caption);
    }

    // table header //

    let thead = document.createElement('thead');

    let trheader = document.createElement('tr');
    trheader.classList.add(objparam.arryclass[param_item.arryclass.TheadTr]);
    if (objparam.arryheadercol && objparam.arryheadercol.length > 0) {

        objparam.arryheadercol.forEach((datacol, index) => {
            let th = document.createElement('th');
            th.classList.add(objparam.arryclass[param_item.arryclass.TheadTrTh]);
            th.id = index;
            th.dataset[objparam.arrydataid[param_item.arrydataid.Table]] = objparam.htmltableid;
            th.setAttribute('style',
                `width:${objparam.arryheadercol[index][param_item.arryheadercol.Width]} ${objparam.arryheadercol[index][param_item.arryheadercol.Width] === '0%' || objparam.arryheadercol[index][param_item.arryheadercol.Width] === '0' ? ';display:none' : ''}`);
            th.innerHTML = datacol[param_item.arryheadercol.Desc];
            trheader.appendChild(th);
        });
    }
    else {
        // extract header col from first json object //
        objparam.arryheadercol = [];
        let header;
        let index = 0;

        for (header in objparam.arryjsondata[0]) {
            let th = document.createElement('th');
            th.classList.add(objparam.arryclass[param_item.arryclass.TheadTr]);
            th.id = index;
            th.dataset[objparam.arrydataid[param_item.arrydataid.Table]] = objparam.htmltableid;
            th.innerHTML = header;
            trheader.appendChild(th);

            let arryheader = [];
            arryheader[param_item.arryheadercol.Desc] = header;
            arryheader[param_item.arryheadercol.Width] = '10%';
            arryheader[param_item.arryheadercol.Align] = 0;
            objparam.arryheadercol.push(arryheader);
            index += 1;
        }
    }

    thead.appendChild(trheader);
    objparam.htmltable.appendChild(thead);

    // load datarow //

    let tbody = document.createElement('tbody');
    let boolbtnadded;

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
        tr.classList.add(objparam.arryclass[param_item.arryclass.TrTd]);
        tr.dataset[objparam.arrydataid[param_item.arrydataid.Datarow]] = Object.values(item)[0];

        // datarow button, if any //
        boolbtnadded = objparam.arrybutton && objparam.arrybutton.length > 0 ? false : true;
        Object.values(item).forEach((val, index) => {

            // construct the td element //
            // add button AFTER input/data element //

            let td = document.createElement('td');
            let tdstyle = `text-align:${objparam.arryheadercol[index][param_item.arryheadercol.Align] === 1 ? 'right' : (objparam.arryheadercol[index][param_item.arryheadercol.Align] === 0 ? 'center' : 'left')};
            ${objparam.arryheadercol[index][param_item.arryheadercol.Width] === '0%' || objparam.arryheadercol[index][param_item.arryheadercol.Width] === '0' ? 'display:none' : ''}'`

            // td is either for display or input //
            // 3: [input type, input data, onchange function]]

            if (objparam.arryheadercol[index][param_item.arryheadercol.Input]) {
                // for input //
                let inputtype = objparam.arryheadercol[index][param_item.arryheadercol.Input][param_item.arryheadercol.Input.Type] === 2 ? 'select' : 'input';
                let inputelem = document.createElement(inputtype);
                inputelem.value = val;
                // inputelem.setAttribute('style', `width:100%; ${tdstyle}`);
                inputelem.setAttribute('style', tdstyle);
                inputelem.dataset[objparam.arrydataid[param_item.arrydataid.Datarow]] = Object.values(item)[0];

                td.appendChild(inputelem);
            }
            else {
                // for display //
                td.setAttribute('style', tdstyle);
                td.innerHTML = val;
            }

            // cell button element //

            if (!boolbtnadded && objparam.arrybutton && objparam.arrybutton.length > 0) {

                let btncolumn = objparam.arrybutton[param_item.arrybutton.DataRow.ArryID][param_item.arrybutton.DataRow.Col] ? objparam.arrybutton[param_item.arrybutton.DataRow.ArryID][param_item.arrybutton.DataRow.Col] : 0;
                if (index === btncolumn) {
                    let button = document.createElement('button');
                    if (objparam.arryclass[param_item.arryclass.TrButton]) {
                        button.classList.add(objparam.arryclass[param_item.arryclass.TrButton]);
                    }
                    else {

                    }
                    button.dataset[objparam.arrydataid[param_item.arrydataid.Datarow]] = Object.values(item)[0];
                    button.innerHTML = objparam.arrybutton[param_item.arrybutton.DataRow.ArryID][param_item.arrybutton.DataRow.Desc];
                    td.appendChild(button);
                    boolbtnadded = true;
                }
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
    // if (objparam.boolitemcount) {
    //     objparam.htmltable.innerHTML += `<tr class = ${objparam.arryclass[5]}><td>Count: ${objparam.arryjsondata.length}</td></tr>`;
    // }

    // =>
    // strfooterhtml += '</tfoot>'
    // objparam.htmltable.innerHTML += strfooterhtml;





    // 
    // eventhandler for table datarow clicked //
    // ! do it before formatting odd/even row, which changes the class of the datarow !//
    // 

    // !! cannot use getElementsByClassName(objparam.arryclass[3] !!
    // !! if arryclass is not specified, all elements will have same class name !!
    // let tabledatarow = document.getElementsByClassName(objparam.arryclass[3]);
    let tabledatarow = objparam.htmltable.getElementsByTagName('tr');
    for (var i = 0; i < tabledatarow.length; i++) {
        if (objparam.fncdatarowclicked === undefined) {
            tabledatarow[i].onclick = function () {
                let parent = this.parentElement.parentElement;
                vssfnc_paintoddevenrow(parent, objparam.arryclassdatarow);
                this.classList.add(objparam.arryclassdatarow[param_item.arryclassdatarow.SelectedRow]);
            }
        }
        else {
            tabledatarow[i].onclick = objparam.fncdatarowclicked;
        }
    }

    // paint table datarow - odd/even //

    vssfnc_paintoddevenrow(objparam.htmltable, objparam.arryclassdatarow);

    // add event handler //

    // eventhandler for table header click-sort //
    // !! cannot use getElementsByClassName(objparam.arryclass[2] !!
    // !! if arryclass is not specified, all elements will have same class name !!
    // let tablecolheaderX = objparam.htmltable.getElementsByClassName(objparam.arryclass[2]);
    let tablecolheaderX = objparam.htmltable.getElementsByTagName('th');
    for (var i = 0; i < tablecolheaderX.length; i++) {
        tablecolheaderX[i].onclick = function () {
            // try {

            let colidx = this.id;
            let dir = ((this.innerHTML).indexOf(objparam.arrysortind[param_item.arrysortind.Ascd]) < 0 ? -1 : 1);

            // revert sortedtablecol to original headercol //
            let sortedtablecol = objparam.arryheadercol.map(function (datacol) {
                datacol[0] = datacol[0].includes(objparam.arrysortind[param_item.arrysortind.Ascd]) ? datacol[0].replace(objparam.arrysortind[param_item.arrysortind.Ascd], '') : datacol[0].includes(objparam.arrysortind[param_item.arrysortind.Dscd]) ? datacol[0].replace(objparam.arrysortind[param_item.arrysortind.Dscd], '') : datacol[0];
                return datacol;
            })

            if (sortedtablecol[colidx] && objparam.arrysortind) {
                // rename sorted headercol //
                sortedtablecol[colidx][0] += (dir < 0) ? objparam.arrysortind[param_item.arrysortind.Ascd] : objparam.arrysortind[param_item.arrysortind.Dscd];

                // reload sorted table //
                objparam.arryheadercol = sortedtablecol;
                objparam.arryjsondata = vssfnc_sortarrydata(objparam.arryjsondata, colidx, dir);
                vssfnc_tablepopulate(objparam);
            }
        }
    }

    // eventhandler for table input field //

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

    if (objparam.arrybutton) {
        let tablerowbutton = objparam.htmltable.getElementsByTagName('button');
        for (var i = 0; i < tablerowbutton.length; i++) {
            if (objparam.arrybutton[param_item.arrybutton.DataRow.ArryID][param_item.arrybutton.DataRow.OnClick]) {
                tablerowbutton[i].onclick = objparam.arrybutton[param_item.arrybutton.DataRow.ArryID][param_item.arrybutton.DataRow.OnClick];
            }
        }
    }

    if (boolReturnElem) {
        return objparam.htmltable;
    }
}

// }
// catch (e) {
//     alert('loadtablelist error: ' + e);
// }




function vssfnc_paintoddevenrow(tablex, classdatarow) {
    // if user-set css class //
    if (classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.OddNumRow] &&
        classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.EvnNumRow] &&
        classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.SelectedRow]) {
        let cssstyle = classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.OddNumRow];
        for (let i = 0; i < tablex.rows.length; i++) {
            // remove selected row class, if any //
            tablex.rows[i].classList.remove(classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.SelectedRow]);

            cssstyle = (cssstyle === classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.EvnNumRow]) ? classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.OddNumRow] : classdatarow[vssfnc_tablepopparam_item.arryclassdatarow.EvnNumRow];
            tablex.rows[i].classList.add(cssstyle);
        }
    }
    else {
        // default style //
        if (tablex) {
            tablex.style.border = 'solid 1px white';

            // header row //
            tablex.rows[0].style.color = 'white';
            tablex.rows[0].style.backgroundColor = 'black';
            for (var cell of tablex.rows[0].cells) {
                cell.style.border = 'solid 1px gray';
                cell.style.padding = '5px';
            }

            // data row //
            let odd = true;
            for (let i = 1; i < tablex.rows.length; i++) {
                tablex.rows[i].style.color = 'black';

                tablex.rows[i].style.backgroundColor = odd ? 'white' : 'gainsboro';
                odd = odd ? false : true;

                for (var cell of tablex.rows[i].cells) {
                    cell.style.border = 'solid 1px gray';
                }
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
    // arrydatacol - a 2-dim array of  [key[description strings, required, type]]
    // arryJSON - a json data object 
    // arryfooter - ??
    // htmlform - html element of the form container (if a form html is not provided, a form element will be returned)
    // formid - id of source datatable (for sorting by column purposes - obsolete?)
    // arryitemdata - an array of constituent json data object 
    // arryinput - a 2-dim array of [[label:[width ration, text-align]],[input[width ratio, text-align]] between label:input 
    //                          - [xx%, -1]
    //                          - text-align - -1:left, 0:center, 1:right
    // arryclass - an array of css classes - 
    //          0:caption
    //          1:label
    //          2:input
    //          3:divbutton
    // arrydataid - an array of data attributes - 
    //          0:form id
    //          1:dataobj id (id of record of form)
    // arrybutton - a 2-dim array of [button[(0)type, (1)text, (2)class, (3)clickedfunction (4)formactionurl]]

    return {
        caption: null,
        actionurl: null,
        arrydatacol: [],
        arryjsondata: null,
        arryfooter: null,
        htmlform: null,
        htmlformid: null,
        arryitemdata: [],
        arryinput: [],
        arryclass: [],
        arrydataid: [],
        arrybutton: []
    }
}

const vssfnc_formpopparam_item = {
    arrydatacol: {
        Desc: 0,
        Required: 1,
        Type: 2
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
        }
    },
    arryclass: {
        Caption: 0,
        Label: 1,
        Input: 2,
        DivButton: 3
    },
    arrydataid: {
        Form: 0,
        DataObj: 1
    },
    arrybutton: {
        Type: 0,
        Desc: 1,
        CSSClass: 2,
        OnClick: 3,
        ActionURL:4
    }
}

// used to populate a form (display / addition / edit) for a single object with multiple properties //
function vssfnc_formpopulate(objparam) {

    
    let param_item = vssfnc_formpopparam_item;

    // set default for null parameter //

    let boolReturnElem = false;
    if (objparam.htmlform) {
        // remove existing elements //
        while (objparam.htmlform.firstChild) {
            objparam.htmlform.removeChild(objparam.htmlform.firstChild);
        }
        objparam.htmlform.id = objparam.arrydataid[param_item.arrydataid.Form];
    }
    else {
        objparam.htmlform = document.createElement('form');
        objparam.htmlform.id = objparam.arrydataid[param_item.arrydataid.Form];
        boolReturnElem = true;
    }


    // css class of form

    if (true) {
        objparam.htmlform.style.width = '90%';
    }

    // datacol 
    if (!objparam.arrydatacol) {
        // objparam.arrydatacol=[];
        // var ppt;
        // let record=[];
        // for(ppt in objparam.arryjsondata[0]){

        // }
        // objparam.arrydatacol = [['ID', false, 'text'],
        // ['Name', true, 'text'],
        // ['Code', true, 'text'],
        // ['Currency', true, 'text'],
        // ['Debit Account', true, 0],
        // ['Credit Account', true, 1],
        // ['Taxable', false, 'radio']];
    }

    // 
    // format form //
    // a form is a flex (row or col depending on layout) with one div for each property //

    // form action url //
    // if an url for form action is provided, it's a POST request, else default to GET //
    if (objparam.actionurl) {
        objparam.htmlform.method = 'POST';
        objparam.htmlform.action = objparam.actionurl;
    }

    objparam.htmlform.style.display = 'flex';
    objparam.htmlform.style.flexDirection = 'column';

    // caption //

    if (objparam.caption) {
        let captionelement = document.createElement('div');
        captionelement.innerHTML = objparam.caption;
        if (objparam.arryclass[param_item.arryclass.Caption]) {
            captionelement.classList.add(objparam.arryclass[param_item.arryclass.Caption]);
        }
        objparam.htmlform.appendChild(captionelement);
    }

    // load key and value //

    var ppt;
    var idxarrydatacol = 0;
    for (ppt in objparam.arryjsondata) {

        // property wrapper - a div (row or column flex depending on layout) with: divlabel + divinput //
        var divwrapper = document.createElement('div');
        divwrapper.width = '100%';
        divwrapper.setAttribute('style', 'display:flex;');


        // label - a label element in a div element //
        var divlabel = document.createElement('div');
        divlabel.style.flexBasis = objparam.arryinput[param_item.arryinput.Label.ArryID][param_item.arryinput.Label.WidthRatio];
        divlabel.style.textAlign = objparam.arryinput[param_item.arryinput.Label.ArryID][param_item.arryinput.Label.Align] === 0 ? 'center' : (objparam.arryinput[param_item.arryinput.Label.ArryID][param_item.arryinput.Label.Align] === 1 ? 'right' : 'left');

        var labelelement = document.createElement('LABEL');
        labelelement.width = '100%';
        if (objparam.arrydatacol && objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Desc]) {
            labelelement.innerHTML = objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Desc];
        }
        else {
            labelelement.innerHTML = ppt;
        }

        if (objparam.arryclass && objparam.arryclass[param_item.arryclass.Label]) {
            labelelement.classList.add(objparam.arryclass[param_item.arryclass.Label]);
        }
        labelelement.setAttribute('style', 'width:100%;')
        divlabel.appendChild(labelelement);


        // data input box - an input OR select element in a div element //

        var divinput = document.createElement('div');
        divinput.setAttribute('style', `flex-basis:${objparam.arryinput[param_item.arryinput.Input.ArryID][param_item.arryinput.Input.WidthRatio]};`);

        // dataobj vs non-dataobj //
        // non-dataobj -> checkbox vs text //
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
                radioY.setAttribute('name', ppt);
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
                radioN.setAttribute('name', ppt);
                radioN.required = objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Required];
                radioN.setAttribute('type', objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type]);
                radioN.value = 0;
                radioN.id = idradioNo;
                inputelement.appendChild(radioN);

                let labelN = document.createElement('label');
                labelN.setAttribute('for', idradioNo);
                labelN.innerHTML = 'NO';
                inputelement.appendChild(labelN);

                if (objparam.arryjsondata[ppt]) {
                    radioY.checked = true;
                }
                else {
                    radioN.checked = true;
                }
            }
            else {
                // text //
                inputelement = document.createElement('INPUT');
                inputelement.setAttribute('name', ppt);
                inputelement.required = objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Required];

                // / doesn't work !! required is a reflected property //
                // inputelement.setAttribute('required', objparam.arrydatacol[idxarrydatacol][1]);//

                inputelement.setAttribute('type', objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type]);
                inputelement.value = objparam.arryjsondata[ppt];
            }
        }
        else {
            // value data by id //
            inputelement = document.createElement('select');

            inputelement.setAttribute('name', ppt);
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
                })
                // find the data in the list //
                var dataobjX = objparam.arryitemdata[objparam.arrydatacol[idxarrydatacol][param_item.arrydatacol.Type]].find(function (dataobj) {
                    return dataobj.ID === objparam.arryjsondata[ppt];
                })
                if (dataobjX) {
                    inputelement.value = dataobjX.ID;
                }
                else {
                    inputelement.value = '';
                }
            }

        }
        if (objparam.arryclass && objparam.arryclass[param_item.arryclass.Input]) {
            inputelement.classList.add(objparam.arryclass[param_item.arryclass.Input]);
        }

        inputelement.setAttribute('style', `width:100%;
            text-align:${objparam.arryinput[param_item.arryinput.Input.ArryID][param_item.arryinput.Input.Align] === 0 ? 'center' : (objparam.arryinput[param_item.arryinput.Input.ArryID][param_item.arryinput.Input.Align] === 1 ? 'right' : 'left')}`);
        divinput.appendChild(inputelement);

        divwrapper.appendChild(divlabel);
        divwrapper.appendChild(divinput);

        objparam.htmlform.appendChild(divwrapper);

        idxarrydatacol++
    }

    //  button //
    let divbutton = document.createElement('div');
    if (objparam.arryclass && objparam.arryclass[param_item.arryclass.DivButton] && objparam.arryclass[param_item.arryclass.DivButton] != null) {
        divbutton.classList.add(objparam.arryclass[param_item.arryclass.DivButton]);
    }
    else {
        divbutton.setAttribute('style',
            `box-sizing:border-box;
            width:100%; 
            margin:2% auto;
            display:flex;
            border: 1px solid gray;
            justify-content:space-around;
            padding:2%;`);
    }

    if (objparam.arrybutton) {
        for (let i = 0; i < objparam.arrybutton.length; i++) {
            var buttonelement = document.createElement('button');
            buttonelement.setAttribute('type', objparam.arrybutton[i][param_item.arrybutton.Type]);
            buttonelement.setAttribute('formaction', objparam.arrybutton[i][param_item.arrybutton.ActionURL]);
            buttonelement.innerHTML = objparam.arrybutton[i][param_item.arrybutton.Desc];
            buttonelement.dataset.ID = objparam.arrydataid[param_item.arrydataid.DataObj];

            // if (objparam.arryclass && objparam.arryclass[i]) {
            //     buttonelement.classList.add(objparam.arryclass[i][param_item.arryclass.DivButton]);
            // }

            // buttonelement.formAction=objparam.actionurl;
            if (objparam.arrybutton[i][param_item.arrybutton.Type] !== 'submit' && objparam.arrybutton[i][param_item.arrybutton.Type] !== 'reset') {
                buttonelement.onclick = objparam.arrybutton[i][param_item.arrybutton.OnClick];
            }
            divbutton.appendChild(buttonelement);
        }

        objparam.htmlform.appendChild(divbutton);
    }

    // let frm = document.getElementById(objparam.arrydataid[param_item.arrydataid.Form]);
    // console.log(objparam.arrydataid[param_item.arrydataid.Form]);
    
    // frm.onsubmit = onsub;
    // function onsub(){
    //     console.log(this);
    // }
    
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