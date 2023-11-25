import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
// import { FooterComponent } from './layout/footer/footer.component';
import { AnunciosModule } from './anuncios/anuncios.module';
import { ReservasModule } from './reservas/reservas.module';
import { HomeComponent } from './layout/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersRoutingModule } from './users/users-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
// import { MapComponent } from './layout/map/map.component';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './layout/map/map.component';
// import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,

    HomeComponent,
    // FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnunciosModule,
    UsersModule,
    ReservasModule,
    BrowserAnimationsModule,
    UsersRoutingModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    GoogleMapsModule,
    AuthModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule



  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

