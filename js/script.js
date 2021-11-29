const slideImages = {
  time: 10000,
  currentImageIndex: 0,
  images: document.querySelectorAll(".slide-image"),
  start() {
    setInterval(slideImages.nextImage, slideImages.time);
  },
  nextImage() {
    slideImages.toggleClass();
    slideImages.currentImageIndex++;
    if (slideImages.currentImageIndex == slideImages.images.length) {
      slideImages.currentImageIndex = 0;
    }
    slideImages.toggleClass();
  },
  previousImage() {
    slideImages.toggleClass();
    slideImages.currentImageIndex--;
    if (slideImages.currentImageIndex < 0) {
      slideImages.currentImageIndex = 2;
    }
    slideImages.toggleClass();
  },
  toggleClass() {
    slideImages.images[slideImages.currentImageIndex].classList.toggle(
      "selected",
    );
  },
};

window.addEventListener("load", slideImages.start);
