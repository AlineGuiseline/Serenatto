const inputCheck = document.querySelector('#dark-mode')
const element = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const mode = inputCheck.checked ? 'dark' : 'light' // guarda os atributos "dark" e "light"
    element.setAttribute('data-bs-theme', mode) // vai estabelecer o atributo (dark ou light) e alterar o tema
})