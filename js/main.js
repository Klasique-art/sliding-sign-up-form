// when the signin or signup button is clicked, the form box shifts to the other side
const signupBtn = document.querySelector(".signup-btn")
const signinBtn = document.querySelector(".signin-btn")
const formBox = document.querySelector(".signing-form-box")
const body = document.querySelector("body")

signupBtn.addEventListener("click", ()=>{
    formBox.classList.add("active")
    body.classList.add("active")
})
signinBtn.addEventListener("click", ()=>{
    formBox.classList.remove("active")
    body.classList.remove("active")
})
