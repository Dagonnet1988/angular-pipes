import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css']
})
export class NumbersPageComponent {
  public decimal: number = 1618525.6445;
  public currency: number = 125.45864;
  public percent: number = 0.53587;

}
