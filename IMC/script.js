function calcular() {
  const peso = document.getElementById("peso").value;
  const imc = document.getElementById("imc");
  const pesoT = document.getElementById("pesoT");
  const alturaT = document.getElementById("alturaT");
  const idade = document.getElementById("idade").value;
  const idadeT = document.getElementById("idadeT");
  const nome = document.getElementById("nome").value;
  const nomeT = document.getElementById("nomeT");
  try {
    var altura = document.getElementById("altura").value;
    if (altura > 100) {
      throw "Proxima vez informe o valor em base do exemplo. Ex:1.80";
    }
  } catch (error) {
    altura = altura / 100;
    alert(error);
  }
  function Imc(result) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(peso / (altura * altura));
      }, 1000);
    });
  }
  async function main(result) {
    alert("Começando a calcular o Imc");
    let teste = await Imc();
    imc.innerText = teste.toFixed(2).replace(".", ",");
    pesoT.innerText = peso;
    alturaT.innerText = altura;
    idadeT.innerHTML = idade;
    nomeT.innerHTML = nome;
  }
  main();
}
