// 1. LOG LOGIC: Increments sightings or adds new discovery
function logFish(name) {
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const fishIndex = logged.findIndex(f => f.name === name);

    if (fishIndex > -1) {
        // INCREMENT: We already have it, so just add to the count
        logged[fishIndex].count = (logged[fishIndex].count || 1) + 1;
        logged[fishIndex].dateLogged = new Date().toISOString();
        
        if (typeof Haptics !== 'undefined') Haptics.success();
        
        // --- NEW TOAST REPLACING ALERT ---
        showToast(`Observation #${logged[fishIndex].count} Logged!`, '🔄');
    } else {
        // NEW DISCOVERY: First time seeing it
        const fishData = speciesList.find(f => f.name === name);
        if(!fishData) return;

        logged.push({ 
            ...fishData, 
            count: 1,
            dateLogged: new Date().toISOString() 
        });
        
        if (typeof Haptics !== 'undefined') Haptics.light();
        
        // --- NEW TOAST REPLACING ALERT ---
        showToast(`New Discovery: ${name}!`, '✨');
    }

    localStorage.setItem('myAquaLog', JSON.stringify(logged));
    if (typeof updateStats === 'function') updateStats();
    
    // Only re-render if we are currently looking at the log page
    const logPage = document.getElementById('log-page');
    if (logPage && logPage.style.display !== 'none') renderLog();
}

// 2. THE VISUALS: Draws the log with sighting counts
function renderLog() {
    const grid = document.getElementById('logGrid');
    if (!grid) return;

    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    if (logged.length === 0) {
        grid.innerHTML = `
            <div style="text-align:center; padding:40px; color:gray;">
                <p>No discoveries yet!</p>
                <p style="font-size:12px;">Long-press a fish in the Dex to log it.</p>
            </div>`;
        return;
    }

    grid.innerHTML = logged.map(fish => `
        <div class="card">
            <button class="remove-badge" onclick="removeFish('${fish.name.replace(/'/g, "\\'")}')">×</button>
            <div class="rarity-dot" style="background: ${typeof getColor === 'function' ? getColor(fish.rarity) : '#8e8e93'}"></div>
            
            <img class="fish-img" 
                 src="https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg" 
                 onclick="openDetail('${fish.name.replace(/'/g, "\\'")}')"
                 onerror="this.src='https://via.placeholder.com/150?text=Fish'">

            <div class="card-info">
                <div class="fish-name">${fish.name}</div>
                <div class="category">${fish.cat} • <b>${fish.count || 1}x</b></div>
                <div class="danger-row">${typeof getDangerStars === 'function' ? getDangerStars(fish.danger || 1) : '💀'}</div>
            </div>
        </div>
    `).join('');
}

// 3. REMOVE LOGS
function removeFish(name) {
    if (confirm(`Remove ${name}?`)) {
        let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
        logged = logged.filter(f => f.name !== name);
        localStorage.setItem('myAquaLog', JSON.stringify(logged));
        
        if (typeof Haptics !== 'undefined') Haptics.medium();
        renderLog();
        if (typeof updateStats === 'function') updateStats();
        showToast(`${name} removed from logs`, '🗑️');
    }
}

function clearAllLogs() {
    if (confirm("Delete ALL discoveries? This cannot be undone.")) {
        localStorage.removeItem('myAquaLog');
        if (typeof Haptics !== 'undefined') Haptics.warning();
        renderLog();
        if (typeof updateStats === 'function') updateStats();
        showToast(`All logs cleared`, '🧹');
    }
}
