import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalValidatorService {
  
  private animals: string[] = [];

  constructor(private http: HttpClient) {
    this.fetchAnimals().subscribe(data => {
      this.animals = data.animals;
    });
  }

  private fetchAnimals(): Observable<any> {
    return this.http.get('/assets/animals.json');
  }

  validateAnimal(animal: string): boolean {
    return this.animals.includes(animal.toLowerCase());
  }

  addAnimal(animal: string): void {
    if(!this.animals.includes(animal.toLowerCase())) {
      this.animals.push(animal.toLowerCase());
    }
  }

  isAnimalGuessed(animal: string, guessedAnimals: string[]): boolean {
    return guessedAnimals.includes(animal);
  }
  
  isValidNextAnimal(animal: string, lastCharacter: string): boolean {
    return !lastCharacter || animal[0] === lastCharacter;
  }
}
