var ModifierMontreVue = function ()
{
    instance = this;
    this.montre = null;

    this.afficher = function ()
    {
    $("body").html(ModifierMontreVue.pageModifierMontre);

    var montreNom = '<label for="nom">Nom</label><input type="text" name="nom" id="nom" value ="'+ montre.nom +'"/>';
    $("#nom").html(montreNom);

    var montreMarque = '<label for="marque">marque</mark></label><input type="text" name="marque" id="marque" value ="'+  montre.marque +'"/>';
    $("#marque").html(montreCouleur);

    var montreDescription = '<label for="description">Description</label><textarea name="description" id="description" value ="'+ montre.description +'"/>';
    $("#description").html(montreDescription);

    var montreTaille = '<label for="taille">taille</label><input type="text" name="taille" id="taille value ="'+ montre.taille +'"/>';
    $("#taille").html(montreTaille);

    var montreReference = '<label for="reference">reference</label><input type="text" name="reference" id="reference" value ="'+ montre.reference +'"/>';
    $("#reference").html(montreReference);

    var montrePrix = '<label for="prix">Prix</label><input type="text" name="prix" id="prix" value ="'+ montre.prix +'"/>';
    $("#prix").html(montrePrix);



        $("#formulaire-modifier").on("submit", function (evenement)
        {
            evenement.preventDefault();
            var nom = $("#nom").val();
            var marque = $("#marque").val();
            var description = $("#description").val();
            var taille = $("#taille").val();
            var reference = $("#reference").val();
            var prix = $("#prix").val();

              instance.montre = new Montre(nom, marque, description, taille, reference,prix)
            window.location.hash = "#ModifierMontreVue:NouveauMontre";
        });
    }
}
ModifierMontreVue.pageModifierMontre = $("#page-modifier-montre").html();
