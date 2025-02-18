const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("year");

const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} Jordan Coker - Michigan, USA`;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;

document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([42.2459, -84.4013], 13); // Example: Jackson, MI

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker at the address location
    L.marker([42.2459, -84.4013]).addTo(map)
        .bindPopup("Our Neighbor's Keeper Thrift Store<br>1234 Main Street, Jackson, MI")
        .openPopup();
});





