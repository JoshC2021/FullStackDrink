using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DrinksGalore.Models
{
    public class FavoriteDrink
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [MaxLength(40)]
        [Required]
        public string Name { get; set; }

        [MaxLength(300)]
        public string ThumbNail { get; set; }

        [MaxLength(30)]
        [Required]
        public string ApiId { get; set; }

        [MaxLength(150)]
        [Required]
        public string authId { get; set; }

    }
}
