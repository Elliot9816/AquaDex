const NAV_CATEGORIES = ['All', 'Shark', 'Ray', 'Mammal', 'Fish', 'Turtle', 'Cephalopod', 'Crustacean'];

function buildFilterBars() {
    const dexBar = document.getElementById('dexFilters');
    const logBar = document.getElementById('logFilters');
    const makeBtns = (filterFunc, btnClass) => NAV_CATEGORIES.map(cat => `<button class="${btnClass} ${cat==='All'?'active':''}" onclick="${filterFunc}('${cat}')">${cat}</button>`).join('');
    if(dexBar) dexBar.innerHTML = makeBtns('filterByCategory', 'filter-btn');
    if(logBar) logBar.innerHTML = makeBtns('filterLogByCategory', 'log-filter-btn');
}

function showPage(pageId) {
    ['dex-page', 'log-page', 'detail-page', 'achievements-page'].forEach(p => {
        const el = document.getElementById(p);
        if(el) el.style.display = 'none';
    });
    document.getElementById(`${pageId}-page`).style.display = 'block';
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    if (pageId === 'dex') navItems[0].classList.add('active');
    if (pageId === 'log') { navItems[1].classList.add('active'); renderLog(); }
    if (pageId === 'achievements') { navItems[2].classList.add('active'); renderAchievements(); }
    if (pageId !== 'detail') window.scrollTo(0, 0);
}

function getSpeciesImage(f) {
    if (f.img && f.img.startsWith('http')) return f.img;
    // Clean name for local file: "Blue-Ringed Octopus" -> "blue_ringed_octopus"
    const fileName = f.name.toLowerCase().replace(/ /g, '_').replace(/-/g, '_');
    return `./assets/${fileName}.jpg`;
}

function render(data = speciesList) {
    const grid = document.getElementById('fishGrid');
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    if(!grid) return;

    grid.innerHTML = data.map(fish => {
        const skulls = "💀".repeat(fish.danger || 0);
        const logEntry = logged.find(l => l.name === fish.name);
        const count = logEntry ? logEntry.count : 0;
        const wiki = `https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg`;

        return `
        <div class="card" onclick="openDetail('${fish.name.replace(/'/g, "\\'")}')">
            <div class="rarity-dot" style="background: ${getColor(fish.rarity)}"></div>
            <img src="${getSpeciesImage(fish)}" class="fish-img" onerror="this.onerror=null; this.src='${wiki}';">
            <div class="card-info">
                <div class="fish-name">${fish.name} <span class="danger-skulls">${skulls}</span></div>
                <div class="category-row">
                    <span class="category">${fish.cat}</span>
                    <span class="seen-badge ${count > 0 ? 'active' : ''}">${count}</span>
                </div>
                <button class="log-btn" onclick="event.stopPropagation(); logFish('${fish.name.replace(/'/g, "\\'")}')">📸 Log</button>
            </div>
        </div>`;
    }).join('');
}

function openDetail(name) {
    const fish = speciesList.find(f => f.name === name);
    if(!fish) return;
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const count = (logged.find(l => l.name === fish.name) || {count:0}).count;
    const progress = Math.min((count / 10) * 100, 100);
    const wiki = `https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg`;

    document.getElementById('detailContent').innerHTML = `
        <div class="detail-card">
            <img src="${getSpeciesImage(fish)}" class="detail-img" onerror="this.onerror=null; this.src='${wiki}';">
            <div class="detail-info">
                <div class="detail-header">
                    <span class="rarity-tag" style="background:${getColor(fish.rarity)}">${fish.rarity.toUpperCase()}</span>
                    <span class="status-badge-inline ${fish.status}">${fish.status}</span>
                </div>
                <h1>${fish.name}</h1>
                <div class="progress-section">
                    <div class="progress-label">Log Progress <span>${count}/10</span></div>
                    <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${progress}%"></div></div>
                </div>
                <div class="specs-grid">
                    <div class="spec-item"><strong>Size:</strong><span>${fish.size || '??'}</span></div>
                    <div class="spec-item"><strong>Danger:</strong><span>${"💀".repeat(fish.danger || 0)}</span></div>
                    <div class="spec-item"><strong>Depth:</strong><span>${fish.depth || '??'}</span></div>
                    <div class="spec-item"><strong>Time:</strong><span>${fish.time || 'Day'}</span></div>
                    <div class="spec-item"><strong>Season:</strong><span>${fish.season || 'All Year'}</span></div>
                    <div class="spec-item"><strong>Diet:</strong><span>${fish.diet || '??'}</span></div>
                </div>
                <p class="long-description">${fish.desc}</p>
                <div class="fun-fact-box"><small>DID YOU KNOW?</small><p>${fish.funFact}</p></div>
                <button class="big-log-btn" onclick="logFish('${fish.name.replace(/'/g, "\\'")}')">📸 Log Observation</button>
            </div>
        </div>`;
    showPage('detail');
}

function handleSort() {
    const v = document.getElementById('sortSelect').value;
    const [prop, dir] = v.split('_');
    const rMap = { legendary: 5, epic: 4, rare: 3, uncommon: 2, common: 1 };
    let data = [...speciesList].sort((a, b) => {
        let res = 0;
        if (prop === 'name') res = a.name.localeCompare(b.name);
        if (prop === 'rarity') res = (rMap[a.rarity] || 0) - (rMap[b.rarity] || 0);
        return dir === 'desc' ? res * -1 : res;
    });
    render(data);
}

function filterByCategory(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.innerText === cat));
    render(cat === 'All' ? speciesList : speciesList.filter(f => f.cat === cat));
}

function searchFish() { 
    const t = document.getElementById('searchBar').value.toLowerCase(); 
    render(speciesList.filter(f => f.name.toLowerCase().includes(t))); 
}

function getColor(r) { const c = { legendary: '#ffcc00', epic: '#af52de', rare: '#007aff', uncommon: '#34c759', common: '#8e8e93' }; return c[r] || '#8e8e93'; }
function updateStats() { const l = JSON.parse(localStorage.getItem('myAquaLog')) || []; const c = document.getElementById('statsCounter'); if (c) c.innerHTML = `Found: <b>${l.length}</b> / ${speciesList.length}`; }
function showToast(m, i = '📸') { const c = document.getElementById('toast-container'); const t = document.createElement('div'); t.className = 'toast'; t.innerHTML = `<span>${i}</span> ${m}`; c.appendChild(t); setTimeout(() => t.remove(), 2500); }
