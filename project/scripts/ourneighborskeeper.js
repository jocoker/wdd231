const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("year");

const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} Jordan Coker - Michigan, USA`;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;







