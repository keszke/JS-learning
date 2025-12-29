let CSVInput = ""
const SubmitButton = document.querySelector(`#sumbmit-button`)
const InputField = document.querySelector(`#input-field`)
const UploadFile = document.querySelector(`#upload-button`)




function getInput(){
    CSVInput = InputField.value;
    InputField.value = "";
    const result = TranslateIntoJSON();
    console.log(result)
    if  (result === "[]"){
        document.querySelector(`#result`).innerHTML = "<p>Please provide a vaiable CSV code or File</p>"
    }
    else {PrintOutResult(result)}

}

function TranslateIntoJSON(){
    const jsonArray = [];
    const rows = CSVInput.trim().split(/\r?\n/);
    const columnsNames = rows[0].split(",")

    for  (let i = 1; i < rows.length; i++){
        const currentRow = rows[i].split(",")
        const rowObj = {}
        for (let j = 0; j < columnsNames.length; j++){
            let value = currentRow[j];
            rowObj[columnsNames[j]] = value;
        }
        jsonArray.push(rowObj)
    }
    const JSONString = JSON.stringify(jsonArray, null, 2);
    return JSONString;
    
}

function PrintOutResult(JSONString){
    document.querySelector(`#result`).innerHTML = `<textarea id = "output-box"> ${JSONString} </textarea>`
}

// Input Buttons
SubmitButton.addEventListener("click", getInput);
InputField.addEventListener("keydown", function(event) {
    if (event.key === `Enter`){
        getInput();
    }
});
UploadFile.addEventListener("click", function())