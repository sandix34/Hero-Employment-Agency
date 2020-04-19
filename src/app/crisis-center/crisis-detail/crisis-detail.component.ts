import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CrisisService }  from '../crisis.service';
import { Crisis } from '../crisis';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  // The prop$ dollar suffix is generally used to indicate something is an Observable source.
  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCrisis(params.get('id')))
    );
  }

  gotoCrises(crisis: Crisis) {
    let crisisId = crisis ? crisis.id : null;
    this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo' }]);
  }
}
