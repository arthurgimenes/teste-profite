<template>
<main>
<div class="slideshow-container-p container-fluid">
    <!-- Full-width images with number and caption text -->
    <div class="mySlides-p fade-p row " v-for="item in items" v-bind:key="item.name">
      <div class="col-sm-12 col-md-12 col-lg-12">
      <figure class="col-sm-6 col-md-4 col-lg-4">
        <img :src="item.src" style="width:50%" alt="placeholder">
        <figcaption>{{item.name}}</figcaption>
        <figcaption>{{item.oldPrice}}</figcaption>
        <figcaption>{{item.newPrice}}</figcaption>
        <figcaption>{{item.parcelado}}</figcaption>
      </figure>
      </div>
    </div>

    <!-- Next and previous buttons -->
    <a class="prev-p" @click="plusSlides(-1)">&#10094;</a>
    <a class="next-p" @click="plusSlides(1)">&#10095;</a>
</div>

  <!-- The dots/circles -->
  <div style="text-align:center">
    <span class="dot-p" @click="currentSlide(1)"></span>
    <span class="dot-p" @click="currentSlide(2)"></span>
    <span class="dot-p" @click="currentSlide(3)"></span>
  </div>
</main>
</template>

<script>
export default {
  name: 'MainContent',
  data () {
    return {
      slideIndex: 1,
      items: []
    }
  },
  methods: {
    // Get products
    fetchUsers: function () {
      this.$http.get('http://5c8654c9cc034a0014bd2543.mockapi.io/produtos/produtos')
        .then((result) => {
          this.items = result.data.data
          console.log(this.items)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // Next/previous controls
    plusSlides: function (n) {
      this.showSlides(this.slideIndex += n)
    },

    // Thumbnail image controls
    currentSlide: function (n) {
      this.showSlides(this.slideIndex = n)
    },

    showSlides: function (n) {
      let i
      let slides = document.getElementsByClassName('mySlides-p')
      let dots = document.getElementsByClassName('dot-p')
      if (n > slides.length) {
        this.slideIndex = 1
      }
      console.log(slides)
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active-p', '')
      }
      slides[this.slideIndex - 1].style.display = 'flex'
      dots[this.slideIndex - 1].className += ' active-p'
    }
  },
  mounted () {
    this.showSlides(this.slideIndex)
    this.fetchUsers()
  }
  // created () {
  //   // 1. Create a new XMLHttpRequest object
  //   let xhr = new XMLHttpRequest()

  //   // 2. Configure it: GET-request for the URL /article/.../hello.txt
  //   xhr.open('GET', './Products.json')

  //   // 3. Send the request over the network
  //   xhr.send()

  //   // 4. This will be called after the response is received
  //   xhr.onload = function () {
  //     if (xhr.status != 200) { // analyze HTTP status of the response
  //       // if it's not 200, consider it an error
  //       alert(xhr.status + ': ' + xhr.statusText) // e.g. 404: Not Found
  //     } else {
  //       // show the result
  //       alert(xhr.responseText) // responseText is the server response
  //     }
  //   }
  // }

}
</script>
