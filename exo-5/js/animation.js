const panel = document.querySelectorAll('.panel')

function toggleOpen() {
    console.log('hello')
    this.classList.toggle('open')
}

function toggleActive(e) {
    console.log(e.propertyName)
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

panel.forEach(panel => panel.addEventListener('click', toggleOpen))
panel.forEach(panel => panel.addEventListener('transitionend', toggleActive))