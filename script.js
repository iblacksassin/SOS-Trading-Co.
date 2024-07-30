let slides = document.querySelectorAll('.reviews .flex .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

let copy = (textId) => {
    document.getElementById(textId).select();

    document.execCommand("copy");
}

//popup withdraw/.
document.getElementById("open-popup-btn1").addEventListener("click",function(){
    document.getElementsByClassName("pop-on")[0].classList.add("active");
});
