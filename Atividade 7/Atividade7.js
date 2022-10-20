var esc, esc1, esc2;

esc1 = prompt("Vamos jogar! Escolha uma opção: \n 1 - Pedra\n 2 - Papel\n 3 - Tesoura");
alert("O Jogador 2 está escolhendo uma opção.");

esc = Math.random();

if(esc >= 0 && esc <= 0.33){
    esc2 = "Pedra";
}
else if(esc >= 0.34 && esc <= 0.66){
    esc2 = "Papel";
}else{
    esc2 = "Tesoura";
}

if(esc1 == "1" && esc2 == "Pedra" ? alert("Empate") : esc1 == "2" && esc2 == "Papel" ? alert("Empate") : esc1 == "3" && esc2 == "Tesoura"){
    alert("Empate");
}
else if(esc1 == "1" && esc2 == "Tesoura" ? alert("Pedra quebra Tesoura! Você venceu!") : esc1 == "2" && esc2 == "Pedra" ? alert("Papel cobre Pedra! Você venceu!") : esc1 == "3" && esc2 == "Papel"){
    alert("Tesoura corta Papel! Você venceu!");
}
else if(esc1 == "1" && esc2 == "Papel" ? alert("Papel cobre a Pedra! O Jogador 2 venceu!") : esc1 == "2" && esc2 == "Tesoura" ? alert("Tesoura corta Papel! O Jogador 2 venceu!") : esc1 == "3" && esc2 == "Pedra"){
    alert("Pedra quebra Tesoura! O Jogador 2 venceu!");
}

