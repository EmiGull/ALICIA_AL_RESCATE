import Button from "../js/button.js";
let win = false;

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Winner extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Winner");
    }

    create() {
        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "ganaste").setScale(1.1);

        //clic
        this.clic = this.sound.add('clic');
        
        //sonido ganador
        
    if (! win) {
        win = this.sound.add('win',{ loop: false });
        win.play();
    }
        
        // Boton para volver a Menu principal
        var menu = this.add.image(600, 1400, 'atras').setScale(0.26)
        menu.setInteractive()
        menu.on('pointerdown', () => this.scene.start('MainMenu'));
        this.clic.play();

    }
}
