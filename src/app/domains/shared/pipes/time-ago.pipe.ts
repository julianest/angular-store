import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(dateValue: Date | string | number): string {
    const entryDate = new Date(dateValue);

    if (isNaN(entryDate.getTime())) {
      throw new Error('Fecha no válida');
    }

    const today = new Date();

    const diffInYears = today.getFullYear() - entryDate.getFullYear();
    const diffInMs = (today.getMonth()+1) - (entryDate.getMonth()+1);
    const diffInDays = today.getDate() - entryDate.getDate();
    const diffInTime = today.getTime() - entryDate.getTime();

    const diffInHours = diffInTime / (1000 * 60 * 60);
    const hours = Math.floor(diffInHours);
    //const remainingMinutes = (diffInHours - hours) * 60;
    //const minutes = Math.floor(remainingMinutes);
    //const seconds = Math.floor((remainingMinutes - minutes) * 60);


    if(diffInYears == 0 && diffInMs == 0 && diffInDays == 0 && diffInTime > 0){
      return hours >= 2 ? `${hours} Hours ago.` :
                hours === 1 ? `${hours} Hour ago.`
                    : 'Just now.';

    } else if(diffInYears == 0 && diffInMs == 0 && diffInDays >= 1){
        return diffInDays + (diffInDays >=2 ? ` Days `: ` Day `)+ 'ago.';

    } else if(diffInYears == 0 && diffInMs >= 1){
        return diffInMs + (diffInMs >=2 ? ` Months `: ` Month `)+ 'ago.';

    } else if(diffInYears >= 1){
        return diffInYears + (diffInYears >=2 ? ` Years `: ` Year `) + 'ago.';

    } else{
        return 'Just now.';
    }

  }

}
