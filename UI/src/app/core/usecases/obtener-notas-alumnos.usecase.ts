import { AlumnoModel } from "../domain/alumno.model";
import { UseCase } from "../base/use-case";
import { AlumnoRepository } from "../repositories/alumno.repository";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class ObtenerNotasAlumnosUsecase implements UseCase<number, AlumnoModel> {
  
    constructor(private repository: AlumnoRepository) { }
  
    execute(param: number): Observable<AlumnoModel> {
      return this.repository.obtenerResultadoNotas(param);
    }
  }