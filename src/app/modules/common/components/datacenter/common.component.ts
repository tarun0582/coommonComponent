import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',

})
export class DataCenterComponent {
@Input() type=''
@Input() FormControl:any
@Input() placeholder=''
@Input() label:any
@Input() formGroup :FormGroup | any
@Input() firstControlName:any;
constructor(){}
}
  
    




