
let currentUrl = window.location.search;
console.log(currentUrl);

currentUrl = currentUrl.substring(1,currentUrl.length)
console.log(currentUrl);


formData=currentUrl.split('&')
console.log(formData)

function show(cup) {
    formData.forEach((element) => {
        console.log(element)
        if (element.startsWith(cup)) {
            let rawValue=element.split('=')[1];
            let decodedValue = decodeURIComponent(rawValue.replace(/\+/g, " "));
            result = decodedValue.replace("%40", "@");
        } 
    }); 
    return(result)
}

const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
<p>Application from: ${show('first')} ${show('last')}</p>
<p>Business Name: ${show('organization')} </p>
<p>Your Phone: ${show('phone')} </p>
<p>Your Email:  <a href="mailto:${show('email')}">${show('email')}</a> </p>
<p>Form was submitted on ${show('hiddendate')}</p>
`