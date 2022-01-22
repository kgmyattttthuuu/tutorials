
let display = document.querySelector("#display");
let inputBox = document.querySelector("#input-box");
let updateButton = document.querySelector("#update-button");


updateButton.addEventListener("click", () => {
    display.innerHTML = inputBox.value;
})
