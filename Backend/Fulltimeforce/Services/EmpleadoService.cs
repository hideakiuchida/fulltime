using Fulltimeforce.Entities;
using Fulltimeforce.Repositories;
using Fulltimeforce.ViewModels;
using System.Threading.Tasks;

namespace Fulltimeforce.Services
{
    public class EmpleadoService : IEmpleadoService
    {
        private readonly IEmpleadoRepository _empleadoRepository;
        public EmpleadoService(IEmpleadoRepository empleadoRepository)
        {
            _empleadoRepository = empleadoRepository;
        }
        public Task<bool> CalcularReciboEmpleado(ReciboEmpleadoToCreateVM reciboEmpleadoToCreateVM)
        {
            var totalBruto = (reciboEmpleadoToCreateVM.ValorHora * reciboEmpleadoToCreateVM.HorasTrabajadas) + (reciboEmpleadoToCreateVM.Antiguedad * 30);
            var totalDescuento = (totalBruto * 0.13m);
            var totalNeto = totalBruto - totalDescuento;

            ReciboEmpleadoEntity entity = new ReciboEmpleadoEntity();
            entity.Antiguedad = reciboEmpleadoToCreateVM.Antiguedad;
            entity.Nombre = reciboEmpleadoToCreateVM.Nombre;
            entity.TotalBruto = totalBruto;
            entity.TotalDescuento = totalDescuento;
            entity.ValorNeto = totalNeto;
            return _empleadoRepository.RegistrarReciboEmpleado(entity);
        }
    }
}
