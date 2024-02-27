//////////////////////////////////
// Aufgabe: Kollision zwischen Ball & Spielern hinzufügen
//
// Dafür brauchen wir eine zusätzliche Methode, mit der wir die Kolision zwischen zwei Rechtecken berechnen können.
//
// Wo fügen wir diese hinzu?
// => character.collidesWith(otherCharacter)

// Zadatak: Dodajte sudar između lopte i igrača
//
// Za ovo nam je potrebna dodatna metoda s kojom možemo izračunati koliziju između dva pravokutnika.
//
// Gdje ih dodajemo?


import Game from './classes/Game.js';


// Spiel erst starten, wenn die gesamte Seite geladen ist

// Nemojte pokretati igru ​​dok se cijela stranica ne učita

window.onload = () => {
  const game = new Game();
  game.start();
}

