import Button from "../js/button.js";
let  musica = false;

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  create() {
    // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "menu").setScale(1.1);
    
    //agregar música
    musica = this.sound.add('alicia_al_rescate');
    musica.play({
      loop: true
    });

    
    // Boton para comenzar a jugar

    var jugar = this.add.image(360, 1300, 'jugar').setScale(0.26)
    jugar.setInteractive()
    jugar.on('pointerdown', () => this.scene.start('Map') );

  }


}
