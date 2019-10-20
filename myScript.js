var slideIndex = 1;

function changeSlides(n){
    showSlides(slideIndex+=n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slides");
    
    if(n>slides.length){slideIndex=1}
    if(n<1){slideIndex=slides.length}
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="block";
}

function showModal1(){
    var m1= document.getElementById("modal1");
    m1.style.display="block";
}

function closeModal1(){
    var m1= document.getElementById("modal1");
    m1.style.display="none";
}

function showModal2(){
    var m2= document.getElementById("modal2");
    m2.style.display="block";
}

function closeModal2(){
    var m2= document.getElementById("modal2");
    m2.style.display="none";
}

function showModal3(){
    var m3= document.getElementById("modal3");
    m3.style.display="block";
}

function closeModal3(){
    var m3= document.getElementById("modal3");
    m3.style.display="none";
}