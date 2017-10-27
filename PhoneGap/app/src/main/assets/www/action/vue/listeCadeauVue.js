var ListeCadeauVue = function()
{
	this.afficher = function()
	{

		//var pageListeCadeau = $("#page-liste-cadeau").html();

		$("body").html(ListeCadeauVue.pageListeCadeau);

		var htmlListeCadeau = $("#liste-cadeau");

		var li = "";

		var cadeauDAO = new CadeauDAO();

		var listeCadeau = cadeauDAO.getListeCadeau();

		for (var indiceCadeau in listeCadeau)
		{
		    li += '<li><a href = "#cadeau/'+listeCadeau[indiceCadeau].id+'">'+ listeCadeau[indiceCadeau].nom+ '</a></li>';
		    // +listeCadeau[indiceCadeau].marque+ " " +listeCadeau[indiceCadeau].description+"</li>";
		}
		htmlListeCadeau.html(li);
	}
}

ListeCadeauVue.pageListeCadeau = $("#page-liste-cadeau").html();
