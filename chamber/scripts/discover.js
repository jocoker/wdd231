const cards = document.querySelector('#allplaces');

const path = './data/discover.json';

async function getPlaces() {
  try {
    const response = await fetch(path);
    const data = await response.json();
    console.log(data.places);
    displayPlaces(data.places);
  } catch (error) {
    console.error('Error fetching places:', error);
  }
}

getPlaces();
  
  
  
const displayPlaces = (allPlaces) => {
  allPlaces.forEach((place) => {
    const myName = document.createElement('h2')
    myName.textContent= place.name;
    const myDescription = document.createElement('p')
    myDescription.textContent = place.description
    const myAddress = document.createElement('p')
    myAddress.textContent = place.address
    const myCost = document.createElement('p')
    myCost.textContent = place.cost
    const myPhoto = document.createElement('img')
    myPhoto.src=`${place.photo_link}`
    myPhoto.setAttribute('loading', 'lazy')
    myPhoto.setAttribute('width', '300')
    myPhoto.setAttribute('height', '200')
    myPhoto.setAttribute('alt', `${place.name}`)
    
      
    const mySection = document.createElement('section')
    mySection.appendChild(myName)
    mySection.appendChild(myDescription)
    mySection.appendChild(myAddress)
    mySection.appendChild(myCost)
    mySection.appendChild(myPhoto)
    cards.appendChild(mySection)
  })}