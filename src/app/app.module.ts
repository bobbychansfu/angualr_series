import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ColorsDirective } from './colors.directive';
import { CountPeoplePipe } from './count-people.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PeopleListComponent,
    ColorsDirective,
    CountPeoplePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
