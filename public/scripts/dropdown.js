var menu = (function(){
	
	var dropdownTrigger = document.querySelector('.dropdown a');
	var dropdownUl = document.querySelector('.dropdown-content');

	//Muda estado de aberto ou fechado de menu clicando em "login"
	function mudaMenu(){
		var display = encontraStyle(dropdownUl, 'display');
		if(display === "none"){
			dropdownUl.style.display = "block";
			setTimeout(function(){
				dropdownUl.classList.add("autoHeight");
			}, 50);
		}else{
			dropdownUl.style.display = "none";
			dropdownUl.classList.remove("autoHeight");
		}
	}

	//Pega valor de display
	function encontraStyle(selector, attr){
		var style;
		//IE
		if(selector.currentStyle){
			style = selector.currentStyle[attr];
		//Outros
		}else if(window.getComputedStyle){
			style = window.getComputedStyle(selector, null).getPropertyValue(attr);
		}else{
			style = null;
		}
	    return style;
	}

	//Fecha menu ao clicar fora
	window.addEventListener('mouseup', function(event){
		//Determina se elemento está dentro de dropdown
		var insideMenu = dropdownUl.contains(event.target);
		console.log(event.target)
		//Se não estiver, esconde menu
		if(!insideMenu){
			//Se elemento clicado não for o botão de "login"
			if(event.target !== dropdownTrigger){
	   			dropdownUl.style.display = 'none';
	   			dropdownUl.classList.remove("autoHeight");
			}
		}
	});

	return{
		mudaMenu: mudaMenu
	}

})();
