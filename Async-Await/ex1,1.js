function getRandomInt(max) {
  return Math.floor(Math.random() * (max-1)+1);
}
const func1 = (value) => new Promise(resolve => {
  setTimeout(() => {
    resolve(value * getRandomInt(20));
  }, 1000);
})

const func2 = (value) => new Promise(resolve => {
  setTimeout(() => {
    resolve(value * getRandomInt(20));
  }, 1000);
})
const func3 = (value) => new Promise(resolve => {
  setTimeout(() => {
    resolve(value * getRandomInt(20));
  }, 1000);
})

const inicialValue = 5

console.log(`Valor iniciado = ${inicialValue}`)
func1(inicialValue)
  .then((result) => {
    console.log(`Valor do primeiro retorno = ${result}`)
    return func2(result)
  })
  .then((result) => {
    console.log(`Valor do segundo rertorno = ${result}`)
    return func3(result)
  })
  .then((result) => console.log(`O valor do último retorno= ${result}`));