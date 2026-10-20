function vaildatevaule() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("Confirm").value;
    var result = document.getElementById("result");

    if (user === "" || email === "" || pass === "" || confirm === "") {
        result.innerHTML = "Enter Data";
        return false;
    }

    result.style.display = "block";
    result.style.color = "red";

    if (user == "" || email == "" || pass == "" || confirm == "") {
        result.innerHTML = "Enter Data";
        return false;
    }
    else if (user.length < 5 || user.length > 15) {
        result.innerHTML = "Enter 5-15 characters in Name";
        return false;
    }
    else if (!email.includes("@") || !email.includes(".")) {
        result.innerHTML = "Enter a valid Email";
        return false;
    }
    else if (pass.length < 8) {
        result.innerHTML = "Password must be at least 8 characters";
        return false;
    }
    else if (pass != confirm) {
        result.innerHTML = "Password does not match";
        return false;
    }

    result.style.color = "green";
    result.innerHTML = "All Data Is Correct";
    return true;
}
