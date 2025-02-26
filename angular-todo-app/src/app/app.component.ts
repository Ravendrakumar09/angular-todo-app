import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports:[BrowserModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  inputData:string= '';
  displayedData:string = '';

  addTodo(){
    this.displayedData = this.inputData;
    this.inputData = '';
  }
}