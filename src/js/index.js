import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { Map} from "../scenes/map.js";
import { Scene1 } from "../scenes/scene1.js";
import { Scene2 } from "../scenes/scene2.js";
import { GameOver } from "../scenes/gameover.js";


var config = {
  type: Phaser.AUTO,
  width: 720,
  height: 1500,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 720,
      height: 1500,
    },
    max: {
      width: 720,
      height: 1500,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
  scene: [Preloads, MainMenu, Map, Scene1, Scene2, GameOver],
};

var game = new Phaser.Game(config);
