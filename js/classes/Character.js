import Settings from './Settings.js';

export default class Character {
  constructor(x, y, width, height) {
    this.position = {
      x: x,
      y: y
    };
    this.size = {
      width: width,
      height: height
    };
  }
  
  velocity = {
    x: 2,
    y: 2
  };



  
  // kretanje znaka, po x osi ili y osi, ako ide od dolje prema gore onda se krece po y osi i to -



  move() {
    // this.position.x -= this.velocity.x;
    this.position.y -= this.velocity.y;
  }



  // Izračunaj sljedeću poziciju (za sudare)



  nextPosition() {
    const nextPosition = {
      // x: this.position.x - this.velocity.x,
      y: this.position.y - this.velocity.y
    };
    return nextPosition;
  }




  // Testirajte sudare sa zidovima

   // Sudar s lijevim zidom platna
   // (x < 0)


  collidesWithLeftWall() {
    return this.nextPosition().x < 0;
  }
  

  // Sudar s gornjom stijenkom platna
   // (y < 0)

  collidesWithTopWall() {
    return this.nextPosition().y < 0;
  }


  // Sudar s desnim zidom platna
   // (x + size.width > canvas.width)
 // Dazu müssen wir testen, ob die beiden Rechtecke sich überlappen. Das machen wir, indem wir die Positionen der Eckpunkte miteinander vergleichen:
    

  collidesWithRightWall() {
    return this.nextPosition().x + this.size.width < Settings.canvas.width;
  }

  
// Sudar s donjim zidom platna
   // (y + size.height > canvas.height)

  
  collidesWithBottomWall() {
    return this.nextPosition().y + this.size.height > Settings.canvas.height;
  }

  // Izračunajte sudar između dva lika u igri

  collidesWith(other) {

   
    // Da bismo to učinili moramo testirati preklapaju li se dva pravokutnika. To činimo uspoređujući položaje kutnih točaka:
    
    return this.position.x < other.position.x + other.size.width && 
            this.position.x + this.size.width > other.position.x &&
            this.position.y < other.position.y + other.size.height &&
            this.position.y + this.size.height > other.position.y;
  }
}