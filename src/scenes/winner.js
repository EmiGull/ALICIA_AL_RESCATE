import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Winner extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Winner");
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "ganaste1").setScale(1.1);


        // Boton para volver a Menu principal
        var menu = this.add.image(600, 100, 'siguiente').setScale(0.26)
        menu.setInteractive()
        menu.on('pointerdown', () => this.scene.start('MainMenu'));

    }
}
