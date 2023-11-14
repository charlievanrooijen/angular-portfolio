import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-twenty-three-plus-one',
  templateUrl: './twenty-three-plus-one.component.html',
  styleUrls: ['./twenty-three-plus-one.component.scss']
})

export class TwentyThreePlusOneComponent implements AfterViewInit, OnDestroy {
  
  private static readonly TurnSize = -1;
  private static readonly SingleSlice = 15;
  private static readonly StartMiliseconds = 10;

  isCountingDown = false;
  degrees = 0;
  timeRemaining = 3;
  starttime = false;
  timer: any;
  
  @ViewChild('wheel', { static: true }) wheel!: ElementRef;
  @ViewChild('slideout', { static: true }) slideout!: ElementRef;
  @ViewChild('startTimer', { static: true }) startTimer!: ElementRef;
  
  selectedCardNumberSafeUrl?: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  rotate(): void {
    if (this.degrees === -360) {
      this.degrees = 0;
    }

    if (this.wheel && this.wheel.nativeElement) {
      this.wheel.nativeElement.style.transform = `rotate(${this.degrees}deg)`;
      this.degrees += TwentyThreePlusOneComponent.TurnSize;
    }
  }

  getAnswerInt(): number {
    const score: number = Math.abs(Math.round(this.degrees / TwentyThreePlusOneComponent.SingleSlice)) + 1;
    return score === 0 ? 1 : score;
  }

  showAnswer(bool: boolean): void {
    if (this.slideout && this.slideout.nativeElement) {
      if (bool) {
        this.slideout.nativeElement.style.display = 'none';
      } else {
        this.selectCard(this.getAnswerInt());
        this.slideout.nativeElement.style.display = 'block';
      }
    }
  }

  selectedCardNumber: number | null = null;

  selectCard(number: number): void {
    if (number > 24) {
      number = 1;
    }
    
    const imageUrl = `./assets/images/apps/cards/${number}.jpg`;
    console.log("Generated Image URL: ", imageUrl);
    this.selectedCardNumberSafeUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    console.log("Sanitized Image URL: ", this.selectedCardNumberSafeUrl);
}


  handleCountdown(Countdown: boolean): void {
    if (Countdown) {
      this.startCountdown();
    } else {
      this.stopCountdown();
    }
  }

  startCountdown(): void {
    if (!this.startTimer || !this.startTimer.nativeElement) return;

    this.startTimer.nativeElement.innerHTML = this.timeRemaining.toString();
    this.isCountingDown = true;

    const x = setInterval(() => {
      if (this.timeRemaining < 1) {
        this.timeRemaining = 3;
        this.starttime = false;
        this.isCountingDown = false;
        this.showAnswer(false);
        this.stopCountdown();
        clearInterval(x);
      } else {
        this.startTimer.nativeElement.innerHTML = (this.timeRemaining - 1).toString();
        this.timeRemaining--;
      }
    }, 1000);
  }

  stopCountdown(): void {
    if (this.startTimer && this.startTimer.nativeElement) {
      this.startTimer.nativeElement.innerHTML = 'Rotate';
    }
  }

  getCaption(index: number): string {
    const WheelCaptionArray: string[] = [
        'Fit',
        'Health',
        'Aesthetics',
        'Sexuality',
        'Idealism',
        'Loyal',
        'Connected',
        'Caring',
        'Certainty',
        'Safety',
        'Relaxation',
        'Play',
        'Freedom',
        'Creativity',
        'Individuality',
        'Curiosity',
        'Capable',
        'Innovation',
        'Winning',
        'Pride',
        'Recognition',
        'Status',
        'Possession',
        'Dominance',
    ];

    return WheelCaptionArray[index - 1];
  }

  startTimerFn(): void {
    if (!this.starttime) {
      this.rotate();
      this.starttime = true;
      if (this.startTimer && this.startTimer.nativeElement) {
        this.startTimer.nativeElement.innerHTML = 'Stop';
      }
    } else {
      this.handleCountdown(true);
      if (this.startTimer && this.startTimer.nativeElement) {
        this.startTimer.nativeElement.innerHTML = '3';
      }
    }
  }

  ngAfterViewInit(): void {
    this.timer = setInterval(() => {
      if (this.starttime) {
        this.rotate();
      }
    }, TwentyThreePlusOneComponent.StartMiliseconds);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}