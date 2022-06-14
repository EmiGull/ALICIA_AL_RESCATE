
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

      
      let numeros = [1,1,2,2,3,3,4,4]
      numeros = numeros.sort( () => {return Math.random() - 0.5 });
      console.log (numeros);

         //Funcion principal
         function destapar(id){
          tarjetasdestapadas= 1;
  
          if (tarjetasdestapadas == 1){
            //mostrar primer tarjeta
            tarjeta1 = document.getElementById(id);
            primerResultado = numeros[id];
            tarjeta1.innerHTML = primerResultado;
  
            //desabilitar primer boton
            tarjeta1.disabled = true;
  
          }else if (tarjetasdestapadas == 2){
          //mostrar segunda tarjeta
          tarjeta2 = document.getElementById(id);
          segundoResultado = numeros (id);
          tarjeta2.innerHTML = segundoResultado;
  
          //deshabilitar segundo boton
          tarjeta2.disabled = true;
  
          }
  
        }
     
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
  