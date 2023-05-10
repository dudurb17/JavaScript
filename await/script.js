function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}
function createTimeout(ms, func) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(func());
    }, ms)
  );
}

async function func1(numValue) {
  return await createTimeout(1000, () => numValue * getRandomInt(20));
}

async function func2(numValue) {
  return await createTimeout(1000, () => numValue * getRandomInt(20));
}

async function func3(numValue) {
  return await createTimeout(1000, () => numValue * getRandomInt(20));
}

const numValue = Number(prompt(`Informe o valor que você deseja multiplicar`))
async function doAll(numValue) {
  console.log(`O primeiro valor ${numValue}`)
  const num1 = await func1(numValue);
  console.log(`O segundo valor ${num1}`)
  const num2 = await func2(num1);
  console.log(`O terceiro valor ${num2}`)
  const num3 = await func3(num2);

  return num3;
}

doAll(numValue)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
