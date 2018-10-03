// Template engine

// Infos

// OBS*** Lembrar de executar Fetch API no lugar de var dados (chamar por uma url API)


function renderTemplate(productTemplateBase, dadosProduto) {
 return productTemplateBase
 	.replace('##IMAGE_URL', dadosProduto.image)
 	.replace('##TITLE##',  dadosProduto.title)
 	.replace("##DESC##",  dadosProduto.description)
	.replace("##PRICE##",  dadosProduto.price)
	.replace("##OLD_PRICE##",  dadosProduto.old_price)
}


function renderAllProducts(productTemplateBase, products) {
	var outputHTML = '' 

	for(var i = 0; i < products.length; i++ ) {
	   outputHTML += renderTemplate(productTemplateBase, products[i])
	}

	return outputHTML
}
