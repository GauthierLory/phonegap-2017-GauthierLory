var MontreVue = function(montre)
{
	this.afficher = function()
	{
		$("body").html(MontreVue.pageMontre);

		$("#montre-nom").html(montre.nom);
		$("#montre-marque").html(montre.marque);
		$("#montre-description").html(montre.description);
		$("#montre-taille").html(montre.taille);
		$("#montre-reference").html(montre.reference);
		$("#montre-prix").html(montre.prix);
		
	}
}

MontreVue.pageMontre = $("#page-montre").html();
