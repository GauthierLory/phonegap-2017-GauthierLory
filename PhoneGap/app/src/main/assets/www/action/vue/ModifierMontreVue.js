var ModifierMontreVue = function ()
{
    instance = this;
    this.montre = null;
    this.afficher = function ()
    {
        this.montre = null;

        $("body").html(ModifierMontreVue.pageModifierMontre);

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
