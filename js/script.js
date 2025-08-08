document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("projectSlider");
  const leftArrow = document.querySelector(".slider-arrow.left");
  const rightArrow = document.querySelector(".slider-arrow.right");
  const scrollAmount = 424;

  // Function to update arrow states
  function updateArrowStates() {
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    // Hide/show left arrow based on position
    if (scrollLeft <= 0) {
      leftArrow.style.display = "none";
    } else {
      leftArrow.style.display = "block";
    }

    // Hide/show right arrow based on position
    if (scrollLeft >= maxScrollLeft - 1) {
      // -1 for rounding errors
      rightArrow.style.display = "none";
    } else {
      rightArrow.style.display = "block";
    }
  }

  // Initial arrow state check
  updateArrowStates();

  // Left arrow click handler
  leftArrow.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Right arrow click handler
  rightArrow.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  // Listen for scroll events to update arrow states
  container.addEventListener("scroll", updateArrowStates);

  // Listen for window resize to recalculate arrow states
  window.addEventListener("resize", updateArrowStates);
});

//  Mobile nav script >
function toggleMenu() {
  const menu = document.getElementById("menu");
  const content = document.getElementById("content");
  menu.classList.toggle("active");
  content.classList.toggle("create-margin");
}


// Close menu when navigation links are clicked
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".ul-nav a");
  const menu = document.getElementById("menu");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove the active class to close the menu
      menu.classList.remove("active");
    });
  });
});

// Close menu when clicking outside of it
document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const content = document.getElementById("content");
  const hamburgerButton = document.querySelector(".hamburger"); // Adjust selector as needed

  // Check if the menu is currently active
  if (menu.classList.contains("active")) {
    // Check if the click is outside the menu and not on the hamburger button
    if (
      !menu.contains(event.target) &&
      hamburgerButton &&
      !hamburgerButton.contains(event.target)
    ) {
      menu.classList.remove("active");
      content.classList.remove("create-margin");
    }
  }
});




