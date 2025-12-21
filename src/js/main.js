// Filter buttons active state
const buttons = document.querySelectorAll(".filters button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// SLIDER
const slides = document.querySelectorAll(".slide");
const sliderWrapper = document.querySelector(".slider-wrapper");

let index = 0;
let autoSlideInterval;

function showSlide(i) {
  slides.forEach((s) => s.classList.remove("active"));
  slides[i].classList.add("active");
}

// ავტომატური სლაიდები 5 წამში ერთხელ
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);
}

// დაწყება
startAutoSlide();

// ვიპოვო ყველა fill ელემენტი
const fills = document.querySelectorAll(".fill");
const aboutSection = document.getElementById("about");

// თავდაპირველად ყველა fill-ის width 0
fills.forEach((fill) => (fill.style.width = "0"));

function animateSkills() {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    // როცა სექცია 100px რჩება ეკრანამდე
    fills.forEach((fill) => {
      fill.style.width = fill.classList.contains("ux")
        ? "80%"
        : fill.classList.contains("web")
        ? "90%"
        : fill.classList.contains("app")
        ? "85%"
        : fill.classList.contains("graphic")
        ? "75%"
        : "0";
    });
    // ერთხელაც რომ არ განმეორდეს
    window.removeEventListener("scroll", animateSkills);
  }
}

// scroll listener
window.addEventListener("scroll", animateSkills);
