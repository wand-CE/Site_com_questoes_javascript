function myFunction(){
    let texto = document.getElementById("text");    
    texto.value = texto.value.toUpperCase();
    length = texto.value.length;
    document.getElementById("span").innerHTML = length;
}