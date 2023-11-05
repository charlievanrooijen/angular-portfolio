import { Component } from '@angular/core';

@Component({
  selector: 'app-threejs-app',
  templateUrl: './threejs-app.component.html',
  styleUrls: ['./threejs-app.component.scss']
})
export class ThreejsAppComponent {
  handleCubeClick() {
    console.log('Cube clicked in ThreejsAppComponent');
  }
}
