import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from 'src/app/services/json-service.service';
import { WatchlistService } from '../watchlist/watchlist.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  moviesList: any[] = [];
  public filterMovieType: any;
  public filteredMovies: any[] = [];
  public sortedData: any;
  public searchTerm!: string;
  constructor(
    private json: JsonServiceService,
    private watchservicee: WatchlistService
  ) {}
  ngOnInit(): void {
    this.json.getMovies().subscribe((res: any) => {
      console.log(JSON.stringify(res));
      this.moviesList = res;
      this.filterMovieType = res;
      this.filteredMovies = res;
    });
  }
  filterGenre(genre: string) {
    this.filterMovieType = this.moviesList.filter((a: any) => {
      if (a.genre == genre || genre == '') {
        return a;
      }
    });
  }
  filterYear(year: string) {
    this.filterMovieType = this.moviesList.filter((a: any) => {
      if (a.year == year || year == '') {
        return a;
      }
    });
  }
  sortDataAlphabetically() {
    this.filterMovieType = this.moviesList
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
  }
  filterStreamProvider(streamProvider: string) {
    this.filterMovieType = this.moviesList.filter((a: any) => {
      if (a.streamProvider == streamProvider || streamProvider == '') {
        return a;
      }
    });
  }

  addToWatch(movie: any) {
    this.watchservicee.addToWatch(movie);
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
  }
}
