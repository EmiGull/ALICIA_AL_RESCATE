// Clase Preloads, para separar los preloads y tener mejor orden

// Se extiende de Phaser.Scene para que adquiera todas las caracteristicas de una escena
// -> mostrar, recargar, tener los eventos preload, create y update.

export class Preloads extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {
    
    this.load.image("menu","public/assets/images/menu.jpg");
    this.load.image("jugar", "public/assets/images/jugar.png");
    this.load.image("carta1", "public/assets/images/carta1.png");
    this.load.image("carta2", "public/assets/images/carta2.jpg");
    this.load.image("mapa", "public/assets/images/mapa.png");
    this.load.video("gif", "public/assets/images/gif.gif");
  }

  create() {
    // Pasa directamente a la escena del menú principal
    this.scene.start("MainMenu");
  }
}
