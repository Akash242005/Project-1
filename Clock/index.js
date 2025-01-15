function updateClock(){
    const now = new Date();
    let hour = now.getHours().toString().padStart(2,0);
    const hours = hour>=12 ? "PM" : "AM";
    hour = hour%12 || 12;
    hour = hour.toString().padStart(2,0)
    const minintue  = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const time = `${hour}:${minintue}:${sec} ${hours}`;
    document.getElementById("clock").textContent = time;
}
updateClock();
setInterval(updateClock,1000);
