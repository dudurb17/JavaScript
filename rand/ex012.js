var agora=new Date()
var hora=agora.getHours()
console.log(`Agora são extamantes ${hora} horas`)
if(hora<12 && hora>6)
{
    console.log('Bom  dia')
}
if(hora<=18 && hora>=12)
{
    console.log('Boa tarde')
}
if(hora>18 && hora<23)
{
    
    console.log('Boa noite')
}
else{
    console.log('Boa madrugada')
}