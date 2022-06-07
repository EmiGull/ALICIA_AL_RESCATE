import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { Map} from "../scenes/map.js";
import { Scene1 } from "../scenes/scene1.js";
import { Scene2 } from "../scenes/scene2.js";
import { Scene3 } from "../scenes/scene3.js";
import { GameOver } from "../scenes/gameover.js";


var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
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
  scene: [Preloads, MainMenu, Map, Scene1, Scene2, Scene3, GameOver],
};

var game = new Phaser.Game(config);
