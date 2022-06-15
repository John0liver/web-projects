const inserir = document.getElementById('inserir')

window.addEventListener('keydown', (event) => {
  inserir.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>Tecla</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>Código</small>
</div>

<div class="key">
  ${event.code}
  <small>Caractere</small>
</div>
  `
})