import * as testWebp from './modules/testWebp.js'

testWebp.isWebp();


let elements = {
	serviceItems: {
		name: document.querySelectorAll(".item"),		
	},
	burger: {
		name: document.querySelector(".icon-menu"),
		click: function () {
			this.name.addEventListener("click", function(e) {
				e.preventDefault();								
				this.classList.toggle("icon-menu_active");
				if(this.classList.contains('icon-menu_active')){
					elements.menulist.show();
				} else{
					elements.menulist.hide();
					
				}

			})			
		}		
	},
	menulist: {
		name: document.querySelector(".menu__list"),
		show: function () {
			this.name.classList.add("menu__list_active");
		},
		hide: function () {
			this.name.classList.remove("menu__list_active");
		},
	},
	sliderArrow: {
		name: document.querySelectorAll(".services__arrow"),
		hideTitleArrow: function () {
			if(screen.width < 992.74){				
				for (let i = 0; i < this.name.length; i++){
					this.name[i].innerHTML = "";
				}					
			}
		}
	},
	
}





elements.burger.click();
elements.sliderArrow.hideTitleArrow();





















