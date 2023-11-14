import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  games = [
    {
      name: 'Animal Chain',
      description: 'Name an animal that starts with the letter the last word ended with.',
      image: 'assets/images/games/animals1.jpeg',
      link: '/games/animal-chain'
    },
    // {
    //   name: 'Animal Guesser',
    //   description: 'One person takes an animal that the other participants will guess.',
    //   image: 'assets/images/games/animals2.jpeg',
    //   link: '/games/animal-guesser'
    // }
  ];

  constructor() { }

}
