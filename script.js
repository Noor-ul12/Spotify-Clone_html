console.log("Welcome to spotify");

// Initialize the variables
let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Agency - talha anjum", filePath: "songs/song.8.mp3", coverPath: "cover/cover.1.jpeg" },
    { songName: "broun-munday", filePath: "songs/song.2.mp3", coverPath: "cover/cover.2.jpeg" },
    { songName: "Afreen afreen", filePath: "songs/song.3.mp3", coverPath: "cover/cover.3.jpeg" },
    { songName: "dilber dilber", filePath: "songs/song.4.mp3", coverPath: "cover/cover.4.jpeg" },
    { songName: "let me love you", filePath: "songs/song.5.mp3", coverPath: "cover/cover.5.jpeg" },
    { songName: "mula mere mula mere", filePath: "songs/song.6.mp3", coverPath: "cover/cover.6.jpeg" },
    { songName: "jub we meet", filePath: "songs/song.7.mp3", coverPath: "cover/cover.7.jpeg" },
    { songName: "tum hi ho", filePath: "songs/.1.mp3", coverPath: "cover/cover.8.jpeg" },

]

songItems.forEach((Element, i) =>{
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.paly();

// Handle paly/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// Listen to events 
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

