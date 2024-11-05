import { Component } from '@angular/core';


interface Item {
  titulo: string;
  contenido: string;
  clasificacion: string;
} 

@Component({
  selector: 'app-revision-documental',
  templateUrl: './revision-documental.component.html',
  styleUrls: ['./revision-documental.component.css']
})
export class RevisionDocumentalComponent {
  products: Item[] = [];
  categorias = ['Artículo', 'Libro', 'Documento', 'Columna de Opinión', 'Informe', 'Material Audivisual', 'Otros'];
  filtro: string = '';
  mostrarPopup = false;
  mensajePopup: string = "";
  categoriaSeleccionada: string = '';
  categoriasSeleccionadas: string[] = [];
  cartCount: number = 0;
  Items = [
    {
      titulo: 'Organización Comunitaria',
      contenido: 'Construcción del tejido comunitario y a la caracterización del liderazgo que ha habido en los barrios',
      clasificacion: 'Documento'
    },
    {
      titulo: 'Instituciones que han intervenido en la UPZ',
      contenido: 'Caracterización de las instituciones y acciones que han llevado a cabo en la UPZ',
      clasificacion: 'Artículo de Prensa'
    },
    {
      titulo: 'Condiciones Socioambientales',
      contenido: 'Características del ecosistema en el que se encuentra ubicadda la UPZ, en la que se abordan las relaciones socio-medioambientales',
      clasificacion: 'Artículo de Revisión'
    },
    {
      titulo: 'Ruta de Construcción de la casa y el barrio',
      contenido: 'Organiza la información sobre cómo las personas han venido constryendo su casa y el proceso de loteo.',
      clasificacion: 'Capítulo de un Libro'
    },
    {
      titulo: 'Vías de Transporte',
      contenido: 'Condiciones físicas del desarrollo de infraestructura vial a lo largo de décadas dentro de la UPZ; rutas de trasnporte público y prácticas llevadas a cabo por los habitantes en cuanto a trasnporte',
      clasificacion: 'Columna de Opinión'
    },
    {
      titulo: 'Las Luchas de Agua',
      contenido: 'Proceso de consecución y gestión del agua en la UPZ',
      clasificacion: 'Documento de Política Pública Plan de Desarrollo'
    },
    {
      titulo: 'Servicios Públicos',
      contenido: 'Proceso de dotación de servicio públicos (energía eléctrica, combustible para cocinar, telefonía, internet, seguridad en la UPZ)',
      clasificacion: 'Documento de Política Pública Plan de Desarrollo'
    },
    {
      titulo: 'Cambio Generacional',
      contenido: 'Transformaciones demográficas de la UPZ, partiendo de las diferencias y similitudes entre las generaciones que han habitado la UPZ (desde los fundadores de esta, hasta los actuales liderazgos); e indaga sobre las necesidades alrededor de las cuales se han organizado los y las pobladoras a lo largo de los años',
      clasificacion: 'Documento de Política Pública Sectoriales, nacional, regional, local'
    },
  ];

  sortItems(event: any) {
    const value = event.target.value;
  }

  aplicarFiltro() {
    return this.Items.filter((product) => {
      // Filtrar por texto en título o contenido
      const coincideFiltro =
        product.titulo.toLowerCase().includes(this.filtro.toLowerCase()) ||
        product.contenido.toLowerCase().includes(this.filtro.toLowerCase());

      // Filtrar por categorías seleccionadas en base a coincidencias de palabras clave
      const coincideCategoria =
        this.categoriasSeleccionadas.length === 0 || 
        this.categoriasSeleccionadas.some(categoriaSeleccionada =>
          product.clasificacion.includes(categoriaSeleccionada)
        );

      return coincideFiltro && coincideCategoria;
    });
  }

  // Función para actualizar las categorías seleccionadas
  actualizarCategoriasSeleccionadas(categoria: string, event: Event) {
    const target = event.target as HTMLInputElement; // Aserción de tipo aquí
    const seleccionado = target.checked;
  
    if (seleccionado) {
      this.categoriasSeleccionadas.push(categoria);
    } else {
      this.categoriasSeleccionadas = this.categoriasSeleccionadas.filter(c => c !== categoria);
    }
  }
  
}
