class enums {
  constructor() {
    this.statusCode = {
      success: 200,
      created: 201,
      noContent: 204,
      badRequest: 400,
      unauthorized: 401,
      notFound: 404,
      internalError: 500,
      offlineService: 503
    };
  }
}

module.exports = new enums();
