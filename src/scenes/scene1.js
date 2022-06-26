//inicializacion de variables
let tarjeta1 = null;
let tarjeta2 = null;
let gameover = false;
let winner = false;
let corazones = 0;
let tarjetasDestapadas = 0;
let coincidencias = 0;



//import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Scene1 extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("scene1");
  }

  create() {

    // Fondo del nivel 1
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "fondonivel1").setScale(1.1);
    this.add.image(400, 100, 'temporizador');
    this.add.image(120, 100, 'puntos');
    var puntos = this.add.text(130, 60, '0', { fontFamily: 'Rockwell', fontSize: 70, color: '#000000' })

    //sonidos
    this.clic = this.sound.add('clic');
    
    // Boton para volver al menu principal
    var menu = this.add.image(600, 100, 'boton_menu').setScale(1.1)
    menu.setInteractive()
    menu.on('pointerdown', () => this.scene.start('MainMenu'));
    this.clic.play();

    // Si no junta todas las cartas en 10 segundos --> Game Over
    this.initialTime = 10
    this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
    this.timeText = this.add.text(340, 60, '10', { fontFamily: 'Rockwell', fontSize: 70, color: '#000000' });
    console.log(this.timedEvent)

    

    let numeros4 = [1, 1, 2, 2]
    numeros4 = numeros4.sort(() => (Math.random() > .5) ? 1 : -1);
    console.log(numeros4);
    let coordenadas4 = [[220, 500], [500, 500], [220, 1100], [500, 1100]]

    let tipo
    numeros4.forEach((element, index) => {
      console.log("Tipo", element)
      console.log("posicion", coordenadas4[index][0], coordenadas4[index][1])

      if (element == 1) {
        tipo = "conejo_grande"
      }
      else {
        tipo = "flor_grande"
      }

      let imagen = this.add.image(coordenadas4[index][0], coordenadas4[index][1], "reverso1").setInteractive();
      imagen.tipo = tipo

      //prueba del click
      imagen.on('pointerdown', function (pointer) {
        console.log(this.tipo);
        tarjetasDestapadas++
        console.log(tarjetasDestapadas)
        if (tarjetasDestapadas <= 2) {
          this.setTexture(this.tipo);
          if (tarjetasDestapadas == 1) {
            tarjeta1 = this;
          }
        }

        if (tarjetasDestapadas == 2) {
          tarjeta2 = this;
          if (tarjeta1.tipo == tarjeta2.tipo) {
            corazones += 1;
            puntos.setText(corazones);
            coincidencias++;
            setTimeout(() => {
              tarjetasDestapadas = 0;
            }, 500)
          } else {
            setTimeout(() => {
              tarjeta1.setTexture('reverso1');
              tarjeta2.setTexture('reverso1');
              tarjetasDestapadas = 0;
            }, 500)
          }
        }

        //Para ir a la pantalla de ganaste una vez que se dan vuelta todas las cartas
        if (coincidencias ===2){
          this.scene.Winner ();
        }

        //if (tarjetasDestapadas == 4){
         // this.scene.start ('Winner');}});

    });
  })
  }

  update() {
    if (gameover) {
      return
    }
  }

  gameover(){
    this.scene.start('GameOver');
  }

  winner(){
    this.scene.start('Winner');
  }

  onSecond(){
    if (!gameover) {
      this.initialTime = this.initialTime - 1; // One second
      this.timeText.setText(this.initialTime);
      if (this.initialTime == 0) {
        this.timedEvent.paused = true;
        this.gameover()
      }
    }
  }
}
