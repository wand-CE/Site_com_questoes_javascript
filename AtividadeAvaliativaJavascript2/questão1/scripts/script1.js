let carro = document.getElementById('car');
let kms = document.getElementById('km');
var check = document.getElementById("ar");
let limp = document.getElementById("limpar");
var element = document.getElementById('span');
var form1 = document.getElementById('tela');
calc.onclick = function(){
    if (kms.value > 0){    
            switch (carro.value){
                case 'carA':
                    total = (kms.value / 8);
                    break;
                case 'carB':
                    total = (kms.value / 9);
                     break;
                case 'carC':
                    total = (kms.value / 12);
                    break;
                default:
                    alert('Escolha um carro');
            }           
            
            if (check.checked === false){            
                document.getElementById("span").innerHTML = "Consumo estimado de combustível em litros: " + total.toFixed(2);
                element.style.backgroundColor = "#181848";  
                element.style.color = "white"; 

            }else{
                document.getElementById("span").innerHTML = "Consumo estimado de combustível em litros: " + (total + (total*0.05)).toFixed(2);
                element.style.backgroundColor = "#f0a818";                
                element.style.color = "black";                
            }   
    }else{
        alert('Digite Quilometros validos')
    }
    
} 
    limp.onclick = function(){
        document.getElementById("span").innerHTML = "";
    } 