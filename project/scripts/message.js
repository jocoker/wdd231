// visit count
const visitFeedback = document.querySelector('#timeBetween');
let visitTime = localStorage.getItem("firstvisit")
//console.log(visitTime)
if (visitTime == null) {
  visitFeedback.textContent = "Welcome! Visit our shop if you have any questions."
  localStorage.setItem("firstvisit", Date.now());
} else {
    //86400000
    let difference = (Date.now()-visitTime)/86400000
    //console.log(difference)
    if (difference<1) {
        visitFeedback.innerHTML = `Back for some more unique items?`
    } else {
        visitFeedback.innerHTML = `You last visited ${Math.floor(difference)} days ago. Don't forget some fun knick-knacks!`
    }
  
}