let changeColor = document.querySelector(".CC");

changeColor.onclick = function() {
 changeColor.disabled = true;

changeColor.innerHTML = "Which color";



 let whiteColor = document.createElement("button");
whiteColor.innerHTML="W";
document.body.appendChild(whiteColor);

let blackColor = document.createElement("button");
blackColor.innerText="B";
document.body.appendChild(blackColor);

let greenColor = document.createElement("button");
greenColor.innerHTML="G";
document.body.appendChild(greenColor);

let redColor = document.createElement("button");
redColor.innerHTML="R";
document.body.appendChild(redColor);

whiteColor.classList.add("white");
blackColor.classList.add("black");
greenColor.classList.add("green");
redColor.classList.add("red");

whiteColor.addEventListener("click",() =>{

    document.body.style.backgroundColor = "white";
 whiteColor.style.display= "none";
 greenColor.style.display= "none";
 blackColor.style.display="none";
 redColor.style.display="none";
 blueColor.style.display="none";
 changeColor.disabled= false;
 changeColor.innerHTML ="Background Color";
 document.body.style.color="aqua";
});
blackColor.addEventListener("click",() => {
    document.body.style.backgroundColor= "black";
document.body.style.color = "red";
changeColor.disabled= false;
changeColor.innerHTML="Background Color";
whiteColor.style.display= "none";
 greenColor.style.display= "none";
 blackColor.style.display="none";
 blueColor.style.display="none";
 redColor.style.display="none";
});
redColor.addEventListener("click",()=>{
document.body.style.backgroundColor="red";
changeColor.disabled=false;
whiteColor.style.display= "none";
 greenColor.style.display= "none";
 blackColor.style.display="none";
 redColor.style.display="none";
 blueColor.style.display="none";
 changeColor.innerHTML="Background Color";
 document.body.style.color="white";
})
greenColor.addEventListener("click",()=>{
    document.body.style.backgroundColor="green";
    changeColor.disabled=false;
    whiteColor.style.display= "none";
     greenColor.style.display= "none";
     blackColor.style.display="none";
     redColor.style.display="none";
     blueColor.style.display="none";
     changeColor.innerHTML="Background Color";
     document.body.style.color="white";
})
let blueColor=document.createElement("button");
blueColor.innerHTML ="Blue";
document.body.appendChild(blueColor);
blueColor.classList.add("blue");

blueColor.addEventListener("click",()=> {
document.body.style.backgroundColor="aqua";
document.body.style.color="black";
whiteColor.style.display= "none";
     greenColor.style.display= "none";
     blackColor.style.display="none";
     redColor.style.display="none";
     blueColor.style.display="none";
     changeColor.innerHTML="Background Color";
     changeColor.disabled=false;
})
};
const E-mail = document.getElementById("E-mail").value
E-mailRecieve(){
let Recieve = document.getElementsByClassName(Reciever)
Recieve.innertext=E-mail.innertext 


}



