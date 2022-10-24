//
// Model for custom error handling
class HttpError extends Error {
  //
  constructor(message, errorCode) {
    //
    super(message); // message property
    this.code = errorCode; // code property
  }
}

export default HttpError;
