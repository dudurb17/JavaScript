var num = [];
let cont = 1;
for (i = 0; i < 4; i++) {
  num[i] = Number.parseInt(prompt(`Informe o ${cont}º número inteiro:`))
  cont++;
}
function par(x) {
  return x%2==0;
}
var res=num.filter(par);
alert(`Os valores que você informou esses são pares: ${res}`)
  
