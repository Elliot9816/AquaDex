// 1. DATA DEFINITIONS
const milestones = [1, 5, 10, 25, 50, 100, 250, 500];
const categories = ['Reef Fish', 'Shark', 'Ray'];
const catMilestones = [1, 5, 10, 25, 50, 100];
const rarities = [
    { name: 'Common', emoji: '⚪', milestones: [1, 10, 50, 100] },
    { name: 'Uncommon', emoji: '🟢', milestones: [1, 10, 25, 50] },
    { name: 'Rare', emoji: '🔵', milestones: [1, 5, 10, 25] },
    { name: 'Epic', emoji: '🟣', milestones: [1, 5, 10] },
    { name: 'Legendary', emoji: '🟡', milestones: [1, 3] }
];

const achievementList = [];

// 2. GENERATE TOTAL LOG MILESTONES
milestones.forEach(num => {
    achievementList.push({
        id: `total_${num}`,
        title: `${num} Species Logged`,
        desc: `Log ${num} unique species.`,
        check: (logs) => logs.length >= num
    });
});

// 3. GENERATE CATEGORY MILESTONES
categories.forEach(cat => {
    catMilestones.forEach(num => {
        achievementList.push({
            id: `${cat.toLowerCase()}_${num}`,
            title: `${cat} Expert ${num}`,
            desc: `Log ${num} different species of ${cat}s.`,
            check: (logs) => logs.filter(f => f.cat && f.cat.toLowerCase().includes(cat.toLowerCase())).length >= num
        });
    });
});

// === 3.5 CUSTOM SHARK RESEARCH CHALLENGES ===
achievementList.push({ 
    id: 'shark_diversity', 
    title: 'Shark Enthusiast', 
    desc: 'Log 5 different species of Sharks.', 
    check: (logs) => logs.filter(f => f.cat && f.cat.toLowerCase().includes('shark')).length >= 5 
});

achievementList.push({ 
    id: 'shark_expert', 
    title: 'Shark Researcher', 
    desc: 'Observe the same shark species 10 times.', 
    icon: '🦈',
    check: (logs) => logs.some(f => f.cat && f.cat.toLowerCase().includes('shark') && (f.count || 0) >= 10)
});

// 4. GENERATE RARITY MILESTONES
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

// 5. THE RENDER FUNCTION
function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    const logs = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    grid.innerHTML = achievementList.map(ach => {
        const isUnlocked = ach.check(logs);
        const displayIcon = isUnlocked ? (ach.icon || '🏅') : '🔒';
        return `
            <div class="ach-card ${isUnlocked ? 'unlocked' : 'locked'}">
                <div class="ach-icon">${displayIcon}</div>
                <div class="ach-info">
                    <h3>${ach.title}</h3>
                    <p>${ach.desc}</p>
                </div>
            </div>`;
    }).join('');
}
