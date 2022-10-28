//Header and footer
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


// Recipe Page
let ingredientsCrossaints = ['g Kürbisfleisch','Kartoffel(n)','Stange/n Lauch', 'g Butter','L Wasser','Gemüsebrühwürfel']
let amountCrossaints = [500, 2, 1, 30, 1, 1,]

let ingredientsPancake = ['Eier', 'ml Milch', 'Prise(n) Zucker', 'Prisen Salz', 'g Mehl', 'ml Mineralwasser', 'TL Speiseöl zum ausbacken']
let amountPancake = [2, 200 ,1 ,1 ,200, 60, 1]

let ingredientsFocaccia = ['g Weizen- oder Dinkelmehl oder Pizza-/Brotmehl', 'TL Zucker oder Agavensirup', 'Beutel Trockenhefe 7 g', 'TL Salz','ml warmes Wasser ca. 40°C', 'EL OLivenöl + mehr zum beträufeln']
let amountFocaccia = [250, 1 ,0.5 ,0.75 ,160, 0.5,]

let ingredientsBrownie = ['g Zartbitterschokolade', 'g Butter', 'Pck Vanillezucker', 'Stk Eier','g brauner Zucker', 'g Weizenmehl', 'TL Backpulver(Type 405)', 'Prise Salz', 'EL Kakaopulver','etwas Butter für die Form' ]
let amountBrownie = [200, 125, 1, 3, 200, 150, 1, 1, 1, 1,]


function render(amount, ingredients){
    console.log(amount);
    console.log(ingredients)
    for (let i = 0; i < amount.length; i++) {
        let ingredient = amount[i]; 
        let portion = ingredients[i];       
    
        document.getElementById('ingredients').innerHTML += `
        <tr class="ingredients">
            <td id="portion${i}">${portion} ${ingredient}</td>
        <tr>      
        `;         
    }
}


function showMorePortions(amount, ingredients){

    let multiplikator = document.getElementById('inputfield').value;
    if (multiplikator >= 1) {
        for (let i = 0; i < amount.length; i++) {
            let ingredient = amount[i];
            let value = ingredients[i];
            let sum = multiplikator/4 * value; 

            document.getElementById(`portion${i}`).innerHTML=`${sum} ${ingredient}`;   
        }    
    }
    else{
        alert('mindestens eine Portion angeben');
         for (let i = 0; i < amount.length; i++) {
            let ingredient = amount[i];
            let value = ingredients[i];
            let sum = 4/4 * value; 

            document.getElementById(`portion${i}`).innerHTML=`${sum} ${ingredient}`;
    }
}
}

function openMenuBar(){
    document.getElementById('menubar').classList.remove('d-none');
}

function closeMenuBar(){
    document.getElementById('menubar').classList.add('d-none');
}
