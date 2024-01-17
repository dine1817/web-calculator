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
    if(onBtn.value == "TURN ON" || onBtn.value == "OFF"){
        msg.innerText = "Hello Buddy, just \"TURN ON\" the calculator.";
    }else{
        resultInp.value = "";
    }
}
function display(value){
    if(onBtn.value == "TURN ON" || onBtn.value == "OFF"){
        msg.innerText = "Hello Buddy, just \"TURN ON\" the calculator.";
    }else{
        resultInp.value += value;
    }
}
//calMethod
// callMe.addEventListener("click",function(event){
//     event.preventDefault();
//     if(onBtn.value == "TURN ON" || onBtn.value == "OFF"){
//         msg.innerText = "Hello Buddy, just \"TURN ON\" the calculator.";
//     }else{
//         let input = resultInp.value;
//         let ans = eval(input);
//         resultInp.value = ans;
//         nameRes.value = ans;
//         console.log(nameRes.value);
//         if(resultInp.value == "undefined"){
//             resultInp.value = "";
//         }
//     }
// });
function calculate(){
    
    if(onBtn.value == "TURN ON" || onBtn.value == "OFF"){
        msg.innerText = "Hello Buddy, just \"TURN ON\" the calculator.";
    }else{
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
        msg.innerText = "Hello Buddy, just \"TURN ON\" the calculator.";
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
        onBtn.style.backgroundColor = "#839299";
        msg.innerText = "";
    }else if(ans == "ON"){
        onBtn.innerText = "OFF";
        onBtn.value = onBtn.innerText = "OFF";
        onBtn.style.backgroundColor = "rgb(171, 180, 185)";
        resultInp.value = "";
    }else if(ans == "OFF"){
        onBtn.innerText = "ON";
        onBtn.value = onBtn.innerText = "ON";
        onBtn.style.backgroundColor = "#839299";
        msg.innerText = "";
    }
}
let darkResult = false;
function darkMode(){
    if(darkResult == false){
        bodyArea.style.backgroundColor = "black";
        bodyArea.style.color = "#fff";
        sectionArea.style.backgroundColor = "black";
        sectionArea.style.border = "2px solid #fff";
        resultArea.style.backgroundColor = "#E6F0F9";
        msg.style.color = "#fff";
        darkResult = true;
    }else if(darkResult == true){
        bodyArea.style.backgroundColor = "rgb(83, 81, 81)";
        bodyArea.style.color = "black";
        sectionArea.style.backgroundColor = "rgb(229,239,248)";
        sectionArea.style.border = "none";
        resultArea.style.backgroundColor = "#839299";
        msg.style.color = "black";
        darkResult = false;
    }
    
    
}