document.querySelector("#adding").addEventListener("click", adding)

const income_List= [];
const cost_List= [];

function adding(e) {
    e.preventDefault();

    let incomeSum= 0;
    let costSum= 0;

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
    //    console.log(cost_List);
    }

    income_List.map( (e) => {
        incomeSum += parseFloat(e);
    //    console.log(parseFloat(e));
    } )

     console.log(incomeSum)

    cost_List.map( (e) => {
        costSum += parseFloat(e);
    //    console.log(parseFloat(e));
    } )

     console.log(costSum);

    

    document.querySelector(".balance").innerHTML = `<h2> ${incomeSum - costSum} </h2>`

    /*
    let sum= incomeSum - costSum
    if (sum <= 0) {
  
    } else {
        
    }
    */

}

function clearList(e) {
    e.preventDefault();

    var i= document.querySelector(".incomeList")
    var c= document.querySelector(".costList")
    var entry= document.querySelector("li")
    i.remove(entry)
    c.remove(entry)
}
document.querySelector("#clearAll").addEventListener("click", clearList)
