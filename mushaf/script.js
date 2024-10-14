document.getElementById('languageSelect').addEventListener('change', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const selectedLanguage = this.value;

    // Define video URLs for each language
    const videos = {
        english: 'https://www.youtube.com/embed/kNI-C3lkV5o?si=kkLNAW-GeJnYLcu0',
        spanish: 'https://www.youtube.com/embed/4j_GUvBh3nk?si=QAGItiFbkmGc2okg',
        french: 'https://www.youtube.com/embed/IxzequyjrLA?si=Nk_NThmjwG5Iw9OX'
    };

    // Update the video source based on the selected language
    if (videos[selectedLanguage]) {
        videoSource.src = videos[selectedLanguage];
        videoPlayer.load(); // Reload the video source
        videoPlayer.play(); // Play the video automatically
    } else {
        videoSource.src = '';
        videoPlayer.pause(); // Pause the video if no language is selected
    }
});
