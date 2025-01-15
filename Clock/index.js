function updateClock(){
    const now = new Date();
    const hour = now.getHours().toString().padStart(2,0);
    const hours = hour>=12 ? "PM" : "AM";
    const minintue  = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const time = `${hour}:${minintue}:${sec} ${hours}`;
    document.getElementById("clock").textContent = time;
}
updateClock();
setInterval(updateClock,1000);