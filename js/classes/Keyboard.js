class Key {
    constructor(name) {
      this.name = name;
    }
  
    isPressed = false;
  }
  
  export default class Keyboard {
    // Alle Tasten sind im keys-Array gespeichert:
    // Svi ključevi su pohranjeni u polju ključeva:

    static keys = [];
  
    // Die einzelnen Tasten, auf die wir reagieren möchten:
    // Pojedinačni ključevi na koje želimo odgovoriti:

    static arrowUp = new Key("ArrowUp");
    static arrowDown = new Key("ArrowDown");
    // static arrowLeft = new Key("ArrowLeft");
    // static arrowRight = new Key("ArrowRight");
    static keyW = new Key("KeyW");
    static keyS = new Key("KeyS");
  
    // Event-Listener registrieren & Tasten updaten
    // Registrirajte slušatelje događaja i gumbe za ažuriranje

    static setup() {
      this.keys = [this.arrowUp, this.arrowDown, this.keyW, this.keyS];
  
      const reactToKeyDownEvent = (event) => {
        console.log(event.code);

        // Status der gedrückten Taste updaten:
        // Ažuriranje statusa pritisnute tipke:


        for (const key of this.keys) {
          if (key.name === event.code) {
            key.isPressed = true;
          }
        }
      };
  
      const reactToKeyUpEvent = (event) => {
        
        // Status der gedrückten Taste updaten:
        // Ažuriranje statusa pritisnute tipke:

        for (const key of this.keys) {
          if (key.name === event.code) {
            key.isPressed = false;
          }
        }
      };
  
      document.addEventListener("keydown", reactToKeyDownEvent.bind(this));
  
      document.addEventListener("keyup", reactToKeyUpEvent.bind(this));
    }
  }