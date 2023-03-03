import {
  SuccessResponseDto,
  SuccessResponsePagedDto,
} from '@common/dto/abstract.dto';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type Response<T> = SuccessResponseDto<T> | SuccessResponsePagedDto<T>;

@Injectable()
export class TransformInterceptor<T = any>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest<Request>();
    const isIgnored = !request.url.includes('api');
    if (isIgnored) {
      return next.handle();
    }
    return next.handle().pipe(
      map((data) => {
        if (data && data.data && data.pagination) {
          return SuccessResponsePagedDto.create({
            data: data.data,
            pagination: data.pagination,
          });
        } else if (data) {
          return new SuccessResponseDto(data);
        }
        return new SuccessResponseDto();
      }),
    );
  }
}
