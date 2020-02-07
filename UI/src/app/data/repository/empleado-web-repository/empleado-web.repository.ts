import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EmpleadoWebRepositoryMapper } from "./empleado-web-repository-mapper";
import { EmpleadoRepository } from "src/app/core/repositories/empleado.repository";
import { EmpleadoModel } from "src/app/core/domain/empleado.model";
import { Observable } from "rxjs";
import * from "rxjs/operator";
import { EmpleadoWebEntity } from "./empleado-web-entity";

@Injectable({
    providedIn: 'root'
  })
  export class EmpleadoWebRepository extends EmpleadoRepository {
    
  
    mapper = new EmpleadoWebRepositoryMapper();
  
    constructor(
      private http: HttpClient
    ) {
      super();
    }

    calcularBoletaEmpleado(model: EmpleadoModel): Observable<boolean> {
        return this.http
        .post<EmpleadoWebEntity>('http://localhost:54796/empleado')
        .pipe(map(this.mapper.mapFrom));
    }
  
  }