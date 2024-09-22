var currentSong = null; // To keep track of the currently playing song

var mysong_1 = new Audio();
mysong_1.src = 'music/card/The Song of the Golden Dragon.mp3';

const playsong_1 = () => {
    toggleSong(mysong_1);
}

var mysong_2 = new Audio();
mysong_2.src = 'music/card/Brent Mason - Hot Wired.mp3';

const playsong_2 = () => {
    toggleSong(mysong_2);
}

var mysong_3 = new Audio();
mysong_3.src = 'music/card/David Gilmour - The Best Guitar Solos.mp3';

const playsong_3 = () => {
    toggleSong(mysong_3);
}

var mysong_4 = new Audio();
mysong_4.src = 'music/card/Derek Trucks - perform an amazing Guitar Solo &quot;Live&quot;.mp3';

const playsong_4 = () => {
    toggleSong(mysong_4);
}

var mysong_5 = new Audio();
mysong_5.src = 'music/card/Van Halen Eruption Guitar Solo.mp3';

const playsong_5 = () => {
    toggleSong(mysong_5);
}

var mysong_6 = new Audio();
mysong_6.src = 'music/card/Cuban Dance and Cuban Rhapsody (long version).mp3';

const playsong_6 = () => {
    toggleSong(mysong_6);
}

var mysong_7 = new Audio();
mysong_7.src = 'music/card/[MP3DOWNLOAD.TO] Guthrie Govan - Fives (Studio)-128k.mp3';

const playsong_7 = () => {
    toggleSong(mysong_7);
}

var mysong_8 = new Audio();
mysong_8.src = 'music/card/The Jimi Hendrix Experience - Voodoo Child (Slight Return) (Live In Maui, 1970).mp3';

const playsong_8 = () => {
    toggleSong(mysong_8);
}

var mysong_9 = new Audio();
mysong_9.src = 'music/card/Pat Metheny - And I Love Her (The Beatles).mp3';

const playsong_9 = () => {
    toggleSong(mysong_9);
}

var mysong_10 = new Audio();
mysong_10.src = 'music/card/tommy emulen.mp3';

const playsong_10 = () => {
    toggleSong(mysong_10);
}

var mysong_11 = new Audio();
mysong_11.src = 'music/card/steve ray vaghnee.mp3';

const playsong_11 = () => {
    toggleSong(mysong_11);
}

var mysong_12 = new Audio();
mysong_12.src = 'music/card/Estas Tonne - Perception [ Live in Zurich ].mp3';

const playsong_12 = () => {
    toggleSong(mysong_12);
}

var mysong_13 = new Audio();
mysong_13.src = 'music/easy/song 1.mp3';

const playsong_13 = () => {
    toggleSong(mysong_13);
}

var mysong_14 = new Audio();
mysong_14.src = 'music/easy/song 5.mp3';

const playsong_14 = () => {
    toggleSong(mysong_14);
}

var mysong_15 = new Audio();
mysong_15.src = 'music/easy/song 4.mp3';

const playsong_15 = () => {
    toggleSong(mysong_15);
}

var mysong_16 = new Audio();
mysong_16.src = 'music/easy/song 3.mp3';

const playsong_16 = () => {
    toggleSong(mysong_16);
}

var mysong_17 = new Audio();
mysong_17.src = 'music/easy/song 2.mp3';

const playsong_17 = () => {
    toggleSong(mysong_17);
}

var mysong_18 = new Audio();
mysong_18.src = 'music/easy/song 1.mp3';

const playsong_18 = () => {
    toggleSong(mysong_18);
}

// Function to stop the currently playing song and toggle the new song
const toggleSong = (newSong) => {
    if (currentSong === newSong) {
        // If the same song is clicked, pause it
        currentSong.pause();
        currentSong.currentTime = 0; // Optionally reset the song to the start
        currentSong = null; // Reset current song
    } else {
        stopCurrentSong(); // Stop any other song
        newSong.play();
        currentSong = newSong; // Update the current song to the new one
    }
}

// Function to stop the currently playing song
const stopCurrentSong = () => {
    if (currentSong) {
        currentSong.pause();
        currentSong.currentTime = 0; // Reset to start of the song
    }
}
 // Get all the audio elements
 const audios = document.querySelectorAll('audio');

 audios.forEach(audio => {
   // Ensure only one song plays at a time
   audio.addEventListener('play', () => {
     audios.forEach(otherAudio => {
       if (otherAudio !== audio) {
         otherAudio.pause();
         otherAudio.currentTime = 0; // Reset the time of the other audio
       }
     });
   });

   // Add touchstart event listener to allow audio to play on mobile devices
   audio.addEventListener('touchstart', function() {
     audio.play();
   });
 });

