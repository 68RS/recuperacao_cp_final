 //const consertos = require ("./consertos");

let aparelhosProntos = [
    {
        aparelho: "Samsung A01",
        itensConsertados: [
            "tela", 
            "bateria", 
            "teclado"
        ],
        valores: [
            50,
            200,
            30
        ],
        pronto: true
    },

    {
        aparelho: "Moto e20 ",
        itensConsertados: [
            "tela",
            "bateria",
            "teclado"
        ],
        valores: [
            35,
            150,
            40
        ],
        pronto: false
    },

    {
        aparelho: "Moto g22",
        itensConsertados: [
            "tela",
            "bateria",
            "teclado"
        ],
        valores: [
            25,
            100,
            20
        ],
        pronto: true
    },

    {
        aparelho: "Smart TV LG 75",
        itensConsertados: [
            "cabo de alimentação",
            "sensor",
        ],
        valores: [
            15,
            200
        ],
        pronto: true
    },

    {
        aparelho: "Smart TV LG 48",
        itensConsertados: [
            "tela",
            "semsor"
        ],
        valores: [
            250,
            200
        ],
        pronto: false
    },

    {
        aparelho: "Samsung Galaxy S22",
        itensConsertados: [
            "teclado",
            "tela",
            "bateria"
        ],
        valores: [
            30,
            125,
            40
        ],
        pronto: true
    },

    {
        aparelho: "Tablet Samsung",
        itensConsertados: [
            "trocou a tela",
            "bateria",
        ],
        valores: [
            150,
            60
        ],
        pronto: true
    },

    {
        aparelho: "Liquidificador",
        itensConsertados: [
            "botão L/D",
            "lâminas",
            "trocou tampa do copo"
        ],
        valores: [
            15,
            50,
            10
        ],
        pronto: true
    },

    {
        aparelho: "microondas",
        itensConsertados: [
            "painel de controle",
            "prato giratório"
        ],
        valores: [
            250,
            30
        ],
        pronto: true
    },

    {
        aparelho: "geladeira",
        itensConsertados: [
            "motor",
            "carregou gás"
        ],
        valores: [
            400,
            100
        ],
        pronto: false
    },

    {
        aparelho: "fogão",
        itensConsertados: [
            "troca da grades",
            "troca dos fogareiros",
            "acendimento elétrico"
        ],
        valores: [
            50,
            60,
            20
        ],
        pronto: true
    },

    {
        aparelho: "Samsung Galaxy S7",
        itensConsertados: [
            "tela",
            "teclado",
            "bateria"
        ],
        valores: [
            150,
            55,
            60
        ],
        pronto: false
    },

    {
        aparelho: "Moto g22",
        itensConsertados: [
            "bateria",
            "teclado",
            "câmera"
        ],
        valores: [
            50,
            35,
            150
        ],
        pronto: true
    },

    {
        aparelho: "geladeira",
        itensConsertados: [
            "motor",
            "troca da porta",
            "gás"
        ],
        valores: [
            450,
            250,
            100
        ],
        pronto: true
    },

    {
        aparelho: "Smartfone Samsung",
        itensConsertados: [
            "tela",
            "teclado",
            "bateria"
        ],
        valores: [
            150,
            45,
            65
        ],
        pronto: true
    },

]

let produtosProntos = aparelhosProntos.filter(aparelhoPronto => aparelhoPronto.pronto === true);
produtosProntos.forEach(aparelhoPronto => {
    console.log(aparelhoPronto);
});

module.exports = aparelhosProntos;