import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-person-add-form',
  templateUrl: './person-add-form.component.html',
  styleUrls: ['./person-add-form.component.css']
})
export class PersonAddFormComponent {
  form: FormGroup
  constructor(){
    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        this.forbiddenNameValidator as ValidatorFn
      ]),
      instructor: new FormControl(),
      age: new FormControl()
    }
    this.form = new FormGroup(formControls, {validators: [this.formValidator]})
  }

  formValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const name = control.get("name")
    const ins = control.get("instructor")
    const valid_instructor_names = ['bobby','steve','mary']
    return valid_instructor_names.includes(name!.value.trim()) && ins!.value || !ins!.value ?
                null : { form_error: true }
  }

  forbiddenNameValidator(control: FormControl) {
    var invalid_names = ['stupid','freak','hell','idiot']
    if (invalid_names.includes(control.value.trim())) {
      return { name_error: "Your name cannot be " + control.value.trim() }
    }
    else {
      return null
    }
  }

  onSubmit(newPerson:any) {
    console.log(newPerson)
  }
}
