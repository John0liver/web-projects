const container = document.getElementById('container')
const cor = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const quadrados = 500

for(let i = 0; i < quadrados; i++) {
    const quadrado = document.createElement('div')
    quadrado.classList.add('square')

    quadrado.addEventListener('mouseover', () => definirColor(quadrado))

    quadrado.addEventListener('mouseout', () => removeCor(quadrado))

    container.appendChild(quadrado)
}

function definirColor(elemento) {
   const cor = obterCorAleatoria()
   elemento.style.background = cor
   elemento.style.boxShadow = `0 0 2px ${cor}, 0 0 10px ${cor}`
}

function removeCor(elemento) {
   elemento.style.background = '#1d1d1d'
   elemento.style.boxShadow = '0 0 2px #000'
}

function obterCorAleatoria() {
    return cor[Math.floor(Math.random() * cor.length)]
}