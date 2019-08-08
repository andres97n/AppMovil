import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Curso } from '../services/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private curso: CursosService;

  constructor(public http: HttpClient) { }

  public getLenguajesIOS() {
    return this.http.get('../../assets/lenguajes/lenguajesIOS.json')
  }
  public getLenguajesCross() {
    return this.http.get('../../assets/lenguajes/lenguajesCross.json')
  }

  public getLenguajesWeb() {
    return this.http.get('../../assets/lenguajes/lenguajesWeb.json')
  }

  public getLenguajesOtros(){
    return this.http.get('../../assets/lenguajes/lenguajesOtros.json');
  }


  public getCursos() {
    return this.http.get('../../assets/cursos/Cursos.json')

  }

  // public getCursoporNombre(nombre:String){
  //   cursos: Curso[] = this.getCursos();
  // }



}
