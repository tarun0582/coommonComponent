import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataCenterComponent } from './components/datacenter/common.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DataCenterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
    
  ],
  exports:[
    DataCenterComponent
  ] 

})
export class CommonDataModule { }