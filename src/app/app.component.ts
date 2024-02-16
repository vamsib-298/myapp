import { Component } from '@angular/core';

interface User {
user: any;
  username: string;
  gender: string;
  email: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = {
    username: '',
    gender: '',
    email: '',
    phoneNumber: '',
    user: undefined
  };

  genderOptions = ['Male', 'Female', 'Other'];

  onSubmit() {
    // Perform necessary validations here if you want
    console.log('User details:', this.user);
    this.navigateToSecondPage(); // Call your navigation function
  }

  navigateToSecondPage() {
    // Implement your navigation logic here (e.g., using a router)
    // Example:
    // router.navigate(['/second-page']);
  }
}
