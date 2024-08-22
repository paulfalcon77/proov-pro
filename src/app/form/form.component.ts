import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  getValue(f: NgModel) {
    console.log(f);
  }

  ngOnInit(): void {}
}
