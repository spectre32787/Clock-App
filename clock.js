const date = new Date();
const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let day = date.getDay()
let month = date.getMonth()
let year = date.getFullYear()

document.getElementById("date").textContent = `${month} / ${day} / ${year}`

let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

if (seconds < 10) {
    seconds = "0" + date.getSeconds();  
}

if (minutes < 10) {
    minutes = "0" + date.getMinutes();  
}

if (hours > 12) {
    hours = hours - 12;
    hours = "0" + hours; // hours is now the result of minus 12 for 12H format with a leading 0 added

    if (hours === 00 ) {
        hours = 12;
    }
}

document.getElementById("time").textContent = `${hours} : ${minutes} : ${seconds}`
