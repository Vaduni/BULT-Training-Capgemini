import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection-demo',
  imports: [],
  templateUrl: './change-detection-demo.html',
  styleUrl: './change-detection-demo.css'
})
export class ChangeDetectionDemo {

  counter = 0;

  increment()
  {
    this.counter++;
  }

}