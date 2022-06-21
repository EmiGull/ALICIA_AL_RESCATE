 //inicializacion de variables
 let tarjetasdestapadas = 0;
 let tarjeta1 = null;
 let tarjeta2 = null;
 let primerResultado = null;
 let segundoResultado = null;
 let gameover = false;
 let movimientos;
 let corazones = 0;
 let tiempo = false;
 let boton;
 let botonmenu;


 import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Scene1 extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("scene1");
  }
  
  create() {
    // Fondo del nivel 1
    this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"fondonivel1").setScale(1.1);

      
    // Boton para comenzar a jugar nivel 1
    const boton = new Button(
        200, 100,'Mapa', 
        this, 
        () => {
        // Instrucción para pasar a la escena mapa
          this.scene.start("Map");
      });


    let numeros4 = [1,1,2,2]
    numeros4 = numeros4.sort( () => (Math.random() > .5) ? 1 : -1 );
    console.log (numeros4);
    let coordenadas4 = [[220,500],[500,500],[220,1100],[500,1100]]

    /*
    let numeros16 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
    numeros16 = numeros16.sort( () => (Math.random() > .5) ? 1 : -1 );
    console.log (numeros16);
    let coordenadas16 = [[1,1],[1,2],[2,1],[2,2],.......[4,4]]
    */

    let tipo
    numeros4.forEach((element,index) => {
      console.log("Tipo", element)
      console.log("posicion", coordenadas4[index][0], coordenadas4[index][1])

      if (element == 1) {
        tipo = "conejo_grande"
      }
      else{
        tipo = "flor_grande"
      }

      let imagen = this.add.image(coordenadas4[index][0], coordenadas4[index][1], tipo).setInteractive();
      
      //prueba del click
      imagen.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
       
         // Si no junta todas las cartas en 40 segundas --> Game Over
         initialTime = 40
         //timedEvent = this.time.delayedCall(1000, this.onSecond, [], this, true);
         timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
         timeText = this.add.text(500, 16, '', { fontSize: '32px', fill: '#000' });
         this.jumps = 0;
        
        //guardar algo que me permita definir quien/quienes estan dadas vueltas
        if (tarjetasdestapadas == 1){
          primerResultado = numeros4 (id)
          tarjeta1 = primerResultado
          //si es una , no hace nada 
          //deshabilita el primer boton
          tarjeta1.disabled = true;

        }else if (tarjetasdestapadas == 2){
          segundoResultado = numeros4 (id)
          tarjeta2 = segundoResultado
          //deshabilita el segundo boton
          tarjeta2.disabled = true;
        }

        if (primerResultado == segundoResultado){
          tarjetasdestapadas = 0;

          //si las tarjetas son iguales se suma 1 corazon (punto)
          corazones += tarjetasdestapadas.corazones
          corazonesText.setText('♥: ' + corazones);

          if (corazones = 2){

          }

        }else{
          //mostrar los valores y si son distintas darlas vuelta
          setTimeout (()=> (
            tarjeta1 = ' ',
            tarjeta2 = ' ',
            tarjeta1.disabled = false,
            tarjeta2.disabled = false,
            tarjetasdestapadas = 0, 
          2000)
      )}

        //contar cantidad de tarjetas destapadas (para saber si son mas de 3 sin unir se pierde el juego)
        let movimientos
        if (movimientos => 3){
        gameover = true;
        }

      
      });
    });

    update ()
    {
        if (gameover)
        {       
            return
        }

        gameover();{        
          gameover = true;
          this.physics.pause();
  
          player.setTint(0xff0000);
  
          player.anims.play('turn');        
  
          var gameOverButton = this.add.text(700, 500, 'Perdiste', { fontFamily: 'Arial', fontSize: 70, color: '#ff0000' })
          gameOverButton.setInteractive()
          gameOverButton.on('pointerdown', () => this.scene.start('creditos'));
          Phaser.Display.Align.In.Center(gameOverButton, this.add.zone(400, 300, 800, 600));    
      }
      
      onSecond();{
        if (! gameover)
        {       
            initialTime = initialTime - 1; // One second
            timeText.setText('Countdown: ' + initialTime);
            if (initialTime == 0) {
                timedEvent.paused = true;
                this.gameover()
            }            
        }
      }
         
    

    // Boton para comenzar volver al menu principal
    const botonmenu = new Button(
      600, 100, 'Siguiente',  
      this, 
      () => {
      // Instrucción para pasar al menu principal
        this.scene.start("mainmenu");
    });

    //var botonmenu = this.add.image(400, 300, 'siguiente').setScale(0.26)
    //botonmenu.setInteractive()
    //botonmenu.on('pointerdown', () => this.scene.start('mainmenu') );

  }
}
}
