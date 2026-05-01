const NAV_CATEGORIES = ['All', 'Shark', 'Ray', 'Mammal', 'Fish', 'Turtle', 'Cephalopod', 'Crustacean'];

/**
 * INITIALIZATION & NAVIGATION
 */
function buildFilterBars() {
    const dexBar = document.getElementById('dexFilters');
    const logBar = document.getElementById('logFilters');
    const makeBtns = (filterFunc, btnClass) => NAV_CATEGORIES.map(cat => 
        `<button class="${btnClass} ${cat==='All'?'active':''}" onclick="${filterFunc}('${cat}')">${cat}</button>`
    ).join('');
    
    if(dexBar) dexBar.innerHTML = makeBtns('filterByCategory', 'filter-btn');
    if(logBar) logBar.innerHTML = makeBtns('filterLogByCategory', 'log-filter-btn');
}

function showPage(pageId) {
    ['dex-page', 'log-page', 'detail-page', 'achievements-page'].forEach(p => {
        const el = document.getElementById(p);
        if(el) el.style.display = 'none';
    });
    
    const target = document.getElementById(`${pageId}-page`);
    if(target) target.style.display = 'block';

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    if (pageId === 'dex') navItems[0].classList.add('active');
    if (pageId === 'log') { navItems[1].classList.add('active'); renderLog(); }
    if (pageId === 'achievements') { navItems[2].classList.add('active'); renderAchievements(); }
    
    if (pageId !== 'detail') window.scrollTo(0, 0);
}

/**
 * DAILY SQUAD LOGIC
 */
function getDailySquad() {
    const today = new Date();
    const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const squadCats = ['Shark', 'Ray', 'Fish', 'Turtle']; 
    
    return squadCats.map((cat, index) => {
        const catPool = speciesList.filter(f => f.cat === cat);
        if (catPool.length === 0) return null;
        const pickIndex = (dateSeed + index) % catPool.length;
        return catPool[pickIndex];
    }).filter(f => f !== null);
}

/**
 * IMAGE LOGIC
 */
function getSpeciesImage(f) {
    const fileName = f.name.toLowerCase().replace(/ /g, '_').replace(/-/g, '_');
    return `./assets/${fileName}.jpg`;
}

function getWikiFallback(name) {
    const formattedName = name.replace(/ /g, '_');
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${formattedName}.jpg?width=500`;
}

/**
 * RENDERING
 */
function render(data = speciesList) {
    const grid = document.getElementById('fishGrid');
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    if(!grid) return;

    const squad = getDailySquad();
    let squadHtml = `<div class="section-header"><h2>Daily Discovery Squad</h2></div><div class="squad-container">`;
    
    squad.forEach(fish => {
        const isLogged = logged.some(l => l.name === fish.name && l.count > 0);
        
        // Consistent Skull UI
        const dangerLevel = fish.danger || 0;
        const skullsHTML = `
            <div class="danger-skulls-wrap">
                <span class="skulls-base">💀💀💀💀💀</span>
                <span class="skulls-active">${"💀".repeat(dangerLevel)}</span>
            </div>`;

        squadHtml += `
        <div class="daily-hero-card" onclick="openDetail('${fish.name.replace(/'/g, "\\'")}')">
            <div class="hero-badge">${fish.cat.toUpperCase()}</div>
            <div class="hero-img-wrap">
                <img src="${getSpeciesImage(fish)}" 
                     class="hero-img ${isLogged ? '' : 'unidentified-blur'}" 
                     onerror="this.onerror=null; this.src='${getWikiFallback(fish.name)}';">
            </div>
            <div class="hero-info">
                <h3>${fish.name} ${skullsHTML}</h3>
                <p>${isLogged ? "✅ Logged" : "🔍 Needed"}</p>
            </div>
        </div>`;
    });
    squadHtml += `</div><hr class="section-divider"><div class="section-header"><h2>Full Collection</h2></div>`;

    const gridHtml = data.map(fish => {
        const logEntry = logged.find(l => l.name === fish.name);
        const isLogged = logEntry && logEntry.count > 0;
        const count = isLogged ? logEntry.count : 0;
        const imgClass = isLogged ? "fish-img" : "fish-img unidentified-blur";
        
        // Consistent Skull UI
        const dangerLevel = fish.danger || 0;
        const skullsHTML = `
            <div class="danger-skulls-wrap">
                <span class="skulls-base">💀💀💀💀💀</span>
                <span class="skulls-active">${"💀".repeat(dangerLevel)}</span>
            </div>`;
        
        return `
        <div class="card" onclick="openDetail('${fish.name.replace(/'/g, "\\'")}')">
            <div class="rarity-dot" style="background: ${getColor(fish.rarity)}"></div>
            <div class="img-container">
                <img src="${getSpeciesImage(fish)}" 
                     class="${imgClass}" 
                     onerror="this.onerror=null; this.src='${getWikiFallback(fish.name)}';">
            </div>
            <div class="card-info">
                <div class="fish-name-row">
                    <span class="fish-name">${fish.name} ${skullsHTML}</span>
                    <span class="seen-badge ${isLogged ? 'active' : ''}">${count}</span>
                </div>
                <div class="category-text">${fish.cat}</div>
                <button class="log-btn" onclick="event.stopPropagation(); handleLogAction('${fish.name.replace(/'/g, "\\'")}')">📸 Log</button>
            </div>
        </div>`;
    }).join('');

    grid.innerHTML = squadHtml + gridHtml;
}

function openDetail(name) {
    const fish = speciesList.find(f => f.name === name);
    if(!fish) return;
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const logEntry = logged.find(l => l.name === fish.name);
    const count = logEntry ? logEntry.count : 0;
    const isLogged = count > 0;
    
    const progress = Math.min((count / 10) * 100, 100);
    const blurClass = isLogged ? "" : "obscured-text";
    
    // Skull logic for detail view
    const dangerLevel = fish.danger || 0;
    const skullsHTML = `
        <div class="danger-skulls-wrap">
            <span class="skulls-base">💀💀💀💀💀</span>
            <span class="skulls-active">${"💀".repeat(dangerLevel)}</span>
        </div>`;

    document.getElementById('detailContent').innerHTML = `
        <div class="detail-card">
            <img src="${getSpeciesImage(fish)}" 
                 class="detail-img ${isLogged ? '' : 'unidentified-blur'}" 
                 onerror="this.onerror=null; this.src='${getWikiFallback(fish.name)}';">
            <div class="detail-info">
                <div class="detail-header">
                    <span class="rarity-tag" style="background:${getColor(fish.rarity)}">${fish.rarity.toUpperCase()}</span>
                    <span class="status-badge-inline ${isLogged ? (fish.status || 'LC') : 'Unknown'}">${isLogged ? (fish.status || 'LC') : '???'}</span>
                </div>
                <h1>${fish.name}</h1>
                
                <div class="progress-section">
                    <div class="progress-label">Log Progress <span>${count}/10</span></div>
                    <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${progress}%"></div></div>
                </div>

                <div class="specs-grid ${blurClass}">
                    <div class="spec-item"><strong>Size:</strong><span>${isLogged ? (fish.size || '??') : '???'}</span></div>
                    <div class="spec-item"><strong>Danger:</strong><span>${isLogged ? skullsHTML : '???'}</span></div>
                    <div class="spec-item"><strong>Depth:</strong><span>${isLogged ? (fish.depth || '??') : '???'}</span></div>
                    <div class="spec-item"><strong>Diet:</strong><span>${isLogged ? (fish.diet || '??') : '???'}</span></div>
                </div>

                <div class="extra-data-section ${blurClass}">
                    <div class="data-row"><strong>📍 Geography:</strong> <span>${isLogged ? (fish.geo || 'Unknown') : '???'}</span></div>
                    <div class="data-row"><strong>🌡️ Temp:</strong> <span>${isLogged ? (fish.temp || 'Unknown') : '???'}</span></div>
                    <div class="data-row"><strong>📊 Population:</strong> <span>${isLogged ? (fish.population || 'Unknown') : '???'}</span></div>
                    <div class="data-row"><strong>⏰ Activity:</strong> <span>${isLogged ? (fish.time || 'Unknown') : '???'}</span></div>
                    <div class="data-row"><strong>📅 Season:</strong> <span>${isLogged ? (fish.season || 'Unknown') : '???'}</span></div>
                </div>

                <p class="long-description ${blurClass}">
                    ${isLogged ? fish.desc : "Biological data encrypted. Log an observation to unlock."}
                </p>

                ${isLogged ? `<div class="fun-fact-box"><small>DID YOU KNOW?</small><p>${fish.funFact}</p></div>` : ''}
                
                <div class="action-button-group">
                    <button class="action-btn log-main-btn" onclick="handleLogAction('${fish.name.replace(/'/g, "\\'")}')">📸 Log Observation</button>
                    <button class="action-btn upload-mock-btn" onclick="showToast('Server Required: This will upload to your Mac!', '🖥️')">🖼️ Add Own Photo (MOCKUP)</button>
                </div>
            </div>
        </div>`;
    showPage('detail');
}

/**
 * HELPERS
 */
function handleLogAction(name) {
    logFish(name); 
    const detailPage = document.getElementById('detail-page');
    if (detailPage && detailPage.style.display === 'block') openDetail(name); 
    else render(); 
}

function handleSort() {
    const v = document.getElementById('sortSelect').value;
    const [prop, dir] = v.split('_');
    const rMap = { legendary: 5, epic: 4, rare: 3, uncommon: 2, common: 1 };
    let data = [...speciesList].sort((a, b) => {
        let res = 0;
        if (prop === 'name') res = a.name.localeCompare(b.name);
        if (prop === 'rarity') res = (rMap[a.rarity] || 0) - (rMap[b.rarity] || 0);
        if (prop === 'size') res = (parseFloat(a.size) || 0) - (parseFloat(b.size) || 0);
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

function updateStats() { 
    const l = JSON.parse(localStorage.getItem('myAquaLog')) || []; 
    const c = document.getElementById('statsCounter'); 
    if (c) c.innerHTML = `Found: <b>${l.length}</b> / ${speciesList.length}`; 
}

function showToast(m, i = '📸') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    // Simplified structure for a compact, rounder look
    toast.innerHTML = `
        <div class="toast-content">
            <span>${i} ${m}</span>
            <button onclick="undoLastLog()" class="toast-undo-btn">UNDO</button>
        </div>
    `;
    
    container.appendChild(toast);

    // Remove the toast after the animation finishes
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function filterLogByCategory(cat) {
    document.querySelectorAll('.log-filter-btn').forEach(b => b.classList.toggle('active', b.innerText === cat));
    renderLog(cat); 
}

/**
 * STYLE INJECTOR
 */
(function injectStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        .img-container { width: 100%; height: 180px; overflow: hidden; background: #0b1622; border-radius: 8px 8px 0 0; position: relative; }
        .fish-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .unidentified-blur { filter: blur(35px) brightness(0.5) !important; opacity: 0.9; transform: scale(1.2); }
        .obscured-text { filter: blur(8px); opacity: 0.2; pointer-events: none; }
        
        .squad-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; grid-column: 1 / -1; margin-bottom: 20px; }
        .daily-hero-card { background: linear-gradient(135deg, #0f2027, #203a43, #2c5364); border-radius: 12px; padding: 15px; display: flex; align-items: center; gap: 15px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer; }
        .hero-img-wrap { width: 75px; height: 75px; flex-shrink: 0; background: #0b1622; border-radius: 8px; overflow: hidden; }
        .hero-img { width: 100%; height: 100%; object-fit: cover; }
        
        .section-header { grid-column: 1 / -1; margin: 10px 0; color: #fff; }
        .section-header h2 { font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; opacity: 0.7; }
        .hero-info h3 { font-size: 1rem; margin: 0; color: #fff; display: flex; align-items: center; gap: 5px; }
        .hero-info p { font-size: 0.8rem; margin: 4px 0 0; color: #007aff; font-weight: bold; }
        .hero-badge { font-size: 0.6rem; color: rgba(255,255,255,0.5); margin-bottom: 4px; font-weight: bold; }
        
        .section-divider { grid-column: 1 / -1; border: 0; height: 1px; background: rgba(255,255,255,0.05); margin: 10px 0 20px; }
        .fish-name-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; font-weight: bold; }
        .category-text { font-size: 0.75rem; color: #555; margin-bottom: 12px; text-transform: uppercase; }
        
        .extra-data-section { background: rgba(0,0,0,0.2); border-radius: 10px; padding: 15px; margin: 15px 0; display: flex; flex-direction: column; gap: 8px; }
        .data-row { display: flex; justify-content: space-between; font-size: 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px; }
        .data-row strong { color: #aaa; }
        .data-row span { color: #fff; text-align: right; }

        .action-button-group { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
        .action-btn { width: 100%; padding: 14px; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 1rem; }
        .log-main-btn { background-color: #007aff; color: #fff; box-shadow: 0 4px 15px rgba(0,122,255,0.3); }
        .upload-mock-btn { background-color: rgba(255,255,255,0.05); color: #ccc; border: 1px solid rgba(255,255,255,0.1); }

        /* SKULL STYLES */
        .danger-skulls-wrap { position: relative; display: inline-block; font-size: 10px; margin-left: 5px; letter-spacing: -1px; vertical-align: middle; pointer-events: none; user-select: none; }
        .skulls-base { opacity: 0.15; display: block; }
        .skulls-active { position: absolute; top: 0; left: 0; color: white; display: block; white-space: nowrap; }
    `;
    document.head.appendChild(style);
})();
