// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Protos/Department.proto
// </auto-generated>
#pragma warning disable 0414, 1591
#region Designer generated code

using grpc = global::Grpc.Core;

namespace ServiceTest.Protos {
  public static partial class DepartmentsServices
  {
    static readonly string __ServiceName = "DepartmentsServices";

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static void __Helper_SerializeMessage(global::Google.Protobuf.IMessage message, grpc::SerializationContext context)
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (message is global::Google.Protobuf.IBufferMessage)
      {
        context.SetPayloadLength(message.CalculateSize());
        global::Google.Protobuf.MessageExtensions.WriteTo(message, context.GetBufferWriter());
        context.Complete();
        return;
      }
      #endif
      context.Complete(global::Google.Protobuf.MessageExtensions.ToByteArray(message));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static class __Helper_MessageCache<T>
    {
      public static readonly bool IsBufferMessage = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(global::Google.Protobuf.IBufferMessage)).IsAssignableFrom(typeof(T));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static T __Helper_DeserializeMessage<T>(grpc::DeserializationContext context, global::Google.Protobuf.MessageParser<T> parser) where T : global::Google.Protobuf.IMessage<T>
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (__Helper_MessageCache<T>.IsBufferMessage)
      {
        return parser.ParseFrom(context.PayloadAsReadOnlySequence());
      }
      #endif
      return parser.ParseFrom(context.PayloadAsNewBuffer());
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::ServiceTest.Protos.EmptyDpm> __Marshaller_EmptyDpm = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::ServiceTest.Protos.EmptyDpm.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::ServiceTest.Protos.Departments> __Marshaller_Departments = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::ServiceTest.Protos.Departments.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::ServiceTest.Protos.DepartmentId> __Marshaller_DepartmentId = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::ServiceTest.Protos.DepartmentId.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::ServiceTest.Protos.Department> __Marshaller_Department = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::ServiceTest.Protos.Department.Parser));

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::ServiceTest.Protos.EmptyDpm, global::ServiceTest.Protos.Departments> __Method_GetAllDepartment = new grpc::Method<global::ServiceTest.Protos.EmptyDpm, global::ServiceTest.Protos.Departments>(
        grpc::MethodType.Unary,
        __ServiceName,
        "GetAllDepartment",
        __Marshaller_EmptyDpm,
        __Marshaller_Departments);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::ServiceTest.Protos.DepartmentId, global::ServiceTest.Protos.Department> __Method_GetDepartmentById = new grpc::Method<global::ServiceTest.Protos.DepartmentId, global::ServiceTest.Protos.Department>(
        grpc::MethodType.Unary,
        __ServiceName,
        "GetDepartmentById",
        __Marshaller_DepartmentId,
        __Marshaller_Department);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::ServiceTest.Protos.DepartmentId, global::ServiceTest.Protos.EmptyDpm> __Method_DeleteDepartment = new grpc::Method<global::ServiceTest.Protos.DepartmentId, global::ServiceTest.Protos.EmptyDpm>(
        grpc::MethodType.Unary,
        __ServiceName,
        "DeleteDepartment",
        __Marshaller_DepartmentId,
        __Marshaller_EmptyDpm);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::ServiceTest.Protos.Department, global::ServiceTest.Protos.Department> __Method_CreateDepartment = new grpc::Method<global::ServiceTest.Protos.Department, global::ServiceTest.Protos.Department>(
        grpc::MethodType.Unary,
        __ServiceName,
        "CreateDepartment",
        __Marshaller_Department,
        __Marshaller_Department);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::ServiceTest.Protos.Department, global::ServiceTest.Protos.Department> __Method_UpdateDepartment = new grpc::Method<global::ServiceTest.Protos.Department, global::ServiceTest.Protos.Department>(
        grpc::MethodType.Unary,
        __ServiceName,
        "UpdateDepartment",
        __Marshaller_Department,
        __Marshaller_Department);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::ServiceTest.Protos.DepartmentReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of DepartmentsServices</summary>
    [grpc::BindServiceMethod(typeof(DepartmentsServices), "BindService")]
    public abstract partial class DepartmentsServicesBase
    {
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::ServiceTest.Protos.Departments> GetAllDepartment(global::ServiceTest.Protos.EmptyDpm request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::ServiceTest.Protos.Department> GetDepartmentById(global::ServiceTest.Protos.DepartmentId request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::ServiceTest.Protos.EmptyDpm> DeleteDepartment(global::ServiceTest.Protos.DepartmentId request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::ServiceTest.Protos.Department> CreateDepartment(global::ServiceTest.Protos.Department request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::ServiceTest.Protos.Department> UpdateDepartment(global::ServiceTest.Protos.Department request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static grpc::ServerServiceDefinition BindService(DepartmentsServicesBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_GetAllDepartment, serviceImpl.GetAllDepartment)
          .AddMethod(__Method_GetDepartmentById, serviceImpl.GetDepartmentById)
          .AddMethod(__Method_DeleteDepartment, serviceImpl.DeleteDepartment)
          .AddMethod(__Method_CreateDepartment, serviceImpl.CreateDepartment)
          .AddMethod(__Method_UpdateDepartment, serviceImpl.UpdateDepartment).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the  service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static void BindService(grpc::ServiceBinderBase serviceBinder, DepartmentsServicesBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_GetAllDepartment, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::ServiceTest.Protos.EmptyDpm, global::ServiceTest.Protos.Departments>(serviceImpl.GetAllDepartment));
      serviceBinder.AddMethod(__Method_GetDepartmentById, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::ServiceTest.Protos.DepartmentId, global::ServiceTest.Protos.Department>(serviceImpl.GetDepartmentById));
      serviceBinder.AddMethod(__Method_DeleteDepartment, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::ServiceTest.Protos.DepartmentId, global::ServiceTest.Protos.EmptyDpm>(serviceImpl.DeleteDepartment));
      serviceBinder.AddMethod(__Method_CreateDepartment, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::ServiceTest.Protos.Department, global::ServiceTest.Protos.Department>(serviceImpl.CreateDepartment));
      serviceBinder.AddMethod(__Method_UpdateDepartment, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::ServiceTest.Protos.Department, global::ServiceTest.Protos.Department>(serviceImpl.UpdateDepartment));
    }

  }
}
#endregion
