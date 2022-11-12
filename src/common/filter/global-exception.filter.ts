import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status = exception?.response?.status;
    if (!status) {
      status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
    }
    let messageError = '';
    if (exception.response && exception.response.message) {
      messageError = exception.response.message;
    } else {
      messageError = exception.message;
    }
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: messageError || '',
      path: request.url,
      error: exception?.cause?.response?.error,
      errors: exception?.cause?.response?.errors,
    });
  }
}
