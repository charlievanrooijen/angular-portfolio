import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimalValidatorService } from 'src/app/services/animal-validator.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  animals: string[] = [];
  guessedAnimals: string[] = [];
  currentGuess: string = '';
  lastCharacter: string = '';
  error: string | null = null;

  constructor(private http: HttpClient, private animalValidatorService: AnimalValidatorService) {}

  ngOnInit(): void {
    this.http.get<{ animals: string[] }>('/assets/animals.json').subscribe(data => {
      this.animals = data.animals;
    });
  }

  submitGuess(): void {
    this.error = null;
    
    // Before submitting the guess:
    if (!this.animalValidatorService.validateAnimal(this.currentGuess)) {
      this.error = 'Animal not in our list!';
      return;
    }
    
    if (this.animalValidatorService.isAnimalGuessed(this.currentGuess, this.guessedAnimals)) {
      this.error = 'Animal already guessed!';
      return;
    }
    
    if (!this.animalValidatorService.isValidNextAnimal(this.currentGuess, this.lastCharacter)) {
      this.error = `Animal should start with ${this.lastCharacter}!`;
      return;
    }

    this.guessedAnimals.push(this.currentGuess);
    this.lastCharacter = this.currentGuess.slice(-1);

    this.currentGuess = ''; // Reset the input field
  }
}
