const modal = document.getElementsByClassName("navigation-mobile-menu")[0];
const button = document.getElementById("navigation-mobile-button");
const icon = document.getElementsByClassName("nav-icon")[0];

button.onclick = function() {
    if(modal.classList[1] == "open") {
        button.classList.remove("close");
        button.classList.add("open");
        modal.classList.remove("open");
        modal.classList.add("close");
    } else {
        button.classList.remove("open");
        button.classList.add("close");
        modal.classList.remove("close");
        modal.classList.add("open");
    }
}

function verhaalButton() {
    button.classList.remove("close");
    button.classList.add("open");
    modal.classList.remove("open");
    modal.classList.add("close");
}