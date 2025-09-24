function countdown(){
var setDate = new Date('Tue, Feb 17, 2026')
var currentDate = new Date()
var getTime = setDate - currentDate

var months = Math.floor(getTime/(1000 * 60 * 60 * 24 * 30))
var days = Math.floor(getTime/(1000 * 60 * 60 * 24) % 30) 
var hours = Math.floor((getTime / (1000 * 60 * 60 ) % 24))
var minutes = Math.floor(getTime / (1000 * 60 ) % 60)
var seconds = Math.floor(getTime /(1000 ) % 60)
var milisec = Math.floor(getTime % 1000)
// console.log(Time);

document.getElementById('months').innerHTML = months
document.getElementById('dy').innerHTML = days
document.getElementById('hour').innerHTML = hours
document.getElementById('min').innerHTML = minutes
document.getElementById('sec').innerHTML = seconds
document.getElementById('milisec').innerHTML = milisec
}



setInterval(function(){
    countdown()
},1)




