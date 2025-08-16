const audio = document.getElementById("bgSong");
  const btn = document.getElementById("playBtn");

  btn.addEventListener("click", () => {
    audio.play();
    btn.style.display = "none"; // hide button after playing
  });