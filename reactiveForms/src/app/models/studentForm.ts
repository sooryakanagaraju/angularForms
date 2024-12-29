import {FormControl} from '@angular/forms';

export interface StudentForm{
  name:FormControl<string | null>;
  age:FormControl<string | null>;
  gender:FormControl<string | null>;
}

export interface StudentModel{
  name : string;
  age : string;
  gender : string;
}
