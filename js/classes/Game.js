import Color from './Color.js';
import Settings from './Settings.js';
import Character from './Character.js';
import Keyboard from './Keyboard.js';
import Ball from './Ball.js';
import Ball2 from './Ball2.js';
import Player from './Player.js';

export default class Game {
  // Canvas-Eigenschaften
  // Svojstva platna
  
  canvas;
  context;

  
  // Elementi igre

  player1 = new Player(Settings.canvas.width / 7, 200 , 100, 10);
  player2 = new Player(Settings.canvas.width / 2, 480 , 100, 10);
  ball = new Ball(50, 480, 15, 15);
  ball2 = new Ball(200, 480, 15, 15);

  start() {
    console.log("Spiel startet");

    this.canvas = document.getElementById('2d-canvas');
    this.canvas.width = Settings.canvas.width;
    this.canvas.height = Settings.canvas.height;

    this.context = this.canvas.getContext('2d');

    // Postavljanje unosa tipkovnicom

    Keyboard.setup();
    
    // Pokretanje petlje animacije
     // Budući da će se funkcija `update` izvršiti kasnije, `this` se mora vezati na funkciju. U suprotnom, "ovo" će biti "nedefinirano" kada kasnije izvršite funkciju.
    
    requestAnimationFrame(this.update.bind(this));
  }

  update() {
    console.log("Spiel Update");

    // Reset Canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.heigth);

    
    // Ažuriranje podataka

    this.updateData();


    // Crtanje elemenata igre

    this.draw();

 
    // Animations-Loop ausführen
    // Pokretanje petlje animacije

    requestAnimationFrame(this.update.bind(this));
  }

  updateData() {
    
    // Ovdje ćemo ažurirati podatke igre

     // Reagiraj na sudare loptica:
     // Sudar s lijevim ili desnim zidom:
     // (obrnuta x-brzina)

    if (this.ball.collidesWithLeftWall() || this.ball.collidesWithRightWall()) {
      this.ball.velocity.x *= -1;
    }
    if (this.ball2.collidesWithLeftWall() || this.ball2.collidesWithRightWall()) {
      this.ball2.velocity.x *= -1;
    }

    // Kollisition mit oberer oder unterer Wand:
    // (y-Geschwindigkeit umkehren)

    // Sudar s gornjim ili donjim zidom:
     // (obrnuta y-brzina)

    if (this.ball.collidesWithTopWall() || this.ball.collidesWithBottomWall()) {
      this.ball.velocity.y *= -1;
    }
    if (this.ball2.collidesWithTopWall() || this.ball2.collidesWithBottomWall()) {
      this.ball2.velocity.y *= -1;
    }

    // Position der Spieler basierend auf Keyboard-Input aktualisieren
    // Player1 (Steuerung mit W & S):

    // Ažuriraj pozicije igrača na temelju unosa s tipkovnice

     // Igrač1 (kontrola s W & S):


    if (!Keyboard.keyW.isPressed && !Keyboard.keyS.isPressed) {
      this.player1.velocity.y = 0;
    } else if (Keyboard.keyW.isPressed && Keyboard.keyS.isPressed) {
      this.player1.velocity.y = 0;
    } else if (Keyboard.keyW.isPressed) {
      this.player1.velocity.y = -2;
    } else if (Keyboard.keyS.isPressed) {
      this.player1.velocity.y = 2;
    }

    // Player2 (Steuerung mit ArrowUp & ArrowDown):
    // Igrač2 (kontrola sa strelicama gore i dolje):

    if (!Keyboard.arrowUp.isPressed && !Keyboard.arrowDown.isPressed) {
      this.player2.velocity.y = 0;
    } else if (Keyboard.arrowUp.isPressed && Keyboard.arrowDown.isPressed) {
      this.player2.velocity.y = 0;
    } else if (Keyboard.arrowUp.isPressed) {
      this.player2.velocity.y = -2;
    } else if (Keyboard.arrowDown.isPressed) {
      this.player2.velocity.y = 2;
    }

    // if (!Keyboard.arrowLeft.isPressed && !Keyboard.arrowRight.isPressed) {
    //   this.player2.velocity.y = 0;
    // } else if (Keyboard.arrowLeft.isPressed && Keyboard.arrowRight.isPressed) {
    //   this.player2.velocity.y = 0;
    // } else if (Keyboard.arrowLeft.isPressed) {
    //   this.player2.velocity.y = -2;
    // } else if (Keyboard.arrowRight.isPressed) {
    //   this.player2.velocity.y = 2;
    // }

    // Falls einer der Spieler mit der Wand kollidiert, dann wollen wir die Geschwindigkeit wieder auf null setzen:

    // Ako se jedan od igrača sudari sa zidom, tada želimo vratiti brzinu na nulu:

    if (this.player1.collidesWithTopWall() || this.player1.collidesWithBottomWall()) {
      this.player1.velocity.y = 0;
    }

    if (this.player2.collidesWithTopWall() || this.player2.collidesWithBottomWall()) {
      this.player2.velocity.y = 0;
    }

    // Kollision von Ball mit Spieler testen
    // Testirajte sudar između lopte i igrača

    if (this.ball.collidesWith(this.player1) || this.ball.collidesWith(this.player2)) {
      this.ball.velocity.x *= -1;
    }

    if (this.ball2.collidesWith(this.player1) || this.ball2.collidesWith(this.player2)) {
      this.ball.velocity.x *= -1;
    }



    // Charakter bewegen
    // Premjesti znak


    this.ball.move();
    this.ball2.move();
    this.player1.move();
    this.player2.move();
  }

  draw() {
    // Spiel-Elemente zeichnen
    // Crtanje elemenata igre
    
    // Hintergrund zeichnen
    // Crtanje pozadine
    
    this.context.fillStyle = Color.background;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Ball zeichnen
    // Nacrtaj kuglicu

    this.context.fillStyle = Color.character;
    this.context.fillRect(this.ball.position.x, this.ball.position.y, this.ball.size.width, this.ball.size.height);

    this.context.fillStyle = Color.character;
    this.context.fillRect(this.ball2.position.x, this.ball2.position.y, this.ball2.size.width, this.ball2.size.height);

    // Player1 zeichnen
    // Izvlačenje igrača1

    this.context.fillStyle = Color.character;
    this.context.fillRect(this.player1.position.x, this.player1.position.y, this.player1.size.width, this.player1.size.height);

    // Player2 zeichnen
    // Izvlačenje igrača2
    
    this.context.fillStyle = Color.character;
    this.context.fillRect(this.player2.position.x, this.player2.position.y, this.player2.size.width, this.player2.size.height);
  }
}