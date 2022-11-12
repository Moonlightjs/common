import { FindOneArgs } from '@common/dto/find-one-args';
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class FindManyArgs extends FindOneArgs {
  @ApiProperty({ type: 'object', required: false })
  cursor?: Record<string, any>;
  @ApiProperty({ type: 'number', required: false })
  take?: number;
  @ApiProperty({ type: 'number', required: false })
  skip?: number;
  @ApiProperty({})
  distinct?: Prisma.Enumerable<Record<string, any>>;
}
