//script for slide on scroll

window.addEventListener("load", function () {
    setTimeout(function () {
      const hash = window.location.hash; // e.g. "#We-are-Picadilly"
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 3000); // 3 seconds delay
  });


$(document).ready(function () {
  // var owl = $(".about_slider");
  // owl.owlCarousel({
  //   loop: true,
  //   nav: false,
  //   autoplay: true,
  //   autoplayTimeout: 3000, // Time between slides (3 seconds)
  //   autoplaySpeed: 800, // Slide transition speed (0.8 seconds)
  //   margin: 10,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     1200: {
  //       items: 1,
  //     },
  //   },
  // });
  // owl.on('mousewheel', '.owl-stage', function(e) {
  //   if (e.deltaY > 0) {
  //     owl.trigger('next.owl', [300]);
  //   } else {
  //     owl.trigger('prev.owl', [300]);
  //   }
  //     scrollTimeout = setTimeout(() => (scrollTimeout = null), 300);
  //   e.preventDefault();
  // });
});

//script for slide on scroll
$(document).ready(function () {
  // var owl = $(".c_slider");
  // owl.owlCarousel({
  //   loop: true,
  //   nav: false,
  //   autoplay: true,
  //   autoWidth: true,
  //   autoplayTimeout: 5000, // Time between slides (3 seconds)
  //   autoplaySpeed: 800, // Slide transition speed (0.8 seconds)
  //   margin: 10,
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     1200: {
  //       items: 4,
  //     },
  //   },
  // });
});

// script for strategy slider

$(document).ready(function () {
  // var owl = $(".strategy_slider");
  // owl.owlCarousel({
  //   loop: true,
  //   nav: false,
  //   autoplay: true,
  //   center: true,
  //   // autoWidth:true,
  //   autoplayTimeout: 5000, // Time between slides (3 seconds)
  //   autoplaySpeed: 800, // Slide transition speed (0.8 seconds)
  //   margin: 10,
  //   responsive: {
  //     0: {
  //       items: 4,
  //     },
  //     1200: {
  //       items: 5,
  //     },
  //   },
  // });
});

// script for nav sidebar

function openNav() {
  
        if (window.matchMedia("(max-width: 768px)").matches) {
          // Mobile
           document.getElementById("myNav").style.width = "100%";
        } else {
          // Laptop/Desktop
           document.getElementById("myNav").style.width = "50%";
        }
         document.getElementById("overlay").style.display = "block";
  
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
   document.getElementById("overlay").style.display = "none";
}

// script for wow JS activation
wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated", // default
  offset: 0, // default
  mobile: true, // default
  desktop: true,
  live: true, // default
});
wow.init();

// script for horizontal scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".parallax-section");
  sections.forEach((section) => {
    const speed = 0.5;
    const offset = window.scrollY * speed;
    section.style.transform = `translateY(${offset}px)`;
  });
});

// script for video
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

$(document).ready(function () {
  // script for portfolio section on the work page
});
