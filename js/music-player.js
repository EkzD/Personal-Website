const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const trackTitle = document.getElementById("track-title");

const playlist = [
    { title: "Multo - Cup of Joe", src: "/assets/mp3/Multo - Cup Of Joe (AI Villager Cover) Music Video [hlq8VEG1R4E].mp3" },
    { title: "Take Back the Might - Justin Timberlake", src: "assets/mp3/_Take Back the Night_ - A Minecraft Original Music Video [Kwwl9jiJ1A4].mp3" },
    { title: "A Little Death - The Neighborhood", src: "assets/mp3/The Neighbourhood - A Little Death (Official Audio) [bRfMwoIizTQ].mp3" },
    { title: "Let it Happen - Tame Impala", src: "assets/mp3/Tame Impala - Let It Happen (Official Video) [pFptt7Cargc].mp3" },
    { title: "Let Down - Radiohead", src: "assets/mp3/Radiohead - Let Down [-Z_NvVMUcG8].mp3"} ,
    { title: "Time to Pretend - MGMT", src: "assets/mp3/MGMT - Time to Pretend (Official HD Video) [B9dSYgd5Elk].mp3"},
    { title: "Loving Machine - TV Girl", src: "assets/mp3/Loving Machine [5tpQaCAq6Qc].mp3"}
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
