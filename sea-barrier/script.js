// Get references to the dropdown and audio player
const languageSelect = document.getElementById('languageSelect');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

// Function to handle language selection
languageSelect.addEventListener('change', function() {
    let selectedLanguage = languageSelect.value;
    
    // Set audio source based on selected language
    switch (selectedLanguage) {
        case 'english':
            audioSource.src = 'https://ayrexdigital.com/Natural_Barrier_between_seas_English.mp3'; // Path to English audio file
            break;
        case 'spanish':
            audioSource.src = 'https://ayrexdigital.com/Natural_Barrier_between_seas_Spanish.mp3'; // Path to Spanish audio file
            break;
        case 'french':
            audioSource.src = 'https://ayrexdigital.com/Natural_Barrier_between_seas_French.mp3'; // Path to French audio file
            break;
        default:
            audioSource.src = ''; // No audio source
            break;
    }
    
    // Load the new audio source and play
    audioPlayer.load();
    if (selectedLanguage) {
        audioPlayer.play(); // Automatically play the audio if a language is selected
    }
});
