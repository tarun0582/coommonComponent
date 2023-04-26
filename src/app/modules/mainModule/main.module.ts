import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainRoutingModule } from './main-routing.module';
import { CommonDataModule } from '../common/common.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainComponent,AboutComponent,ContactComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    CommonDataModule,
    ReactiveFormsModule
  ],
  exports:[
  ] 

})
export class MainModule { }