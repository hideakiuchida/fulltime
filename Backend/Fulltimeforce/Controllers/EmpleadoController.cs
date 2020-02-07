using Fulltimeforce.Services;
using Fulltimeforce.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Fulltimeforce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {
        private readonly IEmpleadoService _empleadoService;
        public EmpleadoController(IEmpleadoService empleadoService)
        {
            _empleadoService = empleadoService;
        }

        [HttpPost]
        public async Task<IActionResult> CrearEventoAsync([FromBody] ReciboEmpleadoToCreateVM reciboEmpleadoToCreateVM)
        {
            var result = await _empleadoService.CalcularReciboEmpleado(reciboEmpleadoToCreateVM);
            return Ok(result);
        }
    }
}