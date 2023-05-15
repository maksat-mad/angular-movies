import {Component, inject, OnDestroy} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  movieService = inject(MovieService);
  subscriptions = new Subscription();
  links = ['home', 'tv show', 'movies', 'new'];
  iconLinks = ['gift%201.png', 'bell%201.png'];
  userInput = '';

  inputChange(query:string) {
    this.userInput = query;
    this.movieService.query.next(query);
    this.subscriptions.add(this.movieService.getMoviesByQuery().subscribe(data => {
      this.movieService.queryResults.next(data.results);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
