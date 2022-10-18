

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ServiceTest.Models;
using ServiceTest.Services;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddCors();
//builder.Services.AddCodeFirstGrpc();
builder.Services.AddDbContext<TestDbContext>(item => item.UseSqlServer(builder.Configuration.GetConnectionString("AppDbContext")));
var app = builder.Build();
app.UseGrpcWeb(new GrpcWebOptions { DefaultEnabled = true });

app.UseCors(options =>
    options.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
);
// Configure the HTTP request pipeline.
app.MapGrpcService<EmployeesService>();
app.MapGrpcService<DepartmentsServices>();



app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
