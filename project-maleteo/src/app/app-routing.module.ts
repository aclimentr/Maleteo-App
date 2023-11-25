import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ReservasListComponent } from './reservas/reservas-list/reservas-list.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { ReservaFormComponent } from './reservas/reserva-form/reserva-form.component';
import { AnunciosFormComponent } from './anuncios/anuncios-form/anuncios-form.component';
import { AnuncioDetailComponent } from './anuncios/anuncio-detail/anuncio-detail.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent

  },
  {
    path: 'home', component: ReservaFormComponent

  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'reservar', component: ReservaFormComponent
  },
  {
    path: 'users', component: UserProfileComponent
  },
  {
    path: 'anuncios', component: AnunciosFormComponent
  },
  {
    path:'list',
    loadChildren: () => import('./anuncios/anuncios-routing.module').then(m => m.AnunciosRoutingModule)
  },{
  
  
    path: 'detail/:id', component: AnuncioDetailComponent
  },{
  
  
    path: 'reserva/:id', component: ReservasListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
