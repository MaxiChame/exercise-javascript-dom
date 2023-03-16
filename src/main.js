function splashScreenInactive() {
    return document.querySelector('section').classList.add('inactive');
}

setTimeout(splashScreenInactive, 30);


function welcomeInactive() {
    let goLoginDesign = document.getElementById("goLoginDesign");
    let goForm = document.getElementById("goForm");
    goLoginDesign.classList.add("inactive");
    goForm.classList.add("inactive");
    
} 

let toLogin = document.getElementById("toLogin");
toLogin.addEventListener("click", welcomeInactive);
