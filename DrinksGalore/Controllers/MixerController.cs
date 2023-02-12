using DrinksGalore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DrinksGalore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MixerController : ControllerBase
    {
        public CocktailDAL ct = new CocktailDAL();

        [HttpGet]
        public async Task<ActionResult<Cocktail>> GetDrinks(string  drinkName)
        {
            return ct.getDrink(drinkName);
        }

    }
}
