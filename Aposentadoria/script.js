var objeto = [
  { "nome": "", "idade": 0 },
  { "nome": "", "idade": 0 },
  { "nome": "", "idade": 0 },
  { "nome": "", "idade": 0 },

]
for (i = 0; i < 4; i++) {
  objeto[i].nome = prompt("informe o seu nome");
  objeto[i].idade = prompt('informe a sua idade')
}
function idosas(x) {
  return x.idade >= 60;
}
var ap = objeto.filter(idosas);
console.log('As pessoas acima de 60 anos são:')
for (i = 0; i < ap.length; i++)
  console.log(ap[i].nome)
