const inputname=document.getElementById("name")
const inputpswd=document.getElementById("pswd")
const button2=document.getElementById("btn")

button2.addEventListener("click",(e)=>{
    e.preventDefault();
    const username=inputname.value
    const userpswd=inputpswd.value
    const enteredname=localStorage.getItem("name")
    const enteredpswd=localStorage.getItem("pswd")
    if(username==enteredname && userpswd==enteredpswd){
        alert("login succesfully")
        window.location.href="landingpage.html"
    }
    else{
        alert("credentials are wrong")
    }


})