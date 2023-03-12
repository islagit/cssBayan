const accordion = document.getElementsByClassName('accordion');
const accordion_desc = document.getElementsByClassName('accordion_desc');
const memeImg = document.getElementsByClassName('meme_img');
const plus = document.getElementsByClassName('fa-plus');
const memeImgDiv = document.getElementsByClassName('accordion_img');


// for (let i = 0; i < accordion.length; i++) {
//     $(accordion[i]).hover(function () {
//         if ($(accordion[i]).hasClass('active')) {
//             $(memeImg[i]).addClass('show');
//             $(plus[i]).addClass('rotate');
//         }
//         else {
//             $(memeImg[i]).addClass('show');
//             $(plus[i]).removeClass('rotate');
//         }
//     })
// }

// for (let i = 0; i < accordion.length; i++) {
//     $(accordion[i]).hover(function () {
//         let current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";

//         let current2 = document.getElementsByClassName("show");
//         current2[0].className = current2[0].className.replace(" show", "");
//         $(accordion[i]).children(".meme_img").addClass("show");
//     })
// }


for (let i = 0; i < accordion.length; i++) {
    $(accordion[i]).click(function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        let current2 = document.getElementsByClassName("show");
        current2[0].className = current2[0].className.replace(" show", "");
        $(accordion[i]).children(".meme_img").addClass("show");
    })
}

