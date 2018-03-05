import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PlayersService } from './services/players.service';
import { PlayerService } from './services/player.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';


import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { TableComponent } from './table/table.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TeamService } from './services/team.service';


// Define the routes
const ROUTES = [
    // { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'player/:playerid', component: PlayerComponent },
    { path: 'team', component: TeamComponent },
    { path: 'game', component: GameComponent },
    { path: 'games', component: GamesComponent },
    { path: 'signup', component: SignupComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerComponent,
    GamesComponent,
    GameComponent,
    TableComponent,
    TeamComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) 
  ],
  providers: [
    PlayersService,
    PlayerService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
