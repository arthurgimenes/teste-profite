<template>
  <header class="row">
    <div id="header" class="col-sm-12 col-md-12 col-lg-12 header-height">
        <img id="logo" src="../assets/profite_logo.png" alt="logo profite" width="60" height="60">
        <div id="search" class="input-wrapper">
          <input class="input-align" type="text" name="search" placeholder="O que está procurando?">
        </div>
        <div id="userIcon" class="input-wrapper-user">
          <span>Minha conta</span>
        </div>
        <div id="userCart" class="input-wrapper-cart">
          <div class="circle">
            1
          </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
name: "HeaderNav"
}
</script>


