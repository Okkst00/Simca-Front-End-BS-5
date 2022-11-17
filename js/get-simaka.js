
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {

    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    this.classList.toggle("bi-eye");
});


// document.addEventListener('contextmenu', 
//  event => event.preventDefault()
// );

// document.addEventListener("keydown", function (event){
//     if (event.ctrlKey){
//     event.preventDefault();
//     }
//     if(event.keyCode == 123){
//     event.preventDefault();
//     }
// });
