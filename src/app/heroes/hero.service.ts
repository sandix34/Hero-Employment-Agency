import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  // method to return the mock heroes.
  getHeroes(): Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
    return of(HEROES);
  }
}
