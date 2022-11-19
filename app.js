//Eltárolok mindent változókba, amit használni szeretnék (prev, next, thumb, hero)
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumb = document.getElementsByClassName("thumb"); //az összes thumb klasszú elemet választja ki nem pedig csak egyet
var hero = document.getElementById("hero");

//Eltárolom az összes képem elérési útját egy tömbben
var backgroundImage = [
    "bg1.jpg",
    "bg2.jpg",
    "bg3.png",
    "bg4.jpg",
    "bg5.png"
]

var i = 0; //kezdőértéket felvettem, szimuláljuk a ciklust

//Hozzáadok egy click eseményt a next gombomhoz(oldal frissítése nélkül balról jobbra és onnan visszafele balra lehet lépkedni a képeken!)
next.addEventListener("click", function(){
    if(i < 4 ) { //Amíg a tömbön belüli 4. indexet nem haladom meg (amíg az utolsó képemet el nem érem)
     
        //i az mindig nulla, i+1 1-es indexű képre vált
       
        
        //Addig meg kell változtatnia a hero elemem háttérképét a tömbben tárolt következő képre
        hero.style.backgroundImage = "url('"+ backgroundImage[i+1]+"')";
        //A következő kisképhez hozzá kell adnom az active classt
        thumb[i+1].classList.add("active");
        //Az előző kisképről le kell vennem az active classt és az i++;-al növel 1-et és végig megy az utolsó elemig
        thumb[i].classList.remove("active");
        //háttérkép átmenetes megváltoztatása
        hero.style.transition = "background 0.8s ease";
        //növeli az értékét 1-el, tehát lépked!
        i++;
    } else if (i == 4) {
        //Ha elérte a tömben az utolsó képet akkor leveszi róla az active kiemelést és a sor elejére ugrik az első képre és rárakja az active classt, hogy kiemelődjön
        thumb[i].classList.remove("active");
        //Elveszi az utolsó elemről a 4-es indexet és a sor elejére ugrik, mert -1 kisebb mint 0 (ergo reset-eli)
        i = -1;
        thumb[i+1].classList.add("active");  
    }
        
})

    //Visszafelé lapozás: hozzáadok egy click eseményt a prev gombomhoz
prev.addEventListener("click", function() {
    //Ha nagyobb mint 0- az azt jelenti, hogy a tömböm elején vagyok és tudok visszafele lépkedni
    if (i > 0) {
        //Addig meg kell változtatnia a hero elemem háttérképét a tömbben tárolt előző képre
        hero.style.backgroundImage = "url('"+ backgroundImage[i-1]+"')";
        //A előző kisképhez hozzá kell adnom az active classt
        thumb[i-1].classList.add("active");
        //Az elötte lévő kisképről(a kiinduló pont) le kell vennem az active classt és az i--;-al csökkentve 1-et és vissza megy az első elemig
        thumb[i].classList.remove("active");
        //háttérkép átmenetes megváltoztatása
        hero.style.transition = "background 0.8s ease";
        //csökkenti az értékét 1-el, tehát lépked!
        i--;
    }
})
