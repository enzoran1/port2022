document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
    // Your code to run since DOM is loaded and ready
    });










    TweenLite.set(".cardWrapper", {perspective:800});
TweenLite.set(".cardcus", {transformStyle:"preserve-3d"});
TweenLite.set(".back", {rotationY:-180});
TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});

$(".cardWrapper").hover(
  function() {
    TweenLite.to($(this).find(".cardcus"), 1.4, {rotationY:180, ease:Back.easeOut});
  },
  function() {
    TweenLite.to($(this).find(".cardcus"), 1.4, {rotationY:0, ease:Back.easeOut});
  }
);

TweenMax.staggerTo($(".cardcus"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);



Draggable.create(".box", {
    bounds:"#demo",
    type:"x, y"
    }
)




// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}





// $('button').click(function(){
//    $('button').toggleClass('active');
//    $('.title').toggleClass('active');
//    $('nav').toggleClass('active');
//  });

$('.btn-test1').click(function(){
  $('.btn-test1').toggleClass('active1');
  $('.title1').toggleClass('active1');
  $('.nav-test1').toggleClass('active1');
});

 $('.btn-test').click(function(){
  $('.btn-test').toggleClass('active2');
  $('.title2').toggleClass('active2');
  $('.nav-test').toggleClass('active2');
});

$('.btn-test3').click(function(){
  $('.btn-test3').toggleClass('active3');
  $('.title3').toggleClass('active3');
  $('.nav-test3').toggleClass('active3');
});












 














