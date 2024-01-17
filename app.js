let resultInp = document.getElementById("result");
let onBtn = document.getElementById("on_off_Btn");
let msg = document.getElementById("message");
let dark = document.getElementById("dMode");
let bodyArea = document.querySelector("body");
let sectionArea = document.querySelector("section");
let resultArea = document.querySelector("#resultArea > input");
let nameRes = document.getElementsByName("result");
let callMe = document.getElementById("calMethod");


function clearScreen(){
    if(onBtn.value == "OFF"){
        msg.innerText = "Press the \"OFF\" button to start the calculator.";
    }else if(onBtn.value == "TURN ON" || onBtn.value == "OFF"){
        msg.innerText = "Press the \"TURN ON\" button to start the calculator.";
    }else{
        resultInp.value = "";
    }
}
function display(value){
    if(onBtn.value == "OFF"){
        msg.innerText = "Press the \"OFF\" button to start the calculator.";
    }else if(onBtn.value == "TURN ON"){
        msg.innerText = "Press the \"TURN ON\" button to start the calculator.";
    }else{
        resultInp.value += value;
    }
}
function calculate(){  
    if(onBtn.value == "OFF"){
        msg.innerText = "Press the \"OFF\" button to start the calculator.";
    }else if(onBtn.value == "TURN ON"){
        msg.innerText = "Press the \"TURN ON\" button to start the calculator.";
    }else if(onBtn.value != "OFF" && onBtn.value != "TURN ON"){
        let input = resultInp.value;
        let ans = eval(input);
        resultInp.value = ans;
        nameRes.value = ans;
        console.log(nameRes.value);
        if(resultInp.value == "undefined"){
            resultInp.value = "";
        }
    }
}
function clearLast(){
    if(onBtn.value == "TURN ON" || onBtn.value == "OFF"){
        msg.innerText = "Press the \"TURN ON\" button to start the calculator.";
    }else{
        let ans = resultInp.value;
        let last = ans.length-1;
        let removed = ans.slice(0,last);
        resultInp.value = removed;
    }
}
function onOffFunction(){
    let ans = onBtn.value;
    if(ans == "TURN ON"){
        onBtn.innerText = "ON";
        onBtn.value = onBtn.innerText = "ON";
        onBtn.style.backgroundColor = "#5D5AFF";
        msg.innerText = "";
    }else if(ans == "ON"){
        onBtn.innerText = "OFF";
        onBtn.value = onBtn.innerText = "OFF";
        onBtn.style.backgroundColor = "#5D5AFF";
        resultInp.value = "";
    }else if(ans == "OFF"){
        onBtn.innerText = "ON";
        onBtn.value = onBtn.innerText = "ON";
        onBtn.style.backgroundColor = "#5D5AFF";
        msg.innerText = "";
    }
}
let darkResult = false;
function darkMode(){
    if(darkResult == false){
        bodyArea.style.backgroundColor = "rgba(0, 0, 0, 0.495)";
        bodyArea.style.color = "#2F3547";
        sectionArea.style.backgroundColor = "rgba(0, 0, 0, 0.495)";
        sectionArea.style.border = "4px solid #2F3547";
        resultArea.style.backgroundColor = "#2F3547";
        msg.style.color = "#E5EFF8";
        darkResult = true;
        document.getElementById("lightDiv").style.display = "block";
        document.getElementById("darkDiv").style.display = "none";

    }else if(darkResult == true){
        bodyArea.style.backgroundColor = "#E760E1";
        bodyArea.style.color = "black";
        sectionArea.style.backgroundColor = "#E760E1";
        sectionArea.style.border = "5px solid #5D5AFF";
        resultArea.style.backgroundColor = "#5D5AFF";
        msg.style.color = "whitesmoke";
        darkResult = false;
        document.getElementById("lightDiv").style.display = "none";
        document.getElementById("darkDiv").style.display = "block";
    }   
}