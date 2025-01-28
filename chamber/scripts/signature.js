  // Display the last modified date for the footer
  console.log('WDD231 Class Project')
  console.log('Jordan Coker')
  const lastModifiedElement = document.getElementById("lastModified");
  const currentYearElement = document.getElementById("year");
  
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = `© ${currentYear} Mason Chamber of Commerce`;
  
  const lastModifiedDate = document.lastModified;
  lastModifiedElement.textContent = `Last Update: ${lastModifiedDate}`;