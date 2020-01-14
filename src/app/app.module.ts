import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './siteElements/nav-bar/nav-bar.component';
import { MembersComponent } from './pages/members/members.component';
import { PopularGamesComponent } from './pages/popular-games/popular-games.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { CreateAricleComponent } from './pages/create-article/create-aricle.component';
import { ButtonhoverDirective } from './directives/buttonhover.directive';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MembersComponent,
    PopularGamesComponent,
    HomeComponent,
    NewsComponent,
    CreateAricleComponent,
    ButtonhoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
