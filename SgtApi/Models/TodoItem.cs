using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SgtApi.Models
{
    public class Student
    {
        public long Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Course { get; set; }

        [Required]
        [Range(0, 100)]
        public int Grade { get; set; }
    }
}
