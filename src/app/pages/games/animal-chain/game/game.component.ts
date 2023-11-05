import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimalValidatorService } from 'src/app/services/animal-validator.service';
import { TranslateService } from '@ngx-translate/core'; 

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
  errorParams: any = {};

  constructor(
    private http: HttpClient, 
    private animalValidatorService: AnimalValidatorService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    const currentLang = this.translate.currentLang || 'en';
    const filePath = `/assets/${currentLang}_animals.json`;

    this.http.get<{ animals: string[] }>(filePath).subscribe(data => {
      this.animals = data.animals;
    });
  }

  submitGuess(): void {
    this.error = null;
    const currentGuessLower = this.currentGuess.toLowerCase(); // Convert the guess to lowercase
    
    if (!this.animalValidatorService.validateAnimal(currentGuessLower)) {
      this.error = 'animalChain.errors.notInList';
      return;
    }
  
    if (!this.animalValidatorService.isValidNextAnimal(currentGuessLower, this.lastCharacter)) {
      this.error = `animalChain.errors.shouldStartWith`;
      this.errorParams = { char: this.lastCharacter };
      return;
    }
    
    if (this.animalValidatorService.isAnimalGuessed(currentGuessLower, this.guessedAnimals)) {
      this.error = 'animalChain.errors.alreadyGuessed';
      return;
    }
    
    this.guessedAnimals.push(currentGuessLower); 
    this.lastCharacter = currentGuessLower.slice(-1);
    this.currentGuess = '';
  }
}
