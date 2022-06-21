// Clase Preloads, para separar los preloads y tener mejor orden

// Se extiende de Phaser.Scene para que adquiera todas las caracteristicas de una escena
// -> mostrar, recargar, tener los eventos preload, create y update.

export class Preloads extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {
    
    this.load.image("menu","public/assets/images/menu.png");
    this.load.image("jugar", "public/assets/images/jugar.png", 120, 40);
    this.load.image("mapa", "public/assets/images/mapa.png");
    this.load.image("siguiente", "public/assets/images/siguiente.png");
    this.load.image("fondonivel1", "public/assets/images/fondonivel1.png");
    this.load.image("pausa", "public/assets/images/pausa.png");
    this.load.image("puntos", "public/assets/images/puntos.png");
    this.load.image("temporizador", "public/assets/images/temporizador.png");
    this.load.image("reverso", "public/assets/images/reverso.png");
    this.load.image("conejo_grande", "public/assets/images/conejo_grande.png");
    this.load.image("flor_grande", "public/assets/images/flor_grande.png");
    this.load.image("corazon", "public/assets/images/corazon.png");
    this.load.image("flor", "public/assets/images/flor.png");
    this.load.image("girasol", "public/assets/images/girasol.png");
    this.load.image("llave", "public/assets/images/llave.png");
    this.load.image("pocion", "public/assets/images/pocion.png");
    this.load.image("rosa", "public/assets/images/rosa.png");
    this.load.image("sombrero", "public/assets/images/sombrero.png");
    this.load.image("torta", "public/assets/images/torta.png");
    this.load.image("ganaste1", "public/assets/images/ganaste1.png");
    this.load.image("ganaste2", "public/assets/images/ganaste2.png");
    this.load.image("ganaste3", "public/assets/images/ganaste3.png");
    this.load.image("ganaste4", "public/assets/images/ganaste4.png");
    
  }

  create() {
    // Pasa directamente a la escena del menú principal
    this.scene.start("MainMenu");
  }
}
