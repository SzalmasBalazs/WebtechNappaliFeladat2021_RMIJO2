
function validateForm(inputText) {
    if( document.form1.fname.value == "" ) {
        alert( "Please provide your first name!" );
        document.myForm.Name.focus() ;
        return false;
     }
     if( document.form1.lname.value == "" ) {
        alert( "Please provide your last name!" );
        document.myForm.Name.focus() ;
        return false;
     }
     if( document.form1.bdate.value == "" ) {
        alert( "Please provide your birth date!" );
        document.myForm.Name.focus() ;
        return false;
     }
     if( document.form1.email.value == "" ) {
        alert( "Please provide your email!" );
        document.myForm.EMail.focus() ;
        return false;
     }
     if( document.form1.pnum.value == "" ) {
        alert( "Please provide your phone number!" );
        document.myForm.EMail.focus() ;
        return false;
     }

     if( document.form1.date.value == "" || isNaN( document.myForm.Zip.value ) ||
        document.myForm.Zip.value.length != 4) {
        
        alert( "Please provide your postal code in the format ####." );
        document.myForm.Zip.focus() ;
        return false;
     }
     if( document.myForm.Country.value == "-1" ) {
        alert( "Please provide your country!" );
        return false;
     }
     return( true );
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
    table.style.display= "block";
    document.getElementById("form").style.display = "none";


    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    
    td1.innerHTML = document.getElementById("lname").value;
    td2.innerHTML = document.getElementById("fname").value;
    td3.innerHTML = document.getElementById("bdate").value;
    td4.innerHTML = document.getElementById("email").value;
    td5.innerHTML = document.getElementById("pnum").value;
    td6.innerHTML = document.getElementById("postal").value;
    td7.innerHTML = document.getElementById("adress").value;
    td8.innerHTML = document.getElementById("floor").value;

    const td_array = [td1,td2,td3,td4,td5,td6,td7,td8];
    
    for(i = 0;i < td_array.length; i++){
        row.appendChild(td_array[i]);
    }
    table.children[0].appendChild(row);
}