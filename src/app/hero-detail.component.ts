import { Component,Input,OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'hero-detail',
  template:
    `<div *ngIf="hero">
    <h2>Da{{hero.name }} Details! </h2>
  <div> ID: {{hero.id }}</div>
  <label> Name: </label><input [(ngModel)]="hero.name" placeholder="name"/>
  {{test}}
  </div>`
})


export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero); }

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  
};
