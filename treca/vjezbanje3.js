//zelim da mi naprvi kopiju i da tu kopiju pribaci u mjesto_prikaza uz animaciju

$(document).ready (function () {

    var slike = $('img');
    var mjesto_prikaza = $ ('#mjesto_prikaza');
    var informacije = $ ('#informacije');


    //zelim kada kliknem na sliku da se desava sve

    slike.on ('click',function () {

        //#7 zelimo da brisemo iz diva informacije tekst
        informacije.html ('');



        //#1
        var self = $(this);
        var kopiraj =self.clone();
        var  brisanje_slika_iz_diva = mjesto_prikaza.children().length; //za brisanje slika iz diva mjesto_prikaza

        //#3
        kopiraj.css({
            'position': 'absolute',
            'width' : self.width(), //od ove slike zelim istu visinu
            'height' :self.height(), ////od ove slike zelim istu sirinu
            'top'    :self.offset().top, //od ove slike zelim kordinate top
            'left'   :self.offset ().left ////od ove slike zelim kordinate left


        })

        //#5 brisanje slika iz diva sa id mjesto_prikaza
        //Kada smo zavrsili 4 korak,sada posto se slike dodaju u div mjesto_prikaza,previse klikanjem na slike(dodaju se slike),moze opteretit nas program,zelimo da brisemo te slike nakon svakog klika
         
      

        if (brisanje_slika_iz_diva == 1) {  //prva slika ce biti 0, zatim druga slika ce imati vrijednost niza 1 i onda ce da brise slike.Kada se koristi length njegova vrijednost u array (nizu)

            mjesto_prikaza.html('');
        }
        //ukoliko stavimo i else (prvo ce nam else prikazati jer if nema vrijednost 1,kada klikneo opet sliku tada dolazi nas if na red)

       

       //#2 dodavanje slika preko klika
        $(mjesto_prikaza).append(kopiraj); //zelimo da nam slike dodaje u divu sa id mjesto_prikaza
        //dobili smo da nam ubacuje slike sada trebamo staviti da su iste dimenzije kao u galeriji

       
       
        

        console.log (brisanje_slika_iz_diva);
      

        //#4 sada kada smo kopirali slike u slici i dodajemo slike u divu mjesto_prikaza,zelimo preko animacije da nam iz bodija kopija ide u mjesto_prikaza (tu zelimo da prikazemo kliknutu sliku)
         
        kopiraj.animate({ //zelim kopiraj da ima animaciju
            'top' : mjesto_prikaza.offset().top, //zelim da dodijelim vrijednost po topu  varijabli kopiraj (slika na koju se klikne),ta vrijednost ce biti kordinate od  varijable mjesto_prikaza (okvir u kojem ce se prikazati jedna slika)
            'left' : mjesto_prikaza.offset ().left, //zelim da dodijelim vrijednosti po leftu varijabli kopiraj (slika na koju se klikne), ta vrijednost ce da bude kordinate od   varijable mjesto_prikaza (okvir u kojem ce se prikazati slika)
             'width':mjesto_prikaza.width(), //zelim da varijabli kopiraj (slika na koju se klikne) dodijelim sirinu od varijable mjesto_prikaza (okvir u kojem se prikazuje slika)
             'height':mjesto_prikaza.height() //zelim da varijabli kopiraj (slika na koju se klikne) dodijelim visinu od varijavle mjesto_prikaza (okvir u kojem se prikazuje slika)


        },1500,function () {

            //#6 sad zelimo da nam se tekst prikaze kada se slika premjesti.Ovo moze biti i peti korak ali eto prvo smo napravili brisanje 

            informacije.append ('<h1 style="text-align:center; background:black;color:white;">INFORMACIJE O SLICI</h1> <br><br><p class="info">Slika nema još informacija!<p> <br><img class="uskoro" src ="slika_za_vjezbu3/uskoro.jpg"/>')
            


        })

    })







});