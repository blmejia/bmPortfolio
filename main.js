//////////////////////tabs/////////////////////////////

function openTab(evt, tabName){
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");

    for( i=0; i<x.length; i++){
        x[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab");
    for(i=0; i< x.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
}
//////////////////////MODAL/////////////////////////////////
    const openButton = document.querySelector("#btn");
    const modal = document.querySelector('.modal');
    const bg = document.querySelector(".modal-background");
    const closeLabel = document.querySelector("#closeM");

    btn.addEventListener("click", () => {

        modal.classList.add("is-active");

    })
    bg.addEventListener('click', () => {
        modal.classList.remove('is-active');
    })

    closeLabel.addEventListener('click', () => {
        modal.classList.remove('is-active');
    })