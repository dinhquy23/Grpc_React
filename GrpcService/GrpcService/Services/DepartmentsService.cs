using Grpc.Core;
using ServiceTest.Models;
using ServiceTest.Protos;
using System.Threading.Tasks;
using static ServiceTest.Protos.DepartmentsServices;
using Department = ServiceTest.Models.Department;

namespace ServiceTest.Services
{
    public class DepartmentsServices : DepartmentsServicesBase
    {
        public TestDbContext TestDbContext;
        public DepartmentsServices(TestDbContext testDbContext)
        {
            TestDbContext = testDbContext;
        }
        public override Task<Departments> GetAllDepartment(EmptyDpm request, ServerCallContext context)
        {
            return null;
        }

        public override Task<Protos.Department> GetDepartmentById(DepartmentId request, ServerCallContext context)
        {
            return null;
        }

        public override Task<EmptyDpm> DeleteDepartment(DepartmentId request, ServerCallContext context)
        {
            return null;
        }

        public override Task<Protos.Department> CreateDepartment(Protos.Department request, ServerCallContext context)
        {
            return null;
        }

        public override Task<Protos.Department> UpdateDepartment(Protos.Department request, ServerCallContext context)
        {
            return null;
        }
    }
}
