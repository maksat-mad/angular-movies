import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/Movie";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  movieService = inject(MovieService);
  subscriptions = new Subscription();
  pageLimit = 6;

  trendingMovies: Movie[] = [];
  trendingMoviesLoading = true;
  trendingMoviesPage = 6;

  topRatedMovies: Movie[] = [];
  topRatedMoviesLoading = true;
  topRatedMoviesPage = 6;

  upcomingMovies: Movie[] = [];
  upcomingMoviesLoading = true;
  upcomingMoviesPage = 6;

  languageButtonsInfo = [
    ['Hindi', '#E43109'],
    ['Bengali', '#5C5C5C'],
    ['Marathi', '#5C5C5C'],
    ['Assamese', '#5C5C5C'],
    ['Telugu', '#5C5C5C'],
    ['Tamil', '#E43109'],
    ['Malayalam', '#5C5C5C']
  ];

  ngOnInit(): void {
    this.trendingMoviesLoading = true;
    this.subscriptions.add(this.movieService.getTrendingMovies().subscribe(data => this.trendingMovies = data.results));
    this.trendingMoviesLoading = false;

    this.topRatedMoviesLoading = true;
    this.subscriptions.add(this.movieService.getTopRatedMovies().subscribe(data => this.topRatedMovies = data.results));
    this.topRatedMoviesLoading = false;

    this.upcomingMoviesLoading = true;
    this.subscriptions.add(this.movieService.getUpcomingMovies().subscribe(data => this.upcomingMovies = data.results));
    this.upcomingMoviesLoading = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  trendingMoviesPageHandle(show: boolean) {
    if (show) {
      this.trendingMoviesPage += this.pageLimit;
      return;
    }
    this.trendingMoviesPage -= this.pageLimit;
  }

  topRatedMoviesPageHandle(show: boolean) {
    if (show) {
      this.topRatedMoviesPage += this.pageLimit;
      return;
    }
    this.topRatedMoviesPage -= this.pageLimit;
  }

  upcomingMoviesPageHandle(show: boolean) {
    if (show) {
      this.upcomingMoviesPage += this.pageLimit;
      return;
    }
    this.upcomingMoviesPage -= this.pageLimit;
  }
}
