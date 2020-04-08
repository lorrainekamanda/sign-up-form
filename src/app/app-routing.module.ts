import { FormComponent } from './form/form.component';
import { FinishComponent } from './finish/finish.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  {path:'home',component:FormComponent},
  { path:'signin',component:SigninComponent},
  { path:'login', component:FinishComponent}
  // {path:'**',component:NotFoundComponent},
  //  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
