const accordion = document.getElementsByClassName('accordion');
const accordion_desc = document.getElementsByClassName('accordion_desc');
const memeImg = document.getElementsByClassName('meme_img');
const plus = document.getElementsByClassName('fa-plus');
const memeImgDiv = document.getElementsByClassName('accordion_img');


for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        let current2 = document.getElementsByClassName("show");
        current2[0].className = current2[0].className.replace(" show", "");
        accordion[i].children[1].classList.add('show')
    })
}


