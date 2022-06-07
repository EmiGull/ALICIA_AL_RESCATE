import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  create() {
    // Fondo del menú principal
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "fondonegro.jpg"
      )
      .setScale(1.1);

    // Boton para comenzar a jugar
    const boton = new Button(
      this.cameras.main.centerX, 
      this.cameras.main.centerY + this.cameras.main.centerY/3, 
      'Mapa', 
      this, 
      () => {
      // Instrucción para pasar a la escena Mapa
        this.scene.start("Map");
    });
  }

}
