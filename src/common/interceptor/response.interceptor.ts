import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T = any>
  implements NestInterceptor<T, Response<T>>
{
  private readonly logger = new Logger(ResponseInterceptor.name);

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        //this.logger.log(`${JSON.stringify({ response: data })}`);
        return data;
      }),
      catchError((e) => {
        console.error(e);
        this.logger.error(`InternalServerError: ${JSON.stringify(e)}`);
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2002') {
            throw new BadRequestException({
              ...e,
              message: e.message.substring(
                e.message.lastIndexOf(`\n`) + 1,
                e.message.length,
              ),
            });
          }
          const message =
            e.meta?.cause ||
            e.message.substring(
              e.message.lastIndexOf(`\n`) + 1,
              e.message.length,
            );
          throw new InternalServerErrorException({
            ...e,
            message: message,
          });
        }
        if (e instanceof Prisma.PrismaClientValidationError) {
          const message = e.message.substring(
            e.message.lastIndexOf(`\n`) + 1,
            e.message.length,
          );
          throw new BadRequestException({
            ...e,
            message: message.length ? message : e.message,
          });
        }

        throw new InternalServerErrorException(e);
      }),
    );
  }
}
