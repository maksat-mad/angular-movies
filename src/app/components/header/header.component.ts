import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links = ['home', 'tv show', 'movies', 'new'];
  iconLinks = ['gift%201.png', 'bell%201.png'];
}
