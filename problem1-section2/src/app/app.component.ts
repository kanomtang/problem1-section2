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
  mathematicSelected: string = 'Prime'
  calculatedResult: boolean = false

  // Options select
  mathematicsOption = [
    {text: 'isPrime', value: 'Prime'},
    {text: 'isFibonacci', value: 'fibonacci'},
  ]

  // Function
  onBlurInputNumber(event) {
    const numberFromInputField = event.target.value as number
    if (numberFromInputField < 0) {
      this.inputNumber = 1
    } else {
      this.inputNumber = Math.round(numberFromInputField)
    }
    this.calculateResult()
  }

  // Prime number function
  isPrime() {
    for(let i = 2, s = Math.sqrt(this.inputNumber); i <= s; i++)
        if(this.inputNumber % i === 0) return false; 
    return this.inputNumber > 1;
  }

  // Fibonacci number function
  isFibonacci() {
    let a = (5 * Math.pow( this.inputNumber, 2) + 4),
        b = (5 * Math.pow( this.inputNumber, 2) - 4)
  
    var leftSideResult = Math.sqrt(a) % 1 == 0,
    rightSideResult = Math.sqrt(b) % 1 == 0;
  
    return (leftSideResult || rightSideResult == true)
  }

  calculateResult() {
    if (this.mathematicSelected === 'Prime') {
      this.calculatedResult = this.isPrime()
    } else {
      this.calculatedResult = this.isFibonacci()
    }
  }

  get result() {
    return this.calculatedResult
  }
}
