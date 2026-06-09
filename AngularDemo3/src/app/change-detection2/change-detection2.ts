import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection2',
  imports: [],
  templateUrl: './change-detection2.html',
  styleUrl: './change-detection2.css'
})
export class ChangeDetection2 {

  message = 'Angular Change Detection';

  updateMessage()
  {
    this.message = 'Message Updated';
  }

}