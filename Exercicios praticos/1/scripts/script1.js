function myFunction(){
    let texto = document.getElementById("text");
    texto.value = texto.value;
    document.getElementById("span").innerHTML = ("O cubo de " + texto.value + " é: " + Math.pow(texto.value, 3));
}