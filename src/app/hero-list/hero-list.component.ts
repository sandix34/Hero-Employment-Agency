import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  // simple declaration
  heroes: Hero[];

  // Add a private heroService parameter of type HeroService to the constructor.
  constructor(private heroService: HeroService) { }
  
  // function to retrieve the heroes from the service
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // call getHeroes() inside the ngOnInit lifecycle hook
  ngOnInit(): void {
    this.getHeroes();
  }

}
