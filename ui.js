// ==========================================
// 1. UNIVERSAL HELPERS
// ==========================================
function showToast(message, icon = '📸') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 2500);
}

function getColor(rarity) {
    const colors = {
        common: '#8e8e93', uncommon: '#34c759',
        rare: '#007aff', epic: '#af52de', legendary: '#ffcc00'
    };
    return colors[rarity] || '#8e8e93';
}

function getSpeciesImage(fish) {
    // DIAGNOSTIC ALERT A: See what the helper is receiving
    if (fish && fish.name === "Orca") {
        console.log("Helper processing Orca. Property img is:", fish.img);
    }

    // FORCING THE ORCA IMAGE MANUALLY TO TEST KODER
    if (fish && fish.name === "Orca") {
        return "https://images.unsplash.com/photo-1557613146-59000cc01285?q=80&w=1000";
    }
    
    if (fish && fish.img) return fish.img;
    return `https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg`;
}

function getStatusLabel(code) {
    const statuses = {
        'LC': { label: 'Least Concern', color: '#2ecc71' },
        'NT': { label: 'Near Threatened', color: '#f1c40f' },
        'VU': { label: 'Vulnerable', color: '#e67e22' },
        'EN': { label: 'Endangered', color: '#e74c3c' },
        'CR': { label: 'Critically Endangered', color: '#96281b' },
        'DD': { label: 'Data Deficient', color: '#95a5a6' }
    };
    return statuses[code] || { label: 'Unknown', color: '#7f8c8d' };
}

function getDangerStars(level) {
    let skulls = '';
    for (let i = 1; i <= 5; i++) {
        const color = i <= level ? (level <= 2 ? 'white' : (level === 3 ? '#ffcc00' : '#ff3b30')) : 'rgba(255,255,255,0.1)';
        skulls += `<span style="color: ${color}; opacity: ${i <= level ? 1 : 0.2}">💀</span>`;
    }
    return skulls;
}

// ==========================================
// 2. HAPTIC ENGINE
// ==========================================
const Haptics = {
    light: () => { if (navigator.vibrate) navigator.vibrate(10); },
    success: () => { if (navigator.vibrate) navigator.vibrate([20, 50, 20]); }
};

// ==========================================
// 3. NAVIGATION LOGIC
// ==========================================
function showPage(pageId) {
    try {
        const pages = ['dex-page', 'log-page', 'detail-page', 'achievements-page'];
        pages.forEach(p => {
            const el = document.getElementById(p);
            if (el) el.style.display = 'none';
        });

        const target = document.getElementById(`${pageId}-page`);
        if (target) target.style.display = 'block';

        const navItems = document.querySelectorAll('.nav-item');
        const navBar = document.querySelector('.bottom-nav');
        
        if (navItems.length >= 3) {
            if (pageId === 'detail') {
                navItems[0].innerHTML = '<span>✕</span><label>Close</label>';
                navItems[0].onclick = () => showPage('dex');
                if (navBar) navBar.style.display = 'none';
            } else {
                navItems[0].innerHTML = '<span>🔍</span><label>Dex</label>';
                navItems[0].onclick = () => showPage('dex');
                if (navBar) navBar.style.display = 'flex';
                navItems.forEach(item => item.classList.remove('active'));
                if (pageId === 'dex') navItems[0].classList.add('active');
                if (pageId === 'log') navItems[1].classList.add('active');
                if (pageId === 'achievements') navItems[2].classList.add('active');
            }
        }

        if (pageId === 'dex') render();
        if (pageId === 'log') renderLog();
        if (typeof updateStats === 'function') updateStats();
        Haptics.light();
    } catch (err) {
        console.error("Navigation Error:", err);
    }
}

// ==========================================
// 4. DETAIL VIEW LOGIC
// ==========================================
function openDetail(name) {
    const fish = speciesList.find(f => f.name === name);
    if (!fish) return;

    // DIAGNOSTIC ALERT B: Check the specific Orca object when clicked
    if (name === "Orca") {
        alert("DETAIL ALERT:\nName: " + fish.name + "\nImg property: " + fish.img);
    }

    const statusInfo = getStatusLabel(fish.status);
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const record = logged.find(f => f.name === name);
    const count = record ? record.count : 0;
    
    const imageSrc = getSpeciesImage(fish);

    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = `
        <div class="detail-card">
            <div class="detail-image-container">
                <img src="${imageSrc}" class="detail-img" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x300?text=Image+Not+Found';">
                <div class="status-badge" style="border-color: ${statusInfo.color}; color: ${statusInfo.color}">
                    ${statusInfo.label}
                </div>
            </div>
            
            <div class="detail-info">
                <div class="detail-header">
                    <span class="rarity-tag" style="background:${getColor(fish.rarity)}">${fish.rarity}</span>
                    <span class="rank-tag">Observations: ${count}</span>
                </div>
                <h1>${fish.name}</h1>
                <p class="detail-cat">${fish.cat}</p>
                <div class="specs-grid">
                    <div class="spec-item"><strong>Size</strong><span>${fish.size || '??'}</span></div>
                    <div class="spec-item"><strong>Temp</strong><span>${fish.temp || '??'}</span></div>
                    <div class="spec-item"><strong>Time</strong><span>${fish.time || 'Day'}</span></div>
                    <div class="spec-item"><strong>Depth</strong><span>${fish.depth || '??'}</span></div>
                    <div class="spec-item"><strong>Est. Pop.</strong><span>${fish.pop || 'Unknown'}</span></div>
                </div>
                <div class="detail-body">
                    <h3>Field Notes</h3>
                    <p>${fish.desc}</p>
                    <div class="spotting-guide">
                        <h3>Spotting Guide</h3>
                        <ul>
                            <li>📍 <b>Region:</b> ${fish.geo || 'Unknown'}</li>
                            <li>🗓️ <b>Best Season:</b> ${fish.season || 'Year-round'}</li>
                        </ul>
                    </div>
                    <div class="fun-fact-box">
                        <small>DID YOU KNOW?</small>
                        <p>${fish.funFact || 'No fun fact available.'}</p>
                    </div>
                    <div class="danger-box">
                        <span>Threat Level:</span>
                        <div class="stars">${getDangerStars(fish.danger || 1)}</div>
                    </div>
                </div>
                <button class="big-log-btn" onclick="logFish('${fish.name.replace(/'/g, "\\'")}')">
                    📸 Log This Observation
                </button>
            </div>
        </div>
    `;
    showPage('detail');
}

// ==========================================
// 5. RENDER DEX GRID
// ==========================================
function render() {
    const grid = document.getElementById('fish-grid');
    if (!grid) return;
    grid.innerHTML = '';

    speciesList.forEach(fish => {
        // DIAGNOSTIC ALERT C: Check what the loop is seeing for Orca
        if (fish.name === "Orca") {
            console.log("RENDER loop found Orca. Image logic starting...");
        }

        const imageSrc = getSpeciesImage(fish);
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openDetail(fish.name);
        card.innerHTML = `
            <div class="rarity-dot" style="background: ${getColor(fish.rarity)}"></div>
            <img src="${imageSrc}" class="fish-img" onerror="this.onerror=null;this.src='https://via.placeholder.com/150?text=Check+Wiki';">
            <div class="card-info">
                <div class="fish-name">${fish.name}</div>
                <div class="category">${fish.cat}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==========================================
// 6. RENDER LOG
// ==========================================
function renderLog() {
    const logList = document.getElementById('log-list');
    if (!logList) return;
    logList.innerHTML = '';
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    if (logged.length === 0) {
        logList.innerHTML = '<p style="text-align:center; padding:50px; opacity:0.5;">No observations logged yet.</p>';
        return;
    }
    logged.forEach(entry => {
        const fish = speciesList.find(s => s.name === entry.name);
        if (!fish) return;
        const imageSrc = getSpeciesImage(fish);
        const item = document.createElement('div');
        item.className = 'log-item';
        item.style = "display:flex; gap:15px; background:#1a1d24; margin-bottom:10px; padding:10px; border-radius:12px; align-items:center;";
        item.innerHTML = `
            <img src="${imageSrc}" style="width:60px; height:60px; border-radius:8px; object-fit:cover;">
            <div style="flex:1">
                <div style="font-weight:bold; color:white;">${entry.name}</div>
                <div style="font-size:12px; color:#4da3ff">Seen ${entry.count} times</div>
            </div>
            <button onclick="openDetail('${entry.name.replace(/'/g, "\\'")}')" style="background:#2c2c2e; border:none; color:white; padding:8px 12px; border-radius:8px;">View</button>
        `;
        logList.appendChild(item);
    });
}

// ==========================================
// 7. STATS & QUICK LOG
// ==========================================
function updateStats() {
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const counter = document.getElementById('statsCounter');
    if (counter && typeof speciesList !== 'undefined') {
        const total = speciesList.length;
        const count = logged.length;
        const percent = Math.round((count / total) * 100);
        counter.innerHTML = `
            <div class="stats-bar-bg"><div class="stats-bar-fill" style="width: ${percent}%"></div></div>
            <span>Found: <b>${count}</b> / ${total} (${percent}%)</span>
        `;
    }
}

let pressTimer;
function startPress(name) {
    Haptics.light();
    pressTimer = window.setTimeout(() => {
        Haptics.success();
        if (typeof logFish === "function") logFish(name);
    }, 700);
}
function cancelPress() { clearTimeout(pressTimer); }
