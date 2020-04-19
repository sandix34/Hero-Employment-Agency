import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module'
import { HeroesModule }     from './heroes/heroes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  imports: [
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
