var i, num =[3], maior = 0;

for (i = 0; i < 3; i++){
num[i] = parseInt (prompt ('informe o número'));
}
maior = Math.max.apply(null, num);

num.sort();

alert('O maior é:' + maior);

alert ('\n a ordem é ' + num[0] + num[1] + num[2]);
