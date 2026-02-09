import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  public watchItemLater: any = [];
  public moviesList = new BehaviorSubject<any>([]);
  constructor() {}
  getTheMovies() {
    return this.moviesList.asObservable();
  }
  setMovie(moviess: any) {
    this.watchItemLater.push(...moviess);
    this.moviesList.next(this.watchItemLater);
  }
  addToWatch(moviess: any) {
    this.watchItemLater.push(moviess);
    this.moviesList.next(this.watchItemLater);
  }
  removeMovie(moviess: any) {
    this.watchItemLater.map((a: any, index: any) => {
      if (a.id == moviess.id) this.watchItemLater.splice(index, 1);
    });
    this.moviesList.next(this.watchItemLater);
  }
  removeAllMovies() {
    this.watchItemLater = [];
    this.moviesList.next(this.watchItemLater);
  }
}
