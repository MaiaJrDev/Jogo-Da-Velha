//variáveis essenssiais para o jogo
let board = ['', '', '', '', '', '', '', '', '',];
let playerTime = 0;
let gameOver = false;

//simbolo identificador do jogador
let simbolos = ['o', 'x'];

//combinações que representam vitória de um dos jogadores
let vencedor = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Função que reinicia o jogo quando botão reset é clicado

document.getElementById('btn').addEventListener('click', () => {

    board = ['', '', '', '', '', '', '', '', '',];
    playerTime = 0;
    gameOver = false;
    
    let quadros = document.querySelectorAll('.quadro');
    
    for (i in quadros) {
    
        quadros[i].innerHTML = '';
    
    };
    
    });

//Função que define se deu ou não game over e muda o jogador da vez
function mudaJogador(position){

    if(gameOver){

        return;

    };

    if(board[position] == ''){

        board[position] = simbolos[playerTime];

        gameOver = verificaVencedor();

        if(!gameOver){

            playerTime = (playerTime == 0) ? 1 : 0;

        };

    };

    return gameOver;
   
}

//Função que verifica se já tem um vencedor
function verificaVencedor(){

    for( let i = 0; i < vencedor.length; i++){
        
        let seq = vencedor[i];

        let pos0 = seq[0];
        let pos1 = seq[1];
        let pos2 = seq[2];

        if(board[pos0] == board[pos1] && board[pos0] == board[pos2] && board[pos0] != ''){

            return true;
            
        };

    };

    false;

}

let quadros = document.querySelectorAll('.quadro');

quadros.forEach((quadros) => {

    quadros.addEventListener('click', fazerJogada);

})

//Função que ao clicar no card executa a jogada lança menssagem se houver vencedor
function fazerJogada(event) {

let position = event.target.id;

if(mudaJogador(position)){

    if(playerTime == 0){

        playerTime = 'Verde'

    }else{

        playerTime = 'Vermelho'

    };
     setTimeout(() => {
        alert(`O jogo acabou, o ${playerTime} venceu`);
    }, 10);

};

colocarCUP(position);
}

//Função que define e coloca o simbolo no card de acordo com o jogador da vez
function colocarCUP(position){

let square = document.getElementById(position.toString());
let simbolo = board[position];
square.innerHTML = `<div class='${simbolo}'></div>`;
}
