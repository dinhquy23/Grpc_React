using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServiceTest.Models
{
    [Table("Employee")]
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        [ForeignKey("DepartmentId")]
        public virtual Department Department { get; set; }

        [Required]
        [StringLength(50)]
        public string EmployeeName { get; set; }

        [Required]
        public int EmployeeAge { get; set; }

        [Required, MaxLength(50)]
        public DateTime DateOfBirth { get; set; }

        public double Salary { get; set; }
        public int DepartmentId { get; set; }
    }
}
