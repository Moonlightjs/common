import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { isLogException } from '@utils/env';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    if (isLogException()) {
      console.log(
        '🚀 ----------------------------------------------------------------------------------------🚀',
      );
      console.error('[GlobalExceptionFilter] ~exception:', exception);
      console.log(
        '🚀 ----------------------------------------------------------------------------------------🚀',
      );
    }

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
      code: exception?.response?.code,
      timestamp: new Date().toISOString(),
      message: messageError || '',
      path: request.url,
      error: exception?.response?.error,
      errors: exception?.response?.errors,
    });
  }
}
