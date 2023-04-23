import { Injectable } from '@nestjs/common';
export type DtoType<T> = new (...args: any[]) => T;

@Injectable()
export abstract class BasseApiController<TDto> {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  protected abstract getDtoType(): DtoType<TDto>;
}
