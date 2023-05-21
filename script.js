/* VARIAVEIS MENU */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/* MENU SHOW */
/* Valida se a constante existe */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
/* Valida se a constante existe */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* Remover Menu (mobile) */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Quando clica em algum nav__link, remove o menu da tela
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* Colocando blur no header */
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/* EmailJS */
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ne0f6ra', 'template_8kwyboq', '#contact-form', 'DxcGOy-2-pyp22aVn')
        .then(() => {
            // Mostra mensagem enviada
            contactMessage.textContent = 'Mensagem enviada! ✔'

            // Remove msg dps de 5 seg
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Limpa inputs
            contactForm.reset()

        }, () => {
            // Mensagem de erro
            contactMessage.textContent = 'Mensagem não enviada (erro no serviço)'

        })
}

contactForm.addEventListener('submit', sendEmail)

/* Scroll Up */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/* Active links */
const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute("id")
        const sectionsClass = document.querySelector(".nav a[href*=" + sectionId + "]")

        if (scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add("active-link")
          } else {
            sectionsClass.classList.remove("active-link")
          }
    })
} 

window.addEventListener("scroll", scrollActive)

/* Scroll reveal 😮 */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '100',
    reset: true //Repete animação
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})