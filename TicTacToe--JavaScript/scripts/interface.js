document.addEventListener('DOMContentLoaded', ()=>{

    whichPlayer();

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleCLick);
    })

})

function handleCLick(event) {

    let square = event.target;
    let position = square.id;
    let winner = (playerTime == 0)? 'player1 X':'player2 O';

    if (handleMove(position)){
        setTimeout(()=>{
            alert(" O jogo acabou! O vencedor foi: " + winner);
        }, 20);  
    };

    updateSquare(position);
    updateScoreboard();
    whichPlayer();
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}


// Criar botão de restart

function restart(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (board[position] != ''){
            board[position] = '';
            playerTime = Math.floor(Math.random() * 2);
            gameOver = false;
        }

        if(symbol != ''){
            square.removeChild(square.childNodes[0]);
        }

        for(let i = 0; i < highlight.length; i++){
            document.getElementById(highlight[i]).classList.remove("winPosition");
        }

        whichPlayer();

    })

}

// Criar um placar

function updateScoreboard(){

    if (gameOver == true){

        if (playerTime == 0) {
            let roundWinner = document.getElementById("s1");
            let roundLoser = document.getElementById("s2");
            
            roundWinner.innerHTML = `<span>${player1}</span>`;
            roundLoser.innerHTML = `<span>${player2}</span>`;

        } else {
            let roundWinner = document.getElementById("s2");
            let roundLoser = document.getElementById("s1");

            roundWinner.innerHTML = `<span>${player2}</span>`;
            roundLoser.innerHTML = `<span>${player1}</span>`;
        } 
    }
}


// Adiciona classe que mostra de qual player é a vez

function whichPlayer(){
    
    if ( playerTime == 0) {
        document.getElementById("player1").classList.add("playerTime");

        document.getElementById("player2").classList.remove("playerTime");

    } else {
        document.getElementById("player2").classList.add("playerTime");

        document.getElementById("player1").classList.remove("playerTime");
    }
}