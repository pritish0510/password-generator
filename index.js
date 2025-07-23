
let len = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector("p");
let num1 = 0;
len.addEventListener("input",function(){
    let num = len.value;
    num1 = parseInt(num);
    console.log(num1);
    if(num1<=20){
        p.textContent = `ur lenght of password will be ${num1}`;
    }
    else if(num1>20){
        p.textContent = "ur password length is more then 20"
    }
    else {
        p.textContent = "some error occured"
    }
})
btn.addEventListener("click",()=>{
    if(num1<=20 && num1!=NaN && num1!=0){
        
        localStorage.setItem("passwordlen",num1)
        window.location.href = "logic.html";
    }
    else {
   alert("try again something went wrong")
    }
})




