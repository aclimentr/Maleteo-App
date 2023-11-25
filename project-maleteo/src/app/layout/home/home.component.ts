import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public isTarifa: boolean = false;
  public isHome: boolean = true;
  public isPrecio: boolean = false;
  public isNot: boolean = true;
  public option: string = '';

  
  constructor(private router: Router) {}

  toggleHome(): void {
    this.isHome = !this.isHome;
  }
  home(): void {
    this.toggleHome();
  }

  toggleTarifa(): void {
    this.isTarifa = !this.isTarifa;
  }
  tarifa(): void {
    this.toggleTarifa();
  }

  togglePrecio(): void {
    this.isPrecio = !this.isPrecio;
    this.isNot = false;
  }
  precio(): void {
    
    this.togglePrecio();
  }

  consultarPrecios(): void {
    this.isHome = false;
    this.isTarifa = false;
    this.isPrecio = true;    
  }
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
  navigateToBooking(): void {
    this.router.navigate(['/booking']);
  }
  navigateToUsers(): void {
    this.router.navigate(['/users']);
  }

  continents = [
    { value: 'europa-0', viewValue: 'Europa' },
    { value: 'eeuu-1', viewValue: 'EE.UU' },
    { value: 'latinoamerica-2', viewValue: 'Latinoamerica' },
  ];
  
}

