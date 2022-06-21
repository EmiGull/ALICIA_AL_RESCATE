 //inicializacion de variables
 var tarjetasdestapadas = 0;
 var tarjeta1 = null;
 var tarjeta2 = null;
 var primerResultado = null;
 var segundoResultado = null;
 var corazones = 0;

import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Scene2 extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super("scene2");
    }
  
    create() {
      // Fondo del nivel 2
      this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"fondonivel1").setScale(1.1);
      //this.add.immage(50,200, 'puntos');
      //this.add.image(300,200, 'temporizador');
      //this.add.image(600,200,'siguiente');

  
        //this.add.image(50, 100, "carta1").setScale(1);
        //this.add.image(200, 500, "carta2").setScale(1);
        
      // Boton para comenzar a jugar nivel 1
      const boton = new Button(
          200, 100, 'Mapa', 
          this, 
          () => {
          // Instrucción para pasar a la escena mapa
            this.scene.start("Map");
        });
  
      
      let numeros16 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
      numeros16 = numeros16.sort( () => (Math.random() > .5) ? 1 : -1 );
      console.log (numeros16);
      let coordenadas16 = [[115,415],[275,415],[435,415],[595,415],[115,695],[275,695],[435,695],[595,695],
      [115,975],[275,975],[435,975],[595,975],[115,1255],[275,1255],[435,1255],[595,1255],]
  
     
      let tipo
      numeros16.forEach((element,index) => {
        console.log("Tipo", element)
        console.log("posicion", coordenadas16[index][0], coordenadas16[index][1])
  
       /* switch ((element == 1) ) {
          case 'conejo':
            break;
            case 'flor':
              break;
            case 'girasol':
              break;
            case 'llave':
              break;
            case 'pocion':
            break;
            case 'rosa':
            break;
            case 'sombrero':
            break;
            case 'torta':
            break;
        } 
        */

      if (element == 1) {
          tipo = "corazon"
        }
      else {
          tipo = "flor"
        }
      
      if (element == 1) {
          tipo = "sombrero"
        }
      else{
          tipo = "torta"
        }
      
      if (element == 1) {
          tipo = "pocion"
        }
      else{
          tipo = "rosa"
        }
        
      if (element == 1) {
          tipo = "girasol"
        }
      else{
          tipo = "llave"
        }
      
  
        let imagen = this.add.image(coordenadas16[index][0], coordenadas16[index][1], tipo).setInteractive();
        
        //prueba del click
        imagen.on('pointerdown', function (pointer) {
          this.setTint(0xff0000);
          //guardar algo que me permita definir quien/quienes estan dadas vueltas
          //si es una , no hace nada
          //si son 2 las compara
            //sin son iguales suma
            //si son distintas las da vuelta
        });
      });
      
      // Boton para comenzar volver al menu principal
      const botonmenu = new Button(
        600, 100, 'Siguiente', 
        this, 
        () => {
        // Instrucción para pasar al menu principal
          this.scene.start("mainmenu");
      });
  }
}