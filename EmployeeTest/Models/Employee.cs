
using System;
using System.ComponentModel.DataAnnotations;

namespace EmployeeTest.Models
{
    public class Employee
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

    }
}
