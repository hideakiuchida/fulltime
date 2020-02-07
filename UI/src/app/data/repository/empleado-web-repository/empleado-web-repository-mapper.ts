import { EmpleadoWebEntity } from "./empleado-web-entity";
import { EmpleadoModel } from "src/app/core/domain/empleado.model";
import { Mapper } from "src/app/core/base/mapper";

export class EmpleadoWebRepositoryMapper implements Mapper <EmpleadoWebEntity, EmpleadoModel> {
    mapFrom(param: EmpleadoWebEntity): EmpleadoModel {
      return {
        nombre: param.nombre,
        valorHora: param.valorHora,
        horasTrabajadas: param.horasTrabajadas,
        antiguedad: param.antiguedad
      };
    }
  
    mapTo(param: EmpleadoModel): EmpleadoWebEntity {
      return {
        id: 0,
        nombre: param.nombre,
        valorHora: param.valorHora,
        horasTrabajadas: param.horasTrabajadas,
        antiguedad: param.antiguedad
      };
    }
  }