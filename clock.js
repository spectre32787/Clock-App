const date = new Date();
const hourformat = new Array ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
const dayOfWeek = new Array ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


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

// if (hours < 12) {
//     hours = "0" + date.getHours();  
// }

document.getElementById("time").textContent = `${hours} : ${minutes} : ${seconds}`