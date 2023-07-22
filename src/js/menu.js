const buttonMobile = document.querySelector('div.menu-mobile-icon');
const menuMobile = document.querySelector('nav.navbar');
const scrollBar = document.querySelector('header');
const overflowBody = document.querySelector('body');
const menuMobileClose = document.querySelectorAll('header nav.navbar a')
const habilidade = document.querySelectorAll('.habilidade')

/* Adicionar a classe active */
function toggleMenu() {
    buttonMobile.classList.toggle('active');
    overflowBody.classList.toggle('active')
    menuMobile.classList.toggle('active');
}
buttonMobile.addEventListener('click', toggleMenu);

/* Remove a classe active no clique da navegacao */
menuMobileClose.forEach((value) => value.addEventListener('click', () => {
    buttonMobile.classList.remove('active')
    menuMobile.classList.remove('active')
}))

/* adiciona e remove a classe active no na tag header*/
function edgesScroll() {
    scrollBar.classList.toggle('ativo', scrollY > 0);
}
window.addEventListener('scroll', edgesScroll);

/* troca de imagens e de descricao secao de habilidades */
habilidade.forEach((habilidade) => {
    habilidade.addEventListener('mouseenter', () => {
        const skillSelecionada = document.querySelector('.selecionada')
        skillSelecionada.classList.remove('selecionada')

        habilidade.classList.add('selecionada')

        const imagemSkill = document.querySelector('.imagem-selecionada')

        const idimagem = habilidade.attributes.id.value
        imagemSkill.src = `src/icons/${idimagem}.png`

        const nomeHabilidade = document.querySelector('.nome-habilidade')
        nomeHabilidade.innerHTML = habilidade.getAttribute('data-name')

        const descricaoHabilidade = document.querySelector('.descricao-habilidade')
        descricaoHabilidade.innerHTML = habilidade.getAttribute('data-description')
    })
})

/* Alterar as cores do links de navegacao ativo ao scrooll em cada secao */
let sections = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };        
    });
};


