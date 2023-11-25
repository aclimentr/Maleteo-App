import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapEventManager, MapInfoWindow } from '@angular/google-maps';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap | undefined;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow | undefined;
  @ViewChild('search') searchElementRef: any;

  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  };
  markers: any[] = [];
  infoContent = '';
  markerPositions: google.maps.LatLngLiteral[] = [];
  markerOptions: google.maps.MarkerOptions = {draggable: false};
 constructor( private ngZone: NgZone){}
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });

  }

  onMapLoad(mapInstance: any) {
    this.map = mapInstance;
  }
  
  setupPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place: google.maps.places.PlaceResult = autocomplete.getPlace();
        if (place.geometry) {
          if(this.map)
          this.map.getCenter();
        console.log();

          // Puedes hacer más cosas con la ubicación seleccionada
        }
      });
    });
  }


  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng)
    this.markerPositions.push(event.latLng.toJSON());
  }

  zoomIn() {
    if(this.options.maxZoom)
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if(this.options.minZoom)

    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  click(event: google.maps.KmlMouseEvent) {
    console.log(event);
  }



}
