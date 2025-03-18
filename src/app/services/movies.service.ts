import { Injectable } from '@angular/core';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  suggestionMovies: Movies[] = [];

  newInThisMonth: Movies[] = [];
  
  comedyMovies: Movies[] = [];

  dramaMovies: Movies[] = [];

  horrorMovies: Movies[] = [];

  actionMovies: Movies[] = [];

  animeMovies: Movies[] = [];

  constructor() { }
}
