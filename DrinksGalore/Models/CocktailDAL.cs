using RestSharp;

namespace DrinksGalore.Models
{
    public class CocktailDAL
    {

        public Cocktail getDrink(string drinkName)
        {
            RestClient client = new RestClient($"https://www.thecocktaildb.com/api/json/v1/1/search.php?s={drinkName}");
            RestRequest request = new RestRequest();
            Task<Cocktail> response = client.GetAsync<Cocktail>(request);
            Cocktail sp = response.Result;
            return sp;
        }
        
    }
}
