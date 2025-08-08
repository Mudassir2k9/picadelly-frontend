//script for slide on scroll
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
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
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
  const items = document.querySelectorAll(".links_col .item_link");
  const imageData = [
    {
      src: "/images/p-img1.jpg",
      lines: [
        "Category: Education",
        "Valley Christian Schools Valley Christian Schools",
        "Tagline goes here",
        "Explore more",
      ],
    },
    {
      src: "/images/p-img2.jpg",
      lines: [
        "Category: Banking",
        "CA Bank of Commerce CA Bank of Commerce CA Bank of Commerce",
        "Banking evolved",
        "Explore more",
      ],
    },
    {
      src: "/images/p-img3.jpg",
      lines: [
        "Category: Tourism",
        "Visit Visalia Visit Visalia Visit Visalia",
        "Adventure awaits ",
        "Explore more",
      ],
    },
    {
      src: "/images/p-img4.jpg",
      lines: [
        "Category: Finance",
        "Sesloc Credit Union Sesloc Credit Union Sesloc Credit Union",
        "Community banking",
        "Explore more",
      ],
    },
    {
      src: "/images/p-img5.jpg",
      lines: [
        "Category: Credit Union",
        "Travis Credit Union Travis Credit Union Travis Credit Union",
        "Serving you better",
        "Explore more",
      ],
    },
    {
      src: "/images/p-img6.jpg",
      lines: [
        "Category: Education",
        "Cal Poly Cal Poly Cal Poly",
        "Learn by doing",
        "Explore more",
      ],
    },
    {
      src: "/images/p-img7.jpg",
      lines: [
        "Category: City",
        "San Luis Obispo San Luis Obispo San Luis Obispo",
        "A great place to live",
        "Explore more",
      ],
    },
  ];

  const mainImage = document.getElementById("mainImage");
  const prevThumb = document.getElementById("prevThumb");
  const nextThumb = document.getElementById("nextThumb");
  const mainText = document.getElementById("mainText");
  const prevText = document.getElementById("prevText");
  const nextText = document.getElementById("nextText");

  const defaultItem = document.querySelector(".item_link.default");
  let currentIndex = Array.from(items).indexOf(defaultItem);

  function generateOverlayHTML(lines = []) {
    return lines.map((line) => `<p>${line}</p>`).join("");
  }

  function updateImages(index) {
    currentIndex = index;

    // Update main
    mainImage.src = imageData[index].src;
    mainText.innerHTML = generateOverlayHTML(imageData[index].lines);

    // Previous
    if (imageData[index - 1]) {
      prevThumb.src = imageData[index - 1].src;
      prevText.innerHTML = generateOverlayHTML(imageData[index - 1].lines);
    } else {
      prevThumb.src = "";
      prevText.innerHTML = "";
    }

    // Next
    if (imageData[index + 1]) {
      nextThumb.src = imageData[index + 1].src;
      nextText.innerHTML = generateOverlayHTML(imageData[index + 1].lines);
    } else {
      nextThumb.src = "";
      nextText.innerHTML = "";
    }

    prevThumb.parentElement.classList.toggle("img-hidden", index === 0);
    nextThumb.parentElement.classList.toggle(
      "img-hidden",
      index === imageData.length - 1
    );

    items.forEach((el) => el.classList.remove("default"));
    items[index].classList.add("default");
  }

  // Initial load
  updateImages(currentIndex);

  items.forEach((item_link, index) => {
    item_link.addEventListener("mouseenter", () => {
      updateImages(index);
    });
  });
});
