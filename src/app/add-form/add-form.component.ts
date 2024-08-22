import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NameService } from '../services/name.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  empForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private nameService: NameService,
    private dialogRef: MatDialogRef<AddFormComponent>
  ) {
    this.empForm = this.fb.group({
      firstName: '',
      lastName: '',
      sex: '',
      phone: '',
    });
  }
  onFormSubmit() {
    if (this.empForm.valid) {
      this.nameService.addNames(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Names added successfully');
          this.dialogRef.close(true);
        },
        error: (error: any) => {
          console.error(error);
        },
      });
    }
  }
  ngOnInit(): void {}
}
