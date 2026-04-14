function logFish(name) {
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    if (!logged.find(f => f.name === name)) {
        const fishData = speciesList.find(f => f.name === name);
        logged.push({ ...fishData, dateLogged: new Date().toISOString() });
        localStorage.setItem('myAquaLog', JSON.stringify(logged));
        
        // --- FEATURE 2: HAPTIC POP ---
        if (fishData.rarity === 'rare') {
            Haptics.success(); // Strong double-thump for Rare
        } else {
            Haptics.light(); // Light tap for common
        }
        
        alert(`Logged: ${name}!`);
        updateStats(); // Update the counter immediately
    } else {
        Haptics.warning(); // "Error" vibration
        alert("Already in your Dex!");
    }
}
