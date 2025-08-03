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
