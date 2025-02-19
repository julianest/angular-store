import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@shared';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
