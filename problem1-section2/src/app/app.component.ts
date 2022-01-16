import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'problem1-section2';

  // Data
  inputNumber: number = null

  // Function
  onBlurInputNumber(event) {
    const numberFromInputField = event.target.value as number
    if (numberFromInputField < 0) {
      this.inputNumber = 1
    } else {
      this.inputNumber = Math.floor(numberFromInputField)
    }
    // TODO: Update result value
  }
}
