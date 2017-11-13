var MontreDAO = function()
{
    var montre1 = new Montre("Royal Oak Nautilus","PATEK PHILIPPE", "Montre automatique" ,"40MM" ,"reference", "32 800 euros",1);
    var montre2 = new Montre("Panerai Radiomir 10 DAYS","PANERAI","Montre automatique","47MM","reference","10 400 euros",2);
    var montre3 = new Montre("Calibre 381","JAEGER-LECOULTRE","Montre automatique","42MM","6042422","39 000 euros",3);
    var montre4 = new Montre("Oyster Perpetual Datejust II","ROLEX","Montre automatique","41MM","116333-72213","11 000 euros",4);

    listeMontre = [montre1,montre2,montre3,montre4];

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

    this.modifierMontre = function(montreModifier)
    {
        for (var indiceMontre in listeMontre)
        {
            montre = listeMontre[indiceMontre];
            if(montre.id == montreModifier.id)
            {
                listeMontre[indiceMontre] = montreModifier;
                return;
            }
        }
    }


}
