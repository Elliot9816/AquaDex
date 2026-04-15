// 1. THE ACTION: Saves a fish to the phone's memory
function logFish(name) {
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    // Check if we already have it
    if (!logged.find(f => f.name === name)) {
        const fishData = speciesList.find(f => f.name === name);
        
        // Add the fish + the current date/time
        logged.push({ 
            ...fishData, 
            dateLogged: new Date().toISOString() 
        });
        
        localStorage.setItem('myAquaLog', JSON.stringify(logged));
        
        // Trigger Haptics (defined in ui.js)
        if (typeof Haptics !== 'undefined') {
            fishData.rarity === 'rare' ? Haptics.success() : Haptics.light();
        }
        
        alert(`Logged: ${name}!`);
        
        // Update stats if we are on the UI
        if (typeof updateStats === 'function') updateStats();
    } else {
        if (typeof Haptics !== 'undefined') Haptics.warning();
        alert("Already in your Dex!");
    }
}

// 2. THE VISUALS: Draws the logged fish on the "Log" page
function renderLog(data = null) {
    const grid = document.getElementById('logGrid');
    const logged = data || JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    if (!grid) return;

    if (logged.length === 0) {
        grid.innerHTML = "<p style='color:gray; padding:20px; text-align:center;'>No sightings yet. Get diving!</p>";
        return;
    }

    grid.innerHTML = logged.map(fish => `
        <div class="card">
            <button class="remove-badge" onclick="removeFish('${fish.name.replace(/'/g, "\\'")}')">×</button>
            
            <div class="rarity-dot" style="background: ${getColor(fish.rarity)}"></div>
            <img class="fish-img" src="https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg" loading="lazy">
            <div class="card-info">
                <div class="fish-name">${fish.name}</div>
                <div class="category">Logged: ${new Date(fish.dateLogged).toLocaleDateString()}</div>
            </div>
        </div>
    `).join('');
}


// Remove a single entry
function removeFish(name) {
    if (confirm(`Remove ${name} from your log?`)) {
        let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
        logged = logged.filter(f => f.name !== name);
        localStorage.setItem('myAquaLog', JSON.stringify(logged));
        
        Haptics.medium(); // A little vibration for the deletion
        renderLog();      // Refresh the list
        updateStats();    // Update the progress bar
    }
}

// Wipe the entire database
function clearAllLogs() {
    if (confirm("Are you sure? This will delete ALL your discoveries!")) {
        localStorage.removeItem('myAquaLog');
        Haptics.warning(); // Strong vibration for a big action
        renderLog();
        updateStats();
    }
}
