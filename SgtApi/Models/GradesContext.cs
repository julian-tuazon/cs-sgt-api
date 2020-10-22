using Microsoft.EntityFrameworkCore;

namespace SgtApi.Models
{
    public class GradesContext : DbContext
    {
        public GradesContext(DbContextOptions<GradesContext> options)
            : base(options)
        {
        }

        public DbSet<Grade> Grades { get; set; }
    }
}