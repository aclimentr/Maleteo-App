import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReserva } from './reserva.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  url: string = 'http://localhost:5000/reservas';


  constructor(private httpClient: HttpClient, private router: Router) { }

  getReservas(): Observable<IReserva[]> {
    return this.httpClient.get<IReserva[]>(this.url);
  }
  getReservasById(id: string): Observable<IReserva> {
    return this.httpClient.get<IReserva>(`${this.url}/${id}`);
  }
  createReservas(reserva: any): Observable<any> {
    return this.httpClient.post<IReserva>(this.url, reserva);
  }
  updateReservas(reserva: IReserva): Observable<IReserva> {
    return this.httpClient.put<IReserva>(`${this.url}/${reserva.user}`, reserva);
  }
  findCurrentReservas(): Observable<IReserva> {
    return this.httpClient.get<IReserva>(`${this.url}`);
  }


  httpOptions = {
    observe: 'response' as 'body'
  }
  deleteById(id: string): Observable<HttpResponse<{}>> {
    return this.httpClient.delete<HttpResponse<{}>>(`${this.url}/${id}`, this.httpOptions);
  }
  
}
