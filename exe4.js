/*criar uma variável de escopo de bloco ou função e que NÂO pode ter seu valor alterado,com 
o nome de Objeto teste, inicializando a mesma com o valor={}
PS: 
    Tentar alterar este valor para null;
    Tentar incluir uma propriedade neste objeto na seguinte forma: ObjetoTeste.a=10;
    Tentar alterar o valor da propriedade a para=5;
    Tentar incluir uma propriedade nome neste objeto, inicializando com o valor "teste"
*/
const objetoTeste ={};
// objetoTeste =null=> dá erro

objetoTeste.a = 10 // Nao altera o typeof ,mas sim, acrescentando uma propriedade ao objeto
console.log(objetoTeste)

objetoTeste['a']=5 // acessa e atribui valor dentro da propriedade a
console.log(objetoTeste)

objetoTeste['a_b']="teste" //crio uma nova propriedade e atribuo um valor
console.log(objetoTeste['a_b'])
