/*Crie uma tela com uma listagem de dados: 1.5 Ponto
a) Use um vetor de objetos com no mínimo 3 e no maximo 10 elementos. Cada elemento deve possuir
no mínimo 2 atributos. Em seguida, crie um botão para aplicar filtro através da função filter(), o criterio
do filtro é de sua escolha.*/
var pessoas = [];
for (let i = 0; i < 8; i++) {
  const ps = { nome: "", idade: 0 };
  ps.nome = prompt(`Informe o ${1 + i}º nome:`);
  ps.idade = prompt(`Informe a ${1 + i}ª idade:`);
  pessoas.push(ps);
}

var tb = document.getElementById("tbPessoas");
var qtdLinhas;
var linha;
var cellCodigo;
var cellNome;
var cellIdade;
for (let i = 0; i < pessoas.length; i++) {
  qtdLinhas = tb.rows.length;
  linha = tb.insertRow(qtdLinhas);
  cellCodigo = linha.insertCell(0);
  cellNome = linha.insertCell(1);
  cellIdade = linha.insertCell(2);
  cellCodigo.innerHTML = qtdLinhas;
  cellNome.innerHTML = pessoas[i].nome;
  cellIdade.innerHTML = pessoas[i].idade;
}
function filtro() {
  var ap = pessoas.filter((arr) => {
    return arr.idade >= 18 && arr.idade < 70;
  });

  var tb = document.getElementById("tfPessoas");
  for (let i = 0; i < ap.length; i++) {
    qtdLinhas = tb.rows.length;
    linha = tb.insertRow(qtdLinhas);
    cellCodigo = linha.insertCell(0);
    cellNome = linha.insertCell(1);
    cellIdade = linha.insertCell(2);
    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = ap[i].nome;
    cellIdade.innerHTML = ap[i].idade;
  }
}
