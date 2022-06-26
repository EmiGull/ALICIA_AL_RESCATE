import Button from "../js/button.js";

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
    
    // Boton para volver a Menu principal
    var menu = this.add.image(600, 100, 'boton_menu').setScale(1.1)
    menu.setInteractive()
    menu.on('pointerdown', () => this.scene.start('MainMenu'));
    this.clic.play();
  }
}
