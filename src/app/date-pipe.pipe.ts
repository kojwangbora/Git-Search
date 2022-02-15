import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) return 'Just now';
      const intervals = [
        { name: 'year', time: 31536000 },
        { name: 'month', time: 2592000 },
        { name: 'week', time: 604800 },
        { name: 'day', time: 86400 },
        { name: 'hour', time: 36000 },
        { name: 'minute', time: 60 },
        { name: 'second', time: 1},
      ];
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i].time);
        if (counter > 0)
        if (counter === 1) {
          return counter + ' ' + i + ' ago';
        } else {
          return counter + ' ' + i + 's ago';
        }
      }
    }
    return value;
  }
}
