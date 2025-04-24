import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = signal('My First Angular App');
  // title = 'My First Angular App'; // This is the traditional way of declaring a variable in Angular
  
}
