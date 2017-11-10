var AjouterMontreVue = function()
{
   instance = this;
   this.montre = null;
   this.afficher = function()
   {
       this.montre = null;

       $('#body').html(AjouterMontreVue.pageAjouterMontre);

       $("#formulaire-ajouter").on("submit", function(evenement) 
       	{
       		evenement.preventDefault();
       		var nom = $("#nom").val();
       		var nom = $("#marque").val();
       		var nom = $("#description").val();
       		var nom = $("#taille").val();
       		var nom = $("#reference").val();
       		var nom = $("#prix").val();

       		instance.montre = new Montre(nom ,marque, description,taille,reference,prix)
       		window.location.hash = "#AjouterMontreVue:NouvelleMontre";
       	} );

   }
}

AjouterMontreVue.pageAjouterMontre = $("#page-ajouter-montre").html();
