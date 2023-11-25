import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnunciosListComponent } from './anuncios-list/anuncios-list.component';

const routes: Routes = [
  
  { 
    path: '', component: AnunciosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnunciosRoutingModule { }
