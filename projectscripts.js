function emailValidation(inputText) {

    var mailFormat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputText.value.match(mailFormat)) {
        document.form1.email.focus();
        return true;
    } else {
        alert("Invalid E-mail adress!");
        document.form1.email.focus();
        return false;
    }
    
    
}