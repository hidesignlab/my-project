// Get references to the layers
const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const layer3 = document.getElementById('layer3');

// Set initial positions for Layer 2 and Layer 3
let layer2Y = 0;
let layer3Y = 0;

// Function to animate layers
function animateLayers() {
    // Update the Y position of Layer 2 and Layer 3
    layer2Y += 1;   // Layer 2 moves at medium speed
    layer3Y += 2;   // Layer 3 moves faster

    // Apply the transformations
    layer2.style.transform = `translateY(${layer2Y}px) scale(0.3)`;
    layer3.style.transform = `translateY(${layer3Y}px) scale(0.3)`;

    // Reset positions if they go off screen to create a loop effect
    if (layer2Y > window.innerHeight) layer2Y = 0;
    if (layer3Y > window.innerHeight) layer3Y = 0;

    // Call the function again for the next frame
    requestAnimationFrame(animateLayers);
}

// Start the animation
animateLayers();
