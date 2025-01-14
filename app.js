const Start = document.getElementById("butt1")
const Stop = document.getElementById("butt2")

let randomColor = function(){
    let hex= "0123456789ABCDEF"
    let color ="#"
    for(let i= 0; i <6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color
};
let intervalId; 

let changeBGcolor = function(){
    intervalId = setInterval(() => {
        document.body.style.backgroundColor= randomColor();
    }, 500);
}

let stopBGchange =() =>{
    clearInterval(intervalId)
}

Start.addEventListener("click",changeBGcolor)
Stop.addEventListener("click",stopBGchange)