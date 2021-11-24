document.querySelector("#adding").addEventListener("click", addingToList);
document.querySelector("#removing").addEventListener("click", removeFromList);
document.querySelector("#clearAll").addEventListener("click", clearList);

const income_List= [];
const cost_List= [];

let img= document.createElement("IMG");

function addingToList(e) {
    e.preventDefault();

    const type= document.querySelector("select")
    const input_Name=document.querySelector("#inputName").value;
    const input_Amount=document.querySelector("#inputAmount").value;

    const clear_NameField= document.querySelector("#inputName").value = "";
    const clear_AmountField= document.querySelector("#inputAmount").value = "";
   // console.log(type.value);
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
    // console.log(cost_List);
    }

    sum();
}

function removeFromList(e) {
    e.preventDefault();

    // console.log(income_List);

    const i= document.querySelector(".incomeList");
    const incomeEntry= document.querySelector("li");

    // console.log(incomeEntry);

    if (income_List.length > 0) {
        i.removeChild(incomeEntry);
        income_List.pop();
    }

    sum();

    // console.log(income_List);

    const c= document.querySelector(".costList");
    const costEntry= document.querySelector(".costLi");

    // console.log(costEntry);

    if (cost_List.length > 0) {
        c.removeChild(costEntry);
        cost_List.pop();
    }

    // console.log(cost_List);

    sum();
}

function clearList(e) {
    e.preventDefault();

    document.querySelector(".incomeList").textContent = "";
    document.querySelector(".costList").textContent = "";

    income_List.splice(0, income_List.length);
    cost_List.splice(0, cost_List.length);

    document.querySelector(".balance").textContent = "";
    img.removeAttribute("src");
}

function sum() {
    let incomeSum= 0;
    let costSum= 0;

    income_List.map(
        (e) => {
            incomeSum += parseFloat(e)
        }
    )
    // console.log(incomeSum);

    cost_List.map(
        (e) => {
            costSum += parseFloat(e);
        }
    )
    // console.log(costSum);

    document.querySelector(".balance").innerHTML = `<h2> ${incomeSum - costSum} </h2>`

    let finalSum= document.querySelector(".balance").textContent;
    // console.log(finalSum);

    if (finalSum > 0) {
        img.setAttribute("src", "./img/300782.png");
        // console.log("Bravo");
        
    } else {
        img.setAttribute("src", "./img/300812.png");
        // console.log("Inte bra");
        
    }
    document.body.appendChild(img);
    
}
