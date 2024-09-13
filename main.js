const ISOmilSec = 1000
const ISOmilMinute = ISOmilSec * 60
const ISOmilHour = ISOmilMinute * 60
const ISOmilDay = ISOmilHour * 24



const countdownDiv = document.getElementsByClassName("countdown-timer")[0]

const weddingEl = document.getElementById("wedding-status")

const dayEl = document.getElementById("day")
const dayTitle = document.getElementById("day-title")
const hourEl = document.getElementById("hour")
const hourTitle = document.getElementById("hour-title")
const minuteEl = document.getElementById("minute")
const minuteTitle = document.getElementById("minute-title")
const secondEl = document.getElementById("second")
const secondTitle = document.getElementById("second-title")

const targetDate = new Date(2024, 9, 7).getTime()

setInterval(function() {
  const todayDate = new Date().getTime()
  const leftTime = targetDate - todayDate
  if (leftTime <= 0) {
    countdownDiv.style.display = "none"
    if (leftTime > -8640000) {
      weddingEl.textContent = "Сегодня свадьба!!!"
    } else {
      weddingEl.textContent = "Свадьба уже прошла :-("
    }
  } else {
    dayEl.textContent = Math.floor(leftTime / ISOmilDay)
    hourEl.textContent = Math.floor((leftTime % ISOmilDay) / ISOmilHour)
    minuteEl.textContent = Math.floor((leftTime % ISOmilHour) / ISOmilMinute)
    secondEl.textContent = Math.floor((leftTime % ISOmilMinute) / ISOmilSec)
  }
}, 1000)

const approveWillBeList = ["approve-yes", "approve-no"]
const approveWithWhoList = ["approve-alone", "approve-friend", "approve-partner", "approve-family"]

const approveInputEl = document.getElementById("approve-input")
const approveYesEl = document.getElementById("approve-yes")
const approveNoEl = document.getElementById("approve-no")
let approveWillBe = null

function sendApprove() {
  const chatIds = [258598355, 53138192, 167628351]
  // const chatIds = [167628351]
  const fullName = approveInputEl.value
  if (approveYesEl.checked === false) {
    approveWillBe = "Нет"
  } else {
    approveWillBe = "Да"
  }
  const text = `Ф.И.О: ${fullName}%0AБудет на свадьбе: ${approveWillBe}`
  for (let chat of chatIds) {
    const URI = `https://api.telegram.org/bot7282021975:AAGwtaeUslKML424Bq8QczgxkZBTIKp8L3M/sendMessage?chat_id=${chat}&text=${text}`
    fetch(URI)
  }
}
