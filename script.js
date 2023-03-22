document.getElementById("button").addEventListener("click", 
(event)=>{
    const buttonValue =(event.target.innerText)
    console.log(buttonValue)

    const mainInput = document.getElementById("main-input");
    // mainInput.value = buttonValue;
    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
     } 
    //  console.log(percentage(100,5));

    if (buttonValue == "AC") {
        mainInput.value=" "
    }
    else if (buttonValue == "+/-") {
        mainInput.value=`-${mainInput.value}`
    }
    else if (buttonValue == "%") {
        mainInput.value=mainInput.value/100
        // percentage(mainInput.value,5)
    }
    else if (buttonValue == "=") {
        mainInput.value=eval(mainInput.value)
    }
    else{
        document.getElementById("main-input").value= mainInput.value + buttonValue;
    }
})

// document.getElementById("button").addEventListener("click", 
// (event)=>{
//     const buttonValue = (event.target.innerText);
//     console.log(buttonValue);

//     const mainInput = document.getElementById("main-input");
//     // mainInput.value = buttonValue;

//     if (buttonValue == "AC") {
//         mainInput.value = "";
//     }
//     else if (buttonValue == "+/-") {
//         mainInput.value = `-${mainInput.value}`;
//     }
//     else if (buttonValue == "%") {
//         const inputValue = parseFloat(mainInput.value);
//         if (isNaN(inputValue)) {
//             mainInput.value = "Error";
//         }
//         else {
//             const result = inputValue / 100;
//             mainInput.value = result;
//         }
//     }
//     else if (buttonValue == "=") {
//         try {
//             mainInput.value = eval(mainInput.value);
//         }
//         catch (err) {
//             mainInput.value = "Error";
//         }
//     }
//     else{
//         document.getElementById("main-input").value= mainInput.value + buttonValue;
//     }
// });
