
function produto(tipo, valor) {
    let mensagem = 'Prato pronto,bom apetite\n';
        console.log
    switch(tipo) {
        case 'Pipoca' :
            mensagem += 'Prato pronto,bom apetite\n';

            if (valor <= 10) {
                mensagem += 'Tempo insuficiente\n';
            }
        break;
        case 'Carne' :
            mensagem += 'Prato pronto,bom apetite\n';
        break; 
        case 'Macarrão' :
            mensagem += 'Prato pronto,bom apetite\n';

            if (valor >= 10) {
                mensagem += 'Prato pronto,bom apetite\n';
            } else {
                mensagem += 'kabumm\n';
            }           
        break;
    }

;
    mensagem += msgPadrao();    

    return mensagem;

}

function msgPadrao() {
    return 'Prato pronto,bom apetite\n';
}


console.log(produto('pipoca',));
console.log('\n-------------------------\n');
console.log(produto('carne',));
console.log('\n-------------------------\n');
console.log(produto('macarrao',));
console.log('\n-------------------------\n');
