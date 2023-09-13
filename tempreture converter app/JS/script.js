// window.onload=document.getElementById("temprature").value="";


function tempconvert() {
    // take user input
   var temprature= document.getElementById("temprature").value
    var temptype= document.querySelector("#unit").value
     var typeto= document.querySelector("#select").value
     
// conversion
if (temprature) {
    var result
    if (temptype==="celcius" && typeto==="fahrenheit") {
        result=(temprature*9)/5+32
        document.getElementById("result").innerHTML= 
        temprature + ' Cel = ' + result + ' Fah'
    }else if(temptype==="fahrenheit"&& typeto==="celcius"){
        result=((temprature-32)*5)/9
        document.getElementById("result").innerHTML=
        temprature + 'fah=' + result +"cel"
    }else if (temptype==="kelvin" && typeto==="celcius"){
        result= parseFloat(temprature)-273.15
        document.getElementById("result").innerHTML= 
        temprature + ' kel = ' + result + ' cel'
    }else if (temptype==="celcius"&& typeto==="kelvin"){
        result=parseFloat(temprature)+273.15
        document.getElementById("result").innerHTML=
        temprature + 'cel=' + result + 'k'
    }else if(temptype==="fahrenheit" && typeto=== "kelvin"){
        result = ((parseFloat(temprature) - 32) * 5) / 9 + 273.15
    document.getElementById("result").innerHTML=
    temprature + 'fah=' + result + "k"
    }else if(temptype==="kelvin" && typeto=== "fahrenheit"){
        result = ((parseFloat(temprature) -273.15) * 9) / 5 + 32
    document.getElementById("result").innerHTML=
    temprature + 'k=' + result + "fah"
    }else {
        document.getElementById('result').innerHTML =
          'Please enter a temprature value.'
      }
  
}
}
//  type from selected
function fromtype() {
         selectElement = document.querySelector('#unit');
         output = selectElement.value;
         document.querySelector('.output').textContent = output;
        }
        // type to selected
        function totype() {
            selectElement = document.querySelector('#select');
    output = selectElement.value;
    document.querySelector('.output2').textContent = output;
}
