

import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Map extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("Map");
    }
  
    create() {
      // Fondo del mapa
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "mapa").setScale(1.1);


      
      // Boton para comenzar a jugar nivel 1
    const botonN1 = new Button(
        350,600, 'Nivel 1', 
        this, 
        () => {
        // Instrucción para pasar a la escena 1
          this.scene.start("scene1");
      });

    // Boton para comenzar a jugar nivel 2
    const botonN2 = new Button(
        350, 1250, 'Nivel 2', 
        this, 
        () => {
        // Instrucción para pasar a la escena 2
          this.scene.start("scene2");
      });

       // Boton para comenzar volver al menu principal
    const botonmenu = new Button(
        //this.add.image(575, 1200, "siguiente").setScale(1),
        600, 1400,'Siguiente', 
        this, 
        () => {
        // Instrucción para pasar al menu principal
          this.scene.start("mainmenu");
      });
      

    }
  }
  