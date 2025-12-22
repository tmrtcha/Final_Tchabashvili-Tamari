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

// PROJECT FILTER
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projects.forEach((project) => {
      if (filter === "all" || project.dataset.category === filter) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// TESTIMONIALS SLIDER
const testimonialData = [
  {
    img: "src/images/profile3.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis.",
    name: "John Doe",
    role: "CEO",
  },
  {
    img: "src/images/profile2.jpeg",
    text: "Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "Sarah Smith",
    role: "Marketing Manager",
  },
  {
    img: "src/images/profile3.jpeg",
    text: "Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.",
    name: "David Brown",
    role: "Product Designer",
  },
  {
    img: "src/images/profile4.jpeg",
    text: "In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.",
    name: "Emily Wilson",
    role: "UI/UX Designer",
  },
];

const imgEl = document.getElementById("t-img");
const textEl = document.getElementById("t-text");
const nameEl = document.getElementById("t-name");
const roleEl = document.getElementById("t-role");
const dots = document.querySelectorAll(".dot");

function showTestimonial(index) {
  imgEl.src = testimonialData[index].img;
  textEl.textContent = `"${testimonialData[index].text}"`;
  nameEl.textContent = testimonialData[index].name;
  roleEl.textContent = testimonialData[index].role;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showTestimonial(dot.dataset.index);
  });
});

// default slide
showTestimonial(0);
