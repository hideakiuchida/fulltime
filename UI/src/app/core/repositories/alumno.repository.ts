import { Observable } from "rxjs";
import { AlumnoModel } from "../domain/alumno.model";

export abstract class AlumnoRepository {
    abstract obtenerResultadoNotas(param: number): Observable<AlumnoModel>;
  }