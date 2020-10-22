using Microsoft.EntityFrameworkCore;

namespace SgtApi.Models
{
    public class GradesContext : DbContext
    {
        public Grades(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }
    }
}