/*
Slider vertical
autor: coyr
Sitio: www.xoyaz.com
*/ 
	velocidad = 1500;
	tiempoEspera = 3000;
	verificar = 1;
	dif=0;
	timer=0
	slide=1;
	
	function inciarSlider() {
		sliderAltura = $(".bloque-slider").height();
		moduloAltura = $(".modulo-slider").height() + parseFloat($(".modulo-slider").css("padding-top")) + parseFloat($(".modulo-slider").css("padding-bottom"));
		sliderTop = parseFloat($(".bloque-slider").css("top"));	
		dif = sliderAltura + sliderTop;				
	}	

	function boton(sl) {
		salto = 0;
		if (slide > sl) {
			salto = slide - sl;
			$(".bloque-slider").animate({top: "+="+(moduloAltura*salto) }, velocidad);
		}else{
			if (slide < sl) {
				salto = sl - slide;
				$(".bloque-slider").animate({top: "-="+(moduloAltura*salto) }, velocidad);
			}
		}
		slide = sl;		
	}

	function bajarSlider() {
		alert("dif[" + dif + "] moduloAltura[" + moduloAltura + "] sliderTop[" + sliderTop + "]");
		if (dif>moduloAltura*2) {
			$(".bloque-slider").animate({top: "-="+moduloAltura }, velocidad);
			sliderTop = parseFloat($(".bloque-slider").css("top"));
			dif = sliderAltura + sliderTop;
		}else{
			
			$(".bloque-slider").animate({top: "0" }, velocidad);	
		}


/*
		if(dif>=moduloAltura*2) {
			alert(25);
					$(".bloque-slider").animate({top: "-="+moduloAltura }, velocidad);
				}
				else {
					alert(26);
					$(".bloque-slider").css({ top: 0});
					$(".bloque-slider").animate({top: "-="+moduloAltura }, velocidad);		
				} 

				*/
	}
	function subirSlider() {
		if(sliderTop<=-moduloAltura) {
					$(".bloque-slider").animate({top: "+="+moduloAltura }, velocidad);	
				}
				else {
					$(".bloque-slider").css({ top: -sliderAltura+moduloAltura});
					$(".bloque-slider").animate({top: "+="+moduloAltura }, velocidad);						
				} 
	}