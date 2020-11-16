const episodesSections = [document.getElementById("season-1"), document.getElementById("season-2"), document.getElementById("season-3"), document.getElementById("season-4"), document.getElementById("season-5"), document.getElementById("season-6"), document.getElementById("season-7"), document.getElementById("season-8"), document.getElementById("season-9"), document.getElementById("season-10"), document.getElementById("season-11"), document.getElementById("season-12")];
const episodesButtons = document.getElementsByClassName("sidebar")[0].children;
const aTags = [episodesButtons[0].children[0].children[0], episodesButtons[0].children[1].children[0], episodesButtons[0].children[2].children[0], episodesButtons[0].children[3].children[0], episodesButtons[0].children[4].children[0], episodesButtons[0].children[5].children[0], episodesButtons[0].children[6].children[0], episodesButtons[0].children[7].children[0], episodesButtons[0].children[8].children[0], episodesButtons[0].children[9].children[0], episodesButtons[0].children[10].children[0], episodesButtons[0].children[11].children[0]];

// Season 1
episodesButtons[0].children[0].onclick = function() {
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[0].style.display = "block";
    aTags[0].classList.add("active");
}

// Season 2
episodesButtons[0].children[1].onclick = function() {
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[1].style.display = "block";
    aTags[1].classList.add("active");
}

// Season 3
episodesButtons[0].children[2].onclick = function() {
    const z = 2;
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[z].style.display = "block";
    aTags[z].classList.add("active");
}

// Season 4
episodesButtons[0].children[3].onclick = function() {
    const z = 3;
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[z].style.display = "block";
    aTags[z].classList.add("active");
}

// Season 5
episodesButtons[0].children[4].onclick = function() {
    const z = 4;
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[z].style.display = "block";
    aTags[z].classList.add("active");
}

// Season 6
episodesButtons[0].children[5].onclick = function() {
    const z = 5;
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[z].style.display = "block";
    aTags[z].classList.add("active");
}

// Season 7
episodesButtons[0].children[6].onclick = function() {
    const z = 6;
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[z].style.display = "block";
    aTags[z].classList.add("active");
}

// Season 8
episodesButtons[0].children[7].onclick = function() {
    const z = 7;
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[z].style.display = "block";
    aTags[z].classList.add("active");
}

// Season 9
episodesButtons[0].children[8].onclick = function() {
    const z = 8;
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[z].style.display = "block";
    aTags[z].classList.add("active");
}

// Season 10
episodesButtons[0].children[9].onclick = function() {
    const z = 9;
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[z].style.display = "block";
    aTags[z].classList.add("active");
}

// Season 11
episodesButtons[0].children[10].onclick = function() {
    const z = 10;
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[z].style.display = "block";
    aTags[z].classList.add("active");
}

// Season 12
episodesButtons[0].children[11].onclick = function() {
    const z = 11;
    for(let i = 0; i < episodesSections.length; i ++) {
        episodesSections[i].style.display = "none";
    }
    for(let j = 0; j < aTags.length; j++) {
        aTags[j].classList.remove("active");
    }
    episodesSections[z].style.display = "block";
    aTags[z].classList.add("active");
}

function leesMeer(e) {
    if(e.parentNode.parentNode.classList[1] == "closed") {
        e.innerHTML = "Minder";
        e.parentNode.parentNode.classList.remove("closed");
        e.parentNode.parentNode.classList.add("open");
    } else if(e.parentNode.parentNode.classList[1] == "open") {
        e.innerHTML = "Lees meer";
        e.parentNode.parentNode.classList.remove("open");
        e.parentNode.parentNode.classList.add("closed");
    } else {
        console.log("default");
    }
}