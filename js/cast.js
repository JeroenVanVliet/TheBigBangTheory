const cast = document.getElementsByClassName("cards-wrapper")[0].children;
const cards = [cast[0], cast[1], cast[2], cast[3], cast[4], cast[5], cast[6]];

function leesMeerCast(e) {

    if(cards[e].children[1].children[3].innerHTML == "Lees meer") {
        for(i in cards) {
            cards[i].classList.remove("open");
            cards[i].classList.add("closed");
        }
        cards[e].classList.remove("closed");
        cards[e].classList.add("open");
        cards[e].children[1].children[3].innerHTML = "Minder"
    } else {
        for(i in cards) {
            cards[i].classList.remove("open");
            cards[i].classList.add("closed");
        }
        cards[e].children[1].children[3].innerHTML = "Lees meer";
    }
}