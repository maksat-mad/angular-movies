import { Component } from '@angular/core';

interface BigButtonInfo {
  text: string,
  icon: string,
  bgColor: string
}

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.scss']
})
export class MovieCoverComponent {
  menuIcons = ['users.png', 'list.png', 'download.png', 'settings.png'];
  buttons:BigButtonInfo[] = [
    {
      text: 'watch',
      icon: 'Vector.png',
      bgColor: '#5436A9'
    },
    {
      text: 'my list',
      icon: '+.png',
      bgColor: '#5C5C5C'
    }
  ];
}
