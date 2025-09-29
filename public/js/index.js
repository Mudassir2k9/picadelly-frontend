



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
    }, 1000); // 3 seconds delay
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

// script for sticky nav

(function () {
  // CONFIG
  const THRESHOLD = 8;      // ignore micro-movements
  const SETTLE_MS = 150;    // wait after last scroll to "settle"

  // helpers
  const getWindowScrollTop = () =>
    window.pageYOffset || document.documentElement.scrollTop || 0;

  function attachScrollLogic(targetElement) {
    const header = document.querySelector("header");
    if (!header) {
      console.warn("Header not found");
      return;
    }
    if (!targetElement) {
      console.warn("No scroll target to attach to");
      return;
    }

    let last =
      targetElement === window ? getWindowScrollTop() : targetElement.scrollTop || 0;
    let ticking = false;
    let settleTimer = null;

    function getScrollTop() {
      return targetElement === window
        ? getWindowScrollTop()
        : targetElement.scrollTop || 0;
    }

    // ✅ combined transform + background logic
    function applyTransform(show, scrollTop) {
      if (show) {
        header.style.transform = "translateY(0)";
        header.style.backgroundColor = scrollTop > 100 ? "white" : "transparent";
      } else {
        header.style.transform = "translateY(-100%)";
        header.style.backgroundColor = "transparent";
      }
    }

    function handleUpdate() {
      const st = Math.max(0, getScrollTop());
      const delta = st - last;

      if (Math.abs(delta) < THRESHOLD) {
        last = st;
        return;
      }

      if (st <= 0) {
        applyTransform(true, st);   // top → visible + transparent
      } else if (delta > 0) {
        applyTransform(false, st);  // scrolling down → hide
      } else {
        applyTransform(true, st);   // scrolling up → visible (with bg)
      }

      last = st;

      // settle after scrolling stops (helpful with snap jumps)
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        const final = getScrollTop();
        if (final <= 0) applyTransform(true, final);
        last = final;
      }, SETTLE_MS);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          handleUpdate();
          ticking = false;
        });
      }
    }

    targetElement.addEventListener("scroll", onScroll, { passive: true });

    console.log(
      "attached scroll listener to",
      targetElement === window ? "window" : targetElement
    );

    // ✅ Run once immediately so header starts in correct state
    handleUpdate();
  }

  function init() {
    const snap = document.querySelector(".parent_container_snap");

    if (snap) {
      attachScrollLogic(snap);
      return;
    }

    attachScrollLogic(window);

    const observer = new MutationObserver((mutations, obs) => {
      const found = document.querySelector(".parent_container_snap");
      if (found) {
        attachScrollLogic(found);
        obs.disconnect();
      }
    });

    observer.observe(document.documentElement || document.body, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();




// let lastScrollTop = 0; // store previous scroll position
// let scrollTimeout;


// window.addEventListener("scroll", function () { 
//   const header = document.querySelector("header"); 
//   const currentScroll = window.scrollY; 
//   // if (currentScroll > lastScrollTop) { 
//     header.classList.add("sticky"); 
//     clearTimeout(scrollTimeout); 
//     scrollTimeout = setTimeout(() => { 
//       if (!header.matches(":hover")) { 
//         header.classList.remove("sticky"); 
//       }
//      }, 2000); 
//   // } 
//     // lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;  
//   });




// window.addEventListener("scroll", function() {
//   const header = document.querySelector("header");
//   if (window.scrollY > 100) { // stick after 50px scroll
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
// }
// });
  

// script for nav sidebar

function openNav() {
  const nav = document.getElementById("myNav");
  const overlay = document.getElementById("overlay");
    $("#header").toggleClass("open"); 
  // Check if nav is open
  if (nav.style.width !== "0" && nav.style.width !== "") {
    // Close
    nav.style.width = "0";
    overlay.style.display = "none";
  } else {
    // Open
    if (window.matchMedia("(max-width: 768px)").matches) {
      nav.style.width = "100%"; // Mobile
    } else {
      nav.style.width = "50%";  // Desktop
    }
    overlay.style.display = "block";
  }
}


// function openNav() {
  
//         if (window.matchMedia("(max-width: 768px)").matches) {
//           // Mobile
//            document.getElementById("myNav").style.width = "100%";
//         } else {
//           // Laptop/Desktop
//            document.getElementById("myNav").style.width = "50%";
//         }
//          document.getElementById("overlay").style.display = "block";
  
// }

// function closeNav() {
//   document.getElementById("myNav").style.width = "0";
//    document.getElementById("overlay").style.display = "none";
// }

// script for wow JS activation
// wow = new WOW({
//   boxClass: "wow", // default
//   animateClass: "animate__animated", // default
//   offset: 0, // default
//   mobile: true, // default
//   desktop: true,
//   live: true, // default
// });
// wow.init();

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

