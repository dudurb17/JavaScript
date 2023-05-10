function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}
const func1 = async (value) => await((resolve) => {
  setTimeout(() => {
    resolve(value * getRandomInt(20));
  }, 4000);
});

const func2 = async (value) => await(resolve => {
  setTimeout(() => {
    resolve(value * getRandomInt(20));
  }, 3000);
})

const func3 = async (value) => await(resolve => {
  setTimeout(() => {
    resolve(value * getRandomInt(20));
  }, 2000);
});


const inicialValue = 7

const asyncAwait = async (value) => {
  console.log(`O primeiro valor ${value}`)
  let result = await func1(value);
  console.log(`O valor do segundo retorno: ${result}`)
  result = await func2(result);
  console.log(`O valor do terceiro retorno: ${result}`)
  result = await func3(result);
  console.log(`O valor do último retorno: ${result}`)
}
asyncAwait(inicialValue)