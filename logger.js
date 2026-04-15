function logFish(name) {
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    if (!logged.find(f => f.name === name)) {
        const fishData = speciesList.find(f => f.name === name);
        logged.push({ ...fishData, dateLogged: new Date().toISOString() });
        localStorage.setItem('myAquaLog', JSON.stringify(logged));
        
        // --- FEATURE 2: HAPTIC POP ---
        if (fishData.rarity === 'rare') {
            Haptics.success(); // Strong double-thump for Rare
        } else {
            Haptics.light(); // Light tap for common
        }
        
        alert(`Logged: ${name}!`);
        updateStats(); // Update the counter immediately
    } else {
        Haptics.warning(); // "Error" vibration
        alert("Already in your Dex!");
    }
}

function renderLog() {
    const grid = document.getElementById('logGrid');
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    if (!grid) return;

    if (logged.length === 0) {
        grid.innerHTML = "<p style='color:gray; padding:20px;'>No sightings yet. Go explore!</p>";
        return;
    }

    grid.innerHTML = logged.map(fish => `
        <div class="card">
            <div class="rarity-dot" style="background: ${getColor(fish.rarity)}"></div>
            <img class="fish-img" src="https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg" loading="lazy">
            <div class="card-info">
                <div class="fish-name">${fish.name}</div>
                <div class="category">${new Date(fish.dateLogged).toLocaleDateString()}</div>
            </div>
        </div>
    `).join('');
}
