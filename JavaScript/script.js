
document.getElementById('button-close').addEventListener('click', () => {
    document.getElementById('sideBar').style.display = 'none'
})

let gallery = document.querySelector("#gallery").children;
let bPrev = document.querySelector("#prev");
let bNext = document.querySelector("#next");

gallery[0].style.display = "block";

let i = 0;

bPrev.onclick = function () {
    gallery[i].style.display = "none";
    if (i == 0) {
        i = gallery.length;
    }
    gallery[--i].style.display = "block";
};

bNext.onclick = function () {
    gallery[i].style.display = "none";
    if (i == gallery.length - 1) {
        i = -1;
    }
    gallery[++i].style.display = "block";
};