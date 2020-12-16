import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './pages/members/members.component';
import { PopularGamesComponent } from './pages/popular-games/popular-games.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { CreateAricleComponent } from './pages/create-article/create-aricle.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'popularGames',
    component: PopularGamesComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/createArticle/:title',
    component: CreateAricleComponent
  },
  {
    path: 'news/createArticle',
    component: CreateAricleComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
