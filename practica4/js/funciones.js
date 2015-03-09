$(document).ready(
	function(){

		var nuevacarta;
		var cont = 0;
		setInterval(
			function(){
				//console.log('Hola');
				//console.log(Math.round(Math.random()*10));
				nuevacarta = 'img/loteria-'+cont+'.jpg';
				$('#cartaMaestra').attr('src',nuevacarta);
				cont ++;

				if (cont > 3) {
					cont = 0;
				};

			},2000
		);

		$('.carta').click(
			function(){
				$(this).hide();
			}
		);

	}
);