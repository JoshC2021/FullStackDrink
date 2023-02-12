using Microsoft.EntityFrameworkCore;

namespace DrinksGalore.Models
{
    public class FavoriteDrinkContext: DbContext
    {
        public DbSet<FavoriteDrink> favoriteDrinks { get; set; }

        public FavoriteDrinkContext()
        {

        }

        public FavoriteDrinkContext(DbContextOptions<FavoriteDrinkContext> options)
           : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { optionsBuilder.UseSqlServer(@"Server=.\SQLExpress; Initial Catalog=CocktailDb;Trusted_Connection=True;Encrypt=False"); }
    }
}
