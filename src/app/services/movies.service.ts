import { Injectable } from '@angular/core';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  bannerMovies: Movies[] = [{
    title: 'F1',
    type: '',
    releaseYear: 2025,
    ageRating: '',
    duration: 0,
    rating: 0,
    posterUrl: '',
    trailerUrl: 'https://youtu.be/69ffwl-8pCU?si=LeEWs2uDJBCBFFO6',
    genres: [],
    description: '',
    availableOn: [],
    userReviews: []
  }];

  suggestionMovies: Movies[] = [];

  newInThisMonth: Movies[] = [];

  comedyMovies: Movies[] = [];

  dramaMovies: Movies[] = [];

  horrorMovies: Movies[] = [];

  actionMovies: Movies[] = [];

  animeMovies: Movies[] = [];

  constructor() { }
}
