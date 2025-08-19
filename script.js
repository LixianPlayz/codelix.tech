const clientId = "YOUR_CLIENT_ID"; // Replace with your Spotify Client ID
const redirectUri = "https://your-netlify-site.netlify.app/callback";
const scopes = "streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state";

document.getElementById("login-btn").addEventListener("click", () => {
  const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  window.location.href = url;
});

let token = window.location.hash
  .substring(1)
  .split("&")
  .find(elem => elem.startsWith("access_token"));

if (token) {
  token = token.split("=")[1];
  document.getElementById("login-btn").classList.add("hidden");
  document.getElementById("player-section").classList.remove("hidden");

  window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new Spotify.Player({
      name: "Lix Music Player",
      getOAuthToken: cb => { cb(token); },
      volume: 0.7
    });

    player.addListener("ready", ({ device_id }) => {
      console.log("Device ID", device_id);
    });

    player.addListener("player_state_changed", state => {
      if (!state) return;
      const track = state.track_window.current_track;
      document.getElementById("song-title").innerText = track.name;
      document.getElementById("song-artist").innerText = track.artists.map(a => a.name).join(", ");
      document.getElementById("album-cover").src = track.album.images[0].url;
    });

    player.connect();
  };
}
