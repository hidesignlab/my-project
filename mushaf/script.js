document.getElementById('languageSelect').addEventListener('change', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const selectedLanguage = this.value;

    // Define video URLs for each language
    const videos = {
        english: 'https://www.youtube.com/embed/kNI-C3lkV5o?autoplay=1',
        spanish: 'https://www.youtube.com/embed/4j_GUvBh3nk?autoplay=1',
        french: 'https://www.youtube.com/embed/IxzequyjrLA?autoplay=1'
    };

    // Update the iframe src based on the selected language
    if (videos[selectedLanguage]) {
        videoPlayer.src = videos[selectedLanguage];
    } else {
        videoPlayer.src = ''; // Clear the src if no valid selection is made
    }
});
