import { ApiProperty } from '@nestjs/swagger';

export class SuccessResponseDto<T = any> {
  @ApiProperty()
  public readonly data?: T;

  @ApiProperty()
  success: boolean;

  constructor(data?: T) {
    this.data = data;
    this.success = true;
  }
}

export type PaginationPayload = {
  skip: number;
  take: number;
  total: number;
};

export class Pagination {
  @ApiProperty()
  public readonly total: number;
  @ApiProperty()
  public readonly skip: number;
  @ApiProperty()
  public readonly take: number;

  protected constructor(skip: number, take: number, total: number) {
    this.skip = skip;
    this.take = take;
    this.total = total;
  }

  public static create(payload: PaginationPayload): Pagination {
    return new Pagination(payload.skip, payload.take, payload.total);
  }
}

export type PagedResultDtoPayload<TDto> = {
  pagination: Pagination;
  data: TDto[];
};

export class PagedResultDto<TDto> {
  @ApiProperty()
  public readonly pagination: Pagination;
  @ApiProperty()
  public readonly data: TDto[];
  constructor(pagination: Pagination, data: TDto[]) {
    this.pagination = pagination;
    this.data = data;
  }

  public static create<TDto>(
    payload: PagedResultDtoPayload<TDto>,
  ): PagedResultDto<TDto> {
    return new PagedResultDto(payload.pagination, payload.data);
  }
}

export class SuccessResponsePagedDto<TDto> {
  @ApiProperty({ type: Pagination })
  public readonly pagination: Pagination;
  @ApiProperty()
  public readonly data: TDto[];
  @ApiProperty()
  public readonly success: boolean;
  constructor(pagination: Pagination, data: TDto[]) {
    this.pagination = pagination;
    this.data = data;
    this.success = true;
  }

  public static create<TDto>(
    payload: PagedResultDtoPayload<TDto>,
  ): SuccessResponsePagedDto<TDto> {
    return new SuccessResponsePagedDto(payload.pagination, payload.data);
  }
}
