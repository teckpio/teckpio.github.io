const navdiffitem = document.getElementsByClassName('navdiffitem');
const illustwrite = document.getElementById('illust_writeup');
const illustimg = document.getElementById('illust_imgcont');



for (var i = 0; i < navdiffitem.length; i++) {
    navdiffitem[i].addEventListener('click', navdiffitemclick);
}

function navdiffitemclick() {
    switch (this.dataset.type) {
        case 'rc':

            break;
        case 'cc':
            illustimg.innerHTML='<img src="did6.png" alt="screen image"></img>';
            break;
        case 'dd':

            break;
        case 'lvl':
            const strli2 = '<li class="lvlitem" data-type="';
            illustwrite.innerHTML =
                '<ul>' +
                strli2 + 'Account">Chart of Account</li>' +
                strli2 + 'GeoLocation">Geographical Location</li>' +
                strli2 + 'EntityHandler">Entity Handler</li>' +
                strli2 + 'EntityGroup">Entity Group</li>' +
                strli2 + 'ItemGroup">Item Group</li>' +
                strli2 + 'TransGroup">Transaction Group</li>' +
                strli2 + 'TransGroupX">Transaction Group Link</li>' +
                strli2 + 'Tag">Operation Tags</li>' +
                strli2 + 'Warehouse">Warehouse Location</li>' +
                strli2 + 'Term">Payment Term</li>' +
                '</ul>';
            const lvlitem = document.getElementsByClassName('lvlitem');
            for (var i = 0; i < lvlitem.length; i++) {
                lvlitem[i].addEventListener('click', lvlitemclick);
            }
            // illustimg.style.display='none';

            break;
        case 'ud':
            const strli = '<li class="uditem" data-type="';
            illustwrite.innerHTML =
                '<ul>' +
                strli + 'color">Color, Font, Layout</li>' +
                strli + 'menu">Main Menu</li>' +
                strli + 'control">Transaction Controls</li>' +
                strli + 'access">User Access Control</li>' +
                strli + 'report">Report Builder</li>' +
                strli + 'work">Work Flow</li>' +
                '</ul>';
            const uditem = document.getElementsByClassName('uditem');
            for (var i = 0; i < uditem.length; i++) {
                uditem[i].addEventListener('click', uditemclick);
            }
            // illustimg.style.display='none';
            break;
        default:
            break;
    }
}

function lvlitemclick(){

}

function uditemclick() {
    switch (this.dataset.type) {
        case 'color':

            break;
        case 'menu':

            break;
        case 'control':

            break; case 'access':

            break; case 'report':

            break;
        case 'work':

            break
        default:
            break;
    }
}