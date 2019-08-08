import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';
import { Lenguaje } from 'src/app/interfaces/Lenguaje';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.page.html',
  styleUrls: ['./lenguajes.page.scss'],
})
export class LeguajesPage implements OnInit {

  public titulo: String = "IOS";

  public lenguajes: Lenguaje[];


  constructor(public router: Router, public lenguajeServ: CursosService) {
    try {
      this.titulo = this.router.getCurrentNavigation().extras.state.titulo;
    } catch (error) {
    }

  }

  ngOnInit() {

    switch (this.titulo) {
      case "IOS":
        this.lenguajeServ.getLenguajesIOS()
          .subscribe((data: Lenguaje[]) => {
            this.lenguajes = data
          })
        break;
      case "Cross-Plataform":
        this.lenguajeServ.getLenguajesCross()
          .subscribe((data: Lenguaje[]) => {
            this.lenguajes = data
          })
        break;
        case "Otros":
        this.lenguajeServ.getLenguajesOtros()
          .subscribe((data: Lenguaje[]) => {
            this.lenguajes = data
          })
        break;
        case "Web":
        this.lenguajeServ.getLenguajesWeb()
          .subscribe((data: Lenguaje[]) => {
            this.lenguajes = data
          })
        break;
      default:
        break;
    }

  }
  onClick(lenguaje: Lenguaje) {
    this.router.navigate(['cursos'], {
      state: {
        lenguaje: lenguaje
      }
    })


  }

}
