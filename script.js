(() => {
  const body = document.body;

  const navbar = document.getElementById("navbar");

  const toggle = document.getElementById("themeToggle");

  const nav = document.getElementById("navLinks");

  const mobile = document.getElementById("mobileToggle");

  const form = document.getElementById("contactForm");

  const success = document.getElementById("formSuccess");

  const typing = document.getElementById("typing");

  const STORAGE = "portfolio-theme";

  function detectTheme() {
    const saved = localStorage.getItem(STORAGE);

    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
      updateThemeIcon(saved);
      return;
    }

    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial = systemDark ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", initial);
    updateThemeIcon(initial);
  }

  function updateThemeIcon(theme) {
    if (!toggle) return;

    toggle.textContent = theme === "dark" ? "🌙" : "☀";
  }
  function switchTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE, next);

    updateThemeIcon(next);
  }
  if (toggle) {
    toggle.addEventListener("click", switchTheme);
  }
  function updateNavbar() {
    if (!navbar) return;

    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateNavbar);

  function toggleMenu() {
    nav.classList.toggle("open");
  }

  if (mobile) {
    mobile.addEventListener("click", toggleMenu);

    mobile.addEventListener(
      "keydown",

      (e) => {
        if (e.key === "Enter" || e.key === " " || e.key === "space") {
          toggleMenu();
        }
      },
    );
  }

  document
    .querySelectorAll(".nav-links a")

    .forEach((link) => {
      link.addEventListener(
        "click",

        () => {
          nav.classList.remove("open");
        },
      );
    });
  const sections = document.querySelectorAll("section");

  const links = document.querySelectorAll(".nav-links a");

  function activateNav() {
    let current = "";

    sections.forEach((section) => {
      const top = section.offsetTop;

      const height = section.offsetHeight;

      if (scrollY >= top - 180) {
        current = section.id;
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateNav);

  const words = [
    "Frontend Developer",

    "UI Designer",

    "Java Developer",

    "DevOps Learner",

    "Portfolio Creator",
  ];

  let word = 0;

  let letter = 0;

  let deleting = false;

  function type() {
    if (!typing) return;

    const current = words[word];

    typing.textContent = current.slice(0, letter);

    if (!deleting) {
      letter++;

      if (letter > current.length) {
        deleting = true;

        setTimeout(type, 1200);

        return;
      }
    } else {
      letter--;

      if (letter < 0) {
        deleting = false;

        word = (word + 1) % words.length;

        letter = 0;
      }
    }

    setTimeout(
      type,

      deleting ? 45 : 90,
    );
  }

  type();

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = form.querySelectorAll("input,textarea");
      const name = inputs[0].value.trim();
      const email = inputs[1].value.trim();
      const msg = inputs[2].value.trim();

      if (name.length < 2) {
        alert("Enter valid name");
        return;
      }
      if (!validateEmail(email)) {
        alert("Enter valid Email");
        return;
      }
      if (msg.length < 10) {
        alert("msg too short");
        return;
      }
      success.textContent = "✓ Message validated successfully";

      form.reset();

      setTimeout(() => {
        success.textContent = "";
      }, 4000);
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (nav) {
        nav.classList.remove("open");
      }
    }
  });
 /* ======================
SCROLL REVEAL
====================== */

const reveals =
document.querySelectorAll(".reveal");

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{
threshold:0.12
}

);

reveals.forEach((el)=>{

observer.observe(el);

});

  detectTheme();

  updateNavbar();

  activateNav();
})();