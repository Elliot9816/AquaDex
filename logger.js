let currentLogFilter = 'All';

function filterLogByCategory(cat) {
    currentLogFilter = cat;
    document.querySelectorAll('.log-filter-btn').forEach(b => b.classList.toggle('active', b.innerText === cat));
    renderLog();
}

function logFish(name) {
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const idx = logged.findIndex(f => f.name === name);
    const fish = speciesList.find(f => f.name === name);
    if (idx > -1) {
        logged[idx].count++;
        showToast(`Observation #${logged[idx].count}!`, '🔄');
    } else {
        if(!fish) return;
        logged.push({ name: fish.name, cat: fish.cat, rarity: fish.rarity, count: 1, dateLogged: new Date().toISOString() });
        showToast(`New Discovery: ${name}!`, '✨');
    }
    localStorage.setItem('myAquaLog', JSON.stringify(logged));
    updateStats();
    renderLog();
}

function renderLog() {
    const grid = document.getElementById('logGrid');
    if (!grid) return;
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    if (currentLogFilter !== 'All') logged = logged.filter(f => f.cat === currentLogFilter);

    grid.innerHTML = logged.map(e => {
        const fishData = speciesList.find(s => s.name === e.name) || e;
        const wiki = `https://en.wikipedia.org/wiki/Special:FilePath/${e.name.replace(/ /g, '_')}.jpg`;
        return `
        <div class="card" onclick="openDetail('${e.name.replace(/'/g, "\\'")}')">
            <div class="rarity-dot" style="background: ${getColor(e.rarity)}"></div>
            <img class="fish-img" src="${getSpeciesImage(fishData)}" onerror="this.onerror=null; this.src='${wiki}';">
            <div class="card-info">
                <div class="fish-name">${e.name}</div>
                <div class="category-row">
                    <span class="category">${e.cat}</span>
                    <span class="seen-badge active">${e.count}</span>
                </div>
            </div>
        </div>`;
    }).join('');
}
