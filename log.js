function renderLog() {
    const grid = document.getElementById('logGrid');
    const sortBy = document.getElementById('sortSelect').value;
    const stats = document.getElementById('statsCounter');
    let loggedFish = JSON.parse(localStorage.getItem('myAquaLog')) || [];

    stats.innerText = `Found: ${loggedFish.length} / 500`;

    if (loggedFish.length === 0) {
        grid.innerHTML = "<p style='text-align:center; grid-column: 1/-1;'>Your log is empty.</p>";
        return;
    }

    loggedFish.sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'dateLogged') return new Date(b.dateLogged) - new Date(a.dateLogged);
        if (sortBy === 'rarity') {
            const ranks = { rare: 1, uncommon: 2, common: 3 };
            return (ranks[a.rarity] || 4) - (ranks[b.rarity] || 4);
        }
    });

    grid.innerHTML = loggedFish.map(fish => `
        <div class="card">
            <div class="date-tag">${new Date(fish.dateLogged).toLocaleDateString()}</div>
            <img class="fish-img" src="https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg">
            <div class="card-info">
                <div class="fish-name">${fish.name}</div>
                <div class="category">${fish.cat}</div>
            </div>
        </div>
    `).join('');
}

renderLog();
