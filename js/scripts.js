//getting date input from the form
var mydate = document.getElementById("mydate");
var gender = document.akanform.gender;

var bday = mydate.value;
var date = new Date(document.getElementById("mydate").value);
var dateday = date.getDay();
var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = weekdays[dateday];
var mName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var fName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var valid = false;

//getting error display objects
var mydateerror = document.getElementById('mydateerror');
var gendererror = document.getElementById('gendererror');

//get diplay object
var display = document.getElementById('display');

//validation function
function validate(){
    if(mydate.value == ""){
        mydate.style.backgroundColor = "#ff9900be";
        mydate.style.border = "2px groove red";
        mydateerror.innerHTML = "Please enter a valid date ";
        mydate.focus();
        return false;
    }