let num1 = parseInt(prompt("Numero 1: "));
let num2 = parseInt(prompt("Numero 2: "));

//alert(num1 + num2);
//document.write(num1+num2);
texto.innerHTML = num1+num2;
texto.style.border = "3px solid darkblue"

//Selecionando o elemento h1 com id "titulo"

//1ª forma
document.getElementById("titulo").innerHTML = "Exemplo Javascript";
//2ª forma
document.querySelector("#titulo").style.backgroundColor = "lightBlue";
//3ªforma
titulo.style.color="tomato";

if(confirm("Tudo bem com você?")){
    alert("Que bom!!");
}else{
    alert("Que pena!!!");
}

let estado = prompt("Informe seu estado:");

switch(estado.toLowerCase()){
    case "rondônia":
        alert("legal");
        break;
    case "bahia":
        alert("muito legal");
        break;
    case 'rio grande do sul':
        alert ('que frio');
        break;
    default:
        alert("você é de outro estado");
}

