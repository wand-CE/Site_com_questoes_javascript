let car = document.getElementById("carros");
let kms = document.getElementById("km");
carros.onclick = function(){
        if (car.value === "carA"){
            let total = (kms.value / 8)
            document.getElementById("span").innerHTML = ("Consumo estimado de combustível: " + total);    
        }else if(car.value === "carB"){
            let total = (kms.value / 9)
            document.getElementById("span").innerHTML = ("Consumo estimado de combustível: " + total);    

        }else if(car.value === "carC"){
            let total = (kms.value / 12)
        }
}
document.getElementById("span").innerHTML = ("Consumo estimado de combustível: " + total);    
