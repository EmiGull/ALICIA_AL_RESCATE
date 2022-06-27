import Button from "../js/button.js";
let derrota = false;

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class GameOver extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("GameOver");
  }

  create() {
    // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "perdiste").setScale(1.1);

    //clic
    this.clic = this.sound.add('clic');

    if (!derrota) {
      derrota = this.sound.add('derrota', { loop: false });
      derrota.play();
    }

    // Boton para volver a Menu principal
    var menu = this.add.image(600, 1400, 'atras').setScale(0.26)
    menu.setInteractive()
    menu.on('pointerdown', () => this.scene.start('MainMenu'));
    this.clic.play();
  }
}
