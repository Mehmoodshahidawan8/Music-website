const songs = [
    { title: "Song 1", file: "song1.mp3", artist: "Arijit Singh", artistImage: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Arijit_Singh.jpg" },
    { title: "Song 2", file: "song2.mp3", artist: "Lata Mangeshkar", artistImage: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Lata_Mangeshkar_2012.jpg" },
    { title: "Song 3", file: "song3.mp3", artist: "Shreya Ghoshal", artistImage: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Shreya_Ghoshal.jpg" }
  ];
  
  let currentSongIndex = 0;
  const audioPlayer = document.getElementById("audio-player");
  const playButton = document.getElementById("play-btn");
  const songTitleElement = document.getElementById("song-title");
  const artistNameElement = document.getElementById("artist-name");
  const artistImageElement = document.getElementById("artist-image");
  const audioSource = document.getElementById("audio-source");
  
  function playSong(index) {
    currentSongIndex = index;
    updatePlayer();
    audioPlayer.play();
  }
  
  function updatePlayer() {
    const song = songs[currentSongIndex];
    audioSource.src = song.file;
    songTitleElement.innerText = song.title;
    artistNameElement.innerText = song.artist;
    artistImageElement.src = song.artistImage;
    artistImageElement.alt = song.artist + " - Artist Image";
    audioPlayer.load();
  }
  
  function togglePlay() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.classList.remove("paused");
    } else {
      audioPlayer.pause();
      playButton.classList.add("paused");
    }
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer();
    audioPlayer.play();
  }
  
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlayer();
    audioPlayer.play();
  }
  
  // Initial song setup
  updatePlayer();
  