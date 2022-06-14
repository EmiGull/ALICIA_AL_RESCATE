 //inicializacion de variables
 var tarjetasdestapadas = 0;
 var tarjeta1 = null;
 var tarjeta2 = null;
 var primerResultado = null;
 var segundoResultado = null;
 var corazones = 0;

//en index HTML
let mostrarcorazones = document.getElementById ('corazones');

 import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Scene1 extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("scene1");
  }
  
  create() {
    // Fondo del nivel 1
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "fondonegro.jpg"
      )
      .setScale(1.1);

      //this.add.image(50, 100, "carta1").setScale(1);
      //this.add.image(200, 500, "carta2").setScale(1);
      
    // Boton para comenzar a jugar nivel 1
    const boton = new Button(
        this.cameras.main.centerX, 
        this.cameras.main.centerY + this.cameras.main.centerY/3, 
        'Mapa', 
        this, 
        () => {
        // Instrucción para pasar a la escena mapa
          this.scene.start("Map");
      });

    
    let numeros4 = [1,1,2,2]
    numeros4 = numeros4.sort( () => (Math.random() > .5) ? 1 : -1 );
    console.log (numeros4);
    let coordenadas4 = [[100,100],[100,200],[200,100],[200,200]]

    /*
    let numeros16 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
    numeros16 = numeros16.sort( () => (Math.random() > .5) ? 1 : -1 );
    console.log (numeros16);
    let coordenadas16 = [[1,1],[1,2],[2,1],[2,2],.......[4,4]]
    */

    let tipo
    numeros4.forEach((element,index) => {
      console.log("TIpo", element)
      console.log("posicion", coordenadas4[index][0], coordenadas4[index][1])

      if (element == 1) {
        tipo = "carta1"
      }
      else{
        tipo = "carta2"
      }

      let imagen = this.add.image(coordenadas4[index][0], coordenadas4[index][1], tipo).setInteractive();
      
      //prueba del click
      imagen.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
        //guardar algio que me permita definir quien/quienes estan dadas vueltas
        //si es una , no hace nada
        //si son 2 las compara
          //sin son iguales suma
          //si son distintas las da vuelta
      });
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
