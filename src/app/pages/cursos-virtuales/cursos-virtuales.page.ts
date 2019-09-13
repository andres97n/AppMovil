import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos-virtuales',
  templateUrl: './cursos-virtuales.page.html',
  styleUrls: ['./cursos-virtuales.page.scss'],
})
export class CursosVirtualesPage implements OnInit {

  public cursos;

  constructor(private cursosSrv: CursosService) { 

  }

  async ngOnInit() {
    this.cursos = await this.cursosSrv.getCursosIsta()
  }
  

}
