import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  httpClient = inject(HttpClient);
  BASE_URL = "https://api.themoviedb.org/3";
  API_KEY = "406a61a1c4bc9cf0c54b2373f74085ce";

  getTrendingMovies(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/trending/movie/week?api_key=${this.API_KEY}`);
  }

  getTopRatedMovies(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/movie/top_rated?api_key=${this.API_KEY}`);
  }

  getUpcomingMovies(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/movie/upcoming?api_key=${this.API_KEY}`);
  }
}
