import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number= 0;
  @Input({required: true}) message: string= '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor(){
    //Thinks No Async
    //Before render
    //Run one time
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    //Before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration']; //aqui traemos el valor de la constante que estan en about
    console.log(duration);
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
  }

  ngOnInit(){
    //Ater Render
    //run one time
    //async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    // this.counterRef = window.setInterval(() => {
    //   console.log('run interval');
    //   this.counter.update(statePrev => statePrev +1)
    // }, 1000);
  }

  ngAfterViewInit(){
    //After render
    // hijos ya fueron pintados.
    //va despues del ngOnInit
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    //Puede destruirse con un if.
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomething(){
    //async;
    console.log('change duration');
    window.clearInterval(this.counterRef);
  }
}
