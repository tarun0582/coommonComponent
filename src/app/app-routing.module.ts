import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/main/about', pathMatch: 'full' },

  {
    path:'main',

    loadChildren:()=>
    import('./modules/mainModule/main.module').then((res)=> res.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }