let mobileNumber = document.getElementById("mobileNumber")
let pinNumber = document.getElementById("pinNumber")
let loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener("click", function () {
   let numberValue = mobileNumber.value
   let pinValue = pinNumber.value

   if( numberValue == "2441139" && pinValue == "2025" ){
   window.location.href="./home.html"

   }
   else{
    alert("incorrect informations")
   }
})