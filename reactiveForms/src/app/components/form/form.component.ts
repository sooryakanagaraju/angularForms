import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { StudentModel} from '../../models/studentForm';
import { SkillModel} from '../../models/skillForm';
import {MainForm} from '../../models/mainForm';
import {StudentComponent} from '../student/student.component';
import {SkillComponent} from '../skill/skill.component';

interface mainForm{
  studentForm:FormControl<StudentModel | null>;
  skill:FormControl<SkillModel | null>;
}

@Component({
  selector: 'app-form',
  imports: [
    StudentComponent,
    ReactiveFormsModule,
    SkillComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})


export class FormComponent implements OnInit{

  mainForm : FormGroup<mainForm>;

  constructor(private formBuilder: FormBuilder) {
      this.mainForm = this.formBuilder.group<MainForm>({
      studentForm : this.formBuilder.control<StudentModel | null>(null),
      skill: this.formBuilder.control<SkillModel | null>(null)
    }) as FormGroup
  }

  ngOnInit(): void {
  }

}
