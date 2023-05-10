const url = 'https://api.github.com/users/xiaotian/repos';
fetch(url).then(
  (resp) => resp.json()
).then((repos) => {
  alert(`Está mostrando o node_id:`)
  for (let i in repos) {
    console.log(repos[i].node_id)
  }
  setTimeout(() => {
    alert(`Informando os id:`)
    for (let i in repos) {
      console.log(repos[i].id)

    }
  }, 3000)


}).catch((error) => {
  console.log(error);
});