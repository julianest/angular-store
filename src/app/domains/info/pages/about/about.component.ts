import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { CounterComponent } from '@shared'
import { WaveAudioComponent } from '@info'
//Directives
import { HighlightDirective } from '@shared';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent,CommonModule,WaveAudioComponent, HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('hola');

  changeduration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber)
  }
  changemessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value)
  }

}
