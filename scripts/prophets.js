

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const doc = document;  // short-hand abbreviation
const cards = doc.querySelector('div');




// button elements
const all = doc.querySelector("#all");
const idaho = doc.querySelector("#idaho");
const nonus = doc.querySelector("#nonus");
const ten = doc.querySelector("#ten");
const childs = doc.querySelector("#childs");
const childl = doc.querySelector("#childl");
const old = doc.querySelector("#old");

const getProphets = async (filter = "all") => {
	let prophets = await jsonFetch(url);

	switch (filter) {
		case "idaho":
            
			prophets = prophets.filter((prophet) => prophet.birthplace === "Idaho");
            
			break;
		case "nonus":
            
			prophets = prophets.filter((prophet) => prophet.birthplace === "England");
            
			break;
		case "ten":
            
			prophets = prophets.filter((prophet) => prophet.length >= 15);
            
			break;
		case "childs":
            
			prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
            
			break;
		case "childl":
            
			prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
            
			break;
		case "old":
            
			prophets = prophets.filter(
				(prophet) => getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95
			);
            
			break;
		default:
        
			break;
	}
   

	displayProphets(prophets);
};

async function jsonFetch(url) {
   
	const response = await fetch(url);
	const data = await response.json();
  
	return data.prophets;
}

const displayProphets = (prophets) => {
    
	cards.innerHTML = "";

	prophets.forEach((prophet) => {
		let card = doc.createElement("section");
		let h2 = doc.createElement("h2");
		let stats = doc.createElement("div");
		stats.classList.add("stats");
		let date = doc.createElement("p");
		let death = doc.createElement("p");
		let ageatdeath = doc.createElement("p");
		let length = doc.createElement("p");
		let place = doc.createElement("p");
		let num = doc.createElement("p");
		let portrait = doc.createElement("img");

		h2.textContent = `${prophet.name} ${prophet.lastname}`;
		date.innerHTML = `<span class="label">Birth:</span> ${prophet.birthdate}`;
		place.innerHTML = `<span class="label">Place:</span> ${prophet.birthplace}`;
		num.innerHTML = `<span class="label">Children:</span> ${prophet.numofchildren}`;
		length.innerHTML = `<span class="label">Prophet Years:</span> ${prophet.length}`;
		death.innerHTML = `<span class="label">Death:</span> ${prophet.death}`;
		ageatdeath.innerHTML = `<span class="label">Age:</span> ${getAgeAtDeathInYears(
			prophet.birthdate,
			prophet.death
		)}`;

		portrait.setAttribute("src", prophet.imageurl);
		portrait.setAttribute(
			"alt",
			`${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day Prophet`
		);
		portrait.setAttribute("loading", "lazy");
		portrait.setAttribute("width", "340");
		portrait.setAttribute("height", "440");

		stats.appendChild(date);
		stats.appendChild(place);
		stats.appendChild(num);
		stats.appendChild(length);
		stats.appendChild(death);
		stats.appendChild(ageatdeath);

		card.appendChild(h2);
		card.appendChild(stats);
		card.appendChild(portrait);

		cards.appendChild(card);
	});
};

getProphets();

// buttons
all.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("all");
	all.classList.add("active");
});

idaho.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("idaho");
	idaho.classList.add("active");
});

doc.querySelector("#nonus").addEventListener("click", () => {
	clearButtonClasses();
	getProphets("nonus");
	nonus.classList.add("active");
});

ten.addEventListener("click", () => {
clearButtonClasses();
	getProphets("ten");
	ten.classList.add("active");
});

childs.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("childs");
	childs.classList.add("active");
});

childl.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("childl");
	childl.classList.add("active");
});

old.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("old");
	old.classList.add("active");
});

function getAgeAtDeathInYears(birthdate, deathdate) {
	let birth = new Date(birthdate);
	let death = new Date(deathdate);
	if (deathdate === null) {
		death = new Date();
	}
	return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

function clearButtonClasses() {
	filterbuttons = doc.querySelectorAll("button");
	filterbuttons.forEach(button => button.className="");
}