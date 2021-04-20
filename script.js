window.addEventListener("load", function(){
	var verifica = document.querySelectorAll('.cartas img');
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var reiniciar = document.getElementById("reiniciar");
	var ganhador = document.getElementById("Iganhador")
	for(var i = 0; i < verifica.length; i++)
	{
		verifica[i].addEventListener("click", function(){
			if(img1.getAttribute("src") ==  "image/transparente.png")
			{
				img1.setAttribute("src", this.getAttribute("src"));
				goku();
				vencedor();
			}
		})
	}
	reiniciar.addEventListener("click", function(){
		img1.setAttribute("src", "image/transparente.png");
		img2.setAttribute("src", "image/transparente.png");
		ganhador.innerHTML = "";

	})

	function goku()
	{
		var j = Math.floor(Math.random() * 3);

		if(j == 0)
		{
			img2.setAttribute("src", "image/papelGoku.png")
		}
		else if(j == 1)
		{
			img2.setAttribute("src", "image/pedraGoku.png")
		}
		else
		{
			img2.setAttribute("src", "image/tesouraGoku.png")
		}
	}

	var ptv = 0;
	var ptg = 0;

	function vencedor()
	{
		var placarvoce = document.getElementById("placarvoce1");
		var placargoku = document.getElementById("placargoku1");

		if((img1.getAttribute("src") == "image/papel.png") && (img2.getAttribute("src") == "image/papelGoku.png") || (img1.getAttribute("src") == "image/pedra.png") && (img2.getAttribute("src") == "image/pedraGoku.png") || (img1.getAttribute("src") == "image/tesoura.png") && (img2.getAttribute("src") == "image/tesouraGoku.png"))
		{
			ganhador.innerHTML = "EMPATE!";
			ganhador.style.color = "#ffd866";
		}
		else if((img1.getAttribute("src") == "image/papel.png") && (img2.getAttribute("src") == "image/pedraGoku.png") || (img1.getAttribute("src") == "image/pedra.png") && (img2.getAttribute("src") == "image/tesouraGoku.png") || (img1.getAttribute("src") == "image/tesoura.png") && (img2.getAttribute("src") == "image/papelGoku.png"))
		{
			ganhador.innerHTML = "Você Ganhou!";
			ganhador.style.color = "#cfcfcf";
			ptv++;
			placarvoce.innerHTML = ptv;
		}
		else
		{
			ganhador.innerHTML = "Goku Ganhou!";
			ganhador.style.color = "black";
			ptg++;
			placargoku.innerHTML = ptg;
		}	
	}
})