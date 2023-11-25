import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';
import { ReservasListComponent } from './reservas-list/reservas-list.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnunciosModule } from '../anuncios/anuncios.module';
import { FooterComponent } from '../layout/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ReservaFormComponent, ReservasListComponent,FooterComponent],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    AuthRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    AnunciosModule,
    JsonPipe,MatToolbarModule,MatButtonModule
  ],
  exports: [ReservaFormComponent, ReservasListComponent,FooterComponent ],
})
export class ReservasModule {}
