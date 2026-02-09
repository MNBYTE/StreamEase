import { Component, OnInit } from '@angular/core';
import { WatchlistService } from './watchlist.service';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  public theMovies: any = [];
  constructor(private watchService: WatchlistService) {}
  ngOnInit(): void {
    this.watchService.getTheMovies().subscribe((res) => {
      this.theMovies = res;
    });
  }
  removeMovie(movie: any) {
    if (confirm('are you sure to delete')) this.watchService.removeMovie(movie);
    alert('record deleted successfully');
  }
  emptyWatchlater() {
    this.watchService.removeAllMovies();
  }
}
