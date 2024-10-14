document.addEventListener('DOMContentLoaded', () => {
    const layer1 = document.getElementById('layer1');
    const layer2 = document.getElementById('layer2');
    const layer3 = document.getElementById('layer3');

    window.addEventListener('deviceorientation', (event) => {
        const x = event.gamma; // left to right, ranges from -90 to 90
        const y = event.beta;  // front to back, ranges from -180 to 180

        // Adjust these values for the desired movement speed
        const moveFactor = 10;

        // Apply a parallax effect to each layer with different intensities
        layer1.style.transform = `translate(${x / moveFactor}px, ${y / moveFactor}px)`;
        layer2.style.transform = `translate(${x / (moveFactor * 2)}px, ${y / (moveFactor * 2)}px)`;
        layer3.style.transform = `translate(${x / (moveFactor * 3)}px, ${y / (moveFactor * 3)}px)`;
    });
});
