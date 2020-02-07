import { Injectable } from "@angular/core";
import { UseCase } from "../base/use-case";
import { EmpleadoModel } from "../domain/empleado.model";
import { EmpleadoRepository } from "../repositories/empleado.repository";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class CalcularBoletaEmpleadoUsecase implements UseCase<EmpleadoModel, boolean> {
  
    constructor(private repository: EmpleadoRepository) { }
  
    execute(model: EmpleadoModel): Observable<boolean> {
      return this.repository.calcularBoletaEmpleado(model);
    }
  }