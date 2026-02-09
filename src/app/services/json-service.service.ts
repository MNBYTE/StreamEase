import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JsonServiceService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get('assets/movies.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
