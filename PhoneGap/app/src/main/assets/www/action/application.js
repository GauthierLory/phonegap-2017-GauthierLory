var applicationListeNoel =
{
    cadeauDAO : new CadeauDAO(),
    //ajouterCadeauVue : new AjouterCadeauVue(),
    lancer : function()
    {
	    $(window).on('hashchange',$.proxy(this.naviguer,this));
	        this.naviguer();
    },

    naviguer : function(){
        var ancre = window.location.hash;
        if(!ancre){
            var listeCadeaux = this.cadeauDAO.getListeCadeau();
            var listeCadeauVue = new ListeCadeauVue(listeCadeaux);
            listeCadeauVue.afficher();
        }
        else{

            var trouvaille = ancre.match(/^#cadeau\/([0-9]+)/);
            var id = trouvaille[1];
            var cadeau = this.cadeauDAO.getCadeauParId(id);
            var cadeauVue = new CadeauVue(cadeau);
            cadeauVue.afficher();
        }

    }
}

applicationListeNoel.lancer();


/*
var applicationListeNoel =
{
	cadeauDAO : new CadeauDAO(),
	lancer:function()
	{
		$(window).on('hashchange', $.proxy(this.naviguer))
		this.naviguer();
	},

	naviguer:function()
	{
		var ancre = window.location.hash;
		if (!ancre)
		{

			var listeCadeau = this.cadeauDAO.getListeCadeau();
			var listeCadeauVue = new ListeCadeauVue(listeCadeau);
			listeCadeauVue.afficher();
		}

		else
		{
			var trouvaille = ancre.match(/^#cadeau\/([0-9])/);
			var id = trouvaille[1];
			console.log(" trouvaille[1]" + trouvaille[1]);
			var cadeau = this.cadeauDAO.getCadeauParId(id);
			var cadeauVue = new CadeauVue(cadeau);

			cadeauVue.afficher();

		}
	}
}
applicationListeNoel.lancer();

*/