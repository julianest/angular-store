//import { Pipe, PipeTransform } from '@angular/core';

//import { formatDistance} from 'date-fns'
//se debe instalar la libreria date-fns con npm i date-fns
// @Pipe({
//   name: 'timeAgoWithDateFns',
//   standalone: true
// })

// export class TimeAgoWithDateFnsPipe implements PipeTransform{
//   transform(value: string): string {
//     const date = new Date(value);
//     const today = new Date();
// //    return formatDistance(today, date );
//   }
// }

//y entonces en product Component. lo que hacemos es usarlo siendo asi:

// <div class="flex flex-col space-y-2 p-4">
//   <h4 class="text-sm text-gray-700">producto quemado</h4>
//   <p class="text-sm font-medium text-gray-500">{{'2024-12-10T24:57:45.000Z' | timeAgoWithDateFns }}</p>
// </div>
