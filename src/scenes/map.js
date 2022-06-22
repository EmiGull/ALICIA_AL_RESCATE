

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

     /* var musica = this.sound.add('alicia_al_rescate');

        musica.play({
            loop: true
        });
        */
      
      // Boton para comenzar a jugar nivel 1
      var nivel1 = this.add.image(350, 600, 'siguiente').setScale(0.26)
      nivel1.setInteractive()
      nivel1.on('pointerdown', () => this.scene.start('scene1') );


    // Boton para comenzar a jugar nivel 2
    var nivel2 = this.add.image(350, 1250, 'siguiente').setScale(0.26)
    nivel2.setInteractive()
    nivel2.on('pointerdown', () => this.scene.start('scene2') );


       // Boton para volver al menu principal
   var menu = this.add.image(600,1400, 'siguiente').setScale(0.26)
    menu.setInteractive()
    menu.on('pointerdown', () => this.scene.start('MainMenu') );

    }
  }
  