function formChecker(event) {
        passwordValidator();
        validator();
        validateName();
}

function validateName() {
    let form = document.getElementById("form");
    let name = document.getElementById("username");
    let text = document.getElementById("text1");
    let userNamePattern = /^[A-Za-z]+$/;

    if (name.value.match(userNamePattern)) {
        form.classList.add("Valid");
        form.classList.remove("Inavlid");
        text.innerHTML = "Your username is valid"
        text.style.color = "#00ff00"
        return true;
    } else {
       form.classList.remove("Valid");
       form.classList.add("Invalid");
       text.innerHTML = "Please enter valid username"
       text.style.color = "#ff0000"
        return false;
    }
}

function validator() {
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let text = document.getElementById("text");
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.match(emailPattern)) {
        form.classList.add("Valid");
        form.classList.remove("Inavlid");
        text.innerHTML = "Your email is valid"
        text.style.color = "#00ff00"
    } else {
        form.classList.remove("Valid");
        form.classList.add("Invalid");
        text.innerHTML = "Please enter valid email address"
        text.style.color = "#ff0000"
    }
    if (email == "") {
        form.classList.remove("Valid");
        form.classList.remove("Invalid");
        text.innerHTML = ""
        text.style.color = "#00ff00"
    }
}

function passwordValidator() {
    let password = document.getElementById("password");
    let form = document.getElementById("form");
    let text = document.getElementById("text3");
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let specialCharacters = /\W|_/g;      

    if (password.value.length >=8 && password.value.length<=20) {
        if(password.value.match(lowerCaseLetters)){
            if(password.value.match(upperCaseLetters)){
                if(password.value.match(numbers)){
                    if(password.value.match(specialCharacters)){
                        form.classList.add("Valid");
                        form.classList.remove("Invalid");
                        text.innerHTML = "Password is correct"
                        text.style.color = "#00ff00"
                    }
                    else{b
                        form.classList.remove("Valid");
                        form.classList.add("Invalid");
                        text.innerHTML = "Insert a special character"
                        text.style.color = "#ff0000"
                    }
                }
                else{
                 form.classList.remove("Valid");
                 form.classList.add("Invalid");
                 text.innerHTML = "Insert a number"
                 text.style.color = "#ff0000"
                }
                
            }
            else {
                form.classList.remove("Valid");
                form.classList.add("Invalid");
                text.innerHTML = "Insert uppercase letters"
                text.style.color = "#ff0000"
            }
        }
        else {
            form.classList.remove("Valid");
            form.classList.add("Invalid");
            text.innerHTML = "Insert lowercase letters"
            text.style.color = "#ff0000"
        } 
    }
    else {
        form.classList.remove("Valid");
        form.classList.add("Invalid");
        text.innerHTML = "Password too short"
        text.style.color = "#ff0000"
    }

}
function showHide() {
    if (password.type === "password") {
        password.setAttribute("type", "text");
        toogle.classList.add("hide");
    } else {
        password.setAttribute("type", "password");
        toogle.classList.remove("hide");
    }
}
 // let getKeyCode = event.keyCode;
 //console.log(getKeyCode);
 // if (getKeyCode === 13) {
 //getInput(input.value);