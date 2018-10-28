import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  dice1 = 0;
  dice2 = 0;
  diceTotal = 0;

  constructor() { }

  ngOnInit() {
  }

  rollDice() {
    this.diceTotal = 0;

    const diceRollAudio = new Audio('/assets/dice-roll.sound.mp3');
    diceRollAudio.play()
      .then()
      .catch();

    let rolls = 0;
    const interval = setInterval(() => {
      this.dice1 = parseInt(`${(Math.random() * 100) % 6}`, 10) + 1;
      this.dice2 = parseInt(`${(Math.random() * 100) % 6}`, 10) + 1;
      rolls++;
      if (rolls === 4) {
        this.diceTotal = this.dice1 + this.dice2;

        if (this.dice1 === this.dice2) {
          const doublesAudio = new Audio('/assets/doubles-dice-roll.sound.mp3');
          doublesAudio.play()
            .then()
            .catch();
        }
        clearInterval(interval);
      }
    }, 100);
  }
}
