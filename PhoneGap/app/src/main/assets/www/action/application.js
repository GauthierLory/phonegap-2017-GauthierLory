var applicationListeCollection =
{
    montreDAO: new MontreDAO(),
    ajouterMontreVue: new AjouterMontreVue(),
    lancer: function ()
    {
        $(window).on('hashchange', $.proxy(this.naviguer, this));
        this.naviguer();
    },

    naviguer: function ()
    {
        var ancre = window.location.hash;

        if (!ancre)
        {
            var listeMontre = this.montreDAO.getListeMontre();
            var listeMontreVue = new ListeMontreVue(listeMontre);

            listeMontreVue.afficher();
        }

        else if(ancre.match(/^#ajouter-montre/))
        {
            this.ajouterMontreVue.afficher();
        }

        else if (ancre.match(/^#AjouterMontreVue:NouveauMontre/))
        {
            var montre = this.ajouterMontreVue.montre;
            this.montreDAO.ajouterMontre(montre);
            window.location.hash = "#";
        }

        else
        {
            var trouvailles = ancre.match(/^#montre\/([0-9]+)/);
            var id = trouvailles[1];
            var montre = this.montreDAO.getMontreParId(id);
            var montreVue = new MontreVue(montre);
            montreVue.afficher();
        }
    }
}
applicationListeCollection.lancer();
