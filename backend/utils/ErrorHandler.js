class ErrorHandler extends Error{
  constructor(message,statusCode){
      super(message);
      this.statusCode = statusCode

      Error.captureStackTrace(this,this.constructor);

  }
  
}
module.exports = ErrorHandler


// class ErrorHandler extends Error {
//     constructor(message, statusCode) {
//       super(message);
//       this.statusCode = statusCode;
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
  
//   const errorHandlerMiddleware = (err, req, res, next) => {
//     // Xử lý lỗi và phản hồi
//   };
  
//   module.exports = {
//     ErrorHandler,
//     errorHandlerMiddleware,
//   };
  