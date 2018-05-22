import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JavaScript';
  name = 'Jessie';
  list = [
    '리스트1',
    '리스트2',
    '리스트3'
  ]
}
