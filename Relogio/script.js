const horaEl = document.querySelector('.hora')
const minutoEl = document.querySelector('.minuto')
const segundoEl = document.querySelector('.segundo')
const tempoEl = document.querySelector('.tempo')
const dataEl = document.querySelector('.data')
const modos = document.querySelector('.modos')

const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

modos.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Modo escuro'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Modo claro'
    }
})

function setTempo() {
    const tempo = new Date();
    const mes = tempo.getMonth()
    const dia = tempo.getDay()
    const data = tempo.getDate()
    const horas = tempo.getHours()
    const horasRelogio = horas >= 13 ? horas % 12 : horas;
    const minutos = tempo.getMinutes()
    const segundos = tempo.getSeconds()
    const ampm = horas >= 12 ? 'PM' : 'AM'

    horaEl.style.transform = `translate(-50%, -100%) rotate(${escala(horasRelogio, 0, 12, 0, 360)}deg)`
    minutoEl.style.transform = `translate(-50%, -100%) rotate(${escala(minutos, 0, 60, 0, 360)}deg)`
    segundoEl.style.transform = `translate(-50%, -100%) rotate(${escala(segundos, 0, 60, 0, 360)}deg)`

    tempoEl.innerHTML = `${horasRelogio}:${minutos < 10 ? `0${minutos}` : minutos} ${ampm}`
    dataEl.innerHTML = `${dias[dia]}, ${meses[mes]} <span class="circulo">${data}</span>`
}

const escala = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTempo()

setInterval(setTempo, 1000)
