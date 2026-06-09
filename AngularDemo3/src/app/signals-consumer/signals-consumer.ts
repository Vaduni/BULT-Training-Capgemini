import {
  Component,
  Input,
  input,
  computed
} from '@angular/core';

@Component({
  selector: 'app-signals-consumer',
  imports: [],
  templateUrl: './signals-consumer.html',
  styleUrl: './signals-consumer.css',
})
export class SignalsConsumer {

  // Signal Input

  status = input.required<string>();

  // Traditional Input

  @Input()
  user: {
    name: string;
    age: number;
  } = {
    name: 'Test User',
    age: 0
  };

  conusmerStatus = computed(() => {

    console.log(
      'Status changed:',
      this.status()
    );

    return this.status().toUpperCase();
  });

}