let correct = document.querySelector(".correct");

let i = document.querySelector(".correct i");

let logButton = document.querySelector(".login");

let form = document.querySelector(".form");

let container = document.querySelector(".container");

let showMainButton = document.querySelector(".main");

let closeNav = document.querySelector(".close-nav");

let nav = document.querySelector(".nav");

let logIn = document.querySelector(".log-in");

let signUp = document.querySelector(".sign-up");

let logInButton = document.querySelector(".in");

let signUpButton = document.querySelector(".up");

correct.onclick = function() {

    i.classList.toggle("show");

    correct.classList.toggle("background");

    if(correct.classList.contains("background")) {

        correct.style.border = "none";

    } else {

        correct.style.border = "1px solid #333";

    }
}

logButton.onclick = function () {

    form.classList.toggle("show-form");

    container.classList.toggle("blur");

    logButton.style.pointerEvents = "none";

    showMainButton.style.pointerEvents = "none";

}

let closeButton = document.querySelectorAll(".close");


Array.from(closeButton).forEach((btn) => {

    btn.addEventListener("click", function() {

        form.classList.remove("show-form");

        container.classList.remove("blur");

        logButton.style.pointerEvents = "auto";

        showMainButton.style.pointerEvents = "auto";

    })
})


logInButton.onclick = function () {

    signUp.classList.add("hidden");

    if(logIn.classList.contains("hidden")) {

        logIn.classList.remove("hidden");

    }

}

signUpButton.onclick = function () {

    logIn.classList.add("hidden");

    if(signUp.classList.contains("hidden")) {

        signUp.classList.remove("hidden");

    }

}





showMainButton.onclick = function() {

    nav.classList.toggle("showing");

}

closeNav.addEventListener("click", function() {

    nav.classList.remove("showing");

})
