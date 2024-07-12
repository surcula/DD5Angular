import { Component } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrl: './dices.component.css',
})
export class DicesComponent {
  selectedDiceType: string = 'd20';
  numberOfDice: number = 1;
  results: number[] = [];
  sum: number = 0;
  advantage: boolean = false;
  disadvantage: boolean = false;

  rollDice(): void {
    this.results = [];
    this.sum = 0;
    
    for (let i = 0; i < this.numberOfDice; i++) {
      const result = Math.floor(Math.random() * this.getNumberOfSides(this.selectedDiceType)) + 1;
      this.results.push(result);
      this.sum += result;
    }
  }

  isHighest(index: number): boolean {
    if (!this.advantage) {
      return false;
    }

    const maxResult = Math.max(...this.results);
    return this.results[index] === maxResult;
  }

  isLowest(index: number): boolean {
    if (!this.disadvantage) {
      return false;
    }

    const minResult = Math.min(...this.results);
    return this.results[index] === minResult;
  }

  handleCheckboxChange(): void {
    if (this.advantage && this.disadvantage) {
      // Si les deux checkboxes sont cochées, désactive désavantage
      this.disadvantage = false;
    }
  }

  private getNumberOfSides(diceType: string): number {
    switch (diceType) {
      case 'd4':
        return 4;
      case 'd6':
        return 6;
      case 'd8':
        return 8;
      case 'd10':
        return 10;
      case 'd12':
        return 12;
      case 'd20':
        return 20;
      default:
        return 20; // Par défaut, utilise d20 si le type de dé est invalide
    }
  }
}
