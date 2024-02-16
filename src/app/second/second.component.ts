import { Component, Input } from '@angular/core';

interface User {
  username: string;
  gender: string;
  email: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-second-page',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondPageComponent {
  @Input()
  user!: User;
}
