// 1. THE ACTION: Saves a fish
function logFish(name) {
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    if (!logged.find(f => f.name === name)) {
        const fishData = speciesList.find(f => f.name === name);
        if(!fishData) return;

        logged.push({ 
            ...fishData, 
            dateLogged: new Date().toISOString() 
        });
        
        localStorage.setItem('myAquaLog', JSON.stringify(logged));
        
        // Safe Haptics
        if (typeof Haptics !== 'undefined') {
            fishData.rarity === 'rare' ? Haptics.success() : Haptics.light();
        }
        
        alert(`Logged: ${name}!`);
        if (typeof updateStats === 'function') updateStats();
    } else {
        if (typeof Haptics !== 'undefined') Haptics.warning();
        alert("Already in your Dex!");
    }
}

// 2. THE VISUALS: Draws the log
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
                <div class="category">${fish.cat}</div>
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
    }
}

function clearAllLogs() {
    if (confirm("Delete ALL discoveries?")) {
        localStorage.removeItem('myAquaLog');
        if (typeof Haptics !== 'undefined') Haptics.warning();
        renderLog();
        if (typeof updateStats === 'function') updateStats();
    }
}
