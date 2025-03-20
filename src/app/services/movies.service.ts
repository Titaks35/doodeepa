import { Injectable } from '@angular/core';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  bannerMovies: Movies[] = [{
    title: 'F1',
    type: 'Movie',
    releaseYear: 2025,
    ageRating: '',
    duration: 0,
    rating: 0,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    trailerUrl: 'https://youtu.be/69ffwl-8pCU?si=LeEWs2uDJBCBFFO6',
    genres: [],
    description: '',
    availableOn: [],
    userReviews: []
  },{
    title: '22222',
    type: '',
    releaseYear: 0,
    ageRating: '',
    duration: 0,
    rating: 0,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    trailerUrl: '',
    genres: [],
    description: '',
    availableOn: [],
    userReviews: []
  },{
    title: '33333',
    type: '',
    releaseYear: 0,
    ageRating: '',
    duration: 0,
    rating: 0,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    trailerUrl: '',
    genres: [],
    description: '',
    availableOn: [],
    userReviews: []
  },{
    title: '44444',
    type: '',
    releaseYear: 0,
    ageRating: '',
    duration: 0,
    rating: 0,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    trailerUrl: '',
    genres: [],
    description: '',
    availableOn: [],
    userReviews: []
  }
  ];

  suggestionMovies: Movies[] = [];

  newInThisMonth: Movies[] = [];

  comedyMovies: Movies[] = [];

  dramaMovies: Movies[] = [];

  horrorMovies: Movies[] = [];

  actionMovies: Movies[] = [];

  animeMovies: Movies[] = [];

  constructor() { }
}
