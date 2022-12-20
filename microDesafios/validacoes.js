const consertos = require ("./consertos");

function validar (chave, tipo) {
    if (typeof chave === tipo) {
        return true
    }

    return false
}

console.log(validar(consertos[0].valores, "object"));