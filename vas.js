var navitem = document.getElementsByClassName('navdiffitem');




for (var i =0; i < navitem.length-1; i++){
    navitem[i].addEventListener('click', navitemclick);
}

function navitemclick(){
    switch(this.dataset.type){
        case 'rc':
            alert("rc");
            break;
        case 'cc':
            alert('cc');
            break;
        default:
            break
    }
}