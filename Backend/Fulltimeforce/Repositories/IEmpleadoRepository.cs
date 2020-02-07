using Fulltimeforce.Entities;
using System.Threading.Tasks;

namespace Fulltimeforce.Repositories
{
    public interface IEmpleadoRepository
    {
        Task<bool> RegistrarReciboEmpleado(ReciboEmpleadoEntity reciboEmpleadoEntity);
    }
}
