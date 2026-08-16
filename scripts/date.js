const currentTime = document.getElementById("current-time-p")

function updateRegionTime() {
    const lisbonTime = new Date()

    const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Lisbon",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }); 

    currentTime.textContent = `currently in lisbon (${formatter.format(lisbonTime)})`;
}

updateRegionTime();

setInterval(updateRegionTime, 1000)