let botao = document.querySelector(".butao")
let mensagem = document.querySelector(".mostrarMensagem")

botao.addEventListener('mouseover',e => {
    botao.style.background="rgb(165, 108, 33)"
})
botao.addEventListener('mouseout',e => {
    botao.style.background="antiquewhite"
})
botao.addEventListener('click', mostrarMensagem)
function mostrarMensagem() {
    mensagem.innerHTML="Olá, é um prazer ter você aqui!"
}