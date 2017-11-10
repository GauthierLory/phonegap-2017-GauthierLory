var AjouterMontreVue = function()
{
   instance = this;
   this.cadeau = null;
   this.afficher = function()
   {
       this.cadeau = null;

       $('#body').html(AjouterMontreVue.pageAjouterCadeau);

       $("#formulaire-ajouter").on("submit", function(evenement) 
       	{
       		evenement.preventDefault();
       		var nom = $("#nom").val();
       		var nom = $("#marque").val();
       		var nom = $("#description").val();
       		var nom = $("#taille").val();
       		var nom = $("#reference").val();
       		var nom = $("#prix").val();
       	} )
   }
}