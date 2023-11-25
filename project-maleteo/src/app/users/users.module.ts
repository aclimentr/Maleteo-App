import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from '../auth/login/login.component';
import { UsersRoutingModule } from './users-routing.module';
// import { RegisterComponent } from './user-register/user-register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { UsersListComponent } from './user-list/user-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JwtInterceptor } from '../auth/jwt.interceptor';
import { ReservasModule } from '../reservas/reservas.module';
import { AnunciosModule } from '../anuncios/anuncios.module';
// import { FooterComponent } from '../layout/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    UserProfileComponent,
    UsersListComponent,
    // FooterComponent

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,ReservasModule,AnunciosModule,MatToolbarModule

  ],
  exports:[
    UserProfileComponent,
    UsersListComponent,
    // FooterComponent
  ],providers: [
   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
})
export class UsersModule { }
