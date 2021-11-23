using System.Data.Entity;
using EmployeeTest.Models;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace EmployeeTest.Data
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext() :
          base("DefaultConnection")
        {
          
        }
        public DbSet<Employee> Employees { get; set; }
        public static EmployeeDbContext Create()
        {
            return new EmployeeDbContext();
        }
       

    }

}