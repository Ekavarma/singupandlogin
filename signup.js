const inputname=document.getElementById("name")
const inputemail=document.getElementById("email")
const inputpswd=document.getElementById("pswd")
const button1=document.getElementById("submit")

button1.addEventListener("click",(e)=>{
    e.preventDefault();
    const username=inputname.value
    const useremail=inputemail.value
    const userpswd=inputpswd.value

    localStorage.setItem("name",username)
    localStorage.setItem("email",useremail)
    localStorage.setItem("pswd",userpswd)

    setTimeout(() => {
        window.location.href="login.html"
    },500);

})