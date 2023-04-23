import { FindOneArgs } from '@common/dto/find-one-args';
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class FindManyArgs extends FindOneArgs {
  @ApiProperty({ type: 'number', required: false })
  take?: number;
}
