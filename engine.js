// The main engine that draws the fish cards
function render(data = speciesList) {
    const grid = document.getElementById('fishGrid');
    if (!grid) return;

    // We check if the helpers exist, if not, we provide a temporary backup
    const safeColor = (r) => typeof getColor === 'function' ? getColor(r) : '#8e8e93';
    const safeStars = (d) => typeof getDangerStars === 'function' ? getDangerStars(d) : '💀';

    grid.innerHTML = data.map(fish => `
        <div class="card" 
             ontouchstart="startPress('${fish.name.replace(/'/g, "\\'")}')" 
             ontouchend="cancelPress()">
            
            <div class="rarity-dot" style="background: ${safeColor(fish.rarity)}"></div>
            
            <img class="fish-img" 
                 src="https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg" 
                 onclick="openDetail('${fish.name.replace(/'/g, "\\'")}')"
                 onerror="this.src='https://via.placeholder.com/150?text=Fish'"
                 loading="lazy">

            <div class="card-info">
                <div class="fish-name">${fish.name}</div>
                <div class="category">${fish.cat}</div>
                <div class="danger-row">${safeStars(fish.danger || 1)}</div>
                <button class="log-btn" onclick="event.stopPropagation(); logFish('${fish.name.replace(/'/g, "\\'")}')">📸 Log</button>
            </div>
        </div>
    `).join('');
}

// Handles the Search Bar
function searchFish() {
    const term = document.getElementById('searchBar').value.toLowerCase();
    const filtered = speciesList.filter(f => f.name.toLowerCase().includes(term));
    render(filtered);
}

// Handles the Category Buttons
function filterByCategory(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.includes(category) || (category === 'All' && btn.innerText === 'All')) {
            btn.classList.add('active');
        }
    });

    if (category === 'All') {
        render(speciesList);
    } else {
        const filtered = speciesList.filter(fish => fish.cat.includes(category) || category.includes(fish.cat));
        render(filtered);
    }
}
