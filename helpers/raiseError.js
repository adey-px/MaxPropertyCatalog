/* 
Model for custom error handling 
*/
class RaiseError extends Error {
  constructor(message, errorCode) {
    super(message); // message property
    this.code = errorCode; // code property
  }
}

export default RaiseError;
