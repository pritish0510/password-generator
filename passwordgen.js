const len = localStorage.getItem("passwordlen");
passlen = parseInt(len);
console.log(passlen)
console.log(typeof(passlen)); //checking
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const specialChars = "!@#$%&/*?";
 let btn = document.querySelector("button");
 let c1 = document.querySelector(".lowercase")
let disp = document.querySelector("p") // display 
let c2 = document.querySelector(".uppercase")
let c3 =  document.querySelector(".number")
let c4  = document.querySelector(".special")

function start(){
 btn.addEventListener("click", function () {
  let combined = "";

  if (c1.checked) combined += lowerChars;
  if (c2.checked) combined += upperChars;
  if (c3.checked) combined += numberChars;
  if (c4.checked) combined += specialChars;

  if (combined.length === 0) {
    disp.textContent = "Please select at least one checkbox.";
    return;
  }

  let str = "";
  for (let i = 0; i < passlen; i++) {
    let rand = Math.floor(Math.random() * combined.length);
    str += combined[rand];
  }

  disp.textContent = str;
});
}
start();