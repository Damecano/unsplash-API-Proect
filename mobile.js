let isOpen = false;

function open_menu() {
    if (isOpen == false) {
        document.querySelector('.menu_drop').style.display = "block";
        document.querySelector('.menu_drop').style.animationName = "menu_open";
        document.querySelector('.menu_drop').style.top = "80px";
        isOpen = true
    } else {
        document.querySelector('.menu_drop').style.animationName = "menu_close";
        document.querySelector('.menu_drop').style.top = "-180px";
        isOpen = false
    }
}