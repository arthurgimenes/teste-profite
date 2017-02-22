$(() => {
  $.get('produtos.json', (data) => {
    for (let i = 0; i < data.length; i++) {
      $('.products').append(templateProduct(data[i].name, data[i].price_old, data[i].price_new, data[i].divider, 0, data[i].image))
    }
  })
})

$(window).load(function() {
  $('#slider').nivoSlider()
})

