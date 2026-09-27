/*const alertEl = document.querySelector(".js-alert");
alertEl.classList.add("is-visible")

const timeAlert = () => {
    console.log("hide fn");
    
    alertEl.classList.remove("is-visible");
}
setTimeout(timeAlert, 3000);
alertEl.addEventListener("click", () => {
    timeAlert();
    clearTimeout()
})*/

/*setTimeout(() =>{
    console.log("Всім привіт!");
    
}, 3000);

const greet = (name) => {
    setTimeout(() => {
       console.log(name); 
    }, 2000)
    
}

greet("Lera");

const timer = setTimeout(() => {
    console.log("Boom");
    
},3000)

clearTimeout(timer);

let counter = 0;

const interval = (() => {
    counter +=1;
    console.log(counter);
    
}, 3000)

let counter2 = 5;

const start = (() => {
    counter2 =- 1;
    console.log(counter2);
    
    if (counter2 === 1) {
        clearInterval(start);
        console.log("start");
        
    }
}, 1000)

const button = document.querySelector(".js-button");

button.addEventListener("click", () => {
    setTimeout(() => {
        alert("Hello, world")
    }, 2000)
})

const textEl = document.querySelector(".text_js");

setTimeout(() => {
    textEl.textContent = "BBBBB";
}, 3000);

const divEl = document.querySelector(".box");
let isRed = true

setInterval(() => {
    if(isRed){
        divEl.style.backgroundColor = "green";
        isRed = false
    } else {
        divEl.style.backgroundColor = "red";
        isRed = true
    }
}, 2000);*/

const messages = [
  "Привіт!",
  "Як справи?",
  "Вивчаємо JavaScript!",
]; 

const titleEl = document.querySelector(".title");
let index = 0;

setInterval(() => {
    if (index === messages.length) {
        index = 0
    };
    titleEl.textContent = messages[index];
    index += 1;
    
}, 2000)


const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
let intervalStart = null;

btnStart.addEventListener("click", () => {
     intervalStart = setInterval(() => {
        console.log(Math.random());
        
}, 1000)
})
btnStop.addEventListener("click", () => {
    intervalStart = null
})
