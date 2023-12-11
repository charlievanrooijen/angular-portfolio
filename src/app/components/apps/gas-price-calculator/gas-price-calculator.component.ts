import { Component } from '@angular/core';

@Component({
  selector: 'app-gas-price-calculator',
  templateUrl: './gas-price-calculator.component.html',
  styleUrls: ['./gas-price-calculator.component.scss']
})

export class GasPriceCalculatorComponent {
  distance: number;
  gasPrice: number;
  fuelUsageRate: number;
  totalCost: number;
  selectedCar: string = '';
  
  cars = [
    { name: 'Renault Twingo 2008', consumption: 5.7 },
    { name: 'Volkswagen Golf', consumption: 6.0 },
    { name: 'Toyota Prius', consumption: 4.4 },
    { name: 'Ford Probe V16', consumption: 7.8 }
  ];

  constructor() {
    this.distance = 0;
    this.gasPrice = 0;
    this.fuelUsageRate = 0;
    this.totalCost = 0;
  }

  calculateCost(): void {
    this.totalCost = (this.distance / 100) * this.fuelUsageRate * this.gasPrice;
  }

  onCarSelect(): void {
    const selectedCarData = this.cars.find(car => car.name === this.selectedCar);
    if (selectedCarData) {
      this.fuelUsageRate = selectedCarData.consumption;
    }
  }
}
