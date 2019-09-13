import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public cursos;

  constructor(
    public router: Router,
    //private cursosSrv: CursosService
  ) { }

  ngOnInit() {
    //this.cursos = await this.cursosSrv.getCursosIsta()
  }

  irAlInicio() {
    this.router.navigate(['categorias'])
  }

  cursosVirtuales(){

    this.router.navigate(['cursos-virtuales']);
  }

}
