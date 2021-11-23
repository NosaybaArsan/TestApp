using System.Collections.Generic;
using EmployeeTest.Data;
using EmployeeTest.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Web.Http.Results;
using System.Web.Mvc;
using System.Net.Http;

namespace EmployeeTest.Controllers
{
   
    public class EmployeesController : ApiController
    {
     
        private EmployeeDbContext db = new EmployeeDbContext();

        // GET: api/employees
        public List<Employee> GetEmployees()
        {
            return db.Employees.ToList();
        }


    }
}