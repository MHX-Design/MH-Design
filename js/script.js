// Project slider functionality
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("projectSlider");
  
  // Only run slider code if container exists (to avoid errors on pages without slider)
  if (container) {
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
  }
});

//  Mobile nav script
function toggleMenu() {
  const menu = document.getElementById("menu");
  const content = document.getElementById("content");
  menu.classList.toggle("active");
  content.classList.toggle("create-margin");
}

// Function to check if we're on mobile/tablet (768px and below)
function isMobileView() {
  return window.innerWidth <= 768;
}

// Close menu when navigation links are clicked with animation delay on mobile
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".ul-nav a");
  const menu = document.getElementById("menu");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Check if we're on mobile/tablet view
      if (isMobileView()) {
        // Prevent immediate navigation
        event.preventDefault();
        
        // Get the original href to navigate to later
        const href = this.href;
        
        // Add a class to trigger the hover state
        this.classList.add("mobile-clicked");
        
        // Wait for animation to complete, then navigate
        setTimeout(() => {
          // Close the menu
          menu.classList.remove("active");
          
          // Navigate to the page after a short additional delay
          setTimeout(() => {
            window.location.href = href;
          }, 100); // Small additional delay for smooth menu close
          
        }, 400); // Wait for hover animation (matches your CSS transition duration)
        
      } else {
        // On desktop, just close the menu normally (no delay needed)
        menu.classList.remove("active");
      }
    });
  });
});

// Close menu when clicking outside of it
document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const content = document.getElementById("content");
  const hamburgerButton = document.querySelector(".hamburger");
  
  // Check if the menu is currently active
  if (menu.classList.contains("active")) {
    // Check if the click is outside the menu and not on the hamburger button
    if (
      !menu.contains(event.target) &&
      hamburgerButton &&
      !hamburgerButton.contains(event.target)
    ) {
      menu.classList.remove("active");
      if (content) {
        content.classList.remove("create-margin");
      }
    }
  }
});