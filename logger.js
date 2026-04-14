function logFish(name) {
    let logged = JSON.parse(localStorage.getItem('myAquaLog')) || [];
    
    if (!logged.find(f => f.name === name)) {
        const fishData = speciesList.find(f => f.name === name);
        logged.push({ ...fishData, dateLogged: new Date().toISOString() });
        localStorage.setItem('myAquaLog', JSON.stringify(logged));
        
        // Haptic Feedback (Will be enhanced in ui.js)
        if (navigator.vibrate) navigator.vibrate(50);
        
        alert(`Logged: ${name}`);
    } else {
        alert("Already logged!");
    }
}
