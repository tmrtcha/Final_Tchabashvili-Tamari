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

// // ავტომატური სლაიდის გაჩერება
// function stopAutoSlide() {
//   clearInterval(autoSlideInterval);
// }

// // მაუსის შეყვანა/გამოყვანა
// sliderWrapper.addEventListener("mouseenter", stopAutoSlide);
// sliderWrapper.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();
