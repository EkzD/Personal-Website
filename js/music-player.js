const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const trackTitle = document.getElementById("track-title");

const playlist = [
    { title: "Multo - Cup of Joe", src: "/assets/mp3/Multo - Cup Of Joe (AI Villager Cover) Music Video [hlq8VEG1R4E].mp3" },
    { title: "Multo - Cup of Joe", src: "/assets/music/lofi2.mp3" },
    { title: "Lofi Track 3", src: "/assets/music/lofi3.mp3" },
    { title: "Lofi Track 3", src: "/assets/music/lofi3.mp3" },
    { title: "Lofi Track 3", src: "/assets/music/lofi3.mp3"} ,
    { title: "Lofi Track 3", src: "/assets/music/lofi3.mp3"}
];

let currentTrack = 0;
let isPlaying = false;

const playlistEl = document.querySelector(".playlist");

playlist.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = track.title;
    li.dataset.index = index;
    li.addEventListener("click", () => {
        currentTrack = index;
        loadTrack(currentTrack);
        audio.play();
        isPlaying = true;
        playBtn.textContent = "⏸";
    });
    playlistEl.appendChild(li);
});

function loadTrack(index) {
    audio.src = playlist[index].src;
    trackTitle.innerHTML = `<span>${playlist[index].title}</span>`;
    updatePlaylistHighlight();
}

function updatePlaylistHighlight() {
    const items = playlistEl.querySelectorAll("li");
    items.forEach((item, idx) => {
        if (idx === currentTrack) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

function playPause() {
    if (!isPlaying) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
    isPlaying = !isPlaying;
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    if (isPlaying) audio.play();
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
    if (isPlaying) audio.play();
}

playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

loadTrack(currentTrack);
