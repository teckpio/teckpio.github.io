

var headernavitem = document.getElementById("vsse_headernavitem");
var vssebody = document.getElementById("vsse_main");
var vssenav = document.getElementById('vsse_nav');

/* who */
const constwhoprev = "prev"
const constwhonext = "next"

var arrywhopic = ['who1.jpg', 'who2.jpg', 'who3.jpg', 'who4.jpg'];
var arrywhodesc = ['Golden Bond', 'Saint Bond', 'Steely Bond', 'Kungfu Bond'];
var arrywhotrans = [
    ['left 1000ms, top 500ms, width 2000ms, opacity 1000ms'],
    ['left 500ms, top 1000ms, width 2000ms, opacity 1000ms']]
/* array elements: left, top, width */
var arrywhopos = [
    ["30%", "80%", "30%"],
    ["0%", "50%", "15%"],
    ["50%", "0", "15%"],
    ["80%", "50%", "15%"]
]

var whoboximg = document.getElementsByClassName("vsse_bodyweareimg2");
var currwhoimgidx = 0;
var whoimgbtn = document.getElementsByClassName("vsse_bodyweareselbtn");
var whoselected = document.getElementById("vsse_bodyweareselected");
var whoimgselecteddesc = document.getElementById("vsse_bodyweareselecteddesc");
// var whonext = document.getElementById("vsse_bodyweareselimgnext");






/* we do */
var wedothen = document.getElementsByClassName('vsse_bodywedothen');

var wedostudythen = document.getElementById('vsse_bodywedostudythen');
var wedosolutionthen = document.getElementById('vsse_bodywedosolutionsthen');
var wedobridgethen = document.getElementById('vsse_bodywedobridgethen');

var wedovision = document.getElementById('vsse_bodywedosolutionstext');
var wedobridge = document.getElementById('vsse_bodywedosbridgetext');
var wedoimplementation = document.getElementById('vsse_bodywedoimplementationtext');

var wedovisionsvg = document.getElementById('vsse_bodywedosvg_solutions');
var wedobridgesvg = document.getElementById('vsse_bodywedosvg_bridge');
var wedoimplementationsvg = document.getElementById('vsse_bodywedosvg_implementation');

var wedoimpact = document.getElementsByClassName('vsse_bodywedoimpact');





/* we did */
var didimgslide = document.getElementById('vsse_bodywedidimgslide')
var didimgslidetext = document.getElementById('vsse_bodywedidimgslidetext')

var didimgidx = 0
var arrydidimg = [
    ['did1.png', 'V-Accounting-System'],
    ['did2.png', 'Object-Oriented Navigation'],
    ['did3.png', 'Object-Oriented Navigation'],
    ['did4.png', 'Drill-Down Tracing'],
    ['did5.png', 'Multi-Level Analysis']
]


/* we sell */
var arryproductcat = ['Watch', 'Shoe', 'Your Products'];
var arryproductpic1 = ['watch1.jpg', 'watch2.jpg', 'watch3.jpg', 'watch4.jpg', 'watch5.jpg', 'watch6.jpg', 'watch7.jpg', 'watch8.jpg', 'watch9.jpg'];
var arryproductpic2 = ['Shoe1.jpg', 'Shoe2.jpg', 'Shoe3.jpg', 'Shoe4.jpg', 'Shoe5.jpg', 'Shoe6.jpg', 'Shoe7.jpg', 'Shoe8.jpg', 'Shoe9.jpg'];
var arryproductpicyour = ['yourproduct.jpg', 'yourproduct.jpg', 'yourproduct.jpg', 'yourproduct.jpg', 'yourproduct.jpg', 'yourproduct.jpg', 'yourproduct.jpg', 'yourproduct.jpg', 'yourproduct.jpg']

var productcat = document.getElementById("vsse_bodywesellcatitem");
var vssebodygrid = document.getElementById("vsse_bodygrid");




/* where */
var imgleft = 0;
var sliderimg = document.getElementById("vsse_bodywheresliderimg");
var imgwherebtnprev = document.getElementById("vsse_bodywherebtnprev");
var imgwherebtnnext = document.getElementById("vsse_bodywherebtnnext");






/* initial load */

/* we do */




/* we sell */

/* add product categories to menu */
for (var i = 0; i < arryproductcat.length; i++) {
    productcat.innerHTML += '<li id="' + arryproductcat[i] + '">' + arryproductcat[i] + '</li>';
}


/* load sample products into product grid */
load_product(arryproductpicyour);


// testclick.addEventListener("click", testclick());










/* event management */
/* add event listener to item category AFTER adding all the items (cannot add at the same time of adding innertHTML!) */

vssebody.onscroll = function () {
    alert('scrolled');
    vssenav.style.display = 'none';
}


/* who */
for (var i = 0; i < whoimgbtn.length; i++) {
    whoimgbtn[i].addEventListener('click', rotate_who);
}


/* do */
for (var i = 0; i < wedothen.length; i++) {
    wedothen[i].addEventListener('click', wedothenemerge);
}

/* did */
didimgslide.onclick = function () {
    didimgslide.style.opacity = '0';
    didimgslidetext.style.opacity = '0';
    didimgidx += 1;
    if (didimgidx > 4) {
        didimgidx = 0;
    }
    // didimgslide.style.opacity='0';
    setTimeout(function () {
        didimgslide.src = arrydidimg[didimgidx][0];
        didimgslidetext.innerHTML = arrydidimg[didimgidx][1];
        didimgslide.style.opacity = '1';
        didimgslidetext.style.opacity = '1';
    }, 250)

    // didimgslide.style.opacity='1';
    // previdx=didimgidx;
    // didimgidx+=1;
    // if(didimgidx>5){
    //     didimgidx=1
    // }
    // didimgslide.children(didimgidx-1).style.opacity='0';
    // didimgslide.children(didimgidx-1).style.opacity='1';
    // didimgslide.children(didimgidx).style.left='100px';
}

/* product */
for (var i = 0; i < arryproductcat.length; i++) {
    document.getElementById(arryproductcat[i]).addEventListener('click', productcat_click);
}


/* where */
imgwherebtnprev.onclick = function () {
    imgleft -= 50;
    sliderimg.style.left = imgleft.toString() + '%';
    if (imgleft == -100) {
        imgleft = 50;
    }
}

imgwherebtnnext.onclick = function () {
    imgleft += 50;
    sliderimg.style.left = imgleft.toString() + '%';
    if (imgleft == 50) {
        imgleft = -150;
    }
}
















/* function declarations */

/* who */
// function whoselected_click() {
//     switch (this.dataset.dir) {
//         case 'prev':
//             load_who(-1);
//             break;
//         case 'next':
//             load_who(1);
//             break;
//         default:
//             load_who(1);
//             break;
//     }
// }

function load_who(idxcounter) {
    currwhoimgidx += idxcounter;
    if (currwhoimgidx > arrywhopic.length - 1) {
        currwhoimgidx = 0;
    } else if (currwhoimgidx < 0) {
        currwhoimgidx = arrywhopic.length - 1;
    }
    idx = currwhoimgidx;
    for (var i = 0; i < whoboximg.length; i++) {
        if (idx > arrywhopic.length - 1) {
            idx = 0;
        } else if (idx < 0) {
            idx = arrywhopic.length - 1;
        }
        whoboximg[i].src = arrywhopic[idx];
        idx += 1;
    }
    whoimgselected.src = arrywhopic[currwhoimgidx];
    whoimgselecteddesc.innerHTML = arrywhodesc[currwhoimgidx];
}


function rotate_who() {

    switch (this.dataset.dir) {
        case 'prev':
            idxcounter = -1;
            break;
        case 'next':
            idxcounter = 1;
            break;
        default:
            break;
    }
 
    currwhoimgidx += idxcounter;
    if (currwhoimgidx > arrywhopic.length - 1) {
        currwhoimgidx = 0;
    } else if (currwhoimgidx < 0) {
        currwhoimgidx = arrywhopic.length - 1;
    }
    idx = currwhoimgidx;

    for (var i = 0; i < whoboximg.length; i++) {
        if (idx > whoboximg.length - 1) {
            idx = 0;

        } else if (idx < 0) {
            idx = whoboximg.length - 1;
        }

        if (idxcounter > 0) {
            switch (i) {
                case 0:
                case 1:
                    whoboximg[idx].style.transition = arrywhotrans[1];
                    break;
                case 2:
                case 3:
                    whoboximg[idx].style.transition = arrywhotrans[0];
                    break;
                default:
                    break;
            }
        } else if (idxcounter < 0) {
            switch (i) {
                case 1:
                case 2:
                    whoboximg[idx].style.transition = arrywhotrans[0];
                    break;
                case 0:
                case 3:
                    whoboximg[idx].style.transition = arrywhotrans[1];
                    break;
                default:
                    break;
            }
        }


        whoboximg[idx].style.left = arrywhopos[i][0];
        whoboximg[idx].style.top = arrywhopos[i][1];
        whoboximg[idx].style.width = arrywhopos[i][2];
        // whoboximg[idx].style.opacity = arrywhopos[i][3];



        idx += 1;
    }
    whoimgselecteddesc.innerHTML = arrywhodesc[currwhoimgidx];
}







/* we do */

function playactionwords() {
    /* we do */
    /* action words */
    for (var i = 0; i < wedoimpact.length; i++) {
        switch (i) {
            case 0:
                wedoimpact[i].style.animation = 'pump 2s infinite';
                break;
            case 1:
                wedoimpact[i].style.animation = 'vibrate 2s infinite';
                break;
            case 2:
                wedoimpact[i].style.animation = 'keeprotate 2s infinite';
                break;
            case 3:
                wedoimpact[i].style.animation = 'move 2s infinite';
                break;
            default:
                break;
        }
    }
}

function wedothenemerge() {
    switch (this.dataset.wedo) {
        case 'study':
            wedovision.style.opacity = '1';
            wedovisionsvg.style.opacity = '1';
            wedosolutionthen.style.display = 'block';
            break;
        case 'vision':
            wedobridge.style.opacity = '1';
            wedobridgesvg.style.opacity = '1';
            wedobridgethen.style.display = 'block';
            break;
        case 'bridge':
            wedoimplementation.style.opacity = '1';
            wedoimplementationsvg.style.opacity = '1';
            playactionwords();
            break;
        default:
            break;
    }
}







/* we sell */
function load_product(imgsrc) {
    for (var i = 1; i < 10; i++) {
        vssebodygrid.children[i - 1].innerHTML = '<a href="home.html"> <figure> <img src="' + imgsrc[i - 1] + '" alt="Your Product"> <figcaption>This is just a sample using "figure" and "figurecaption" </figcaption> </figure></a>';
    }

}

function productcat_click() {
    switch (this.innerHTML) {
        case arryproductcat[0]:
            load_product(arryproductpic1);
            break;
        case arryproductcat[1]:
            load_product(arryproductpic2);
            break;
        default:
            load_product(arryproductpicyour);
            break;
    }
}

// function slider_previmg(){
//     sliderimg.style.animation = "slider 2000ms";
//     if (sliderimg.style.left = "-100%"){
//         sliderimg.style.left = "-200%"
//     }else{
//         sliderimg.style.left = "-100%"
//     }
//     sliderimg.style.animation="none";

/*sliderimg.style.transform = "translate(-100px)";
if (sliderimg.style.left = "-100%"){
    sliderimg.style.left = "-200%"
}else{
    sliderimg.style.left = "-100%"
}*/

/*sliderimg.style.transition-delay = "500ms";*/
// }

/*
function navitem_click() {
    switch (this.innerHTML) {
        case "What We Do":
            vssebody.style.gridTemplateAreas = gridother;
            break;
        case "What We Did":
            vssebody.style.gridTemplateAreas = gridother;
            break;
        case "What We Sell":
            vssebody.style.gridTemplateAreas = gridproduct;
            break;
        default:
            break;
    }
}
*/


/* load product category to nav item */
/*navproductcat.innerHTML*/

/*try {
    for (var i = 1; i < 10; i++) {
        vssebodygrid.children[i - 1].innerHTML = '<a href="home.html"> <figure> <img src="' + arryproductpic1[i - 1] + '" alt="smart watch" title="garmin' + i + '"> <figcaption>This is just a sample using "figure" and "figurecaption" </figcaption> </figure></a>';
    }
}
catch (e) {
    alert(e);
}

function load_products() {

}
*/

