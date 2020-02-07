using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fulltimeforce.ViewModels
{
    public class ResultadoNotaAlumnosVM
    {
        public int Aprobados { get; set; }
        public int Desaprobados { get; set; }
        public decimal PromedioNotaTotal { get; set; }
        public decimal PromedioNotaAprobados{ get; set; }
        public decimal PromedioNotaDesaprobados { get; set; }
    }
}
