import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl,FormControlName} from '@angular/forms';
import { FORMCONTROL_NAMES,FORMCONTROL_TYPES ,FORMCONTROL_LABLE, REGEX } from 'src/app/core/constant';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']

})
export class AboutComponent {
aboutDetails() {
console.log(this.aboutForm.value)
}
formControlNames=FORMCONTROL_NAMES
formcontroltypes=FORMCONTROL_TYPES
formLable=FORMCONTROL_LABLE
textPlaceholder:string='enter any text'
name:FormControlName | undefined
aboutForm: FormGroup | any ;
  constructor(private fb: FormBuilder){
    this.aboutForm = this.fb.group({
      email: ['',Validators.compose([Validators.required, Validators.pattern(REGEX.EMAIL)])],
      password:['',Validators.compose([Validators.required, Validators.pattern(REGEX.PASSWORD)])]
    })
  }
  submit(){
    if ((this.aboutForm as FormGroup).valid) {
     console.log(this.aboutForm.value)
    }
    else {
      Object.keys(this.aboutForm.controls).forEach(key => this.aboutForm.controls[key].markAsTouched({ onlySelf: true }))
    }
  }
  }
 


