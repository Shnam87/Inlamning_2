// Fyra addEventListener som väntar på att triggas
document.querySelector("#adding").addEventListener("click", addingToList);
document.querySelector("#removing").addEventListener("click", removeFromList);
document.querySelector("#clearAll").addEventListener("click", clearList);
document.querySelector("#inputAmount").addEventListener("keyup", disabledBTN);

// Några globala variabler
const income_List= [];
const cost_List= [];
let img= document.createElement("IMG");
let btn = document.querySelector("#adding");
btn.disabled = true;

// Funktionen för att inaktivera "lägga till"-knappen
function disabledBTN() {    
    if(document.querySelector("#inputAmount").value === "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

// Funktionen för att lägga till användarens inmatning i den valda listan
function addingToList(e) {
    e.preventDefault();

    const type= document.querySelector("select")
    const input_Name=document.querySelector("#inputName").value;
    const input_Amount=document.querySelector("#inputAmount").value;

    const clear_NameField= document.querySelector("#inputName").value = "";
    const clear_AmountField= document.querySelector("#inputAmount").value = "";

    if (type.value=="in") {
        document.querySelector(".incomeList").innerHTML += `<li class="incomeLi"> ${input_Name} för: ${input_Amount} </li>`
        income_List.push(input_Amount);
        clear_NameField;
        clear_AmountField;
        console.log(income_List);
    } else {
        document.querySelector(".costList").innerHTML += `<li class="costLi"> ${input_Name} för: ${input_Amount} </li>`
        cost_List.push(input_Amount);
        clear_NameField;
        clear_AmountField;
        console.log(cost_List);
    }
    sum();  //Beräkna summan

    disabledBTN();  // Återigen inaktivera "lägga till"-knappen 
}

// Funktionen för att ta bort den senaste raden av listorna
function removeFromList(e) {
    e.preventDefault();
    // console.log(income_List);

    const i= document.querySelector(".incomeList");
    const incomeEntry= document.querySelector("li:last-child");
    // console.log(incomeEntry);

    if (income_List.length > 0) {
        i.removeChild(incomeEntry);
        income_List.pop();
        sum();
    }
    // console.log(income_List);

    const c= document.querySelector(".costList");
    const costEntry= document.querySelector(".costLi:last-child");
    // console.log(costEntry);

    if (cost_List.length > 0) {
        c.removeChild(costEntry);
        cost_List.pop();
        sum();
    }
    // console.log(cost_List);
}

// Funktionen för att rensa listan helt och hållet
function clearList(e) {
    e.preventDefault();

    document.querySelector(".incomeList").textContent = "";
    document.querySelector(".costList").textContent = "";

    income_List.splice(0, income_List.length);
    cost_List.splice(0, cost_List.length);

    document.querySelector(".balance").textContent = "";
    img.removeAttribute("src");
}

// Funktionen som Beräkna summan av inkomster och Utgifter, samt ändrar textskuggan och bilden beroende på svaret.
function sum() {
    let incomeSum= 0;
    let costSum= 0;

    income_List.map(
        (e) => {
            incomeSum += parseFloat(e)
        }
    )
    console.log(incomeSum);

    cost_List.map(
        (e) => {
            costSum += parseFloat(e);
        }
    )
    console.log(costSum);
    
    let finalSum= incomeSum - costSum;
    console.log(finalSum);

    if (finalSum > 0) {
        document.querySelector(".balance").innerHTML = `<h2 class="positive"> ${incomeSum - costSum} </h2>`
        img.setAttribute("src", "./img/300782.png");
        console.log("Bravo");
    } else {
        document.querySelector(".balance").innerHTML = `<h2 class="negative"> ${incomeSum - costSum} </h2>`
        img.setAttribute("src", "./img/300812.png");
        console.log("Inte bra");
    }
    document.body.appendChild(img);
}
