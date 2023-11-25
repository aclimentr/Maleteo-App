import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservas-list',
  templateUrl: './reservas-list.component.html',
  styleUrls: ['./reservas-list.component.scss']
})
export class ReservasListComponent implements OnInit {
  reserva: any;

  constructor(private reservaService: ReservaService, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id']
    if (!id) return;
    this.reservaService.getReservasById(id).subscribe((reserva)=>{
      this.reserva = reserva;
      console.log(reserva);
      
    })
  });
  }


}
