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

const proto = require('./Department_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.DepartmentsServicesClient =
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
proto.DepartmentsServicesPromiseClient =
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
 *   !proto.EmptyDpm,
 *   !proto.Departments>}
 */
const methodDescriptor_DepartmentsServices_GetAllDepartment = new grpc.web.MethodDescriptor(
  '/DepartmentsServices/GetAllDepartment',
  grpc.web.MethodType.UNARY,
  proto.EmptyDpm,
  proto.Departments,
  /**
   * @param {!proto.EmptyDpm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Departments.deserializeBinary
);


/**
 * @param {!proto.EmptyDpm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Departments)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Departments>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DepartmentsServicesClient.prototype.getAllDepartment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DepartmentsServices/GetAllDepartment',
      request,
      metadata || {},
      methodDescriptor_DepartmentsServices_GetAllDepartment,
      callback);
};


/**
 * @param {!proto.EmptyDpm} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Departments>}
 *     Promise that resolves to the response
 */
proto.DepartmentsServicesPromiseClient.prototype.getAllDepartment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DepartmentsServices/GetAllDepartment',
      request,
      metadata || {},
      methodDescriptor_DepartmentsServices_GetAllDepartment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DepartmentId,
 *   !proto.Department>}
 */
const methodDescriptor_DepartmentsServices_GetDepartmentById = new grpc.web.MethodDescriptor(
  '/DepartmentsServices/GetDepartmentById',
  grpc.web.MethodType.UNARY,
  proto.DepartmentId,
  proto.Department,
  /**
   * @param {!proto.DepartmentId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Department.deserializeBinary
);


/**
 * @param {!proto.DepartmentId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Department)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Department>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DepartmentsServicesClient.prototype.getDepartmentById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DepartmentsServices/GetDepartmentById',
      request,
      metadata || {},
      methodDescriptor_DepartmentsServices_GetDepartmentById,
      callback);
};


/**
 * @param {!proto.DepartmentId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Department>}
 *     Promise that resolves to the response
 */
proto.DepartmentsServicesPromiseClient.prototype.getDepartmentById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DepartmentsServices/GetDepartmentById',
      request,
      metadata || {},
      methodDescriptor_DepartmentsServices_GetDepartmentById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DepartmentId,
 *   !proto.EmptyDpm>}
 */
const methodDescriptor_DepartmentsServices_DeleteDepartment = new grpc.web.MethodDescriptor(
  '/DepartmentsServices/DeleteDepartment',
  grpc.web.MethodType.UNARY,
  proto.DepartmentId,
  proto.EmptyDpm,
  /**
   * @param {!proto.DepartmentId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EmptyDpm.deserializeBinary
);


/**
 * @param {!proto.DepartmentId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.EmptyDpm)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EmptyDpm>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DepartmentsServicesClient.prototype.deleteDepartment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DepartmentsServices/DeleteDepartment',
      request,
      metadata || {},
      methodDescriptor_DepartmentsServices_DeleteDepartment,
      callback);
};


/**
 * @param {!proto.DepartmentId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EmptyDpm>}
 *     Promise that resolves to the response
 */
proto.DepartmentsServicesPromiseClient.prototype.deleteDepartment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DepartmentsServices/DeleteDepartment',
      request,
      metadata || {},
      methodDescriptor_DepartmentsServices_DeleteDepartment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Department,
 *   !proto.Department>}
 */
const methodDescriptor_DepartmentsServices_CreateDepartment = new grpc.web.MethodDescriptor(
  '/DepartmentsServices/CreateDepartment',
  grpc.web.MethodType.UNARY,
  proto.Department,
  proto.Department,
  /**
   * @param {!proto.Department} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Department.deserializeBinary
);


/**
 * @param {!proto.Department} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Department)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Department>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DepartmentsServicesClient.prototype.createDepartment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DepartmentsServices/CreateDepartment',
      request,
      metadata || {},
      methodDescriptor_DepartmentsServices_CreateDepartment,
      callback);
};


/**
 * @param {!proto.Department} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Department>}
 *     Promise that resolves to the response
 */
proto.DepartmentsServicesPromiseClient.prototype.createDepartment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DepartmentsServices/CreateDepartment',
      request,
      metadata || {},
      methodDescriptor_DepartmentsServices_CreateDepartment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Department,
 *   !proto.Department>}
 */
const methodDescriptor_DepartmentsServices_UpdateDepartment = new grpc.web.MethodDescriptor(
  '/DepartmentsServices/UpdateDepartment',
  grpc.web.MethodType.UNARY,
  proto.Department,
  proto.Department,
  /**
   * @param {!proto.Department} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Department.deserializeBinary
);


/**
 * @param {!proto.Department} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Department)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Department>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DepartmentsServicesClient.prototype.updateDepartment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DepartmentsServices/UpdateDepartment',
      request,
      metadata || {},
      methodDescriptor_DepartmentsServices_UpdateDepartment,
      callback);
};


/**
 * @param {!proto.Department} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Department>}
 *     Promise that resolves to the response
 */
proto.DepartmentsServicesPromiseClient.prototype.updateDepartment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DepartmentsServices/UpdateDepartment',
      request,
      metadata || {},
      methodDescriptor_DepartmentsServices_UpdateDepartment);
};


module.exports = proto;

