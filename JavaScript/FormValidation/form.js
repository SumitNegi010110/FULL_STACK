function validationOfUserinfo(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    if(name.length < 6 || !/^[a-zA-Z]+$/.test(name)){
        alert("Invalid User Name");
        return false;
    }

    if(password.length < 8){
        alert("Invalid Passwprd");
        return false;
    }

    if(! (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))){
        alert("Invalid email address");
        return false;
    }
    return true;
}

