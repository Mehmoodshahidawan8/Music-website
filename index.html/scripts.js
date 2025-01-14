// scripts.js

let currentSongIndex = 0;
const songs = [
  { title: "Song 1", file: "song1.mp3", artistImage: "artist1.jpg" },
  { title: "Song 2", file: "song2.mp3", artistImage: "artist2.jpg" },
  { title: "Song 3", file: "song3.mp3", artistImage: "artist3.jpg" }
];

const audioPlayer = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPause");
const songTitleElement = document.getElementById("songTitle");
const artistImageElement = document.getElementById("artistImage");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const songItems = document.querySelectorAll(".song-item");

function updatePlayer(song) {
  audioPlayer.src = song.file;
  songTitleElement.innerText = song.title;
  artistImageElement.src = song.artistImage;
  artistImageElement.alt = song.title + " - Artist Image";
  audioPlayer.load();
}

function playPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.innerText = "Pause";
  } else {
    audioPlayer.pause();
    playPauseButton.innerText = "Play";
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updatePlayer(songs[currentSongIndex]);
  audioPlayer.play();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updatePlayer(songs[currentSongIndex]);
  audioPlayer.play();
}

function selectSong(event) {
  const songFile = event.target.dataset.song;
  const selectedSong = songs.find(song => song.file === songFile);
  updatePlayer(selectedSong);
  audioPlayer.play();
}

playPauseButton.addEventListener("click", playPause);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", prevSong);
songItems.forEach(item => item.addEventListener("click", selectSong));

// Initialize the player with the first song
updatePlayer(songs[currentSongIndex]);
