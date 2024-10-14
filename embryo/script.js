document.addEventListener('DOMContentLoaded', () => {
    const layer1 = document.getElementById('layer1');
    const layer2 = document.getElementById('layer2');
    const layer3 = document.getElementById('layer3');

    function handleOrientation(event) {
        const x = event.gamma || 0; // left to right, ranges from -90 to 90
        const y = event.beta || 0;  // front to back, ranges from -180 to 180

        const moveFactor = 10;

        // Apply a parallax effect to each layer with different intensities
        layer1.style.transform = `scale(1) translate(${x / moveFactor}px, ${y / moveFactor}px)`;
        layer2.style.transform = `scale(0.3) translate(${x / (moveFactor * 2)}px, ${y / (moveFactor * 2)}px)`;
        layer3.style.transform = `scale(0.3) translate(${x / (moveFactor * 3)}px, ${y / (moveFactor * 3)}px)`;
    }

    // Request permission for iOS devices
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', handleOrientation);
                } else {
                    console.warn('Device orientation permission not granted');
                }
            })
            .catch(console.error);
    } else {
        // For non-iOS devices
        window.addEventListener('deviceorientation', handleOrientation);
    }
});
