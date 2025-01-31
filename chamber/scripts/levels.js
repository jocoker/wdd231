const mlModal = document.querySelector('#mlModal');
const closeModal = document.querySelector('#closeModal');
closeModal.addEventListener('click', () => mlModal.close());

const mltitle = document.querySelector('#mltitle');
const mldetails = document.querySelector('#mldetails');

// Modal 1 - non-profit
const ml1Btn = document.querySelector('#ml1Btn');
ml1Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Non Profit Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
        <li>You'll get a fancy plaque with the mayor's signature and offical stamp</li>
        <li>You get to advertise on the Chamber of Commerce float in the Down Home Day's parade</li>
    </ul>
    <p>COST: Free</p>
    `
    mlModal.showModal();
});

// Modal 2 - bronze
const ml2Btn = document.querySelector('#ml2Btn');
ml2Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Bronze Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
        <li>Discount tickets to all Mason High football games</li>
        <li>You'll get a fancy plaque with the mayor's signature and offical stamp</li>
        <li>You get to advertise on the Chamber of Commerce float in the Down Home Day's parade</li>
    </ul>
    <p>COST: $10 annually</p>
    `
    mlModal.showModal();
});

// Modal 3 - silver
const ml3Btn = document.querySelector('#ml3Btn');
ml3Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Silver Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
        <li>Monthly free movie ticket for Mason Movies Theater</li>
        <li>Discount tickets to all Mason High football games</li>
        <li>You'll get a fancy plaque with the mayor's signature and offical stamp</li>
        <li>You get to advertise on the Chamber of Commerce float in the Down Home Day's parade</li>
    </ul>
    <p>COST: $20 annually</p>
    `
    mlModal.showModal();
});

// Modal 4 - gold
const ml4Btn = document.querySelector('#ml4Btn');
ml4Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Gold Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
        <li>Home Page Spotlight</li>
        <li>Invitaion to special events</li>
        <li>Monthly free movie ticket for Mason Movies Theater</li>
        <li>Discount tickets to all Mason High football games</li>
        <li>You'll get a fancy plaque with the mayor's signature and offical stamp</li>
        <li>You get to advertise on the Chamber of Commerce float in the Down Home Day's parade</li>
    </ul>
    <p>COST: $30 annually</p>
    `
    mlModal.showModal();
});

//ADD A HIDDEN DATE
document.querySelector('#today').value = new Date();