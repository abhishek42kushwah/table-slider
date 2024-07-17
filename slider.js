const initSlider = () => {
  const sideButton = document.querySelectorAll(".slider-wrapper .side-button");
  const imageList = document.querySelector(".image-list");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxLengthScroll = imageList.scrollWidth - imageList.clientWidth;
  sideButton.forEach((button) => {
    button.addEventListener("click", function () {
      const direction = button.id === "prev-side" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleScrollButton = () => {
    sideButton[0].style.display = imageList.scrollLeft <= 0 ? "none " : "block";
    sideButton[1].style.display =
      imageList.scrollLeft >= maxLengthScroll ? "none " : "block";
  };

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxLengthScroll) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", () => {
    handleScrollButton();
    updateScrollThumbPosition();
  });
};

window.addEventListener("load", initSlider);
