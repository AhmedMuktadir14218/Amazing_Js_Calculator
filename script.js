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
