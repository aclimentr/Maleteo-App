import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button'
import { RadioButtonModule } from 'primeng/radiobutton';
import { GalleriaModule } from 'primeng/galleria';
import { AnunciosRoutingModule } from './anuncios-routing.module';
import { AnunciosListComponent } from './anuncios-list/anuncios-list.component';
import { AnunciosFormComponent } from './anuncios-form/anuncios-form.component';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AnuncioDetailComponent } from './anuncio-detail/anuncio-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagModule } from 'primeng/tag';
import { FooterComponent } from '../layout/footer/footer.component';
import { ReservasModule } from '../reservas/reservas.module';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
    declarations: [
        AnunciosListComponent,
        AnunciosFormComponent,
        AnuncioDetailComponent,
        // FooterComponent
    ],
    exports: [
        AnunciosFormComponent, AnunciosListComponent,
        AnuncioDetailComponent
    ],
    imports: [
        CommonModule,
        AnunciosRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule, ButtonModule, GalleriaModule, MatSnackBarModule, CarouselModule, BrowserAnimationsModule, TagModule,
        MatNativeDateModule,
        ButtonModule,
        GalleriaModule,
        MatSnackBarModule,
        CarouselModule,
        BrowserAnimationsModule,
        TagModule,GoogleMapsModule
    ]
})
export class AnunciosModule { }
