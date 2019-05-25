console.log("Test");

function checkZero(number){
    return(number<10? '0': '') + number
}

function renderClock() {
var date1 = new Date();
clock.hours = checkZero(date1.getHours());
clock.minutes = checkZero(date1.getMinutes());
clock.seconds =checkZero (date1.getSeconds());
}

var clock = new Vue({
    el:'#app',
    data: {
       hours: 5,
       minutes: 8,
       seconds: 40 
    }
})

renderClock();

window.setInterval(renderClock, 1000);
