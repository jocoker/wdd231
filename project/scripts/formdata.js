document.addEventListener("DOMContentLoaded", function () {
let currentUrl = window.location.search;
console.log(currentUrl);

currentUrl = currentUrl.substring(1);
console.log(currentUrl);


formData=currentUrl.split('&');
console.log(formData);

function show(cup) {
    let result = '';
    formData.forEach((element) => {
        console.log(element)
        if (element.startsWith(cup + '=')) {
            let rawValue=element.split('=')[1] || '';
            let decodedValue = decodeURIComponent(rawValue.replace(/\+/g, " "));
            result = decodedValue.replace("%40", "@");
        } 
    }); 
    return result || 'Not provided';
}

const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
<p>Application from: ${show('first')} ${show('last')}</p>
<p>Your Email:  <a href="mailto:${show('email')}">${show('email')}</a> </p>
<p>Your Phone: ${show('phone')} </p>
<p>Form was submitted on ${show('hiddendate')}</p>
`
});