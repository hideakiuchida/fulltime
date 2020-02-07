using Fulltimeforce.ViewModels;
using System.Threading.Tasks;

namespace Fulltimeforce.Services
{
    public interface IEmpleadoService
    {
        Task<bool> CalcularReciboEmpleado(ReciboEmpleadoToCreateVM reciboEmpleadoToCreateVM);
    }
}
