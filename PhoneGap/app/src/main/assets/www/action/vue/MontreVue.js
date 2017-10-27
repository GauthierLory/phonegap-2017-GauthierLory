var MontreVue = function(montre)
{
	this.afficher = function()
	{
		$("body").html(MontreVue.pageMontre);

		$("#montre-nom").html(montre.nom);
		$("#montre-marque").html(montre.marque);
		$("#montre-description").html(montre.description);
		$("#montre-mecanisme").html(montre.mecanisme);
	}
}

MontreVue.pageMontre = $("#page-montre").html();
