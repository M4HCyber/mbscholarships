const navbar = document.querySelector("nav .nav-links");
const toggle = document.querySelector(".toggle");
const faqLink = document.querySelectorAll(".faq-head");

toggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
  navbar.addEventListener("click", function () {
    navbar.classList.remove("active");
  });
  toggle.classList.toggle("active");
});

// Show/Hide Buttons Based on Scroll
window.addEventListener("scroll", function () {
  const scrollUp = document.getElementById("scrollUp");
  const scrollDown = document.getElementById("scrollDown");

  if (window.scrollY > 2000) {
    scrollUp.style.display = "block";
    scrollDown.style.display = "none";
  } else {
    scrollUp.style.display = "none";
    scrollDown.style.display = "block";
  }
});

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Scroll to Bottom
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

// FAQ

// for (const link of faqLink) {
//   const linkText = document.querySelectorAll(".faq-body");
//   link.addEventListener("click", function () {
//     for (const textBody of linkText) {
//       textBody.classList.toggle("active");
//     }
//   });
// }

for (const link of faqLink) {
  link.addEventListener("click", function () {
    this.classList.toggle("active");
    const textBody = this.nextElementSibling;
    textBody.classList.toggle("active");
  });
}

// Animation Hide and Show
const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el) => observer.observe(el));

// DROP DOWN

const scholarshipsDP = document.querySelector("#scholarships-categories");
const scLink = scholarshipsDP.querySelector(".sc-link");
const categories = scholarshipsDP.querySelector(".categories");
const aboutUsDP = document.querySelector("#about-us-categories");
const abLink = aboutUsDP.querySelector(".ab-link");

// Toggle dropdown on parent link click
scLink.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  categories.classList.toggle("active");
});

abLink.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  this.nextElementSibling.classList.toggle("active");
});
// Prevent dropdown from closing when clicking inside it
categories.addEventListener("click", function (event) {
  event.stopPropagation();
});

// VIDEO ANIMATION
const videoElement = document.querySelector("video");
let NumVideos = 2;
let lastRandom = 0;

const getRandomVideoNum = () => {
  let random;
  do {
    random = Math.floor(Math.random() * NumVideos) + 1;
  } while (random == lastRandom);
  lastRandom = random;
  return random;
};

const changeHeroBackground = () => {
  videoElement.src = `assets/videos/video-background-${getRandomVideoNum()}.mp4`;
};

const changeVideo = () => {
  videoElement.style.opacity = 0;

  setTimeout(() => {
    const random = getRandomVideoNum();
    videoElement.src = `assets/videos/video-background-${random}.mp4`;
    videoElement.load();

    videoElement.oncanplay = () => {
      videoElement.play();
      videoElement.style.opacity = 1;
    };
  }, 10000);
};

setInterval(changeVideo, 30000);

// SCHOLARSHIPS SECTION
const loadMoreBtn = document.querySelector(".btn-load-more");
const load1 = document.querySelectorAll(".hidden-one");
const load2 = document.querySelectorAll(".hidden-two");
const load3 = document.querySelectorAll(".hidden-three");
const load4 = document.querySelectorAll(".hidden-four");
const btnLoadMore = document.querySelector(".btn-load-more");
let counter = 1;

loadMoreBtn.addEventListener("click", () => {
  btnLoadMore.innerHTML = `<i class="fa-solid fa-spinner fa-spin-pulse"></i>`;
  setTimeout(function () {
    if (counter == 1) {
      for (const load of load1) {
        load.classList.add("scholarship-show");
      }
      btnLoadMore.innerHTML =
        'Show More  <i class="fa-solid fa-angles-down"></i>';
    } else if (counter == 2) {
      for (const load of load2) {
        load.classList.add("scholarship-show");
      }
      btnLoadMore.innerHTML =
        'Show More  <i class="fa-solid fa-angles-down"></i>';
    } else if (counter == 3) {
      for (const load of load3) {
        load.classList.add("scholarship-show");
      }
      btnLoadMore.innerHTML =
        'Show More  <i class="fa-solid fa-angles-down"></i>';
    } else if (counter == 4) {
      for (const load of load4) {
        load.classList.add("scholarship-show");
      }
      btnLoadMore.innerHTML =
        'Show Less  <i class="fa-solid fa-angles-down"></i>';
    } else if (counter == 5) {
      for (const load of [...load1, ...load2, ...load3, ...load4]) {
        load.classList.remove("scholarship-show");
      }
      btnLoadMore.innerHTML =
        'Show More  <i class="fa-solid fa-angles-down"></i>';
    }
    counter++;
  }, 1000);
});
