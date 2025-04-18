export function mensagem(nome) {
    let hoje = new Date();
    let hojeHora = hoje.getHours();
    if (hojeHora > 17) {
        return `Olá ${nome}, tenha uma boa noite!`;
    } else if (hojeHora > 12) {
        return `Olá ${nome}, tenha uma boa tarde!`;
    } else {
        return `Olá ${nome}, tenha um bom dia!`
    }
}