import { Component } from '@angular/core';

@Component({
  selector: 'app-contar-historia',
  templateUrl: './contar-historia.component.html',
  styleUrls: ['./contar-historia.component.css']
})
export class ContarHistoriaComponent {
  
  mostrarPopup = false;
  mensajePopup = '';

  ngOnInit(){
    this.mostrarPopup = false;
  }
  
  abrirPopup(mensaje: string) {
    this.mensajePopup = mensaje;
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }
}
