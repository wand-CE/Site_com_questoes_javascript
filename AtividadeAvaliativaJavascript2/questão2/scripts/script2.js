ver.onclick = function(){
    let nome1 = document.getElementById('nome');

    if ((nome1.value).length > 0 && sex.value !== 'sel'){

        if(sex.value === 'F' && (idade.value < 25 && idade.value >0)){
            document.getElementById("aceita").innerHTML = 'Nome: ' + nome.value + "<br>Situação: Aceito";
            document.getElementById("ac").style.backgroundColor = "rgb(38, 92, 38)";
            
        }else if (idade.value === ''){
            alert('Campo idade obrigatório');

        }else if(idade.value < 0){
            alert('Digite uma idade válida');

        }else{     
            document.getElementById("aceita").innerHTML = 'Nome:    ' + nome.value + "<br>Situação: Não Aceito";
            document.getElementById("ac").style.backgroundColor = "rgb(116, 25, 25)";
        }
    }else{
        alert('Preencha todos os campos!!!')
    }
    }
limp.onclick = function(){
    document.getElementById("aceita").innerHTML = '';
    document.getElementById("ac").style.backgroundColor = "transparent";
}
    
