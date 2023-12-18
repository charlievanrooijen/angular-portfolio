import { Component } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-universal-scheduler',
  templateUrl: './universal-scheduler.component.html',
  styleUrls: ['./universal-scheduler.component.scss']
})
export class UniversalSchedulerComponent {
  extraNames = [
    { label: "Asia/Beijing", value: "Asia/Shanghai" },
    { label: "Europe/Haarlem", value: "Europe/Amsterdam" }
  ];
  allTimeZones = moment.tz.names().concat(
    this.extraNames.map(name => name.label)
  );
  
  generateMeetingString(): void {
    if (this.selectedTimeZones.length > 0) {
      const meetingString = this.selectedTimeZones.map(tz => `${tz.zone}:${tz.time}`).join('|');
      navigator.clipboard.writeText(meetingString).then(() => {
        console.log('Meeting details copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  }

  parseMeetingString(meetingString: string): void {
    const timeZonePairs = meetingString.split('|');
    this.selectedTimeZones = timeZonePairs.map(pair => {
      const [zone, time] = pair.split(':');
      return { zone, time };
    });
    this.selectedTimeZones.forEach(tz => {
      const actualTimeZone = this.getActualTimeZone(tz.zone);
      const momentTime = moment.tz(tz.time, 'HH:mm', actualTimeZone);
      tz.time = momentTime.format('HH:mm');
    });
    this.saveSelectedTimeZones();
  }
  
  
  onTimeChange(index: number, newTime: string): void {
    const changedTimeZone = this.getActualTimeZone(this.selectedTimeZones[index].zone);
    const changedMoment = moment.tz(`${moment().format('YYYY-MM-DD')} ${newTime}`, changedTimeZone);
  
    this.selectedTimeZones.forEach((tz, i) => {
      if (i !== index) {
        const actualTimeZone = this.getActualTimeZone(tz.zone);
        const newTimeForTimeZone = changedMoment.clone().tz(actualTimeZone).format('HH:mm');
        this.selectedTimeZones[i].time = newTimeForTimeZone;
      }
    });
  
    this.saveSelectedTimeZones();
  }

  filteredTimeZones: string[] = [];
  selectedTimeZones: { zone: string; time: string }[] = [];

  getActualTimeZone(name: string): string {
    const extraName = this.extraNames.find(extra => extra.label === name);
    return extraName ? extraName.value : name;
  }

  addTimeZone(timeZone: string): void {
    if (!this.selectedTimeZones.some(tz => tz.zone === timeZone)) {
      const actualTimeZone = this.getActualTimeZone(timeZone);
      const currentTime = moment().tz(actualTimeZone).format('HH:mm');
      this.selectedTimeZones.push({ zone: timeZone, time: currentTime });
      this.saveSelectedTimeZones();
    }
  }

  removeTimeZone(timeZone: string): void {
    this.selectedTimeZones = this.selectedTimeZones.filter(tz => tz.zone !== timeZone);
    this.saveSelectedTimeZones();
  }

  searchTimeZone(query: string): void {
    this.filteredTimeZones = query
      ? this.allTimeZones.filter(zone => zone.toLowerCase().includes(query.toLowerCase()))
      : [];
  }

  saveSelectedTimeZones(): void {
    localStorage.setItem('selectedTimeZones', JSON.stringify(this.selectedTimeZones));
  }

  loadSelectedTimeZones(): void {
    const data = localStorage.getItem('selectedTimeZones');
    if (data) {
      this.selectedTimeZones = JSON.parse(data);
    }
  }

  ngOnInit(): void {
    this.loadSelectedTimeZones();
  }
}
