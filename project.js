const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
/*navbar animation */

var tl=gsap.timeline()

tl.from(".navbar",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.7,
    
    rotate:"-360deg",
})
tl.from(".navbar .nav-menu .nav-item .nav-link",{
    y:-200,
    opacity:0,
    stagger:0.15,
    duration:0.1,
    rotate:"-360deg",
    
    
})



/*join us animation*/
function breakTheText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
  
    var splittedText = h1Text.split("")
    var halfValue = splittedText.length/2
  
    var clutter = ""
  
    splittedText.forEach(function (elem,idx) {
        if(idx<halfValue){
             clutter += `<span class="a">${elem}</span>`
     }else{
             clutter += `<span class="b">${elem}</span>`
     }
      
  })
   h1.innerHTML = clutter
  
  }
  
  breakTheText()
  
  gsap.from("#page2 h1 .a",{
      y:100,
      duration:0.6,
      delay:2,
      stagger:0.15,
      opacity:0,
      scrollTrigger:"#page2 h1",
  })
  gsap.from("#page2 h1 .b",{
      y:-100,
      duration:0.6,
      delay:2,
      stagger:-0.15,
      opacity:0,
      scrollTrigger:"#page2 h1",
    
   })




/*page1 logo*/

