import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  public categorias: Categoria[] = [

    {
      nombre: "IOS",
      descripcion: "iOS es un sistema operativo móvil de la multinacional Apple Inc. Originalmente desarrollado para el iPhone (iPhone OS), después se ha usado en dispositivos como el iPod touch y el iPad. No permite la instalación de iOS en hardware de terceros. Los elementos de control consisten de deslizadores, interruptores y botones. La respuesta a las órdenes del usuario es inmediata y provee una interfaz fluida. ",
      imagenUrl: "https://www.casinonewsdaily.com/wp-content/uploads/2015/10/ios-logo.png"
    },
    {
      nombre: "Cross-Plataform",
      descripcion: "El software multiplataforma puede dividirse en dos grandes tipos o clases: uno requiere una compilación individual para cada plataforma que le da soporte, y el otro se puede ejecutar directamente en cualquier plataforma sin preparación especial, por ejemplo, el software escrito en un lenguaje interpretado o bytecode precompilado portable para los cuales los intérpretes o paquetes en tiempo de ejecución son componentes comunes o estándar de todas las plataformas.",
      imagenUrl: "https://www.seotwist.com/wp-content/uploads/2014/10/mobile-cross-platform.gif"
    },
    {
      nombre: "Web",
      descripcion: "Un sitio Web es una colección de páginas web relacionadas y comunes a un dominio de internet o subdominio en la World Wide Web dentro de Internet. Todos los sitios web públicamente accesibles constituyen una gigantesca World Wide Web de información, y un gigantesco entramado de recursos de alcance mundial.",
      imagenUrl: "https://ih1.redbubble.net/image.198646317.0887/ap,550x550,12x12,1,transparent,t.png"
    },
    {
      nombre: "Otros",
      descripcion: "Un lenguaje de programación es un lenguaje formal que proporciona una serie de instrucciones que permiten a un programador escribir secuencias de órdenes y algoritmos a modo de controlar el comportamiento físico y lógico de una computadora con el objetivo de que produzca diversas clases de datos. A todo este conjunto de órdenes y datos escritos mediante un lenguaje de programación se le conoce como programa.",
      imagenUrl: "https://nicobobb.com/wp-content/uploads/2019/01/lenguajes-Backend-e1547815067133.png"
    }

  ];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onClick(item: Categoria) {
    this.router.navigate(['lenguajes'], {
      state: {
        titulo: item.nombre
      }
    })
  }

}

interface Categoria {
  nombre?: String
  descripcion?: String
  imagenUrl?: String
}