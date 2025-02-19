let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0', 10);
localStorage.setItem('reviewCount', reviewCount);

document.querySelector('form').onsubmit = function (event) {
    //event.preventDefault(); // Optional: Remove if default behavior is desired
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    alert(`Thank you for your interest. We will reach out to you soon. Total reviews: ${reviewCount}`);
    // Redirect to thankyou.html automatically
    window.location.href = "thankyou.html";
};
document.addEventListener("DOMContentLoaded", function () {
    let today = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
    document.getElementById("today").value = today;
});

