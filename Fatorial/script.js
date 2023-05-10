const nums = [];
for (let i = 0; i < 4; i++) {
  nums[i] = Number.parseInt(prompt(`Informe o ${i + 1} número inteiro:`))
}
var res = nums.map((elem) => {

  let teste = elem
  for (let i = elem - 1; i >= 1; i--) { teste = teste * i; }
  return teste
});
console.log('Fatoriais: '+res);

