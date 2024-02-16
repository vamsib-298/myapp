import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { FirstComponent } from '../first/first.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, FormsModule], // Import FormsModule here
})
export class FirstModule {}
