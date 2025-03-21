import { Injectable } from '@angular/core';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  bannerMovies: Movies[] = [
    {
      id: 0,
      title: 'F1',
      type: 'Movie',
      releaseYear: 2025,
      ageRating: '13+',
      duration: 0,
      rating: 0,
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      trailerUrl: 'https://youtu.be/69ffwl-8pCU?si=LeEWs2uDJBCBFFO6',
      genres: ['Action'],
      description: '',
      availableOn: ['none'],
      userReviews: []
    }
  ];

  suggestionMovies: Movies[] = [{
    title: 'ARCANE',
    type: 'Movie',
    releaseYear: 2025,
    ageRating: '13+',
    duration: 40,
    rating: 9.0,
    posterUrl: 'assets/poster/suggestion/ARCANE.png',
    trailerUrl: 'https://youtu.be/69ffwl-8pCU?si=LeEWs2uDJBCBFFO6',
    genres: ['Action'],
    description: '',
    availableOn: ['Netfilx'],
    userReviews: [],
    id: 0
  }, {
    title: 'MEN In Black International',
    type: '',
    releaseYear: 0,
    ageRating: '',
    duration: 0,
    rating: 7.3,
    posterUrl: 'assets/poster/suggestion/MIB.png',
    trailerUrl: '',
    genres: [],
    description: '',
    availableOn: [],
    userReviews: [],
    id: 1
  }, {
    title: 'Stranger Things',
    type: '',
    releaseYear: 0,
    ageRating: '',
    duration: 0,
    rating: 8.7,
    posterUrl: 'assets/poster/suggestion/stanger.png',
    trailerUrl: '',
    genres: [],
    description: '',
    availableOn: [],
    userReviews: [],
    id: 2
  }, {
    title: 'The SpiderVerse',
    type: '',
    releaseYear: 0,
    ageRating: '',
    duration: 0,
    rating: 8.6,
    posterUrl: 'assets/poster/suggestion/spiderman.png',
    trailerUrl: '',
    genres: [],
    description: '',
    availableOn: [],
    userReviews: [],
    id: 3
  }];

  newInThisMonth: Movies[] = [
    {
      id: 0,
      title: 'F1',
      type: 'Movie',
      releaseYear: 2025,
      ageRating: '13+',
      duration: 0,
      rating: 0,
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      trailerUrl: 'https://youtu.be/69ffwl-8pCU?si=LeEWs2uDJBCBFFO6',
      genres: ['Action'],
      description: '',
      availableOn: ['none'],
      userReviews: []
    }, {
      id: 0,
      title: 'Titanic',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.9,
      posterUrl: 'assets/poster/drama/titanic.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'John Wick Chapter 4',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.6,
      posterUrl: 'https://i.etsystatic.com/51729090/r/il/4a8b9b/5991845025/il_570xN.5991845025_5u87.jpg',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'KiKi Delivery Service',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.8,
      posterUrl: 'assets/poster/anime/kiki.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }
  ];

  comedyMovies: Movies[] = [
    {
      id: 0,
      title: 'White Chicks',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 5.8,
      posterUrl: 'assets/poster/comedy/chick.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'Ted',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.9,
      posterUrl: 'assets/poster/comedy/ted.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'Mr.Beans Holiday',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 6.4,
      posterUrl: 'assets/poster/comedy/Bean.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'Scary Movie',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 6.3,
      posterUrl: 'assets/poster/comedy/sm.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }
  ];

  dramaMovies: Movies[] = [
    {
      id: 0,
      title: 'Knives Out',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.9,
      posterUrl: 'assets/poster/drama/knives.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'Titanic',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.9,
      posterUrl: 'assets/poster/drama/titanic.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'Stronger',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 6.9,
      posterUrl: 'assets/poster/drama/stornger.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'The Truman Show',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 8.2,
      posterUrl: 'assets/poster/drama/truman.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }
  ];

  horrorMovies: Movies[] = [
    {
      id: 0,
      title: 'Evil Dead',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 6.5,
      posterUrl: 'assets/poster/horror/evil.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'Silent Hill',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 6.5,
      posterUrl: 'assets/poster/horror/silenthill.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'The Ring',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.1,
      posterUrl: 'assets/poster/horror/thering.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'Saw',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.6,
      posterUrl: 'assets/poster/horror/Saw.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }
  ];

  actionMovies: Movies[] = [
    {
      id: 0,
      title: 'John Wick Chapter 4',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.6,
      posterUrl: 'https://i.etsystatic.com/51729090/r/il/4a8b9b/5991845025/il_570xN.5991845025_5u87.jpg',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'Bad Boys: Ride Or Die',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 6.6,
      posterUrl: 'assets/poster/action/Badboy.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'Mad Max Fury Road',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 8.1,
      posterUrl: 'assets/poster/action/madmax.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'Fast & Furious',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 6.5,
      posterUrl: 'assets/poster/action/Fast.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }
  ];

  animeMovies: Movies[] = [
    {
      id: 0,
      title: 'Suzume',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.6,
      posterUrl: 'assets/poster/anime/suzume.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'KiKi Delivery Service',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.8,
      posterUrl: 'assets/poster/anime/kiki.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'Grave of the Fireflies',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 8.5,
      posterUrl: 'assets/poster/anime/Grave.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }, {
      id: 0,
      title: 'The Boy and The Hero',
      type: '',
      releaseYear: 0,
      ageRating: '',
      duration: 0,
      rating: 7.4,
      posterUrl: 'assets/poster/anime/Theboy.png',
      trailerUrl: '',
      genres: [],
      description: '',
      availableOn: [],
      userReviews: []
    }
  ];

  getMovieById(id: number): Movies | undefined {
    return this.suggestionMovies.find(movies => movies.id === id);
  }

  constructor() { }
}
