var button=document.querySelectorAll(".drum")

document.addEventListener("keydown",function(event){

var key=event.key.toLowerCase();

     switch (key) {
          case "a":new Audio("crash-cymbal audio.mp3").play();
          break;
               
          case "b":new Audio("ride-cymbal audio.mp3").play();
          break;

          case "c":new Audio("snare-drum audio.mp3").play();
          break;

          case "d":new Audio("floor tom audio.mp3").play();
          break;

          case "e":new Audio("bass drum audio.mp3").play();
          break;          
     }


})


for(i=0;i<button.length;i++){

     button[0].addEventListener("click",function(){
       var audio0 = new Audio("crash-cymbal audio.mp3");
       audio0.play();

     })


      button[1].addEventListener("click",function(){
       var audio1 = new Audio("ride-cymbal audio.mp3");
       audio1.play();
     })
 

     button[2].addEventListener("click",function(){
     var audio2 = new Audio("snare-drum audio.mp3");
     audio2.play();
     })


     button[3].addEventListener("click",function(){
     var audio3 = new Audio("floor tom audio.mp3");
     audio3.play();
     })


     
     button[4].addEventListener("click",function(){
     var audio4 = new Audio("bass drum audio.mp3");
     audio4.play();
     
     }) 
 
}
 
document.addEventListener("DOMContentLoaded", function () {

  // ✅ Get elements
  var howtoplaybutton = document.querySelector(".li-first-back"); // get single element
  var contactbutton = document.querySelector(".li-third");
  var playpopupdiv = document.getElementById("popupdiv");
  var contactpopupdiv = document.querySelector(".contact-div-cont");

  // ✅ Function to hide both popups
  function hide() {
    playpopupdiv.style.display = "none";
    contactpopupdiv.style.display = "none";
  }

  // ✅ How to Play Button Click
  howtoplaybutton.addEventListener("click", function (e) {
    e.preventDefault(); // prevent link default
    const isOpen = playpopupdiv.style.display === "flex";
    hide(); // hide all
    if (!isOpen) playpopupdiv.style.display = "flex"; // only open if hidden
  });

  // ✅ Contact Button Click
  contactbutton.addEventListener("click", function (e) {
    e.preventDefault();
    const isOpen = contactpopupdiv.style.display === "block";
    hide();
    if (!isOpen) contactpopupdiv.style.display = "block";
  });

  // ✅ Hide popup when clicked outside nav-bar
  document.addEventListener("click", function (event) {
    // check if the clicked element is outside nav-bar
    if (!event.target.closest(".nav-bar")) {
      hide();
    }
  });
});
