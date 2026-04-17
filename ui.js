// 1. HAPTIC ENGINE
const Haptics = {
    light: () => { if (navigator.vibrate) navigator.vibrate(10); },
    medium: () => { if (navigator.vibrate) navigator.vibrate(30); },
    success: () => { if (navigator.vibrate) navigator.vibrate([20, 50, 20]); }, 
    warning: () => { if (navigator.vibrate) navigator.vibrate([100, 30, 100]); }
};

// 2. NAVIGATION LOGIC
function showPage(pageId) {
    const pages = ['dex-page', 'log-page', 'detail-page'];
    
    pages.forEach(p => {
        const el = document.getElementById(p);
        if (el) el.style.display = 'none';
    });

    const target = document.getElementById(`${pageId}-page`);
    if (target) target.style.display = 'block';

    // Update Bottom Nav Active State
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick').includes(`'${pageId}'`)) {
            item.classList.add('active');
        }
    });

    // Refresh data if going to Log or Dex
    if (pageId === 'log') {
        if (typeof renderLog === "function") renderLog();
    }
    if (pageId === 'dex') {
        if (typeof render === "function") render();
    }

    // Hide Nav on Detail Page
    const nav = document.querySelector('.bottom-nav');
    if (nav) nav.style.display = (pageId === 'detail') ? 'none' : 'flex';
    
    Haptics.light();
}

// 3. DETAIL VIEW LOGIC
function openDetail(name) {
    const fish = speciesList.find(f => f.name === name);
    if (!fish) return;

    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = `
        <div class="detail-card">
            <img src="https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg" class="detail-img">
            <div class="detail-info">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="rarity-tag" style="background:${getColor(fish.rarity)}">${fish.rarity}</span>
                    <span class="danger-label">Danger: ${getDangerStars(fish.danger || 1)}</span>
                </div>
                <h1>${fish.name}</h1>
                <p class="detail-cat">${fish.cat}</p>
                <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;">
                <p class="detail-desc">${fish.desc || "Description pending for this species."}</p>
                <button class="big-log-btn" onclick="logFish('${fish.name.replace(/'/g, "\\'")}')">📸 Log Discovery</button>
            </div>
        </div>
    `;
    showPage('detail');
}

// 4. STATS DASHBOARD
function updateStats() {
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const counter = document.getElementById('statsCounter');
    if (counter) {
        const total = speciesList.length;
        const count = logged.length;
        const percent = Math.round((count / total) * 100);
        counter.innerHTML = `
            <div class="stats-bar-bg"><div class="stats-bar-fill" style="width: ${percent}%"></div></div>
            <span>Found: <b>${count}</b> / ${total} (${percent}%)</span>
        `;
    }
}

// 5. QUICK-LOG (LONG PRESS)
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
