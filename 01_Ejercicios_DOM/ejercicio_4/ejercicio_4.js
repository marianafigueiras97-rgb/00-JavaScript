// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

const myBtn = document.createElement("button");
myBtn.innerHTML = `Console Log`;
myBtn.id = "btnToClick";
document.body.appendChild(myBtn);

myBtn.addEventListener("click", (ev)=>{
    console.log(ev);
});
// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusElement = document.querySelector(".focus");
focusElement.addEventListener("focus",(ev)=>{
    console.log(ev.target.value);
});
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const myInput = document.querySelector(".value");
myInput.addEventListener("input", (ev)=>{
    console.log(ev.target.value);
});