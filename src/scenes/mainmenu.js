import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  create() {
    // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "menu").setScale(1.1);
    
  
  //opciones de botones con imagen
    //startButton = game.add.jugar(game.world.width*0.5, game.world.height*0.5, 'jugar', Map, this, 1, 0, 2);
  //startButton.anchor.set(0.5);

  //botonjugar = [[275,1200]];
  //this.add.image(botonjugar[index][0], botonjugar[index][1], tipo).setInteractive()
  
 
    // Boton para comenzar a jugar

    var jugar = this.add.image(360, 1300, 'jugar').setScale(0.26)
    jugar.setInteractive()
    jugar.on('pointerdown', () => this.scene.start('Map') );

  }

}
