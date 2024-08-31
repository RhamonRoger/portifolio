const numeros = [2, 4, 6, 20, 8];

let AlgumNaoParouMenorZero = false;

for (let i=0 ; i < numeros.length; i++){
    if (numeros[i] % 2 !== 0 || numeros[i] < 0){
        AlgumNaoParouMenorZero = true; 

        break;
    }
       
       

}
// Verificar se todos os números do array são divisíveis por 3 e 5
 
let TodosDivisiveisPor3E5 = true;

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] % 3 !== 0 || numeros[i] % 5 !== 0){
        
        
        TodosDivisiveisPor3E5 = false;

        break;
    }
}

console.log("Pelo menos um numero do array não é par ou menor que 0?",  AlgumNaoParouMenorZero);
console.log("Todos os numeros são divisiveis por 3 e 5 ?", TodosDivisiveisPor3E5);