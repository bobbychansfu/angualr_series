import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person:any
  @Output() delete = new EventEmitter()

  constructor(){
    // this.person = {
    //   name: "bobby",
    //   age: 42,
    //   instructor: true,
    //   added_on: new Date().getTime()
    // }
  }

  onDelete(evt:any,person_name:string){
    evt["person_name"] = person_name
    // console.log(evt)
    this.delete.emit(evt)
  }
}
