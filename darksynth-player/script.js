const playBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const audio = document.getElementById('audio');
const songTitle = document.querySelector('.song-title');
const songArtist = document.querySelector('.song-artist');
const progressContainer = document.querySelector('.progress-container');
const progressBar = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume-slider');
const canvas = document.getElementById('visualizer');
const canvasCtx = canvas.getContext('2d');

const playlist = [
    {
        title: 'Placeholder Song',
        artist: 'Artist 1',
        src: 'audio/placeholder.mp3'
    },
    {
        title: 'Cybernetic Dreams',
        artist: 'Artist 2',
        src: 'audio/placeholder.mp3'
    },
    {
        title: 'Neon Nights',
        artist: 'Artist 3',
        src: 'audio/placeholder.mp3'
    }
];

let currentSongIndex = 0;
let isPlaying = false;

// Audio Visualization
let audioCtx, analyser, source, bufferLength, dataArray;

function initAudioApi() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser();
        source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        analyser.fftSize = 256;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
    }
}

function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = '#0d0d0d';
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        canvasCtx.fillStyle = 'rgb(0, ' + (barHeight + 100) + ', ' + (barHeight + 100) + ')';
        canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
        x += barWidth + 1;
    }
}

function loadSong(song) {
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    audio.src = song.src;
}

function playSong() {
    isPlaying = true;
    playBtn.textContent = 'Pause';
    audio.play();
    if(!audioCtx) {
        initAudioApi();
        drawVisualizer();
    }
    audioCtx.resume();
}

function pauseSong() {
    isPlaying = false;
    playBtn.textContent = 'Play';
    audio.pause();
}

function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = playlist.length - 1;
    }
    loadSong(playlist[currentSongIndex]);
    if (isPlaying) playSong();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex > playlist.length - 1) {
        currentSongIndex = 0;
    }
    loadSong(playlist[currentSongIndex]);
    if (isPlaying) playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function setVolume() {
    audio.volume = volumeSlider.value;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
volumeSlider.addEventListener('input', setVolume);
audio.addEventListener('ended', nextSong);

loadSong(playlist[currentSongIndex]);
setVolume();