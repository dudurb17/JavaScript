const estado=[];
for(let cont=0; cont<4; cont++){
  var x={
    nome:"",
    sigla:""
  }
  x.nome=prompt(`Informe o ${cont+1} nome da estado:`);
  x.sigla=prompt(`Informe a ${cont+1} sigla: `);
  estado.push(x);
}
const retornoMap=estado.map((item)=>`${item.nome}-${item.sigla}`);
for(let cont=0; cont<retornoMap.length; cont++)
  {
    console.log(retornoMap[cont]);
  }
