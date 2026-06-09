import {
  Component,
  signal,
  computed,
  effect
} from '@angular/core';

import { SignalsConsumer } from '../signals-consumer/signals-consumer';

@Component({
  selector: 'app-signals-demo',
  imports: [SignalsConsumer],
  templateUrl: './signals-demo.html',
  styleUrl: './signals-demo.css',
})
export class SignalsDemo {

  // Basic Signal

  counter = signal(0);

  increment() {
    this.counter.update(value => value + 1);
  }

  constructor() {

    effect(() => {

      console.log(
        'Counter value changed:',
        this.counter()
      );

      this.functionToRunOnCounterChange(
        this.counter()
      );
    });
  }

  functionToRunOnCounterChange(
    counterValue: number
  ) {

    if (counterValue % 5 === 0) {

      console.log(
        'Counter value is now a multiple of 5:',
        counterValue
      );
    }
  }

  ngOnInit() {

    console.log(
      'Initial Counter:',
      this.counter()
    );
  }

  // Computed Signal

  doubleCounter = computed(() => {

    if (this.counter() % 2 === 0) {

      console.log(
        'Counter is even:',
        this.counter()
      );
    }

    return this.counter() * 2;
  });

  // Parent Data

  currentUser = signal({
    name: 'John Doe',
    age: 30
  });

  currentStatus = signal('active');

  toggleStatus() {

    this.currentStatus.update(status =>
      status === 'active'
        ? 'idle'
        : 'active'
    );

    this.currentUser.update(user => ({
      ...user,
      age: user.age + 1
    }));

    console.log(
      'Status:',
      this.currentStatus()
    );

    console.log(
      'User:',
      this.currentUser()
    );
  }
}