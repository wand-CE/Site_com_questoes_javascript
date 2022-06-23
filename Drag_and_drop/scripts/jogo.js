window.onload = function(){
    let disp = [1,2,3];
    let vetor = [1,2,3];
    vetor.forEach(function(e){
        num = disp[Math.floor(Math.random()*disp.length)];
        disp.splice(disp.indexOf(num), 1);
        let img = document.getElementById('drag'+e);
        img.src = 'imagens/'+num+'.png';
        img.ondragstart = iniciardrag;
        divreceb = document.getElementById('receb'+ e );
        divreceb.ondrop = receberImagem;
        divreceb.ondragover = permitirSoltar;
        divorig = document.getElementById('orig'+ e );
        divorig.ondrop = receberImagem;
        divorig.ondragover = permitirSoltar;
    });
}

function iniciardrag(ev){
    ev.dataTransfer.setData("img", ev.target.id);
}


function receberImagem(ev){
    ev.preventDefault();
    var dados = ev.dataTransfer.getData("img");
    let imagem = document.getElementById(dados);
    ev.target.innerHTML = "";
    ev.target.appendChild(imagem);
}

function permitirSoltar(ev){
    ev.preventDefault();
}
