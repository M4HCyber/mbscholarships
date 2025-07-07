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
