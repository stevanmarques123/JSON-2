function busca_alunos(){
    fetch('dados.json')
        .then(response => response.json())
        .then(ddd => {
        tablet = document.getElementById('lugar');
        ddd.forEach(pessoainha => {
            let linha = document.createElement('tr');
            linha.innerHTML =
                "<td>" + pessoainha.nome + "</td>" +
                "<td>" + pessoainha.idade + "</td>" +
                "<td>" + pessoainha.personalidade + "</td>";
            tablet.appendChild(linha);
        });

})
}