import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
    {
        path: '',
        component:MainComponent,
        children: [
          {path: "about", component:AboutComponent},
          {path: "contact",component:ContactComponent},
          {path: "main",component:ContactComponent},
        ],
      },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }