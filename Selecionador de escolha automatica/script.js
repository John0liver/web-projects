const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    criarTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        selecionarAleatorio()
    }
})

function criarTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function selecionarAleatorio() {
    const vezes = 30

    const intervalo = setInterval(() => {
        const aleatorioTag = selecionarAleatorioTag()
	
	if (aleatorioTag !== undefined) {
        marcarTag(aleatorioTag)

        setTimeout(() => {
            desmarcarTag(aleatorioTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(intervalo)

        setTimeout(() => {
            const aleatorioTag = selecionarAleatorioTag()

            marcarTag(aleatorioTag)
        }, 100)

    }, vezes * 100)
}

function selecionarAleatorioTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function marcarTag(tag) {
    tag.classList.add('highlight')
}

function desmarcarTag(tag) {
    tag.classList.remove('highlight')
}
