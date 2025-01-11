import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'password';
  passwordLen: number = 5;
  lower: boolean = true;
  upper: boolean = true;
  numbers: boolean = true;
  special: boolean = true;
  generatedPassword: string = '';

  updatePasswordLength(event: Event) {
    const input = event.target as HTMLInputElement;
    const length = parseInt(input.value, 10);
    if (length < 5) {
      alert('At least 5 characters required');
      this.passwordLen = 5;
    } else {
      this.passwordLen = length || 5;
    }
  }

  toggleLower(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.lower = checkbox.checked;
  }

  toggleUpper(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.upper = checkbox.checked;
  }

  toggleNumbers(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.numbers = checkbox.checked;
  }

  toggleSpecial(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.special = checkbox.checked;
  }

  generatePassword() {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let charPool = '';
    if (this.lower) charPool += lowerCaseChars;
    if (this.upper) charPool += upperCaseChars;
    if (this.numbers) charPool += numberChars;
    if (this.special) charPool += specialChars;

    if (charPool.length === 0) {
      this.generatedPassword = 'Select at least one character type';
      return;
    }

    this.generatedPassword = Array.from({ length: this.passwordLen }, () =>
      charPool.charAt(Math.floor(Math.random() * charPool.length))
    ).join('');
  }
}
