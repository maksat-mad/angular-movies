import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Movie} from "../models/Movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  httpClient = inject(HttpClient);
  BASE_URL = "https://api.themoviedb.org/3";
  API_KEY = "406a61a1c4bc9cf0c54b2373f74085ce";

  movie = new BehaviorSubject<any>({
    "adult": false,
    "backdrop_path": "/jHxCeXnSchAuwHnmVatTgqMYdX8.jpg",
    "belongs_to_collection": {
      "id": 556,
      "name": "Spider-Man Collection",
      "poster_path": "/3BePoRxiaWcfFcUdZi4bveQJN97.jpg",
      "backdrop_path": "/waZqriYTuBE3WqXI3SDGi3kfDQE.jpg"
    },
    "budget": 139000000,
    "genres": [
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "homepage": "https://www.sonypictures.com/movies/spiderman",
    "id": 557,
    "imdb_id": "tt0145487",
    "original_language": "en",
    "original_title": "Spider-Man",
    "overview": "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
    "popularity": 79.907,
    "poster_path": "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
    "production_companies": [
      {
        "id": 19551,
        "logo_path": "/2WpWp9b108hizjHKdA107hFmvQ5.png",
        "name": "Marvel Enterprises",
        "origin_country": "US"
      },
      {
        "id": 326,
        "logo_path": null,
        "name": "Laura Ziskin Productions",
        "origin_country": ""
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "US",
        "name": "United States of America"
      }
    ],
    "release_date": "2002-05-01",
    "revenue": 821708551,
    "runtime": 121,
    "spoken_languages": [
      {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
      }
    ],
    "status": "Released",
    "tagline": "With great power comes great responsibility.",
    "title": "Spider-Man",
    "video": false,
    "vote_average": 7.267,
    "vote_count": 17083
  });
  query = new BehaviorSubject<string>('');

  queryResults = new BehaviorSubject<Movie[]>([]);

  queryResultsLoading = true;

  getTrendingMovies(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/trending/movie/week?api_key=${this.API_KEY}`);
  }

  getTopRatedMovies(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/movie/top_rated?api_key=${this.API_KEY}`);
  }

  getUpcomingMovies(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/movie/upcoming?api_key=${this.API_KEY}`);
  }

  getMoviesByQuery(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${this.query.value}`)
      .pipe(tap(() => this.queryResultsLoading = false));
  }
}
