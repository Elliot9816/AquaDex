// 1. DATA RANKING (Needed for Sorting)
const rarityRank = { 'legendary': 5, 'epic': 4, 'rare': 3, 'uncommon': 2, 'common': 1 };

// 2. MAIN RENDER FUNCTION
function render(data = speciesList) {
    const grid = document.getElementById('fishGrid');
    if (!grid) return;

    const safeColor = (r) => typeof getColor === 'function' ? getColor(r || 'common') : '#8e8e93';
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
                <div class="category">${fish.cat || 'Species'}</div>
                <div class="danger-row">${safeStars(fish.danger || 1)}</div>
                <button class="log-btn" onclick="event.stopPropagation(); logFish('${fish.name.replace(/'/g, "\\'")}')">📸 Log</button>
            </div>
        </div>
    `).join('');
}

// 3. SEARCH LOGIC
function searchFish() {
    const term = document.getElementById('searchBar').value.toLowerCase();
    const filtered = speciesList.filter(f => f.name.toLowerCase().includes(term));
    // Apply sorting to search results too
    handleSort(filtered);
}

// 4. SORTING LOGIC
function handleSort(dataToSort = null) {
    const sortVal = document.getElementById('sortSelect').value;
    const [property, direction] = sortVal.split('_'); // e.g., ['name', 'asc']
    
    let data = dataToSort ? [...dataToSort] : [...speciesList];

    data.sort((a, b) => {
        let comparison = 0;

        if (property === 'name') {
            comparison = a.name.localeCompare(b.name);
        } else if (property === 'danger') {
            comparison = (a.danger || 0) - (b.danger || 0);
        } else if (property === 'rarity') {
            comparison = (rarityRank[a.rarity] || 0) - (rarityRank[b.rarity] || 0);
        }

        // If direction is 'desc', flip the result of the comparison
        return direction === 'desc' ? comparison * -1 : comparison;
    });

    render(data);
}

// 5. CATEGORY FILTER LOGIC
function filterByCategory(category) {
    // UI Update: Active button state
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        const btnFunc = btn.getAttribute('onclick');
        if (btnFunc && btnFunc.includes(`'${category}'`)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Filtering
    let filtered = category === 'All' 
        ? speciesList 
        : speciesList.filter(f => f.cat === category);

    // After filtering, immediately apply the current sort
    handleSort(filtered);
}
