const navSlide = () => {
  const navBurger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links li");

  navBurger.addEventListener("click", () => {
    // Toggle "X Burger"
    navBurger.classList.toggle("toggle");

    // Nav slide animation
    nav.classList.toggle("nav__links-slide-active");

    // Nav links animation
    navLinks.forEach((navLink, index) => {
      if (navLink.style.animation) {
        navLink.style.animation = "";
      } else {
        navLink.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

navSlide();
