const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

function setDate() {
    // Création de l'objet Date
    const now = new Date()
    // Création des heures
    const hours = now.getHours()
    const hoursDegrees = ((hours / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    // Création des minutes
    const minutes = now.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) + 90
    minHand.style.transform = `rotate(${minutesDegrees}deg)`
    // Création des secondes
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
}

setInterval(setDate, 1000)