
function validateForm() {
   if (document.form1.fname.value == "") {
      alert("Please provide your first name!");
      document.form1.fname.focus();
      return false;
   }
   if (document.form1.lname.value == "") {
      alert("Please provide your last name!");
      document.form1.lname.focus();
      return false;
   }
   if (document.form1.bdate.value == "") {
      alert("Please provide your birth date!");
      document.form1.bdate.focus();
      return false;
   }
   if (document.form1.email.value == "") {
      alert("Please provide your email!");
      document.form1.email.focus();
      return false;
   }
   if (document.form1.pnum.value == "") {
      alert("Please provide your phone number!");
      document.form1.pnum.focus();
      return false;
   }
   if (document.form1.postal.value == "" || isNaN(document.form1.postal.value) ||
      document.form1.postal.value.length != 4) {

      alert("Please provide your postal code in the format ####.");
      document.form1.postal.focus();
      return false;
   }
   if (document.form1.adress.value == "") {
      alert("Please provide your adress!");
      return false;
   }
   if (document.form1.floor.value == "") {
      alert("Please provide your floor!");
      return false;
   }
   fillTable();
   return (true);
  
}
function fillTable() {
   var table = document.getElementById("table");
   var thead = document.getElementById("thead");
   var row = document.createElement("tr");
   table.style.display = "block";
   thead.style.display = "block";

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

   const td_array = [td1, td2, td3, td4, td5, td6, td7, td8];

   for (i = 0; i < td_array.length; i++) {
      row.appendChild(td_array[i]);
   }
   table.children[0].appendChild(row);
}
function addNewItemToList(){
   var NodeList = document.getElementsByTagName("li");
   var li = document.createElement("li");
   var inputValue = document.getElementById("newItem").value;
   var t = document.createTextNode(inputValue);
   li.appendChild(t);
   for(i=0;i<NodeList.length;i++){
      if(inputValue == NodeList[i].textContent){
         alert("That Item is already on the list!")
        return false;
      }
   }
   if (inputValue === '') {
     alert("You must write something!");
     return false;
   } else {
     document.getElementById("ul").appendChild(li);
   }
   document.getElementById("newItem").value = "";
 
   var span = document.createElement("SPAN");
   li.appendChild(span);
 
   for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
     }
   }

}