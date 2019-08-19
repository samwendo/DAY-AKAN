var century,year,month,day
Get input 
function getinput(){
    century parseInt(document.getElementById("century").value);
    year parseInt(document.getElementById("year").value);
    month parseInt(document.getElementById("month").value);
    day parseInt(document.getElementById("day").value);
}
if (century === ""){
alert("input the correct centuary");
return false;
} else if (year === ""){
alert("input the correct gender");
return false;
} else if (month === "")
return false;

