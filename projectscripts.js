

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
function appearForm(){
    document.getElementById("form").style.display ="block";
    document.getElementById("startButton").style.display="none";
}
function fillTable(){
    var table = document.getElementById("table");
    var row= document.createElement("tr");
    
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");

    td1.innerHTML = document.getElementById("lname").value;
    td2.innerHTML = document.getElementById("bdate").value;
    td3.innerHTML = document.getElementById("email").value;
    td4.innerHTML = document.getElementById("pnum").value;
    td5.innerHTML = document.getElementById("postal").value;
    td6.innerHTML = document.getElementById("adress").value;
    td7.innerHTML = document.getElementById("floor").value;

    const td_array = [td1,td2,td3,td4,td5,td6,td7];
    
    for(i = 0;i < td_array.length; i++){
        row.appendChild(td_array[i]);
    }
    table.children[0].appendChild(row);
}