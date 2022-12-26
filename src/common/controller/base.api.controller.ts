import { Injectable } from '@nestjs/common';
export type DtoType<T> = new (...args: any[]) => T;

@Injectable()
export abstract class BasseApiController<TDto> {
  constructor() {}

  protected abstract getDtoType(): DtoType<TDto>;
}
