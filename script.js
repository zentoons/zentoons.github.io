// Function to generate ads dynamically
function loadAds() {
    const adsContainer = document.querySelector('.ads-container');
    
    // Generate 10 rows of ads with 10 ads per row
    for (let i = 0; i < 10; i++) { // 10 rows
        for (let j = 0; j < 10; j++) { // 10 ads per row
            const adSlot = document.createElement('div');
            adSlot.classList.add('ad-slot');
            adSlot.innerHTML = `<iframe src="https://www.example-ad.com/ad${Math.floor(Math.random() * 100) + 1}"></iframe>`;
            adsContainer.appendChild(adSlot);
        }
    }
}

// Function to check when the user has scrolled near the bottom
function checkScroll() {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        loadAds(); // Load more ads if the user is near the bottom
    }
}

// Initial load of ads when the page loads
window.onload = loadAds;

// Event listener to detect scroll and load more ads
window.onscroll = checkScroll;
