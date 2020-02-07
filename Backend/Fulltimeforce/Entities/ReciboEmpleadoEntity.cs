using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fulltimeforce.Entities
{
    public class ReciboEmpleadoEntity
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int Antiguedad { get; set; }
        public decimal ValorHora { get; set; }
        public decimal TotalBruto { get; set; }
        public decimal TotalDescuento { get; set; }
        public decimal ValorNeto { get; set; }
    }
}
