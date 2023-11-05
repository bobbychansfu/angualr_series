import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  people
  query:string

  constructor() {
    this.query = ''

    this.people = [
      {
        name: "bobby",
        age: 42,
        instructor: true,
        added_on: new Date().getTime()
      },
      {
        name: "sarah",
        age: 42,
        instructor: true,
        added_on: new Date().getTime()
      },
      {
        name: "steve",
        age: 42,
        instructor: true,
        added_on: new Date().getTime()
      },
      {
        name: "jane",
        age: 42,
        instructor: true,
        added_on: new Date().getTime()
      },
      {
        name: "jacob",
        age: 42,
        instructor: true,
        added_on: new Date().getTime()
      }
    ]
  }

  onPersonDelete(evt:{person_name:string}) {
    let del_per_name = evt.person_name
    this.people = this.people.filter((p:{name:string})=> p.name != del_per_name)
    console.log(`person ${evt.person_name} just got deleted!`)
  }
}
