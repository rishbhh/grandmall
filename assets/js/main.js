gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        document.getElementById('navbar_top2').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top2').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
  
  
 

// Gsap
gsap.to(".horizontal", {
  scrollTrigger:{
    trigger: ".horizontal", 
    start: "100% bottom", 
    end: "bottom top", 
    scrub: 1,
    // markers: true
  },
  x: 500
},"-=1")

gsap.to(".horizontal2", {
  scrollTrigger:{
    trigger: ".horizontal2", 
    start: "100% bottom", 
    end: "bottom top", 
    scrub: 1,
    // markers: true
  },
  x: -500
},"-=1")

// gsap.set('.about_text_p', {autoAlpha: 1})

//     gsap.utils.toArray(".about_text").forEach((section, i) => {
//       gsap.from(section.querySelectorAll(".about_text_p"),2, {
//         scrollTrigger: {
//           trigger: section,
//           // markers: true,
//           start: "200px bottom"
//         },
//         yPercent: 200,
//         duration: 0.5,
//         opacity:0,
//         // ease: "easeInOut"
//       },"-=0.8");
// 		});


// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


ScrollReveal({ reset: false });

ScrollReveal().reveal(".show-once", {
  reset: false
});

ScrollReveal().reveal(".title", {
  duration: 1200,
  origin: "top",
  distance: "100px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    // z: -10
  }
});

ScrollReveal().reveal(".fade-in", {
  duration: 2000,
  move: 0
});

ScrollReveal().reveal(".scaleUp", {
  duration: 1200,
  scale: 0.85
});

ScrollReveal().reveal(".flip", {
  delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});

ScrollReveal().reveal(".slide-right", {
  duration: 3000,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-up", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});


console.clear();

const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));
const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`;

navExpand.forEach(item => {
  item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink);
  item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'));
  item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'));
});


// ---------------------------------------
// not-so-important stuff starts here

const ham = document.getElementById('ham');
ham.addEventListener('click', function () {
  document.body.classList.toggle('nav-is-toggled');
});

$(function() {
  $('a[href="#search"]').on("click", function(event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="search"]').focus();
  });

  $("#search, #search button.close").on("click keyup", function(event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });

  $("form").submit(function(event) {
    event.preventDefault();
    return false;
  });
});

// link
$(document).ready(function() {

  // Get current page URL
  var url = window.location.href;

  // remove # from URL
  url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

  // remove parameters from URL
  url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

  // select file name
  url = url.substr(url.lastIndexOf("/") + 1);
 
  // If file name not avilable
  if(url == ''){
     url = 'index.html';
  }
 
  // Loop all menu items
  $('.nav-item').each(function(){

     // select href
     var href = $(this).find('a').attr('href');
 
     // Check filename
     if(url == href){

        // Add active class
        $(this).addClass('active');
     }
  });
})