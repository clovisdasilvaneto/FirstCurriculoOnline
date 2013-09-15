$(document).ready(function(){
			$("section").show();

			//Plugin para fazer um loop com callback
			// jQuery.slowEach = function(array,intervalo,callback){
			// 	if(!array.length) return;
			// 	var i = 0;
			// 	//chama a função next
			// 	next();
				
			// 	function next(){
			// 		if(callback.call(array[i],i,array[i]) !== false){
			// 			if (++i < array.length) {
			// 				setTimeout(next,intervalo);
			// 			}
			// 		}
			// 	}

			// }

			// jQuery.fn.slowEach = function(intervalo,callback){
			// 	return jQuery.slowEach(this,intervalo,callback);
			// }


			//variavel que conta o index das paginas

			$(".border-right").click(function(){
				var $obj = $(".ativo");
				if($obj.next().size()){
					$obj.css({
						"-webkit-transform":"rotateY(-180deg)",
						"-moz-transform":"rotateY(-180deg)",
						"-ms-transform":"rotateY(-180deg)",
						"-o-transform":"rotateY(-180deg)",
						"transform":"rotateY(-180deg)",
					}).find(".back").css({
						"z-index": "3",
						"background": "#3598DB",
						"opacity": "1"
					}).prev().css({"background": "#2A80B9", "opacity":0}).end().end().removeClass("ativo")
					.prev().removeClass("anterior").end().addClass("anterior").next().addClass("ativo");
				}else {

					vaiUltimoRight();
					setTimeout(voltaUltimoRight,500);
				}
			});

			$(".border-right-ultima").click(function(){
				var $obj = $(".ativo");

				if($obj.index() != $("section > article:last-child").index()){

					$("section > article").not(":last-child, :first-child").css({
						"-webkit-transform":"rotateY(-180deg)",
						"-moz-transform":"rotateY(-180deg)",
						"-ms-transform":"rotateY(-180deg)",
						"-o-transform":"rotateY(-180deg)",
						"transform":"rotateY(-180deg)"
					}).find(".back").css({
						"z-index": "3",
						"background": "#3598DB",
						"opacity": "1"
					}).prev().css({"background": "#2A80B9", "opacity":0});

					$obj.removeClass("ativo").prev().removeClass("anterior");

					$("section > article:last-child").addClass("ativo").prev().addClass("anterior");
				}else{
					vaiUltimoRight();
					setTimeout(voltaUltimoRight,500);
				}
		
			});


			//faz a ilusão de ida da ultima div da direita
			function vaiUltimoRight(){
				$(".ativo").css({
					"-webkit-transform":"rotateY(-60deg)",
					"-moz-transform":"rotateY(-60deg)",
					"-ms-transform":"rotateY(-60deg)",
					"-o-transform":"rotateY(-60deg)",
					"transform":"rotateY(-60deg)"
				});
			}


			//faz a ultima div da direita voltar
			function voltaUltimoRight(){	
				$(".ativo").css({
					"-webkit-transform":"rotateY(0)",
					"-moz-transform":"rotateY(0)",
					"-ms-transform":"rotateY(0)",
					"-o-transform":"rotateY(0)",
					"transform":"rotateY(0)"
				});
			}

			$(".border-left").click(function(){
				//logo quando o usuario abre a pagina 
				//a class ativo vai estar na segunda div

				//se ele clicar primeiramente no botão de voltar
				if(!$(".ativo").prev().prev().size()){
					vaiPrimeira();
					setTimeout(voltaPrimeira,500);
				}else {
					$(".ativo").removeClass("ativo").prev().removeClass("anterior").addClass("ativo").css({
						"-webkit-transform":"rotateY(0deg)",
						"-moz-transform":"rotateY(0deg)",
						"-ms-transform":"rotateY(0deg)",
						"-o-transform":"rotateY(0deg)",
						"transform":"rotateY(0deg)"
					}).find(".back").css({
						"z-index": "3",
						"background": "#3598DB",
						"opacity": "0"
					}).prev().css({"background": "#2A80B9", "opacity":"1"}).end().end().prev().addClass("anterior");
				}
			});

			$(".border-left-primeira").click(function(){
				//logo quando o usuario abre a pagina 
				//a class ativo vai estar na segunda div

				// se ele clicar primeiramente no botão de voltar
				if($(".ativo").prev().index() == $("section header").index()){
					
					vaiPrimeira();
					setTimeout(voltaPrimeira,500);
				}else {
					$obj = $(".ativo");
					$("section > article").not(":last-child").css({
						"-webkit-transform":"rotateY(0deg)",
						"-moz-transform":"rotateY(0deg)",
						"-ms-transform":"rotateY(0deg)",
						"-o-transform":"rotateY(0deg)",
						"transform":"rotateY(0deg)"
					}).find(".back").css({
						"z-index": "3",
						"background": "#3598DB",
						"opacity": "0"
					}).prev().css({"background": "#2A80B9", "opacity":1});

					$obj.removeClass("ativo").prev().removeClass("anterior");

					$("section > article:eq(0)").addClass("ativo").prev().addClass("anterior");
				}
			});

			function vaiPrimeira(){
				$("section > header").css({
					"-webkit-transform-origin":"100% 0",
					"-webkit-transform":"rotateY(60deg)",
					"-moz-transform":"rotateY(60deg)",
					"-ms-transform":"rotateY(60deg)",
					"-o-transform":"rotateY(60deg)",
					"transform":"rotateY(60deg)"
				});	
			}

			function voltaPrimeira(){
				$("section > header").css({
					"-webkit-transform":"rotateY(0deg)",
					"-moz-transform":"rotateY(0deg)",
					"-ms-transform":"rotateY(0deg)",
					"-o-transform":"rotateY(0deg)",
					"transform":"rotateY(0deg)"
				});	
			}
		});