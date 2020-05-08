import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersService } from './services/github-followers.service';
import { HttpModule } from '@angular/http';
import { ArchiveComponent } from './archive/archive.component';
@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    HomeComponent,
    NavbarComponent,
    GithubFollowersComponent,
    PostsComponent,
    NotFoundComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '',
        component: HomeComponent 
      },
      { path: 'archive/:year/:month',
      component: ArchiveComponent 
      },
      { path: 'followers/:id/:username',
      component: GithubProfileComponent 
      },
      { path: 'followers',
        component: GithubFollowersComponent 
      },
      { path: 'posts',
        component: PostsComponent
      },
      { path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
