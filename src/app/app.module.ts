import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroService } from './hero.service';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';




@NgModule({
  imports:  [
      BrowserModule,
    FormsModule,// <-- import the FormsModule before binding with [(ngModel)],
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  providers: [HeroService],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent,DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
