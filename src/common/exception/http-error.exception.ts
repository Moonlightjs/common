import { ErrorCode } from '@common/type/error-code';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

export class HttpErrorException extends HttpException {
  constructor(error: ErrorCode) {
    super(
      {
        code: error.code,
        message: error.message,
      },
      error.statusCode,
    );
  }
}
