import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponent } from './components/details-component/details-component';
import { UpdateComponent } from './components/update-component/update-component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'create',component:CreateComponent},
  {path:'details/:id/:nombre/:localidad',component:DetailsComponent},
  {path:'update/:id',component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
