// TOP OF UI.JS
const Haptics = {
    light: () => { if (navigator.vibrate) navigator.vibrate(10); },
    medium: () => { if (navigator.vibrate) navigator.vibrate(30); },
    success: () => { if (navigator.vibrate) navigator.vibrate([20, 50, 20]); }, 
    warning: () => { if (navigator.vibrate) navigator.vibrate([100, 30, 100]); }
};

// ... everything else (showPage, updateStats) follows below ...
// Function to switch between the main Dex and the Log view
function showPage(pageId) {
    const dexPage = document.getElementById('dex-page');
    const logPage = document.getElementById('log-page');
    const navButtons = document.querySelectorAll('.nav-item');

    if (pageId === 'dex') {
        dexPage.style.display = 'block';
        logPage.style.display = 'none';
        render(); // Refresh the grid
    } else {
        dexPage.style.display = 'none';
        logPage.style.display = 'block';
        if (typeof renderLog === "function") renderLog();
    }

    // Update active button color
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(pageId)) {
            btn.classList.add('active');
        }
    });

    // iPhone Haptic Feedback
    if (navigator.vibrate) navigator.vibrate(10);
}

// Feature 3: Stats Dashboard Logic
function updateStats() {
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const counter = document.getElementById('statsCounter');
    
    if (counter) {
        // Calculate percentage
        const total = speciesList.length;
        const count = logged.length;
        const percent = Math.round((count / total) * 100);
        
        counter.innerHTML = `
            <div class="stats-bar-bg">
                <div class="stats-bar-fill" style="width: ${percent}%"></div>
            </div>
            <span>Found: <b>${count}</b> / ${total} (${percent}%)</span>
        `;
    }
}

// Feature 4: Performance & Image Handling
document.addEventListener("DOMContentLoaded", () => {
    // This ensures images that fail to load don't break the layout
    document.addEventListener('error', function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            e.target.src = "https://via.placeholder.com/150?text=Photo+Pending";
        }
    }, true);
});

// Feature 5: Sorting Logic
function sortLoggedFish(criteria) {
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    if (criteria === 'name') {
        logged.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'rarity') {
        const rarityOrder = { rare: 1, uncommon: 2, common: 3 };
        logged.sort((a, b) => (rarityOrder[a.rarity] || 4) - (rarityOrder[b.rarity] || 4));
    } else if (criteria === 'dateLogged') {
        logged.sort((a, b) => new Date(b.dateLogged) - new Date(a.dateLogged));
    }

    // After sorting, we save it back or just re-render
    // We'll just re-render for now to keep it fast
    renderLog(logged); 
}

// Feature 6: Long Press to Quick-Log
let pressTimer;

function startPress(name) {
    // A tiny "tick" to let the user know the touch was registered
    if (navigator.vibrate) navigator.vibrate(5); 
    
    pressTimer = window.setTimeout(() => {
        if (typeof logFish === "function") {
            logFish(name);
        }
    }, 700); // 0.7 seconds feels like a natural "long press"
}

function cancelPress() {
    clearTimeout(pressTimer);
}
