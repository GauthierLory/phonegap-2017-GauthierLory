var CadeauVue = function (cadeau)
{
    this.afficher = function (cadeau)
    {
        var pageListeCadeau = $("#page-cadeau").html();

        $("body").html(pageCadeau);

        $("#cadeau-nom").html(cadeau.nom);
        $("#cadeau-marque").html(cadeau.marque);
        $("#cadeau-description").html(cadeau.description);
    }
}