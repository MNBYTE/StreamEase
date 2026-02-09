import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { DiscoverComponent } from './components/discover/discover.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { ContactComponent } from './components/contact/contact.component';
import { DescriptionsComponent } from './components/discover/descriptions/descriptions.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FilterPipe } from './share/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DiscoverComponent,
    WatchlistComponent,
    ContactComponent,
    DescriptionsComponent,
    FeedbackComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
