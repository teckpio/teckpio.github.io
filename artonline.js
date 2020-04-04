const TransitionPeriod = 700;
const TransitionPeriodStr = ".7s";

const ClassMenuBarItem = "MenuBarItem";

const DivScreenCover=document.getElementById("ScreenCover");
const DivMenuBar = document.getElementById("MenuBar");
const DivContentLeftMenuContent = document.getElementById("SideMenuBarLeftContent");
const DivContentDisplay = document.getElementById("ContentDisplay");
const DivContentRightMenu = document.getElementById("SideMenuBarRight");
const DivContentNavLeft = document.getElementById("ContentNavLeft");
const DivContentNavDesc = document.getElementById("ContentNavDesc");
const DivContentNavRight = document.getElementById("ContentNavRight");


const ArryIndexMenuDesc = 0;
const ArryIndexMenuImg = 1;
const ArryIndexMenuClicked = 2;
const ArryIndexMenuSubMenu = 3;

const ArryMainMenu = [
    ["Chinese Painting / 中国画", "img.jpg", MainMenuClicked, []],
    ["Antique / 古董", "img.jpg", MainMenuClicked, []]
]

const ArryIndexItemName = 0;
const ArryIndexItemImg = 1;
const ArryIndexItemIntro = 2;
const ArryItem = [
    ["山明水秀", "painting1.jfif", "中国画，简称“国画”。是我国传统造型艺术之一，也是一门典型的精英艺术 [1]  。从美术史的角度讲，民国前的都统称为古画。国画在古代无确定名称，一般称之为丹青，在世界美术领域中自成体系。中国画在内容和艺术创作上，体现了古人对自然、社会及与之相关联的政治、哲学、宗教、道德、文艺等方面的认识。主要是用毛笔、软笔或手指，用国画颜色和墨在帛或宣纸上作画的一种中国传统的绘画形式，是琴棋书画四艺之一"],
    ["鸟语话香", "painting2.jfif", "我国制笔的历史十分悠久，在湖南长沙战国墓中发现了现存最早的毛笔，称为“楚笔”，适于在竹、木简上书写。秦并六国后，制笔工艺得到发展，西汉司马迁《史记》中有秦将蒙恬“取山中毫造笔” 的记载。魏晋时期韦诞《笔经》中记载用鼠、兔、鹿、羊等各种动物纤维改进的兼毫笔。唐代流行紫毫笔，以硬毫锐锋为上，以安徽宣城的宣笔而负盛名。到宋代，由于高坐具的普及，书写方式的改变，出现硬软毫参差组合的“无心散卓笔”和纯羊毫笔。元代出现长锋羊毫，以湖州为中心的羊毫制笔则开始日益兴隆。之后历朝历代无不对毛笔进行创新和发展，出现多达几百种各样的毛笔品类。"],
    ["万马奔腾", "painting3.jfif", "中国的造纸术是“四大发明”之一，对世界文明都有重大的贡献。早期，中国人是在帛简上进行书写，东汉蔡伦改进了造纸术，使得自汉至魏晋，纸逐步代替简成为主要书写材料。但唐宋之前，中国画大部分还是画在丝织品的绢帛上，还有的画在布上。画在纸上虽未普及，但已有所使用，唐代韩滉的《五牛图》（图1-5）所传为中国较早的一幅纸本，米芾《画史》和汤img7《画鉴》都记载五代南唐的徐熙用澄心堂纸画花鸟画。为了适应书法、绘画的需要，唐纸明确地区分为生纸与熟纸。元代，纸开始在中国画上大量普及使用，元人主要用的是生纸。明代画家多用半生半熟的皮纸、笺纸。宣纸的使用始于清代，由于宣纸质地绵韧，纹理美观，经久不坏，易发墨彩，善于表现笔墨的浓淡润湿，古代诗人誊为：“滑如春冰密如茧”，故皖南宣纸成为之后绘画者的专用纸"]
]

var CurrItemIndex = 0;

// initial loading
liftScreenCover();
populatemainmenu();
SlideinList();
loadItem(ArryItem[CurrItemIndex]);

DivContentNavLeft.onclick = () => {
    loadItem(ArryItem[getCurrItemIndex(-1)]);
}

DivContentNavRight.onclick = () => {
    loadItem(ArryItem[getCurrItemIndex(1)]);
}



function liftScreenCover(){
    setTimeout(()=>{
        DivScreenCover.style.opacity=".7";
        setTimeout(()=>{
            DivScreenCover.style.opacity=".2";
            setTimeout(()=>{
                DivScreenCover.style.opacity="0";
                DivScreenCover.style.display="none";
            },TransitionPeriod)
        },TransitionPeriod)
    },1000)
}


function getCurrItemIndex(dir) {

    CurrItemIndex += dir;

    if (CurrItemIndex == 3) {
        CurrItemIndex = 0;
    } else if (CurrItemIndex == -1) {
        CurrItemIndex = 2;
    }
    return CurrItemIndex;
}


function SlideinList() {
    setTimeout(() => {
        DivContentLeftMenuContent.style.marginLeft = "0";
    }, TransitionPeriod);
    ResetContentDisplay();
}

function ResetContentDisplay(){
    // DivContentDisplay.style.opacity="0";
    DivContentNavDesc.style.opacity="0";

    // setTimeout(()=>{
    //     DivContentDisplay.innerHTML="";
    //     let img = document.createElement("img");
    //     img.src = "logo.jfif";
    //     img.style.width="100%";
    //     img.style.height="auto";
    //     DivContentDisplay.appendChild(img);
    //     DivContentDisplay.style.opacity="1";

    //     DivContentNavDesc.innerHTML="...";
    //     DivContentNavDesc.style.opacity="1";
    // },TransitionPeriod)    
}

function SlideoutList() {
    setTimeout(() => {
        DivContentLeftMenuContent.style.marginLeft = "-100%";
    }, TransitionPeriod);

}


function populatemainmenu() {
    ArryMainMenu.forEach(mainmenu => {
        let divmenuitem = document.createElement("div");
        divmenuitem.innerHTML = mainmenu[ArryIndexMenuDesc];
        divmenuitem.id = mainmenu[ArryIndexMenuDesc];
        divmenuitem.classList.add(ClassMenuBarItem);
        divmenuitem.onclick = mainmenu[ArryIndexMenuClicked];

        DivMenuBar.appendChild(divmenuitem);
    })
}

function MainMenuClicked() {
    DivContentDisplay.firstChild.style.transition=TransitionPeriodStr;
    DivContentDisplay.firstChild.style.opacity="0";
    DivContentRightMenu.innerHTML = "";

    SlideoutList();
    setTimeout(() => {
        SlideinList();

        DivContentDisplay.innerHTML="";
        let img = document.createElement("img");
        img.src = "logo.jfif";
        img.style.width="100%";
        img.style.height="auto";
        DivContentDisplay.appendChild(img);
        DivContentDisplay.firstChild.style.transition=TransitionPeriodStr;
        DivContentDisplay.firstChild.style.opacity="1";
        
        DivContentNavDesc.innerHTML="...";
        DivContentNavDesc.style.opacity="1";
    }, TransitionPeriod)
}



function HideContentDisplay(div) {
    div.style.boxShadow = "none";
    for (var i = 0; i < div.childElementCount; i++) {
        div.children[i].style.opacity = "0";
    }
}

function ShowContentDisplay(div) {
    div.style.boxShadow = "0px 0px 2px 2px rgba(200,200,200,1)";
    for (var i = 0; i < div.childElementCount; i++) {
        div.children[i].style.opacity = "1";
    }
}

function PushUpContentIntro(div) {
    for (var i = 0; i < div.childElementCount; i++) {
        div.children[i].style.marginTop = "-200%";
        div.children[i].style.opacity = "0";
    }
}

function PullDownContentIntro(div) {
    for (var i = 0; i < div.childElementCount; i++) {
        div.children[i].style.marginTop = "1%";
        div.children[i].style.opacity = "1";
    }
}

function loadItem(item) {

    HideContentDisplay(DivContentDisplay);

    PushUpContentIntro(DivContentRightMenu);

    setTimeout(() => {

        // display image //
        DivContentDisplay.innerHTML = "";        

        let divimg = document.createElement('div');
        divimg.style.width = "95%";
        divimg.style.height = "100%";
        divimg.style.transition = "all " + TransitionPeriodStr;
        divimg.style.borderBottom = "1px solid lightgray";
        divimg.style.margin = "1% auto";
        divimg.style.opacity = "0";
        divimg.style.boxShadow = "none";

        let img = document.createElement("img");
        img.src = item[ArryIndexItemImg];
        img.style.width = "100%";
        img.style.height = "auto";
        img.style.margin = "1% auto";
        // img.style.border="1px solid black";

        divimg.appendChild(img);

        DivContentDisplay.appendChild(divimg);

        setTimeout(() => {
            ShowContentDisplay(DivContentDisplay);
        }, TransitionPeriod)


        // display name //
        DivContentNavDesc.style.opacity = "0";
        setTimeout(() => {
            DivContentNavDesc.innerHTML="";
            DivContentNavDesc.innerHTML=item[ArryIndexItemName];
            DivContentNavDesc.style.opacity="1";
        }, TransitionPeriod)


        // load intro //
        let divdesc = document.createElement("div");
        divdesc.style.transition = "all " + TransitionPeriodStr;
        divdesc.style.transitionTimingFunction = "ease";
        divdesc.style.marginTop = "-100%";
        divdesc.style.padding = "1%";
        divdesc.style.opacity="0";
        divdesc.innerHTML = item[ArryIndexItemIntro];

        DivContentRightMenu.innerHTML = "";
        DivContentRightMenu.appendChild(divdesc);

        
        setTimeout(() => {
            PullDownContentIntro(DivContentRightMenu);
        }, TransitionPeriod)

    }, TransitionPeriod);
}



function MenuPaintingClicked() {

}