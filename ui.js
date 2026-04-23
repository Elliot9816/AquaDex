// ==========================================
// 1. UNIVERSAL HELPERS
// ==========================================
function showToast(message, icon = '📸') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> ${message}`;
    
    container.appendChild(toast);
    
    // Auto-remove the element from the DOM after animation finishes
    setTimeout(() => {
        toast.remove();
    }, 2500);
}

function getColor(rarity) {
    const colors = {
        common: '#8e8e93',
        uncommon: '#34c759',
        rare: '#007aff',
        epic: '#af52de',
        legendary: '#ffcc00'
    };
    return colors[rarity] || '#8e8e93';
}

function getDangerStars(level) {
    let skulls = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= level) {
            const color = level <= 2 ? 'white' : (level === 3 ? '#ffcc00' : '#ff3b30');
            skulls += `<span style="color: ${color};">💀</span>`;
        } else {
            skulls += `<span style="opacity: 0.2;">💀</span>`;
        }
    }
    return skulls;
}

// ==========================================
// 2. HAPTIC ENGINE
// ==========================================
const Haptics = {
    light: () => { if (navigator.vibrate) navigator.vibrate(10); },
    medium: () => { if (navigator.vibrate) navigator.vibrate(30); },
    success: () => { if (navigator.vibrate) navigator.vibrate([20, 50, 20]); }, 
    warning: () => { if (navigator.vibrate) navigator.vibrate([100, 30, 100]); }
};

// ==========================================
// 3. NAVIGATION LOGIC
// ==========================================
function showPage(pageId) {
    try {
        // 1. Hide/Show Pages
        const pages = ['dex-page', 'log-page', 'detail-page', 'achievements-page'];
        pages.forEach(p => {
            const el = document.getElementById(p);
            if (el) el.style.display = 'none';
        });

        const target = document.getElementById(`${pageId}-page`);
        if (target) target.style.display = 'block';

        // 2. Manage Navigation Bar Icons & Highlight
        const navItems = document.querySelectorAll('.nav-item');
        const navBar = document.querySelector('.bottom-nav');
        
        if (navItems.length >= 3) {
            if (pageId === 'detail') {
                // Change Search to Close on Detail view
                navItems[0].innerHTML = '<span>✕</span><label>Close</label>';
                navItems[0].onclick = () => showPage('dex');
                navItems[1].style.opacity = '0.3';
                navItems[2].style.opacity = '0.3';
                if (navBar) navBar.style.display = 'none';
            } else {
                // Standard Icons
                navItems[0].innerHTML = '<span>🔍</span><label>Dex</label>';
                navItems[0].onclick = () => showPage('dex');
                navItems[1].style.opacity = '1';
                navItems[2].style.opacity = '1';
                if (navBar) navBar.style.display = 'flex';

                // Move "Active" Highlight
                navItems.forEach(item => item.classList.remove('active'));
                if (pageId === 'dex') navItems[0].classList.add('active');
                if (pageId === 'log') navItems[1].classList.add('active');
                if (pageId === 'achievements') navItems[2].classList.add('active');
            }
        }

        // 3. Run Renderers
        if (pageId === 'dex' && typeof render === 'function') render();
        if (pageId === 'log' && typeof renderLog === 'function') renderLog();
        if (pageId === 'achievements' && typeof renderAchievements === 'function') renderAchievements();
        
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

    // Pull the count from storage
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const record = logged.find(f => f.name === name);
    const count = record ? record.count : 0;

    // Define Ranks
    let rank = "Unobserved";
    if (count >= 1) rank = "Sighting";
    if (count >= 5) rank = "Observer";
    if (count >= 10) rank = "Expert";

    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = `
        <div class="detail-card">
            <img src="https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg" class="detail-img">
            <div class="detail-info">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="rarity-tag" style="background:${getColor(fish.rarity)}">${fish.rarity}</span>
                    <span class="rank-tag">${rank}</span>
                </div>
                <h1>${fish.name}</h1>
                <p class="detail-cat">${fish.cat} • <b>Spotted ${count}x</b></p>
                
                <div class="research-container">
                    <div class="research-bar" style="width: ${Math.min((count / 10) * 100, 100)}%"></div>
                </div>

                <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;">
                <p class="detail-desc">${fish.desc || "Description pending."}</p>
                <button class="big-log-btn" onclick="logFish('${fish.name.replace(/'/g, "\\'")}')">📸 Log Observation #${count + 1}</button>
            </div>
        </div>
    `;
    showPage('detail');
}


// ==========================================
// 5. STATS DASHBOARD
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

// ==========================================
// 6. QUICK-LOG (LONG PRESS)
// ==========================================
let pressTimer;
function startPress(name) {
    Haptics.light();
    pressTimer = window.setTimeout(() => {
        Haptics.success();
        if (typeof logFish === "function") logFish(name);
    }, 700);
}
function cancelPress() {
    clearTimeout(pressTimer);
}
