function busca_alunos(){
fetch('dados.json')
.then(response => response.json())
.then(ddd => {
    tablet = document.getElementById('lugar');
    ddd.forEach(pessooainha =>{
        let linha = document.createElement('tr')
        linha.innerHTML=
        "<td>" +pessooainha.nome + "</td>" +
        "<td>" +pessooainha.idade + "</td>" +
        "<td>" +pessooainha.personalidade + "</td>";
        tablet.appendchild(linha);

    })
})


}

   


