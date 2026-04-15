// TOP OF UI.JS
const Haptics = {
    light: () => { if (navigator.vibrate) navigator.vibrate(10); },
    medium: () => { if (navigator.vibrate) navigator.vibrate(30); },
    success: () => { if (navigator.vibrate) navigator.vibrate([20, 50, 20]); }, 
    warning: () => { if (navigator.vibrate) navigator.vibrate([100, 30, 100]); }
};

function showPage(pageId) {
    // 1. Define the possible pages
    const pages = ['dex-page', 'log-page', 'detail-page'];
    
    // 2. Hide every page
    pages.forEach(id => {
        const page = document.getElementById(id);
        if (page) page.style.display = 'none';
    });

    // 3. Show the requested page
    // We add '-page' here because our IDs are 'dex-page', 'log-page', etc.
    const targetId = pageId.includes('-page') ? pageId : `${pageId}-page`;
    const targetPage = document.getElementById(targetId);
    
    if (targetPage) {
        targetPage.style.display = 'block';
    } else {
        console.error("Could not find page ID:", targetId);
    }

    // 4. Handle special page actions
    if (pageId === 'log') {
        if (typeof renderLog === "function") renderLog();
        updateStats();
    }
    
    if (pageId === 'dex') {
        if (typeof render === "function") render();
    }

    // 5. Manage Bottom Nav visibility
    const nav = document.querySelector('.bottom-nav');
    if (nav) {
        // Only hide the nav if we are on the 'detail' page
        nav.style.display = (pageId === 'detail') ? 'none' : 'flex';
        
        // Update active class on nav icons
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('onclick').includes(`'${pageId}'`)) {
                item.classList.add('active');
            }
        });
    }
}

    // Update active button color
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(pageId)) {
            btn.classList.add('active');
        }
    });

    // iPhone Haptic Feedback
    if (navigator.vibrate) navigator.vibrate(10);
}

// Feature 3: Stats Dashboard Logic
function updateStats() {
    const logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    const counter = document.getElementById('statsCounter');
    
    if (counter) {
        // Calculate percentage
        const total = speciesList.length;
        const count = logged.length;
        const percent = Math.round((count / total) * 100);
        
        counter.innerHTML = `
            <div class="stats-bar-bg">
                <div class="stats-bar-fill" style="width: ${percent}%"></div>
            </div>
            <span>Found: <b>${count}</b> / ${total} (${percent}%)</span>
        `;
    }
}

// Feature 4: Performance & Image Handling
document.addEventListener("DOMContentLoaded", () => {
    // This ensures images that fail to load don't break the layout
    document.addEventListener('error', function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            e.target.src = "https://via.placeholder.com/150?text=Photo+Pending";
        }
    }, true);
});

// Feature 5: Sorting Logic
function sortLoggedFish(criteria) {
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    if (criteria === 'name') {
        logged.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'rarity') {
        const rarityOrder = { rare: 1, uncommon: 2, common: 3 };
        logged.sort((a, b) => (rarityOrder[a.rarity] || 4) - (rarityOrder[b.rarity] || 4));
    } else if (criteria === 'dateLogged') {
        logged.sort((a, b) => new Date(b.dateLogged) - new Date(a.dateLogged));
    }

    // After sorting, we save it back or just re-render
    // We'll just re-render for now to keep it fast
    renderLog(logged); 
}

// Feature 6: Long Press to Quick-Log
let pressTimer;

function startPress(name) {
    // A tiny "tick" to let the user know the touch was registered
    if (navigator.vibrate) navigator.vibrate(5); 
    
    pressTimer = window.setTimeout(() => {
        if (typeof logFish === "function") {
            logFish(name);
        }
    }, 700); // 0.7 seconds feels like a natural "long press"
}

function cancelPress() {
    clearTimeout(pressTimer);
}

function showPage(pageId) {
    const pages = ['dex-page', 'log-page', 'detail-page'];
    
    // Hide all pages, then show the one we want
    pages.forEach(p => document.getElementById(p).style.display = 'none');
    document.getElementById(`${pageId}-page`).style.display = 'block';

    if (pageId === 'log') renderLog();
    if (pageId === 'dex') render();

    // Hide bottom nav if we are on the detail page to give more room
    document.querySelector('.bottom-nav').style.display = (pageId === 'detail') ? 'none' : 'flex';
}

function openDetail(name) {
    const fish = speciesList.find(f => f.name === name);
    if (!fish) return;

    const detailContent = document.getElementById('detailContent');
    
    // We combine everything into ONE clean template
    detailContent.innerHTML = `
        <div class="detail-card">
            <img src="https://en.wikipedia.org/wiki/Special:FilePath/${fish.name.replace(/ /g, '_')}.jpg" class="detail-img">
            
            <div class="detail-info">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 10px;">
                    <span class="rarity-tag" style="background:${getColor(fish.rarity)}">${fish.rarity}</span>
                    <span class="danger-label">Danger: ${getDangerStars(fish.danger || 1)}</span>
                </div>

                <h1>${fish.name}</h1>
                <p class="detail-cat">${fish.cat}</p>
                
                <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;">
                
                <p class="detail-desc">${fish.desc || "Description pending for this species."}</p>
                
                <button class="big-log-btn" onclick="logFish('${fish.name.replace(/'/g, "\\'")}')">
                    📸 Log Discovery
                </button>
            </div>
        </div>
    `;
    
    showPage('detail');
}