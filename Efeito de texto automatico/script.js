const textoEl = document.getElementById('texto')
const velocidadeEl = document.getElementById('velocidade')
const texto = 'Nós amamos programar!'
let idx = 1
let velocidade = 300 / velocidadeEl.value

escreverTexto()

function escreverTexto() {
    textoEl.innerText = texto.slice(0, idx)

    idx++

    if(idx > texto.length) {
        idx = 1
    }

    setTimeout(escreverTexto, velocidade)
}


velocidadeEl.addEventListener('input', (e) => velocidade = 300 / e.target.value)