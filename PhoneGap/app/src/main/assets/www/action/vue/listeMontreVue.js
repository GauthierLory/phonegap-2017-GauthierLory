var ListeMontreVue = function()
{
	this.afficher = function()
	{

		$("body").html(ListeMontreVue.pageListeMontre);

		var htmlListeMontre = $("#liste-montre");

		var li = "";

		var montreDAO = new MontreDAO();

		var listeMontre = montreDAO.getListeMontre();

		for (var indiceMontre in listeMontre)
		{
		    li += '<li><a href = "#montre/'+listeMontre[indiceMontre].id+'">'+ listeMontre[indiceMontre].nom+ '</a></li>';
		    // +listeCadeau[indiceCadeau].marque+ " " +listeCadeau[indiceCadeau].description+"</li>";
		}
		htmlListeMontre.html(li);
	}
}

ListeMontreVue.pageListeMontre = $("#page-liste-montre").html();