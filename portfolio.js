//
// Sticky Nav
//

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("stickyhead").classList.add("stickyness");
    } else {
        document.getElementById("stickyhead").classList.remove("stickyness");
    }
};

//
// Modal
//

var modal = document.getElementById("modal");
var modalImage = document.getElementById("modalimage");
var slides = document.getElementsByClassName("slides");

var enlarge = function(image){
     modal.style.display = "block";
     modalImage.src = image.src;
};

for (var i=0; i<slides.length; i++){
     slides[i].onclick = function(){
          enlarge(this);
     }
};

modal.onclick = function() { modal.style.display = "none"; }

//
// Form Validation
//

var fname = document.getElementById("fname");
var email = document.getElementById("email");
var message = document.getElementById("message");

fname.onblur= function(){
     if(fname.value.match(/^[A-Za-z]+$/)){
          return true
     } else{
          alert("Please enter a valid name")
          return false
     };
};

email.onblur= function(){
     var aloc = email.value.indexOf("@");
     var ploc = email.value.lastIndexOf(".");
     if(aloc<1 || ploc<aloc+2 || ploc+2>=x.length){
          alert("Please enter a valid email")
          return false
     } else{
          return true
     };
};

message.onblur = function(){
     if(message.value.length > 500){
          alert("Please limit message < 500");
          return false
     } else{
          return true
     };
};
