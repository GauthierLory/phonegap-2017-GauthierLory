var applicationListeNoel =
{
	cadeauDAO : new CadeauDAO(),
	lancer:function()
	{
		this.naviguer();
	},

	naviguer:function()
	{

		var listeCadeau = this.cadeauDAO.getListeCadeau();

		var listeCadeauVue = new ListeCadeauVue(listeCadeau);
		listeCadeauVue.afficher();
	}
}


applicationListeNoel.lancer();


/*
var cadeau = cadeauDAO.getCadeauParId(1);
var cadeauVue = new CadeauVue(cadeau);

cadeauVue.afficher();
*/