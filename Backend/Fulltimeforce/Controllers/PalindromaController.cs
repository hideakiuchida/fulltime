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
    public class PalindromaController : ControllerBase
    {
        private readonly IPalindromaService _palindromaService;
        public PalindromaController(IPalindromaService palindromaService)
        {
            _palindromaService = palindromaService;
        }
    }
}