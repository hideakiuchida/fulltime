import { Observable } from "rxjs";
import { EmpleadoModel } from "../domain/empleado.model";

export abstract class EmpleadoRepository {
    abstract calcularBoletaEmpleado(model: EmpleadoModel): Observable<boolean>;
  }