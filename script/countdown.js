const eventDate = new Date('June 18, 2023 08:00:00 GMT+02:00');
console.log(eventDate)


let updateCountdown = setInterval(function(){
    let now = new Date().getTime();
    console.log(now);

    let countDown = eventDate - now;
    console.log(countDown);

    let days = Math.floor(countDown / (1000*60*60*24));
    console.log(days);
    let hours = Math.floor((countDown % (1000*60*60*24)) / (1000*60*60));
    console.log(hours);
    let minutes = Math.floor((countDown % (1000*60*60)) / (1000*60));
    console.log(minutes);
    let seconds = Math.floor((countDown % (1000*60)) / 1000);
    console.log(seconds);

    document.getElementById("countdownText").innerHTML = days + "j " + hours + "h " + minutes + "m " + seconds + "s"
});