using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fulltimeforce.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Fulltimeforce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumnoController : ControllerBase
    {
        private readonly IAlumnoService _alumnoService;
        public AlumnoController(IAlumnoService alumnoService)
        {
            _alumnoService = alumnoService;
        }
    }
}