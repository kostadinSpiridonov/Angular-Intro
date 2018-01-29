import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/RX';

@Component({
  selector: 'rb-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  genders = [
    'male',
    'female'
  ];

  ngOnInit() {
  }

  constructor(formBuilder: FormBuilder) {
    //   this.myForm = new FormGroup({
    //     'userData': new FormGroup({
    //       'firstName': new FormControl(),
    //       'secondName': new FormControl()
    //     }),
    //     'username': new FormControl('', [Validators.required, Validators.maxLength(20)]),
    //     'password': new FormControl('', Validators.required),
    //     'gender': new FormControl('male'),
    //     'hobbies': new FormArray([
    //       new FormControl('Cooking', Validators.required)
    //     ])
    //   });

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'firstName': ['', this.exampleValidator],
        'secondName': []
      }),
      'username': ['', [Validators.required, Validators.maxLength(20)]],
      'password': ['', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array(
        [
          ['Cooking', Validators.required, this.asyncExampleValidator]
        ]
      )
    });

    // Executes the callback when some of the values is changed
    // this.myForm.valueChanges.subscribe(
    //   (data: any) => console.log(data)
    // );

    // Executes the callback when the valid status is changed
    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  onAddHobby() {
    (<FormArray>this.myForm.get('hobbies')).push(new FormControl('', Validators.required));
  }

  exampleValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Example') {
      return { example: true };
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({ 'invalid': true });
          }else {
            resolve(null);
          }
        }, 3000);
      });

    return promise;
  }
}
