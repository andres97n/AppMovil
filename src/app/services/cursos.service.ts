import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Curso } from '../services/cursos';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const QUERY_CURSOS_VIRTUALES = gql`
{
  cursosVirtuales {
    id
    nombre
    duracion
    numeroCupos
    fechaInicio
    fechaFin
    docente {
      id
      persona {
        id
        identificacion
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
      }
    }
    responsable {
      id
      persona {
        id
        identificacion
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
      }
    }
    disponibilidad
    activo
  }
}
`;


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private curso: CursosService;

  constructor(
    public http: HttpClient,
    private apollo: Apollo
  ) { }

  public getLenguajesIOS() {
    return this.http.get('../../assets/lenguajes/lenguajesIOS.json')
  }
  public getLenguajesCross() {
    return this.http.get('../../assets/lenguajes/lenguajesCross.json')
  }

  public getLenguajesWeb() {
    return this.http.get('../../assets/lenguajes/lenguajesWeb.json')
  }

  public getLenguajesOtros() {
    return this.http.get('../../assets/lenguajes/lenguajesOtros.json');
  }


  public getCursos() {
    return this.http.get('../../assets/cursos/Cursos.json')

  }

  public async getCursosIsta() {
    const query = await this.apollo.query({
      query: QUERY_CURSOS_VIRTUALES,
      fetchPolicy: 'network-only'
    })

    const result = (await query.toPromise()).data['cursosVirtuales']
    return result
  }

  // public getCursoporNombre(nombre:String){
  //   cursos: Curso[] = this.getCursos();
  // }



}
