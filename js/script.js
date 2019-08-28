function MakeArray(n) {
    for (var i = 0; i <= n; i++) { }
}
days = new MakeArray(7);
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wednesday"
days[5] = "Thursday"
days[6] = "Friday"


Male = new MakeArray(7)
Male[0] = "Kwame"
Male[1] = "Kwasi"
Male[2] = "Kwadwo"
Male[3] = "Kwabena"
Male[4] = "Kwaku"
Male[5] = "Yawa"
Male[6] = "Kofi"

Female = new MakeArray
Female[0] = "Ama"
Female[1] = "Akosua"
Female[2] = "Adwao"
Female[3] = "Adenaa"
Female[4] = "Akua"
Female[5] = "Yaa"
Female[6] = "Afua"

function compute(form) {
    var val1 = parseInt(form.date.value)
    
    if ((val1< 0) || (val1 > 31)) {
        alert("day invalid")
    }

    var val2 = parseInt(form.month.value)
    if ((val2 < 0) || (val2 > 12)) {
        alert("Month invalid")
    }
    var val2x = parseInt(form.month.value)
    var val3 = parseInt(form.year.value)
    if (val3 < 1900) {
        alert("SORRY")
    }
    var val4 = parseInt(((val2x + 1) * 3) / 5)
    var val5 = parseInt(val3 / 4, 10)
    var val6 = parseInt(val3 / 100, 10)
    var val7 = parseInt(val3 / 400, 10)
    var val8 = val1 + (val2x * 2) + val4 + val3 + val5 - val6 + val7 + 2
    var val9 = parseInt(val8 / 7, 10)
    var val0 = val8 - (val9 * 7)
    form.result2.value = days[val0]
if ( document.getElementById("m1").checked) {
    form.result3.value =  Male[val0]
} else if (document.getElementById("m2").checked){
    form.result3.value = Female[val0]
}


}