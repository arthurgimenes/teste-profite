<template>
  <header id="header" class="row header-height">
        <div class="col-md-4 col-lg-4">
          <img id="logo" src="../assets/profite_logo.png" alt="logo profite" width="60" height="60">
        </div>
        <div class="input-wrapper col-md-4 col-lg-4 col-sm-12">
          <input id="search" class="input-align" type="text" name="search" placeholder="O que está procurando?">
        </div>
        <div class="col-md-2 col-lg-2">
          <div id="userIcon" class="input-wrapper-user">
            <span>Minha conta</span>
          </div>
          <div id="userCart" class="input-wrapper-cart">
            <div class="circle">
              1
            </div>
          </div>
        </div>
        <div class="col-md-2 col-lg-2">
          <img id="br" class="margin-bandeiras" src="../assets/br.png" alt="Bandeira Brasil" width="20" height="10">
          <img id="spain" class="margin-bandeiras" src="../assets/spain.png" alt="Bandeira Espanha" width="20" height="10">
          <img id="eua" class="margin-bandeiras" src="../assets/eua.png" alt="Bandeira Estados Unidos" width="20" height="10">
        </div>
  </header>
</template>

<script>
export default {
name: "HeaderNav"
}
</script>


