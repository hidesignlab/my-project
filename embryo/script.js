document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get the vertical scroll position

    // Adjust each layer's transform based on the scroll position
    const layer1 = document.getElementById('layer1');
    const layer2 = document.getElementById('layer2');
    const layer3 = document.getElementById('layer3');

    // Parallax effect: the greater the layer index, the less it moves
    layer1.style.transform = `translateY(${scrollPosition * 0.2}px)`; // Move less
    layer2.style.transform = `translateY(${scrollPosition * 0.4}px)`; // Move more
    layer3.style.transform = `translateY(${scrollPosition * 0.6}px)`; // Move the most
});
