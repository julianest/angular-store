import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { CommonModule} from '@angular/common';

import WaveSurfer from 'WaveSurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {
@Input({required: true}) audioUrl!: string;  //con ! le decimos que la inicializaremos en el moemnto qu enosotros queremos y no nos obligue a inicializarlo de una.
@ViewChild('wave') container!: ElementRef; //ElementRef es un elemento Html
private ws!: WaveSurfer;
isPlaying = signal(false);

ngAfterViewInit() {
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    });
    this.ws.on('play', () => this.isPlaying.set(!this.isPlaying()));
    // this.ws.on('pause', () => this.isPlaying.set(false));
  }

  playPause(){
    this.ws.playPause();

  }

}
