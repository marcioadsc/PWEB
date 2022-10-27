var i, med, maiorIdade, menorIdade;
var arrayIdade=[45];
var arraySexo=[45];
var arrayOpin=[45];
var a = 0, c = 0, d = 0, f = 0, g = 0;
alert("Vamos iniciar!");

for(i=0;i<3;i++){
    arrayIdade[i] = parseInt(prompt("Quantos anos você tem?"));
    arraySexo[i] = prompt("Qual o seu sexo? Digite somente F ou M.");
    arrayOpin[i] = prompt("Qual é a sua opinião sobre o filme?\n 1-Péssimo.\n 2-Regular.\n 3-Bom.\n 4-Ótimo.");

    a += arrayIdade[i];
}

med = a/3;

maiorIdade = Math.max.apply(null, arrayIdade);

menorIdade = Math.min.apply(null, arrayIdade);

for(var b=0;b<3;b++){
    if(arrayOpin[b] == "1"){
        c += 1;
    }
    else if(arrayOpin[b] == "4" || arrayOpin[b] == "3"){
        d += 1;
    }
}

var porc = (100*d)/3; 

for(var e=0;e<3;e++){
    if(arraySexo[e] == "F"){
        f += 1;
    }
    else if(arraySexo[e] == "M"){
        g += 1;
    }
}


alert("Resultado da Pesquisa: " + "\n***********************\n" +
    "A média de idades é: " + med +
     "\nA maior idade é: " + maiorIdade + 
     "\nA menor idade é: " + menorIdade + "\n" + 
     c + " pessoas responderam Péssimo." + "\n" +
     porc + " é a porcentagem de pessoas que responderam Bom ou Ótimo" + 
     "\n" + f + " mulheres responderam o questionário, e " + "\n" + g + 
     " homens responderam o questionário.");