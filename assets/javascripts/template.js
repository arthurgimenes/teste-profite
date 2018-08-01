function templateProduct(name, priceOld, priceNew, divider, economy, pathImage) {
  return `
    <article class="product col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="image">
        <img src="${pathImage}" alt="Chinelo Kildare">
      </div>
      <div class="name center-xs">
        ${name}
      </div>
      <div class="stars">
        <img src="assets/images/sapatos/estrelas.png" alt="Qualificão do produto">
      </div>
      <div class="info center-xs">
        <p class="price_old">
          De: R$ <span class="price">${priceOld}</span>
        </p>
        <p class="price_new">Por: R$ <span class="price">${priceNew}</span></p>
        <p class="price_divider">ou até ${divider}x de R$ <span class="price">00</span></p>
      </div>
      <button class="btn" type="button">Comprar</button>
      <div class="economy">
        <p class="center-xs">
          Economize: R$ <span class="price">${economy}</span>
        </p>
      </div>
    </article>
  `
}
