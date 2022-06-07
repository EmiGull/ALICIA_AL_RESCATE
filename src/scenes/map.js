

import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Map extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Map");
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

      
      // Boton para comenzar a jugar nivel 1
    const botonN1 = new Button(
        this.cameras.main.centerX + this.cameras.main.centerX/2.5, 
        this.cameras.main.centerY + this.cameras.main.centerY/1.5, 
        'Nivel 1', 
        this, 
        () => {
        // Instrucción para pasar a la escena 1
          this.scene.start("scene1");
      });
    // Boton para comenzar a jugar nivel 2
    const botonN2 = new Button(
        this.cameras.main.centerX + this.cameras.main.centerX/2.5, 
        this.cameras.main.centerY + this.cameras.main.centerY/2.5, 
        'Nivel 2', 
        this, 
        () => {
        // Instrucción para pasar a la escena 2
          this.scene.start("scene2");
      });
    // Boton para comenzar a jugar nivel 3
    const botonN3 = new Button(
        this.cameras.main.centerX + this.cameras.main.centerX/2.5, 
        this.cameras.main.centerY + this.cameras.main.centerY/7.5, 
        'Nivel 3', 
        this, 
        () => {
        // Instrucción para pasar a la escena 3
          this.scene.start("scene3");
      });
       // Boton para comenzar volver al menu principal
    const botonmenu = new Button(
        this.cameras.main.centerX, 
        this.cameras.main.centerY + this.cameras.main.centerY/100, 
        'Menu', 
        this, 
        () => {
        // Instrucción para pasar al menu principal
          this.scene.start("mainmenu");
      });
      

    }
  }
  