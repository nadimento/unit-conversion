/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input-number')
const convertBtn = document.getElementById('btn-convert')
const feetEl = document.getElementById('feet')
const gallonsEl = document.getElementById('gallons')
const poundsEl = document.getElementById('pounds')


convertBtn.addEventListener('click', function () {
    let input = inputEl.value

    feetEl.innerText = `${input} meters = ${(input * 3.281).toFixed(2)} feet | ${input} meters = ${(input / 3.281).toFixed(2)} feet`

    gallonsEl.innerText = `${input} liters = ${(input * 0.264).toFixed(2)} gallons | ${input} gallons = ${(input / 0.264).toFixed(2)} liters`

    poundsEl.innerText = `${input} kils = ${(input * 2.204).toFixed(2)} pounds | ${input} pounds = ${(input / 2.204).toFixed(2)} kilos`
})
