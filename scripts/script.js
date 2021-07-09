let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    console.log(qdtTotalBebidas);


    qdtTotalCarne / 1000 >= 1 ? resultado.innerHTML = `<p><img src="assets/Group 20.svg" alt="">${qdtTotalCarne / 1000}Kg de carne</p>` : resultado.innerHTML = `<p><img src="assets/Group 20.svg" alt="">${qdtTotalCarne}g de Carne</p>`
    resultado.innerHTML += `<p><img src="assets/Group 16.svg" alt="">${Math.ceil(qdtTotalCerveja / 355)} latas de cerveja</p>`
    qdtTotalBebidas / 1000 > 1 ? resultado.innerHTML += `<p><img src="assets/Group 12.svg" alt="">${Math.ceil(qdtTotalBebidas / 1000)} latas de refrigerante</p>` : resultado.innerHTML += `<p><img src="assets/Group 12.svg" alt="">${Math.ceil((qdtTotalBebidas / 1000)/4)} lata de refrigerante</p>`


}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}