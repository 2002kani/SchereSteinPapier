const wahlfelder = document.querySelectorAll(".wahlfeld");
const computer = document.querySelector("#computerWahl");
const ergebnisAnzeige = document.querySelector("#ergebnis");
const siegeAnzeige = document.querySelector("#siege");
const niederlageAnzeige = document.querySelector("#niederlagen");
const auswahlArray = ["Schere", "Stein", "Papier"];
let computerAuswahl;
let userWahl;
let ergebnis;
let zählerSiege = 0;
let zählerNiederlage = 0;


wahlfelder.forEach(function(auswahl){
    auswahl.addEventListener("click", function(e){
        userWahl = e.target.id;
        
        computerGenerieren();
        ergebnisGenerieren();
        counterGenerieren();
    });
});

function computerGenerieren(){
    const randomZahl = Math.floor(Math.random() * auswahlArray.length);

    if(randomZahl === 0){
        computerAuswahl = "Schere";
    }
    if(randomZahl === 1){
        computerAuswahl = "Stein";
    }
    if(randomZahl === 2) {
        computerAuswahl = "Papier";
    }
    computer.textContent = computerAuswahl;
};

function ergebnisGenerieren(){
     if((computerAuswahl === "Schere" && userWahl === "schere") ||
        (computerAuswahl === "Stein" && userWahl === "stein") ||
        (computerAuswahl === "Papier" && userWahl === "papier")) {
        ergebnis = "Unentschieden!"; }

    else if((computerAuswahl === "Schere" && userWahl === "papier") ||
            (computerAuswahl === "Stein" && userWahl === "schere") ||
            (computerAuswahl === "Papier" && userWahl === "stein")){
                ergebnis = "Verloren!"; 
                zählerNiederlage++;
    } else {
        ergebnis = "Gewonnen!";
        zählerSiege++;
    }
    ergebnisAnzeige.innerHTML = ergebnis;
};

function counterGenerieren(){
    niederlageAnzeige.textContent = zählerNiederlage;
    siegeAnzeige.textContent = zählerSiege;
}