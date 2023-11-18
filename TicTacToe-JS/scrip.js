let jogada = ['x', 'o']

function game(button) {

    let random = Math.floor(Math.random() * jogada.length);
    let showJogada = document.getElementById('Mostrajogada')
    showJogada.innerHTML = jogada[random];

    switch (button) {
        case 1:
            let b1 = document.getElementById('BTN-1');
            b1.textContent = jogada[random];
            break;
        case 2:
            let b2 = document.getElementById('BTN-2');
            b2.textContent = jogada[random];
            break;
        case 3:
            let b3 = document.getElementById('BTN-3');
            b3.textContent = jogada[random];
            break;
        case 4:
            let b4 = document.getElementById('BTN-4');
            b4.textContent = jogada[random];
            break;
        case 5:
            let b5 = document.getElementById('BTN-5');
            b5.textContent = jogada[random];
            break;
        case 6:
            let b6 = document.getElementById('BTN-6');
            b6.textContent = jogada[random];
            break;
        case 7:
            let b7 = document.getElementById('BTN-7');
            b7.textContent = jogada[random];
            break;
        case 8:
            let b8 = document.getElementById('BTN-8');
            b8.textContent = jogada[random];
            break;
        case 9:
            let b9 = document.getElementById('BTN-9');
            b9.textContent = jogada[random];
            break;

        default:
            break;
    }


    if(checkVitoriaBola()){
        return
    }else if (checkVitoriaCruz()){
        return
    }

}


function checkVitoriaBola() {
    let b1 = document.getElementById('BTN-1');
    let b2 = document.getElementById('BTN-2');
    let b3 = document.getElementById('BTN-3');
    let b4 = document.getElementById('BTN-4');
    let b5 = document.getElementById('BTN-5');
    let b6 = document.getElementById('BTN-6');
    let b7 = document.getElementById('BTN-7');
    let b8 = document.getElementById('BTN-8');
    let b9 = document.getElementById('BTN-9');

    //Checagem por linha
    if(b1.innerHTML == 'o' && b2.innerHTML == 'o' && b3.innerHTML == 'o'){
        console.log("Vitoria do O");
    }
    else if(b4.innerHTML == 'o' && b5.innerHTML == 'o' && b6.innerHTML == 'o'){
        console.log("Vitoria do O");
    }
    else if(b7.innerHTML == 'o' && b8.innerHTML == 'o' && b9.innerHTML == 'o'){
        console.log("Vitoria do O");
    }

    //Checagem por coluna
    else if(b1.innerHTML == 'o' && b4.innerHTML == 'o' && b7.innerHTML == 'o'){
        console.log("Vitoria do O");
    }
    else if(b2.innerHTML == 'o' && b5.innerHTML == 'o' && b8.innerHTML == 'o'){
        console.log("Vitoria do O");
    }
    else if(b3.innerHTML == 'o' && b6.innerHTML == 'o' && b9.innerHTML == 'o'){
        console.log("Vitoria do O");
    }

    //Checagem pela diagonal
    else if(b1.innerHTML == 'o' && b5.innerHTML == 'o' && b9.innerHTML == 'o'){
        console.log("Vitoria do O");
    }
    else if(b3.innerHTML == 'o' && b5.innerHTML == 'o' && b7.innerHTML == 'o'){
        console.log("Vitoria do O");
    }

}

function checkVitoriaCruz() {
    let b1 = document.getElementById('BTN-1');
    let b2 = document.getElementById('BTN-2');
    let b3 = document.getElementById('BTN-3');
    let b4 = document.getElementById('BTN-4');
    let b5 = document.getElementById('BTN-5');
    let b6 = document.getElementById('BTN-6');
    let b7 = document.getElementById('BTN-7');
    let b8 = document.getElementById('BTN-8');
    let b9 = document.getElementById('BTN-9');

    //Checagem por linha
    if(b1.innerHTML == 'x' && b2.innerHTML == 'x' && b3.innerHTML == 'x'){
        console.log("Vitoria do X");
    }
    else if(b4.innerHTML == 'x' && b5.innerHTML == 'x' && b6.innerHTML == 'x'){
        console.log("Vitoria do x");
    }
    else if(b7.innerHTML == 'x' && b8.innerHTML == 'x' && b9.innerHTML == 'x'){
        console.log("Vitoria do x");
    }

    //Checagem por coluna
    else if(b1.innerHTML == 'x' && b4.innerHTML == 'x' && b7.innerHTML == 'x'){
        console.log("Vitoria do x");
    }
    else if(b2.innerHTML == 'x' && b5.innerHTML == 'x' && b8.innerHTML == 'x'){
        console.log("Vitoria do x");
    }
    else if(b3.innerHTML == 'x' && b6.innerHTML == 'x' && b9.innerHTML == 'x'){
        console.log("Vitoria do x");
    }

    //Checagem pela diagonal
    else if(b1.innerHTML == 'x' && b5.innerHTML == 'x' && b9.innerHTML == 'x'){
        console.log("Vitoria do x");
    }
    else if(b3.innerHTML == 'x' && b5.innerHTML == 'x' && b7.innerHTML == 'x'){
        console.log("Vitoria do x");
    }

}
