// Corrected function name in setInterval

const hourHand = document.querySelector('[data-hourHand]')
const minuteHand = document.querySelector('[data-minuteHand]')
const secondHand = document.querySelector('[data-secondHand]')

function setClock() {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {

    element.style.transform = `translateX(-50%) rotate(${rotationRatio * 360}deg)`;
}
setInterval(setClock, 1000) 
