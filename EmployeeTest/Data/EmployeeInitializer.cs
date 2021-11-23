using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EmployeeTest.Models;
using System.Data.Entity;

namespace EmployeeTest.Data
{
    public class EmployeeInitializer : DropCreateDatabaseAlways<EmployeeDbContext>
    {
        protected override void Seed(EmployeeDbContext context)
        {
            var employees = new List<Employee>
            {
            new Employee{FullName="Mark Keeling",PhoneNumber="965522022"},
            new Employee{FullName="Destiny Hays",PhoneNumber="685255620"},
            new Employee{FullName="Lorcan Harrington",PhoneNumber="454751215"},
            new Employee{FullName="Alec Townsend",PhoneNumber="582256325"},
            new Employee{FullName="Jethro Cortes",PhoneNumber="215525555"},
            new Employee{FullName="Dru Black",PhoneNumber="126582825"},
            new Employee{FullName="Claudia Barker",PhoneNumber="784446225"},
            new Employee{FullName="Kunal Farrell",PhoneNumber="576652555"},
            new Employee{FullName="Shaun Burton",PhoneNumber="787522552"}
            };

            employees.ForEach(s => context.Employees.Add(s));
            context.SaveChanges();

        }
    }
}