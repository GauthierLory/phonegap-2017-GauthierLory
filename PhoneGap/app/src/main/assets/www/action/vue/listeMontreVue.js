var ListeMontreVue = function (listeMontre)
{
    this.afficher = function()
    {

        $("body").html(ListeMontreVue.pageListeMontre);

        var htmlListeMontre = $("#liste-montre");
        var li = "";
        for (var indiceMontre in listeMontre)
        {
            li += '<li><a href="#montre/' + listeMontre[indiceMontre].id +'">' + listeMontre[indiceMontre].nom + '</a></li>';

        }
        htmlListeMontre.html(li);
    }
}
ListeMontreVue.pageListeMontre = $("#page-liste-montre").html();
