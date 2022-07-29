// import string from "css.js";
const string = `
.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.skin *::before,
.skin *::after {
  box-sizing: border-box;
}

.skin {
  background: #ffe600;
  position: relative;
  min-height: 50vh;
}

.nose {
  border: 10px solid #000;
  border-color: #000 transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: relative;
  left: 50%;
  top: 150px;
  margin-left: -10px;
  z-index: 10;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(10deg);
  }
  66% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.nose:hover {
  transform-origin: center bottom;
  animation: wave 200ms infinite linear;
}

.arc {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background: #000;
}

.eye {
  border: 2px solid #000;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
}

.eye::before {
  content: "";
  display: block;
  border: 3px solid #000;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background: #fff;
  position: relative;
  left: 9px;
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translateX(100px);
}

.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}

.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}

.mouth .up .lip {
  border: 3px solid black;
  border-top-color: transparent;
  border-right-color: transparent;
  height: 30px;
  width: 100px;
  background: #ffe600;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -50px;
}

.mouth .up .lip::before {
  content: "";
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}

.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-52px);
}

.mouth .up .lip.left::before {
  right: -6px;
}

.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(52px);
}

.mouth .up .lip.right::before {
  left: -6px;
}

.mouth .down {
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}

.mouth .down .circle1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px / 300px;
  background: #cc4143;
  overflow: hidden;
}

.mouth .down .circle1 .circle2 {
  width: 200px;
  height: 300px;
  background: #ff485f;
  position: absolute;
  bottom: -160px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}

.face {
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  background: #ff0000;
  border-radius: 50%;
  z-index: 3;
}

.face > img {
  position: absolute;
  top: 50%;
  left: 50%;
}

.face.left {
  transform: translateX(-180px);
}

.face.left > img {
  transform-origin: 0 0;
  transform: rotateY(180deg);
}

.face.right {
  transform: translateX(180px);
}
`;

const player = {
  n: 1,
  time: 0,
  id: undefined,

  ui: {
    demo1: document.querySelector("#demo1"),
    demo2: document.querySelector("#demo2"),
  },

  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },

  init: () => {
    player.ui.demo1.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },

  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },

  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo1.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.ui.demo1.scrollTop = demo1.scrollHeight;
  },

  play: () => {
    player.id = setInterval(player.run, player.time);
  },

  pause: () => {
    window.clearInterval(player.id);
  },

  slow: () => {
    player.pause();
    player.time = 100;
    player.play();
  },

  normal: () => {
    player.pause();
    player.time = 50;
    player.play();
  },

  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
