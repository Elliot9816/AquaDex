

// Helper to get rarity colors
function getColor(rarity) {
    const colors = { rare: '#ff3b30', uncommon: '#ffcc00', common: '#4cd964' };
    return colors[rarity] || '#8e8e93';
}

// The main engine that draws the fish on the screen
function render(data = speciesList) {
    const grid = document.getElementById('fishGrid');
    if (!grid) return; // Safety check

    grid.innerHTML = data.map(fish => `
        <div class="card">
            <div class="rarity-dot" style="background: ${getColor(fish.rarity)}"></div>
            <img class="fish-img" src="https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg" onerror="this.src='https://via.placeholder.com/150?text=Fish'">
            <div class="card-info">
                <div class="fish-name">${fish.name}</div>
                <div class="category">${fish.cat}</div>
                <button class="log-btn" onclick="logFish('${fish.name.replace(/'/g, "\\'")}')">📸 Log</button>
            </div>
        </div>
    `).join('');
}

// ==========================================
// 3. FILTER & SEARCH LOGIC
// ==========================================

// Handles the new Filter Buttons

function filterByCategory(category) {
    // 1. Update Button Visuals
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // We check if the button text contains our category
        if (btn.innerText.includes(category) || (category === 'All' && btn.innerText === 'All')) {
            btn.classList.add('active');
        }
    });

    // 2. Filter the actual data
    if (category === 'All') {
        render(speciesList);
    } else {
        // We use .includes() here so if your data is "Sharks" 
        // and the button sends "Shark", it still works!
        const filtered = speciesList.filter(fish => 
            fish.cat.includes(category) || category.includes(fish.cat)
        );
        render(filtered);
    }
}

// ==========================================
// 4. LOGGING SYSTEM
// ==========================================

function logFish(name) {
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    // Check if already logged
    if (!logged.find(f => f.name === name)) {
        const fishData = speciesList.find(f => f.name === name);
        
        // Add current date and save
        logged.push({ ...fishData, dateLogged: new Date().toISOString() });
        localStorage.setItem('myAquaLog', JSON.stringify(logged));
        
        // iPhone Haptic Feedback
        if (navigator.vibrate) navigator.vibrate(50);
        
        alert(`Successfully logged: ${name}!`);
    } else {
        alert("This species is already in your log!");
    }
}

// ==========================================
// 5. INITIALIZE APP
// ==========================================
render();
