<template>
<main>
<div class="slideshow-container container-fluid">
    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade row">
      <img class="col-sm-6 col-md-6 col-lg-6" src="https://placekitten.com/g/1600/600" style="width:50%" alt="placeholder">
      <img class="col-sm-6 col-md-6 col-lg-6" src="https://placekitten.com/g/1600/600" style="width:50%" alt="placeholder">
    </div>

    <div class="mySlides fade row">
      <img class="col-sm-6 col-md-6 col-lg-6" src="https://placekitten.com/g/1600/601" style="width:50%" alt="placeholder">
      <img class="col-sm-6 col-md-6 col-lg-6" src="https://placekitten.com/g/1600/601" style="width:50%" alt="placeholder">
    </div>

    <div class="mySlides fade row">
      <img class="col-sm-6 col-md-6 col-lg-6" src="https://placekitten.com/g/1601/601" style="width:50%" alt="placeholder">
      <img class="col-sm-6 col-md-6 col-lg-6" src="https://placekitten.com/g/1601/601" style="width:50%" alt="placeholder">
    </div>

    <!-- Next and previous buttons -->
    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
    <a class="next" @click="plusSlides(1)">&#10095;</a>
</div>

  <!-- The dots/circles -->
  <div style="text-align:center">
    <span class="dot" @click="currentSlide(1)"></span>
    <span class="dot" @click="currentSlide(2)"></span>
    <span class="dot" @click="currentSlide(3)"></span>
  </div>
</main>
</template>

<script>
export default {
name: "MainContent",
data() {
  return {
    slideIndex: 1,
  }
},
methods: {

// Next/previous controls
plusSlides: function (n) {
  this.showSlides(this.slideIndex += n);
},

// Thumbnail image controls
currentSlide: function (n) {
  this.showSlides(this.slideIndex = n);
},

showSlides: function (n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    this.slideIndex = 1
  }
  console.log(slides)
  if (n < 1) {
    this.slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1].style.display = "flex";
  dots[this.slideIndex-1].className += " active";
}
},
mounted() {
  this.showSlides(this.slideIndex)
},

}
</script>
