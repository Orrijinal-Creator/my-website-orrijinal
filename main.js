function openModal(){
document.getElementById("socialModal").style.display="flex";
}

function closeModal(){
document.getElementById("socialModal").style.display="none";
}

function sendMessage(event){
event.preventDefault();
alert("Message sent successfully!");
}

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index){

slides.forEach(slide => slide.classList.remove("active"));

slideIndex = (index + slides.length) % slides.length;

slides[slideIndex].classList.add("active");

}

function changeSlide(direction){

showSlide(slideIndex + direction);

}

/* AUTO SLIDESHOW */

setInterval(()=>{
changeSlide(1);
},4000);
