const urlParams = new URLSearchParams(window.location.search);
const isHost = urlParams.get('isHost');

const config = {
  postMessage: true,
  postMessageEvents: true,
  customcontrols: {
    controls: [
      {
        icon: '<i class="fa fa-pen-square"></i>',
        title: 'Toggle chalkboard (B)',
        action: 'RevealChalkboard.toggleChalkboard();',
      },
      {
        icon: '<i class="fa fa-pen"></i>',
        title: 'Toggle notes canvas (C)',
        action: 'RevealChalkboard.toggleNotesCanvas();',
      },
    ],
  },
  chalkboard: {
    boardmarkerWidth: 3,
    chalkWidth: 4,
    chalkEffect: 0,
    storage: null,
    src: null,
    readOnly: undefined,
    transition: 800,
    theme: 'whiteboard',
    grid: false,
    background: ['rgba(125,125,125,0.1)', path + 'img/blackboard.png'],
    eraser: { src: path + 'img/sponge.png', radius: 20 },
    boardmarkers: [
      {
        color: 'rgba(100,100,100,1)',
        cursor: 'url(' + path + 'img/boardmarker-black.png), auto',
      },
      {
        color: 'rgba(30,144,255, 1)',
        cursor: 'url(' + path + 'img/boardmarker-blue.png), auto',
      },
      {
        color: 'rgba(220,20,60,1)',
        cursor: 'url(' + path + 'img/boardmarker-red.png), auto',
      },
      {
        color: 'rgba(50,205,50,1)',
        cursor: 'url(' + path + 'img/boardmarker-green.png), auto',
      },
      {
        color: 'rgba(255,140,0,1)',
        cursor: 'url(' + path + 'img/boardmarker-orange.png), auto',
      },
      {
        color: 'rgba(150,0,20150,1)',
        cursor: 'url(' + path + 'img/boardmarker-purple.png), auto',
      },
      {
        color: 'rgba(255,220,0,1)',
        cursor: 'url(' + path + 'img/boardmarker-yellow.png), auto',
      },
      {
        color: 'rgba(255,255,255,1)',
        cursor: 'url(' + path + 'img/boardmarker-yellow.png), auto',
      },
    ],
    chalks: [
      {
        color: 'rgba(255,255,255,0.5)',
        cursor: 'url(' + path + 'img/chalk-white.png), auto',
      },
      {
        color: 'rgba(96, 154, 244, 0.5)',
        cursor: 'url(' + path + 'img/chalk-blue.png), auto',
      },
      { color: 'rgba(237, 20, 28, 0.5)', cursor: 'url(' + path + 'img/chalk-red.png), auto' },
      {
        color: 'rgba(20, 237, 28, 0.5)',
        cursor: 'url(' + path + 'img/chalk-green.png), auto',
      },
      {
        color: 'rgba(220, 133, 41, 0.5)',
        cursor: 'url(' + path + 'img/chalk-orange.png), auto',
      },
      { color: 'rgba(220,0,220,1)', cursor: 'url(' + path + 'img/chalk-purple.png), auto' },
      { color: 'rgba(255,220,0,0.5)', cursor: 'url(' + path + 'img/chalk-yellow.png), auto' },
    ],
  },
  plugins: [RevealChalkboard, RevealCustomControls],
};

if (isHost === 'true') {
  //Host Configs
  Reveal.configure({
    ...config,
  });
} else {
  //Viewer Config
  Reveal.configure({
    ...config,
    controls: false,
    keyboard: false,
    touch: false,
  });
}
//Add Plugins
Reveal.registerPlugin(RevealChalkboard);
Reveal.registerPlugin(RevealCustomControls);

document.addEventListener('broadcast', (e) => {
  window.parent.postMessage(JSON.stringify(e.content), '*');
});
