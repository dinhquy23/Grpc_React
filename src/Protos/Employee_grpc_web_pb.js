/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = require('./Employee_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.EmployeesServicesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.EmployeesServicesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.Employees>}
 */
const methodDescriptor_EmployeesServices_GetAll = new grpc.web.MethodDescriptor(
  '/EmployeesServices/GetAll',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.Employees,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Employees.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Employees)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Employees>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EmployeesServicesClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EmployeesServices/GetAll',
      request,
      metadata || {},
      methodDescriptor_EmployeesServices_GetAll,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Employees>}
 *     Promise that resolves to the response
 */
proto.EmployeesServicesPromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/EmployeesServices/GetAll',
      request,
      metadata || {},
      methodDescriptor_EmployeesServices_GetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmployeeId,
 *   !proto.Employee>}
 */
const methodDescriptor_EmployeesServices_GetById = new grpc.web.MethodDescriptor(
  '/EmployeesServices/GetById',
  grpc.web.MethodType.UNARY,
  proto.EmployeeId,
  proto.Employee,
  /**
   * @param {!proto.EmployeeId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Employee.deserializeBinary
);


/**
 * @param {!proto.EmployeeId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Employee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Employee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EmployeesServicesClient.prototype.getById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EmployeesServices/GetById',
      request,
      metadata || {},
      methodDescriptor_EmployeesServices_GetById,
      callback);
};


/**
 * @param {!proto.EmployeeId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Employee>}
 *     Promise that resolves to the response
 */
proto.EmployeesServicesPromiseClient.prototype.getById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/EmployeesServices/GetById',
      request,
      metadata || {},
      methodDescriptor_EmployeesServices_GetById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmployeeId,
 *   !proto.Empty>}
 */
const methodDescriptor_EmployeesServices_Delete = new grpc.web.MethodDescriptor(
  '/EmployeesServices/Delete',
  grpc.web.MethodType.UNARY,
  proto.EmployeeId,
  proto.Empty,
  /**
   * @param {!proto.EmployeeId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.EmployeeId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EmployeesServicesClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EmployeesServices/Delete',
      request,
      metadata || {},
      methodDescriptor_EmployeesServices_Delete,
      callback);
};


/**
 * @param {!proto.EmployeeId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     Promise that resolves to the response
 */
proto.EmployeesServicesPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/EmployeesServices/Delete',
      request,
      metadata || {},
      methodDescriptor_EmployeesServices_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Employee,
 *   !proto.Employee>}
 */
const methodDescriptor_EmployeesServices_Update = new grpc.web.MethodDescriptor(
  '/EmployeesServices/Update',
  grpc.web.MethodType.UNARY,
  proto.Employee,
  proto.Employee,
  /**
   * @param {!proto.Employee} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Employee.deserializeBinary
);


/**
 * @param {!proto.Employee} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Employee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Employee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EmployeesServicesClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EmployeesServices/Update',
      request,
      metadata || {},
      methodDescriptor_EmployeesServices_Update,
      callback);
};


/**
 * @param {!proto.Employee} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Employee>}
 *     Promise that resolves to the response
 */
proto.EmployeesServicesPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/EmployeesServices/Update',
      request,
      metadata || {},
      methodDescriptor_EmployeesServices_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Employee,
 *   !proto.Employee>}
 */
const methodDescriptor_EmployeesServices_Create = new grpc.web.MethodDescriptor(
  '/EmployeesServices/Create',
  grpc.web.MethodType.UNARY,
  proto.Employee,
  proto.Employee,
  /**
   * @param {!proto.Employee} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Employee.deserializeBinary
);


/**
 * @param {!proto.Employee} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Employee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Employee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EmployeesServicesClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EmployeesServices/Create',
      request,
      metadata || {},
      methodDescriptor_EmployeesServices_Create,
      callback);
};


/**
 * @param {!proto.Employee} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Employee>}
 *     Promise that resolves to the response
 */
proto.EmployeesServicesPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/EmployeesServices/Create',
      request,
      metadata || {},
      methodDescriptor_EmployeesServices_Create);
};


module.exports = proto;

