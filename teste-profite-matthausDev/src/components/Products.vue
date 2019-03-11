<template>
<main>
<div class="slideshow-container container-fluid">
    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade row" v-for="item in items" v-bind:key="item">
      <img class="col-sm-6 col-md-6 col-lg-6" src="https://placekitten.com/g/1600/600" style="width:50%" alt="placeholder">
      <img class="col-sm-6 col-md-6 col-lg-6" src="https://placekitten.com/g/1600/600" style="width:50%" alt="placeholder">
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
    items: []
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
created() {
// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../hello.txt
xhr.open('GET', './Products.json');

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    // if it's not 200, consider it an error
    alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
  } else {
    // show the result
    alert(xhr.responseText); // responseText is the server response
  }
};
},

}
</script>
