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
