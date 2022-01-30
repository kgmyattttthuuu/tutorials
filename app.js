
let display = document.querySelector("#display");
let inputBox = document.querySelector("#input-box");
let updateButton = document.querySelector("#update-button");


// let something = "something";

// display.innerHTML = "Hi";
// updateButton.innerHTML ="GOOD";



// how to listen button click
// updateButton.addEventListener("click", () => {
//     // write code here
   
//     console.log(inputBox.value);
//     display.innerHTML = "Banana Logic"
// });



updateButton.addEventListener("click", () => {
    display.innerHTML =inputBox.value;
})
// function
let hello = () => {
    console.log("hello")
}


// calling function also known as invoking function
hello();
hello();
hello();
hello();


let changeDisplayText = ()=> {
    display.innerHTML = "hello123"
}

// setTimeout(changeDisplayText,10000)

updateButton.addEventListener("click", changeDisplayText);

// updateButton.addEventListener("click",()=>{
//     display.innerHTML = inputBox.value
// });