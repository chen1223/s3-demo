import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';


const routes: Routes = [
  {
    path: 'dog/:name',
    component: DogDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
