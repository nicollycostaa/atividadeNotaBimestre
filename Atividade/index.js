alert("Seja bem-vindo(a)");
const nome = prompt ("Digite seu nome: ");

let nota = prompt(`${nome}, digite sua nota do 1º bimestre: `);
let nota2 = prompt ("Digite agora sua nota do 2º bimestre: ");

nota = Number(nota);
nota2 = Number(nota2);

const media = (nota + nota2) / 2

if(media >= 5){
    alert(`${nome}, sua nota é: ${media}, portanto você passou, parabéns.`);

}else{
    alert(`${nome}, sua nota é: ${media}, portanto você não passou.`);
}