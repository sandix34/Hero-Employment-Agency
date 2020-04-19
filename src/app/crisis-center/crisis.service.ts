import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  constructor() {}

  getCrises(): Observable<Crisis[]> {   
    return of(CRISES); 
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id))
    );
  }
}
