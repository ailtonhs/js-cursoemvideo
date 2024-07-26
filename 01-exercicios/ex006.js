let n1 = 1545.5;

console.log(n1);

console.log(n1.toFixed(2));//toFixed para altera a casa decimal do ponto flutuante

console.log(n1.toFixed(2).replace('.', ','));//muda o .ponto flutuante para uma virgula

console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); //comando para transformar números em moeda