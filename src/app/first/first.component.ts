import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  formData: any = {};

  constructor(private router: Router) {}

  navigateToNewPage() {
    // Assuming you have a route '/second-component/:username/:gender/:email'
    const routeParams = {
      username: this.formData.username,
      gender: this.formData.gender,
      email: this.formData.email
    };

    this.router.navigate(['/second-component', routeParams]);
  }
}
