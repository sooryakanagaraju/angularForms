import {FormControl} from '@angular/forms';

export interface SkillForm{
  skill: FormControl<string | null>;
}

export interface SkillModel{
  skill: string;
}
