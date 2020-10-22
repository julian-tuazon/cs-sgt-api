using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SgtApi.Models
{
    public class TodoItem
    {
        public long Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Course { get; set; }

        [Required]
        [Range(minimum: 0.01, maximum: (double) decimal.MaxValue)]
        public int Grade { get; set; }
    }
}
