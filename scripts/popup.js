console.log("hello popup");
const popupShowing = false;

const contactBtn = document.querySelector("#contact-btn");
const popupBack = document.querySelector(".feedback-popup-background");
const submitbtn = document.querySelector(".form-container .btn-submit");

contactBtn.addEventListener("click", function () {
    popupBack.classList.remove("hidden-popup");
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#query").value = "";
});

submitbtn.addEventListener("click", function () {
    console.log("click");

    const nameVal = document.querySelector("#name").value;
    const emailVal = document.querySelector("#email").value;
    const queryVal = document.querySelector("#query").value;

    let nameValid = false;
    let emailValid = false;
    let queryValid = false;

    if(nameVal.length === 0){
        document.querySelector('.name-form-error').innerText = "*Enter Valid Name";
        nameValid = false;
    } else if(nameVal.length !== 0) {
        document.querySelector('.name-form-error').innerText = "";
        nameValid = true;
    }

    if(!emailVal.match(/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/)){
        document.querySelector('.email-form-error').innerText = "*Enter Valid Email Address";
        emailValid = false;
    } else {
        document.querySelector('.email-form-error').innerText = "";
        emailValid = true;
    }

    if(queryVal.length === 0){
        document.querySelector('.query-form-error').innerText = "*Enter Your Query";
        queryValid = false;
    } else {
        document.querySelector('.query-form-error').innerText = "";
        queryValid = true;
    }

    if(nameValid && emailValid && queryValid){
        document.querySelector(".popup-form-section").classList.add("hide-section");
        document.querySelector(".thanks-section").classList.remove("hide-section");
    }
});

document.querySelector('.close-popup').addEventListener("click", function() {
    popupBack.classList.add("hidden-popup");
})