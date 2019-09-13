import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';
import { Curso } from 'src/app/interfaces/Curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  public titulo: String = "Cursos";

  public cursos: Curso[];


  constructor(public router: Router,
    public cursosServ: CursosService) {
    try {
      this.titulo = this.router.getCurrentNavigation().extras.state.lenguaje.nombre
    } catch (error) {

    }

  }

  ngOnInit() {

    this.cursosServ.getCursos()
      .subscribe((data: Curso[]) => {
        this.cursos = data.filter(item => item.lenguaje == this.titulo);
      });
  }





}
