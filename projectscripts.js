function emailValidation(inputText) {

    var mailFormat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var booleanValue;
    if (inputText.value.match(mailFormat)) {
        document.form1.email.focus();
        booleanValue =formConfirmBox(booleanValue);
        return booleanValue;
    } else {
        alert("Invalid E-mail adress!");
        document.form1.email.focus();
        booleanValue = false
        return booleanValue;
    }
}

function formConfirmBox(booleanValue){
 
    if(confirm("Are you sure you want to add these details?")){
        booleanValue = true;
        alert("Details added.");
        return booleanValue;
    } else {
        booleanValue = false;
       alert("Canceled!");
       return booleanValue;
    }

}
function hideForm(){
    document.getElementById("form").style.display =" hide";
}