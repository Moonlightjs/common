import { HttpStatus } from '@nestjs/common';

export interface ErrorCode {
  code: string | number;
  statusCode: HttpStatus;
  message: string;
}
