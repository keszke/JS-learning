function getButtonInput(){
    const inputBinary = document.querySelector(`#input-binary`).value.trim();
    console.log(inputBinary);
    document.querySelector(`#input-binary`).value = ``;
    document.querySelector(`#result-output`).innerText = analyzeInput(inputBinary)

}


function handleAddKeyDown(event){
    const allowedKeys = ['0', '1', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter']
    if (!allowedKeys.includes(event.key)){
        event.preventDefault();
    
    }
    if (event.key === `Enter`){
        getButtonInput();

    }
}
function analyzeInput(inputBinary){
    let result = 0;
    if (inputBinary.length > 8){
        return "Please provide max 8 numbers";
    }
    for (let i=0; i < inputBinary.length; i++){
        if (inputBinary[i] !== "0" && inputBinary[i] !== "1"){
            return "Please provied Number 0 or 1";
        }

        else {
            const power = inputBinary.length - 1 - i;
            result += Number(inputBinary[i]) * Math.pow(2, power);           
        }   
    }
    return `The Decimal Notation is ${result}`;  
}
