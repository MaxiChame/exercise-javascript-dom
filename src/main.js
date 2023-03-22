function splashScreenInactive() {
    let splashScreen = document.querySelector('section');
    splashScreen.classList.add('inactive');
    let goForm = document.getElementById("goForm");
    let float = document.getElementById("float");
    inactiveForm(goForm, float, )
}
setTimeout(splashScreenInactive,);

function inactiveForm(welcome, wfloat) {
    welcome.classList.remove("inactive");
    wfloat.classList.remove("inactive");
}

const loginAndRegister = document.getElementById("loginAndRegister")
const toLogin = document.getElementById("toLogin");
toLogin.addEventListener("click", loginStart);
const toRegister = document.getElementById("toRegister");
toRegister.addEventListener("click", registerStart)

function loginStart() {
    goForm.classList.add("inactive");
    float.classList.add("inactive");
    loginAndRegister.classList.remove("inactive");
    const chargeLD = document.getElementById("loginDesign");
    chargeLD.classList.remove("inactive");
} 

function registerStart() {
    goForm.classList.add("inactive");
    float.classList.add("inactive");
    const loginAndRegister = document.getElementById("loginAndRegister");
    loginAndRegister.classList.remove("inactive");
    const chargeRD = document.getElementById("registerDesign");
    chargeRD.classList.remove("inactive");
} 


function registerFormNextPage () {
    const rdSteps1 = document.getElementById("rdSteps1");
    rdSteps1.classList.add("invisible");
    const rdSteps2 = document.getElementById("rdSteps2");
    rdSteps2.classList.remove("invisible");
    const inputName = document.getElementById("inputName");
    inputName.classList.add("invisible");
    const inputUser = document.getElementById("inputUser");
    inputUser.classList.remove("invisible");
    const inputSurname = document.getElementById("inputSurname");
    inputSurname.classList.add("invisible");
    const inputPassword = document.getElementById("inputPassword");
    inputPassword.classList.remove("invisible");
    const inputMail = document.getElementById("inputMail");
    inputMail.classList.add("invisible");
    const inputFile = document.getElementById("inputFile");
    inputFile.classList.remove("invisible");
    const inputCheckbox = document.getElementById("inputCheckbox");
    inputCheckbox.classList.add("invisible");
    const sumbitButton = document.getElementById("submitButton");
    sumbitButton.classList.remove("invisible");
}

function registerFormPreviousPage () {
    const rdSteps1 = document.getElementById("rdSteps1");
    rdSteps1.classList.remove("invisible");
    const rdSteps2 = document.getElementById("rdSteps2");
    rdSteps2.classList.add("invisible");
    const inputName = document.getElementById("inputName");
    inputName.classList.remove("invisible");
    const inputUser = document.getElementById("inputUser");
    inputUser.classList.add("invisible");
    const inputSurname = document.getElementById("inputSurname");
    inputSurname.classList.remove("invisible");
    const inputPassword = document.getElementById("inputPassword");
    inputPassword.classList.add("invisible");
    const inputMail = document.getElementById("inputMail");
    inputMail.classList.remove("invisible");
    const inputFile = document.getElementById("inputFile");
    inputFile.classList.add("invisible");
    const inputCheckbox = document.getElementById("inputCheckbox");
    inputCheckbox.classList.remove("invisible");
    const sumbitButton = document.getElementById("submitButton");
    sumbitButton.classList.add("invisible");
}
