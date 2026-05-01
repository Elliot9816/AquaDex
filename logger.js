let currentLogFilter = 'All';
let lastAction = null; // For the Undo feature

function filterLogByCategory(cat) {
    currentLogFilter = cat;
    document.querySelectorAll('.log-filter-btn').forEach(b => 
        b.classList.toggle('active', b.innerText === cat)
    );
    renderLog();
}

function logFish(name) {
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const idx = logged.findIndex(f => f.name === name);
    const fish = speciesList.find(f => f.name === name);
    
    // Store for Undo capability
    lastAction = { name: name, isNew: idx === -1 };

    if (idx > -1) {
        logged[idx].count++;
        showToast(`Observation #${logged[idx].count}!`, '🔄');
    } else {
        if(!fish) return;
        logged.push({ 
            name: fish.name, 
            cat: fish.cat, 
            rarity: fish.rarity, 
            count: 1, 
            dateLogged: new Date().toISOString() 
        });
        showToast(`New Discovery: ${name}!`, '✨');
    }
    
    localStorage.setItem('myAquaLog', JSON.stringify(logged));
    updateStats();
    renderLog();
}

// RESTORED: The Undo function
function undoLastLog() {
    if (!lastAction) return;
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const idx = logged.findIndex(f => f.name === lastAction.name);
    
    if (idx > -1) {
        if (logged[idx].count > 1) {
            logged[idx].count--;
        } else {
            logged.splice(idx, 1);
        }
        localStorage.setItem('myAquaLog', JSON.stringify(logged));
        lastAction = null;
        updateStats();
        renderLog();
        showToast("Action Undone", "↩️");
    }
}

// RESTORED & FIXED: The Clear All function
function clearAllLogs() {
    if (confirm("Are you sure? This will wipe your entire Log!")) {
        localStorage.removeItem('myAquaLog');
        lastAction = null;
        updateStats();
        renderLog();
        showToast("Log cleared", "🗑️");
    }
}

function renderLog() {
    const grid = document.getElementById('logGrid');
    if (!grid) return;
    
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    // Apply Category Filter
    if (currentLogFilter !== 'All') {
        logged = logged.filter(f => f.cat === currentLogFilter);
    }

    // Apply Sorting
    const sortVal = document.getElementById('logSortSelect')?.value || 'date_desc';
    const [prop, dir] = sortVal.split('_');

    logged.sort((a, b) => {
        let res = 0;
        if (prop === 'date') res = new Date(a.dateLogged) - new Date(b.dateLogged);
        if (prop === 'count') res = a.count - b.count;
        if (prop === 'name') res = a.name.localeCompare(b.name);
        return dir === 'desc' ? res * -1 : res;
    });

    if (logged.length === 0) {
        grid.innerHTML = `<div class="empty-msg">No ${currentLogFilter === 'All' ? '' : currentLogFilter} observations yet.</div>`;
        return;
    }

    grid.innerHTML = logged.map(e => {
        const fish = speciesList.find(s => s.name === e.name) || e;
        
        // Consistent Skull UI
        const dangerLevel = fish.danger || 0;
        const skullsHTML = `
            <div class="danger-skulls-wrap">
                <span class="skulls-base">💀💀💀💀💀</span>
                <span class="skulls-active">${"💀".repeat(dangerLevel)}</span>
            </div>`;

        return `
        <div class="card" onclick="openDetail('${e.name.replace(/'/g, "\\'")}')">
            <div class="rarity-dot" style="background: ${getColor(fish.rarity)}"></div>
            <div class="img-container">
                <img src="${getSpeciesImage(fish)}" 
                     class="fish-img" 
                     onerror="this.onerror=null; this.src='${getWikiFallback(fish.name)}';">
            </div>
            <div class="card-info">
                <div class="fish-name-row">
                    <span class="fish-name">${fish.name} ${skullsHTML}</span>
                    <span class="seen-badge active">${e.count}</span>
                </div>
                <div class="category-text">${fish.cat}</div>
                <button class="log-btn" onclick="event.stopPropagation(); handleLogAction('${fish.name.replace(/'/g, "\\'")}')">📸 Log</button>
            </div>
        </div>`;
    }).join('');
}

