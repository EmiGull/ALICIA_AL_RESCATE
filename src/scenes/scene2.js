//inicializacion de variables
let tarjeta1 = null;
let tarjeta2 = null;
let gameover = false;
let corazones = 0;
let tarjetasDestapadas = 0;


// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Scene2 extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("scene2");
  }

  
  create() {
    // Fondo del nivel 2
    this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"fondonivel1").setScale(1.1);
    this.add.image(400,100,'temporizador');
    this.add.image(120,100, 'puntos');
    var puntos= this.add.text(130, 60, '0', { fontFamily: 'Rockwell', fontSize: 70, color: '#000000' })
    
      // Boton para volver al menu principal
      var menu = this.add.image(600, 100, "siguiente").setScale(0.26);
      menu.setInteractive();
      menu.on("pointerdown", () => this.scene.start("MainMenu"));

    // Si no junta todas las cartas en 20 segundos --> Game Over
    this.initialTime = 20
    this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
    this.timeText = this.add.text(315, 60, '00:20', { fontFamily: 'Rockwell', fontSize: 70, color: '#000000'  });
    
    let numeros16 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    numeros16 = numeros16.sort(() => (Math.random() > 0.5 ? 1 : -1));
    console.log(numeros16);
    let coordenadas16 = [
      [115, 415],
      [275, 415],
      [435, 415],
      [595, 415],
      [115, 695],
      [275, 695],
      [435, 695],
      [595, 695],
      [115, 975],
      [275, 975],
      [435, 975],
      [595, 975],
      [115, 1255],
      [275, 1255],
      [435, 1255],
      [595, 1255],
    ];

      let tipo
      numeros16.forEach((element, index) => {
      console.log("Tipo", element);
      console.log("posicion", coordenadas16[index][0], coordenadas16[index][1]);

      switch (element) {
        case 1:
          tipo = "corazon";
          break;
        case 2:
          tipo = "flor";
          break;
        case 3:
          tipo = "sombrero";
          break;
        case 4:
          tipo = "torta";
          break;
        case 5:
          tipo = "pocion";
          break;
        case 6:
          tipo = "rosa";
          break;
        case 7:
          tipo = "girasol";
          break;
        default:
          tipo = "llave";
          break;
      }

      let imagen = this.add.image(coordenadas16[index][0], coordenadas16[index][1], "reverso").setInteractive();
      imagen.tipo = tipo

      //prueba del click
         imagen.on('pointerdown', function (pointer) {
          console.log (this.tipo);
          tarjetasDestapadas++
          console.log (tarjetasDestapadas)
          if (tarjetasDestapadas <= 2){
            this.setTexture(this.tipo);
            if (tarjetasDestapadas == 1){
              tarjeta1 = this;
            }
          }
          
          if (tarjetasDestapadas == 2){
            tarjeta2 = this;
            if (tarjeta1.tipo == tarjeta2.tipo){
              corazones += 1;
              puntos.setText (corazones);
              setTimeout(()=>{
                tarjetasDestapadas = 0;
              },1000)
            }else{
            setTimeout(()=>{
              tarjeta1.setTexture ('reverso');
              tarjeta2.setTexture ('reverso');
              tarjetasDestapadas = 0;
            },1000)
            }

      };
    });
  })
}


update (){
  if (gameover)
  {       
      return
  }
}

gameover(){   
  this.scene.start('GameOver')
}

onSecond(){
  if (! gameover)
  {       
      this.initialTime = this.initialTime - 1; // One second
      this.timeText.setText(this.initialTime);
      if (this.initialTime == 0) {
          this.timedEvent.paused = true;
          this.gameover()
      }            
  }
}
  }

