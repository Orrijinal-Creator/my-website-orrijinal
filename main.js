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
