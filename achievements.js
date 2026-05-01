(function injectAchievementStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* ACHIEVEMENT GRID */
        #achievementsGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            padding: 15px;
            background: #0b1622;
        }

        .ach-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 20px 10px;
            text-align: center;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.3s ease;
        }

        .ach-card.unlocked {
            background: linear-gradient(145deg, rgba(64, 224, 208, 0.15), rgba(0, 122, 255, 0.05));
            border: 1px solid rgba(64, 224, 208, 0.4);
        }

        .ach-card.locked {
            filter: grayscale(1) opacity(0.5);
        }

        .ach-icon-wrap { font-size: 2.2rem; margin-bottom: 12px; height: 50px; display: flex; align-items: center; }

        .ach-type-tag { font-size: 0.6rem; text-transform: uppercase; color: #40E0D0; margin-bottom: 5px; font-weight: 800; }

        .ach-info h3 { font-size: 0.85rem; margin: 0 0 6px 0; color: #fff; line-height: 1.2; }

        .ach-info p { font-size: 0.7rem; color: #888; margin: 0; line-height: 1.3; }

        .ach-ribbon {
            position: absolute; top: 6px; right: -18px; background: #40E0D0; color: #0b1622;
            font-size: 0.5rem; font-weight: 900; padding: 2px 20px; transform: rotate(45deg);
        }

        @media (min-width: 768px) { #achievementsGrid { grid-template-columns: repeat(4, 1fr); } }
    `;
    document.head.appendChild(style);
})();


// ==========================================
// 1. DATA DEFINITIONS
// ==========================================
const milestones = [1, 5, 10, 25, 50, 100, 250, 500];
const categories = ['Reef Fish', 'Shark', 'Ray', 'Mammal', 'Invertebrate'];
const catMilestones = [1, 5, 10, 25, 50];
const rarities = [
    { name: 'Common', emoji: '⚪', milestones: [1, 10, 50, 100] },
    { name: 'Uncommon', emoji: '🟢', milestones: [1, 10, 25, 50] },
    { name: 'Rare', emoji: '🔵', milestones: [1, 5, 10, 25] },
    { name: 'Epic', emoji: '🟣', milestones: [1, 5, 10] },
    { name: 'Legendary', emoji: '🟡', milestones: [1, 3, 5] }
];

const achievementList = [];

// ==========================================
// 2. GENERATE ACHIEVEMENT LIST
// ==========================================

// Total Species Logged
milestones.forEach(num => {
    achievementList.push({
        id: `total_${num}`,
        title: `${num} Species Logged`,
        desc: `Log ${num} unique species in your Dex.`,
        icon: '🌊',
        check: (logs) => logs.length >= num
    });
});

// Category Specific Milestones
categories.forEach(cat => {
    catMilestones.forEach(num => {
        achievementList.push({
            id: `${cat.toLowerCase()}_${num}`,
            title: `${cat} Expert ${num}`,
            desc: `Log ${num} different species of ${cat}s.`,
            icon: '🔱',
            check: (logs) => logs.filter(f => f.cat && f.cat.toLowerCase().includes(cat.toLowerCase())).length >= num
        });
    });
});

// Custom Shark Research Challenges
achievementList.push({ 
    id: 'shark_expert', 
    title: 'Shark Researcher', 
    desc: 'Observe the same shark species 10 times.', 
    icon: '🦈',
    check: (logs) => logs.some(f => f.cat && f.cat.toLowerCase().includes('shark') && (f.count || 0) >= 10)
});

// Rarity Milestones
rarities.forEach(r => {
    r.milestones.forEach(num => {
        achievementList.push({
            id: `rarity_${r.name.toLowerCase()}_${num}`,
            title: `${r.name} Collector ${num}`,
            desc: `Log ${num} ${r.name} species.`,
            icon: r.emoji,
            check: (logs) => logs.filter(f => f.rarity === r.name.toLowerCase()).length >= num
        });
    });
});

// ==========================================
// 3. RENDER FUNCTION
// ==========================================
function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;

    const logs = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    grid.innerHTML = achievementList.map(ach => {
        const isUnlocked = ach.check(logs);
        const displayIcon = isUnlocked ? (ach.icon || '🏅') : '🔒';
        
        // Label logic
        let label = "General";
        if (ach.id.startsWith('rarity')) label = "Rarity";
        else if (ach.id.includes('expert')) label = "Specialist";

        return `
            <div class="ach-card ${isUnlocked ? 'unlocked' : 'locked'}">
                ${isUnlocked ? '<div class="ach-ribbon">DONE</div>' : ''}
                <div class="ach-icon-wrap">${displayIcon}</div>
                <div class="ach-info">
                    <div class="ach-type-tag">${label}</div>
                    <h3>${ach.title}</h3>
                    <p>${ach.desc}</p>
                </div>
            </div>`;
    }).join('');
}
