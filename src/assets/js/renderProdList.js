import db_prod from './dbProd'

const insertProductItemToParentNode = prodItem => {
	const prod_list_container = document.querySelector('.bc-prod__list') 
	prod_list_container.insertAdjacentElement('beforeend', prodItem)
}

const mountProductItemsList = (el, ind) => {
	
	const prod_item = document.createElement('li')
	const prod_link = document.createElement('a')
	const prod_image = document.createElement('img')
	const prod_title = document.createElement('h2')
    const prod_rating = document.createElement('div')
    const prod_rating_item = document.createElement('span')
	const prod_price = document.createElement('div')
	const prod_price_value_off = document.createElement('p')
    const prod_price_value_on = document.createElement('p')
    const prod_call_to_action = document.createElement('div')
    const prod_btn = document.createElement('button')

	prod_item.setAttribute('class', 'bc-featured__item  bc-prod__item')
	prod_link.setAttribute('class', 'bc-featured__link  bc-prod__link')
	prod_image.setAttribute('class', 'bc-featured__image  bc-prod__image')
	prod_title.setAttribute('class', 'bc-featured__title  bc-prod__title')
    prod_title.setAttribute('class', 'bc-featured__title  bc-prod__title')
    prod_rating.setAttribute('class', 'bc-prod__rating')
    prod_rating_item.setAttribute('class', 'bc-prod__rating_item')
    prod_price.setAttribute('class', 'bc-prod__price')
	prod_price_value_off.setAttribute('class', 'bc-prod__price_off')
    prod_price_value_on.setAttribute('class', 'bc-prod__price_on')
    prod_call_to_action.setAttribute('class', 'bc-prod__call-to-action')
    prod_btn.setAttribute('class', 'bc-btn')
	
	prod_item.setAttribute('id', el.code)
	prod_link.setAttribute('href', `#prod${el.code}`)
    prod_image.setAttribute('src', el.image.url)
    prod_image.setAttribute('alt', 'imagem do produto')
    prod_image.setAttribute('title', `produto ${el.title}`)
    prod_btn.setAttribute('type', 'button')
    prod_btn.setAttribute('value', 'comprar')

    prod_title.textContent = el.title
    prod_rating_item.textContent = `Rating -> ${el.rating}`
	prod_price_value_off.textContent = `de R$ ${(el.price.off).toFixed(2)}`
    prod_price_value_on.textContent = `por R$ ${(el.price.on).toFixed(2)} ou em 3x de R$ ${el.getInstallments(3)}`
    prod_btn.textContent = 'comprar'

    prod_link.insertAdjacentElement('beforeend', prod_image)
    prod_rating.insertAdjacentElement('beforeend', prod_rating_item)
	prod_price.insertAdjacentElement('beforeend', prod_price_value_off)
    prod_price.insertAdjacentElement('beforeend', prod_price_value_on)
    prod_call_to_action.insertAdjacentElement('beforeend', prod_btn)

	prod_item.insertAdjacentElement('beforeend', prod_link)
    prod_item.insertAdjacentElement('beforeend', prod_title)
    prod_item.insertAdjacentElement('beforeend', prod_rating)
    prod_item.insertAdjacentElement('beforeend', prod_price)
    prod_item.insertAdjacentElement('beforeend', prod_call_to_action)

	insertProductItemToParentNode(prod_item)

}

db_prod.forEach(mountProductItemsList)