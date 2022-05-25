let num1 = document.getElementById("1");
let num2 = document.getElementById("2");
let num3 = document.getElementById("3");
function myFunction() {
    let maior = Math.max(num1.value, num2.value, num3.value);
    document.getElementById("paragrafo").innerHTML = ("O maior número é o: " + maior);    
  }