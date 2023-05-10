function createTimeout(ms, func) {
    return new Promise(resolve => setTimeout(() => {
    resolve(func());
  }, ms))
}

async function func1(numValue) {
  return await createTimeout(1000, () => numValue * 10)
 }

async function func2(numValue) { 
    return await createTimeout(1000, () => numValue * 10)
}

async function func3(numValue) {
    return await createTimeout(1000, () => numValue * 10)
}


const numValue=9;
async function doAll(numValue) {

  const bathResult= await func1(numValue);
    
  const workoutResult = await func2(bathResult);

  const endResult = await func3(workoutResult);

  return endResult ;
}

doAll(numValue)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });