

import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Scene2 extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("scene2");
    }
  
    create() {
      // Fondo del mnivel 2
      this.add
        .image(
          this.cameras.main.centerX,
          this.cameras.main.centerY,
          "fondonegro.jpg"
        )
        .setScale(1.1);
  
    
         // Boton para ir al mapa
    const boton = new Button(
        this.cameras.main.centerX, 
        this.cameras.main.centerY + this.cameras.main.centerY/3, 
        'Mapa', 
        this, 
        () => {
        // Instrucción para pasar a la escena Mapa
          this.scene.start("Map");
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
  