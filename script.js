const urlParams = new URLSearchParams(window.location.search);
const isHost = urlParams.get('isHost');

if(isHost === "true") {
    Reveal.configure({
        progress: false
    })
} else {
    Reveal.configure({
        controls: false
    })
}

document.addEventListener('broadcast', e => {
    window.parent.postMessage(JSON.stringify(e.content), '*');
})