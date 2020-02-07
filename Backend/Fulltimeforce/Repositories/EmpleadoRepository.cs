using Dapper;
using Fulltimeforce.Entities;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Fulltimeforce.Repositories
{
    public class EmpleadoRepository : BaseConnection, IEmpleadoRepository
    {
        public EmpleadoRepository(IDbConnection dbConnection) : base(dbConnection)
        {
        }

        public async Task<bool> RegistrarReciboEmpleado(ReciboEmpleadoEntity reciboEmpleadoEntity)
        {
            if (_dbConnection.State == ConnectionState.Closed)
                _dbConnection.Open();
            var result = await _dbConnection.QueryAsync<int>("RegistrarReciboEmpleado",
                new
                {
                    reciboEmpleadoEntity.Nombre,
                    reciboEmpleadoEntity.ValorHora,
                    reciboEmpleadoEntity.ValorNeto,
                    reciboEmpleadoEntity.TotalBruto,
                    reciboEmpleadoEntity.TotalDescuento
                },
                commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault() > default(int);
        }
    }
}
