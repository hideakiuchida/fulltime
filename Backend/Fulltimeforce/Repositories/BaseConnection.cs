using System.Data;

namespace Fulltimeforce.Repositories
{
    public class BaseConnection
    {
        protected readonly IDbConnection _dbConnection;
        public BaseConnection(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }
    }
}
