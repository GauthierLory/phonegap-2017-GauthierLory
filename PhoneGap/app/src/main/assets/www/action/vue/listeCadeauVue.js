var ListeCadeauVue = function()
{
    this.afficher = function()
    {
        var pageListeCadeau = $("#page-liste-cadeau").html();

        $("body").html(pageListeCadeau);

        var htmlListeCadeau = $("#liste-cadeau");

        var li = "";

        var cadeauDAO = new CadeauDAO();

        var listeCadeau = cadeauDAO.getListeCadeau();

        for (var indiceCadeau in listeCadeau)
        {
            li += '<li><a href = "#cadeau/'+ indiceCadeau +'">'+ listeCadeau[indiceCadeau].nom + '</a></li>';
        }
        htmlListeCadeau.html(li);
    }
}