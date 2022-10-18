using Grpc.Core;
using ServiceTest.Models;
using ServiceTest.Protos;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using static ServiceTest.Protos.EmployeesServices;
using System;
using Employee = ServiceTest.Models.Employee;

namespace ServiceTest.Services
{
    public class EmployeesService:EmployeesServicesBase
    {
        public TestDbContext TestDbContext;
        public EmployeesService(TestDbContext testDbContext)
        {
            TestDbContext = testDbContext;
        }

        public override Task<Employees> GetAll(Empty request, ServerCallContext context)
        {
            Employees employees = new Employees();
            var result = from emp in TestDbContext.Employees
                         select new Protos.Employee()
                         {
                             EmployeeId = emp.EmployeeId,
                             DepartmentId = emp.DepartmentId,
                             EmployeeName = emp.EmployeeName,
                             EmployeeAge = emp.EmployeeAge,
                             DateOfBirth = Google.Protobuf.WellKnownTypes.Timestamp.FromDateTime(DateTime.SpecifyKind(emp.DateOfBirth, DateTimeKind.Utc)),
                             Salary = emp.Salary
                         };
            employees.Items.AddRange(result.ToArray());
            return Task.FromResult(employees);
        }

        public override Task<Protos.Employee> GetById(EmployeeId request, ServerCallContext context)
        {
            var employee = TestDbContext.Employees.Find(request.EmployeeId_);
            var result = new Protos.Employee()
            {
                EmployeeId=employee.EmployeeId,
                DepartmentId=employee.DepartmentId,
                EmployeeName=employee.EmployeeName,
                EmployeeAge=employee.EmployeeAge,
                DateOfBirth= Google.Protobuf.WellKnownTypes.Timestamp.FromDateTime(DateTime.SpecifyKind(employee.DateOfBirth, DateTimeKind.Utc)),
                Salary=employee.Salary
            };
            return Task.FromResult(result);
        }

        public override Task<Empty> Delete(EmployeeId request, ServerCallContext context)
        {
            Employee employee = TestDbContext.Employees.Find(request.EmployeeId_);
            if(employee==null)
            {
                return Task.FromResult<Empty>(null);
            }
            TestDbContext.Remove(employee);
            TestDbContext.SaveChanges();
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Protos.Employee> Update(Protos.Employee request, ServerCallContext context)
        {
            Models.Employee employee = TestDbContext.Employees.Find(request.EmployeeId);
            if (employee == null) { return Task.FromResult<Protos.Employee>(null); }
            employee.EmployeeId = request.EmployeeId;
            employee.DepartmentId = request.DepartmentId;
            employee.EmployeeName = request.EmployeeName;
            employee.EmployeeAge = request.EmployeeAge;
            employee.Salary = request.Salary;
            employee.DateOfBirth = request.DateOfBirth.ToDateTime();
            TestDbContext.Employees.Update(employee);
            TestDbContext.SaveChanges();
            return Task.FromResult<Protos.Employee>(new Protos.Employee()
                {
                    EmployeeId=employee.EmployeeId,
                    DepartmentId=employee.DepartmentId,
                    EmployeeName=employee.EmployeeName,
                    EmployeeAge=employee.EmployeeAge,
                    Salary=employee.Salary,
                    DateOfBirth= Google.Protobuf.WellKnownTypes.Timestamp.FromDateTime(DateTime.SpecifyKind(employee.DateOfBirth, DateTimeKind.Utc)),
            });


        }

        public override Task<Protos.Employee> Create(Protos.Employee request, ServerCallContext context)
        {
            Models.Employee employee = new Employee();
            employee.EmployeeId = request.EmployeeId;
            employee.DepartmentId = request.DepartmentId;
            employee.EmployeeName = employee.EmployeeName;
            employee.EmployeeAge = request.EmployeeAge;
            employee.Salary = request.Salary;
            employee.DateOfBirth= request.DateOfBirth.ToDateTime();
            TestDbContext.Employees.Add(employee);
            TestDbContext.SaveChanges();
            return Task.FromResult<Protos.Employee>(request);
        }
    }
}
