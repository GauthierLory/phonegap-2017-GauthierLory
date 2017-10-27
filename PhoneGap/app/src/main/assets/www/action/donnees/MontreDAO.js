var MontreDAO = function()
{
    listeMontre = [
        {"id" :1, "nom" : "Royal Oak Nautilus","marque" : "Patek Philippe", "description" : "Montre" , "mecanisme" : "automatique"},
        {"id" :2, "nom" : "Panerai Radiomir 10 DAYS","marque" : "Panerai", "description" : "Montre" ,  "mecanisme" : "automatique"}
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
