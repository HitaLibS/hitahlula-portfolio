// Initialize dynamic SVG icons from Lucide Engine
lucide.createIcons();

// Dynamically assign current calendar target year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Premium Radial Glow Pointer Position Tracking Frame Module 
const glowElement = document.getElementById('cursor-glow');

window.addEventListener('mousemove', (event) => {
    const targetX = event.clientX;
    const targetY = event.clientY;
    
    // Smoothly track mouse coordinates across the glass background
    glowElement.style.left = `${targetX}px`;
    glowElement.style.top = `${targetY}px`;
});