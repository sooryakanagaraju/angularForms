import {Component, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {StudentForm} from '../../models/studentForm';

@Component({
  selector: 'app-student',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent implements OnInit, ControlValueAccessor{
  studentForm: FormGroup<StudentForm>;

  constructor(private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group<StudentForm>({
      name: this.formBuilder.control<string>(""),
      age:this.formBuilder.control<string>(''),
      gender:this.formBuilder.control<string>(''),
    })
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }



}
