const url = 'https://api.nationalize.io/?name=nathaniel';
fetch(url).then(
  (resp) => resp.json() //retorna a promisse
).then((repos) => {
  for (let i in repos.country) {
    console.log(repos.country[i].country_id);
     console.log(repos.country[i].probability);
  }
  
}).catch((error) => {
  console.log(error);
});
