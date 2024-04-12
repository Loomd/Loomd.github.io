// Get the element where Webamp will render
const app = document.getElementById("app");

// Initialize Webamp with tracks
const webamp = new Webamp({
    initialTracks: [
        {
            metaData: {
                artist: "DJ Mike Llama",
                title: "Llama Whippin' Intro",
            },
            url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
            duration: 5.322286 
        },
        
        {
            metaData: {
                title: "Heroines",
                artist: "Diablo Swing Orchestra",
            },
            url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Diablo_Swing_Orchestra_-_01_-_Heroines.mp3",
            duration: 322.612245
        }
    ]
});

// Render the Webamp player when ready
webamp.renderWhenReady(app);
