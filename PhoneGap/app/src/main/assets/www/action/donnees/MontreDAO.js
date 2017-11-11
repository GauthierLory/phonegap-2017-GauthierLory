var MontreDAO = function()
{
    var montre1 = new Montre(1,"Royal Oak Nautilus","PATEK PHILIPPE", "Montre automatique" ,"40MM" ,"reference", "32 800 euros");
    var montre2 = new Montre(2,"Panerai Radiomir 10 DAYS","PANERAI","Montre automatique","47MM","reference","10 400 euros");
    var montre3 = new Montre(3,"Calibre 381","JAEGER-LECOULTRE","Montre automatique","42MM","6042422","39 000 euros");
    var montre4 = new Montre(4,"Oyster Perpetual Datejust II","ROLEX","Montre automatique","41MM","116333-72213","11 000 euros");

    listeMontre = [montre1,montre2,montre3,montre4];
   /* listeMontre = [
        {"id" :1, "nom" : "Royal Oak Nautilus","marque" : "PATEK PHILIPPE", "description" : "Montre automatique" , "taille" : "40MM" , "reference" : "ref : 5711/1A" , "prix" : "32 800 euros"},

        {"id" :2, "nom" : "Panerai Radiomir 10 DAYS","marque" : "PANERAI", "description" : "Montre automatique" ,  "taille" : "47MM" , "reference" : "ref : PAM00391" , "prix" : "10 400 euros"},

        {"id" :3, "nom" : "Calibre 381","marque" : "JAEGER-LECOULTRE", "description" : "Montre automatique" ,  "taille" : "42MM" , "reference" : "ref : 6042422" , "prix" : "39 000 euros"},

        {"id" :4, "nom" : "Oyster Perpetual Datejust II","marque" : "ROLEX", "description" : "Montre automatique" ,  "taille" : "41MM" , "reference" : "ref : 116333-72213" , "prix" : "11 000 euros"}
    ];
    */

  this.getListeMontre = function()
    {
        return listeMontre;
    }

    trouverNouvelId = function ()
    {
        maximum = 0;
        for (var indiceMontre in listeMontre)
        {
            montre = listeMontre[indiceMontre];
            if (montre.id > maximum)
                maximum = montre.id;
        }
        return maximum + 1;
    }
    this.ajouterMontre = function (montre)
    {
        montre.id = trouverNouvelId();
        listeMontre.push(montre);
    }

    this.getMontreParId = function (id)
    {
        for (var indiceMontre in listeMontre)
        {
            montre = listeMontre[indiceMontre];
            if (montre.id == id) return montre;
        }
    }
}
