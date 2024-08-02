function updateClock(){

    const now = new Date();
    const hours = now.getHours().toString();
    const minutes= now.getMinutes().toString();
    const seconds=now.getSeconds().toString();
    let time = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent=time;
}

updateClock();
setInterval(updateClock,1000)