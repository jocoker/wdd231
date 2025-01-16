// Display the last modified date for the footer
const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("year");

const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} Jordan Coker - Michigan, USA`;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last Update: ${lastModifiedDate}`;

//hamburger menu
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

