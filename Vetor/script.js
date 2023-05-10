var notas = [];
let cont = 1;
for (i = 0; i < 4; i++) {

  notas[i] = Number.parseInt(prompt(`Informe a ${cont}º nota inteira:`));
  cont++;
}
var media = notas.reduce(function(prevVal, elem, indice, array, total) {
  total = elem + prevVal
  if (indice == array.length - 1) {
    return total / 4

  }
  return total;

}, 0);
alert(`A média desse aluno foi de ${media}`);