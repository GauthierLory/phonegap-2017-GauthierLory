var MontreDAO = function()
{
    listeMontre = [
        {"id" :1, "nom" : "Royal Oak Nautilus","marque" : "PATEK PHILIPPE", "description" : "Montre automatique" , "taille" : "40MM" , "reference" : "ref : 5711/1A" , "prix" : "32 800 euros"},

        {"id" :2, "nom" : "Panerai Radiomir 10 DAYS","marque" : "PANERAI", "description" : "Montre automatique" ,  "taille" : "47MM" , "reference" : "ref : PAM00391" , "prix" : "10 400 euros"},

        {"id" :3, "nom" : "Calibre 381","marque" : "JAEGER-LECOULTRE", "description" : "Montre automatique" ,  "taille" : "42MM" , "reference" : "ref : 6042422" , "prix" : "39 000 euros"},

        {"id" :4, "nom" : "Oyster Perpetual Datejust II","marque" : "ROLEX", "description" : "Montre automatique" ,  "taille" : "41MM" , "reference" : "ref : 116333-72213" , "prix" : "11 000 euros"}
    ];

    this.getListeMontre = function()
    {
        return listeMontre;
    }

    this.getMontreParId = function (id)
    {
		for (var indiceMontre in listeMontre)
		{
		    montre = listeMontre[indiceMontre];
		    if(montre.id == id ) return montre;
		}
    }
}
