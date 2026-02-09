import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { DescriptionsComponent } from './components/discover/descriptions/descriptions.component';
import { ContactComponent } from './components/contact/contact.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'discover',
    component: DiscoverComponent,
  },
  {
    path: 'description',
    component: DescriptionsComponent,
  },
  { path: 'description/:id', component: DescriptionsComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'watchlist',
    component: WatchlistComponent,
  },
  { path: 'watchlist/:id', component: WatchlistComponent },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
