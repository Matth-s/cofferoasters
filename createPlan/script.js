const titreDeroulant = document.querySelectorAll('.titre-deroulant');
const planDeroulant = document.getElementsByClassName('plan-deroulant');
const choix = document.getElementsByClassName('choix');
const arrow = document.getElementsByClassName('arrow');
const body = document.querySelector('body');

let countUn = 0;
let countDeux = 0;
let countTrois = 0;
let countQuatres = 0;
let countCinq = 0;

titreDeroulant.forEach((item) => {
    item.addEventListener('click', function(e) {
        

        switch (e.target.id) {
            case "un":
                planDeroulant[0].style.height = "auto";
                choix[0].style.transform = "scaleY(1)";
                choix[0].style.transition = "0.6s";
                arrow[0].style.transform = "rotate(0.5turn)";
                countUn++;

                if(countUn == 2) {
                    planDeroulant[0].style.height = "";
                    choix[0].style.transform = "";
                    choix[0].style.transition = "0s";
                    arrow[0].style.transform = "";
                    countUn = 0;
                }
                break;

            case "deux":
                planDeroulant[1].style.height = "auto";
                choix[1].style.transform = "scaleY(1)";
                choix[1].style.transition = "0.6s";
                arrow[1].style.transform = "rotate(0.5turn)";
                countDeux++;

                if(countDeux == 2) {
                    planDeroulant[1].style.height = "";
                    choix[1].style.transform = "";
                    choix[1].style.transition = "0s";
                    arrow[1].style.transform = "";
                    countDeux = 0;
                }
                break;

            case "trois":
                planDeroulant[2].style.height = "auto";
                choix[2].style.transform = "scaleY(1)";
                choix[2].style.transition = "0.6s";
                arrow[2].style.transform = "rotate(0.5turn)";
                countTrois++;
                if(countTrois == 2) {
                    planDeroulant[2].style.height = "";
                    choix[2].style.transform = "";
                    choix[2].style.transition = "0s";
                    arrow[2].style.transform = "";
                    countTrois = 0;
                }
                break;


            case "quatres":
                planDeroulant[3].style.height = "auto";
                choix[3].style.transform = "scaleY(1)";
                choix[3].style.transition = "0.6s";
                arrow[3].style.transform = "rotate(0.5turn)";

                countQuatres++;
                if(countQuatres == 2) {
                    planDeroulant[3].style.height = "";
                    choix[3].style.transform = "";
                    choix[3].style.transition = "0s";
                    arrow[3].style.transform = "";
                    countQuatres = 0;
                }
                break;


            case "cinq":
                planDeroulant[4].style.height = "auto";
                choix[4].style.transform = "scaleY(1)";
                choix[4].style.transition = "0.6s";
                arrow[4].style.transform = "rotate(0.5turn)";

                countCinq++;
                if(countCinq == 2) {
                    planDeroulant[4].style.height = "";
                    choix[4].style.transform = "";
                    choix[4].style.transition = "0s";
                    arrow[4].style.transform = "";
                    countCinq = 0;
                }
                break;
        }
    })
});


const section = document.querySelectorAll('.section');
const how = document.querySelector('.how');
const temps = document.querySelector('.temps');
const typeCoffe = document.querySelector('.type');
const much = document.querySelector('.much');
const createPlan = document.querySelector('#createPlan');
const recapTexte = document.querySelector('.texte');
const paragrapheSection = document.querySelectorAll('.paragraphe-section');
const titreSection = document.querySelectorAll('.titre-section');

let howDrinkCoffe = "_____";
let often ="_____";
let type = "_____";
let howMuch = "_____";
let texte = "";

section.forEach((item) => {
    item.addEventListener('click', function(e) {
        switch (e.target.id) {

            //how do you drink your coffe
            case "capsule":
                section[0].style.backgroundColor = "#0E8784";
                paragrapheSection[0].style.color = "#FFFFFF";
                titreSection[0].style.color = "#FFFFFF";


                section[1].style.backgroundColor = "";
                paragrapheSection[1].style.color = "";
                titreSection[1].style.color = "";


                section[2].style.backgroundColor = "";
                paragrapheSection[2].style.color = "";
                titreSection[2].style.color = "";
                howDrinkCoffe ="Capsule"
                break;

            case "filter":
                section[0].style.backgroundColor = "";
                paragrapheSection[0].style.color = "";
                titreSection[0].style.color = "";

                section[1].style.backgroundColor = "#0E8784";
                paragrapheSection[1].style.color = "#FFFFFF";
                titreSection[1].style.color = "#FFFFFF";

                section[2].style.backgroundColor = "";
                paragrapheSection[2].style.color = "";
                titreSection[2].style.color = "";
                howDrinkCoffe ="Filter"
                break;  

            case "espresso":
                section[0].style.backgroundColor = "";
                paragrapheSection[0].style.color = "";
                titreSection[0].style.color = "";

                section[1].style.backgroundColor = "";
                paragrapheSection[1].style.color = "";
                titreSection[1].style.color = "";

                section[2].style.backgroundColor = "#0E8784";
                paragrapheSection[2].style.color = "#FFFFFF";
                titreSection[2].style.color = "#FFFFFF";
                howDrinkCoffe = "Espresso"
                break;
                         

                //what type of coffe
            case "single":
                section[3].style.backgroundColor = "#0E8784";
                paragrapheSection[3].style.color = "#FFFFFF";
                titreSection[3].style.color = "#FFFFFF";

                section[4].style.backgroundColor = "";
                paragrapheSection[4].style.color = "";
                titreSection[4].style.color = "";

                section[5].style.backgroundColor = "";
                paragrapheSection[5].style.color = "";
                titreSection[5].style.color = "";
                type = "Single Origin";
                break

            case "decaf":
                section[3].style.backgroundColor = "";
                paragrapheSection[3].style.color = "";
                titreSection[3].style.color = "";

                section[4].style.backgroundColor = "#0E8784";
                paragrapheSection[4].style.color = "#FFFFFF";
                titreSection[4].style.color = "#FFFFFF";

                section[5].style.backgroundColor = "";
                paragrapheSection[5].style.color = "";
                titreSection[5].style.color = "";
                type = "Decaf";
                break;
            
            case "blended":
                section[3].style.backgroundColor = "";
                paragrapheSection[3].style.color = "";
                titreSection[3].style.color = "";

                section[4].style.backgroundColor = "";
                paragrapheSection[4].style.color = "";
                titreSection[4].style.color = "";

                section[5].style.backgroundColor = "#0E8784";
                paragrapheSection[5].style.color = "#FFFFFF";
                titreSection[5].style.color = "#FFFFFF";
                type = "Blended";
                break;



                //how much would you like

            case "250g":
                section[6].style.backgroundColor = "#0E8784";
                paragrapheSection[6].style.color = "#FFFFFF";
                titreSection[6].style.color = "#FFFFFF";

                section[7].style.backgroundColor = "";
                paragrapheSection[7].style.color = "";
                titreSection[7].style.color = "";

                section[8].style.backgroundColor = "";
                paragrapheSection[8].style.color = "";
                titreSection[8].style.color = "";

                howMuch ="250g";
                break

            case "500g":
                section[6].style.backgroundColor = "";
                paragrapheSection[6].style.color = "";
                titreSection[6].style.color = "";

                section[7].style.backgroundColor = "#0E8784";
                paragrapheSection[7].style.color = "#FFFFFF";
                titreSection[7].style.color = "#FFFFFF";

                section[8].style.backgroundColor = "";
                paragrapheSection[8].style.color = "";
                titreSection[8].style.color = "";


                howMuch ="500g";
                break;
            
            case "1000g":
                section[6].style.backgroundColor = "";
                paragrapheSection[6].style.color = "";
                titreSection[6].style.color = "";

                section[7].style.backgroundColor = "";
                paragrapheSection[7].style.color = "";
                titreSection[7].style.color = "";
                
                section[8].style.backgroundColor = "#0E8784";
                paragrapheSection[8].style.color = "#FFFFFF";
                titreSection[8].style.color = "#FFFFFF";

                howMuch ="1000g";
                break;



                //Want us to grind them

            case "wholebean":
                section[9].style.backgroundColor = "#0E8784";
                paragrapheSection[9].style.color = "#FFFFFF";
                titreSection[9].style.color = "#FFFFFF";

                section[10].style.backgroundColor = "";
                paragrapheSection[10].style.color = "";
                titreSection[10].style.color = "";

                section[11].style.backgroundColor = "";
                paragrapheSection[11].style.color = "";
                titreSection[11].style.color = "";
                break

            case "filter2":
                section[9].style.backgroundColor = "";
                paragrapheSection[9].style.color = "";
                titreSection[9].style.color = "";

                section[10].style.backgroundColor = "#0E8784";
                paragrapheSection[10].style.color = "#FFFFFF";
                titreSection[10].style.color = "#FFFFFF";

                section[11].style.backgroundColor = "";
                paragrapheSection[11].style.color = "";
                titreSection[11].style.color = "";
                break;
            
            case "cafetiére":
                section[9].style.backgroundColor = "";
                paragrapheSection[9].style.color = "";
                titreSection[9].style.color = "";

                section[10].style.backgroundColor = "";
                paragrapheSection[10].style.color = "";
                titreSection[10].style.color = "";

                section[11].style.backgroundColor = "#0E8784";
                paragrapheSection[11].style.color = "#FFFFFF";
                titreSection[11].style.color = "#FFFFFF";
                break;



                //how often should we deliver

            case "week":
                section[12].style.backgroundColor = "#0E8784";
                paragrapheSection[12].style.color = "#FFFFFF";
                titreSection[12].style.color = "#FFFFFF";

                section[13].style.backgroundColor = "";
                paragrapheSection[13].style.color = "";
                titreSection[13].style.color = "";

                section[14].style.backgroundColor = "";
                paragrapheSection[14].style.color = "";
                titreSection[14].style.color = "";

                often ="Every week";
                break

            case "twoweeks":
                section[12].style.backgroundColor = "";
                paragrapheSection[12].style.color = "";
                titreSection[12].style.color = "";

                section[13].style.backgroundColor = "#0E8784";
                paragrapheSection[13].style.color = "#FFFFFF";
                titreSection[13].style.color = "#FFFFFF";

                section[14].style.backgroundColor = "";
                paragrapheSection[14].style.color = "";
                titreSection[14].style.color = "";
                often ="Every 2 weeks";
                break;
            
            case "everyMonth":
                section[12].style.backgroundColor = "";
                paragrapheSection[12].style.color = "";
                titreSection[12].style.color = "";

                section[13].style.backgroundColor = "";
                paragrapheSection[13].style.color = "";
                titreSection[13].style.color = "";

                section[14].style.backgroundColor = "#0E8784";
                paragrapheSection[14].style.color = "#FFFFFF";
                titreSection[14].style.color = "#FFFFFF";
                often ="Every month";
                break;
            

        }
        how.innerHTML = howDrinkCoffe;
        temps.innerHTML = often;
        typeCoffe.innerHTML = type;
        much.innerHTML = howMuch;

        if((howDrinkCoffe != "_____") && (often !="_____") && (type !="_____") && (howMuch !="_____")) {
            createPlan.style.backgroundColor = "#0E8784";
            createPlan.style.cursor = "pointer";
            texte = recapTexte.textContent;
            createPlan.style.pointerEvents = "inherit"
        }
    })
})


const achatRecap = document.querySelector('.achat-recap');
const finalisation =  document.querySelector('.finalisation');
const background = document.querySelector('.background')
createPlan.addEventListener('click', function() {
    achatRecap.innerHTML = texte;
    finalisation.style.display = "block";
    background.style.display = "block";
    window.scrollTo({top: 0, behavior: 'smooth'});
})