var CadeauDAO = function()
{
    listeCadeau = [
        {"id" :1, "nom" : "Pebble","marque" : "Pebble", "description" : "montre intelligente"},
        {"id" :2, "nom" : "Tesla","marque" : "model S", "description" : "voiture electrique"}
    ];

    this.getListeCadeau = function()
    {
        return listeCadeau;
    }

    this.getCadeauParId = function (id)
    {
    	//for (var cadeau in listeCadeau)
    	//{
    //		if(cadeau.id == id) return cadeau;
    //	}


		for (var indiceCadeau in listeCadeau)
		{
		    cadeau = listeCadeau[indiceCadeau];
		    if(cadeau.id == id ) return cadeau;
		}
    }
}