import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FirstModule } from './module/first.module';
import { SecondModule } from './module/second.module'; // Adjust the path
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, FirstModule, SecondModule], // Include SecondModule here
  bootstrap: [AppComponent],
})
export class AppModule {}
