import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class FindOneArgs {
  @ApiProperty({ type: 'object', required: false })
  select?: Record<string, any> | null;
  @ApiProperty({ type: 'object', required: false })
  include?: Record<string, any> | null;
  @ApiProperty({ type: 'object', required: false })
  where?: Record<string, any>;
  @ApiProperty({ type: 'object', required: false })
  orderBy?: Prisma.Enumerable<Record<string, Prisma.SortOrder>>;
  @ApiProperty({ type: 'number', required: false })
  skip?: number;
  @ApiProperty()
  distinct?: Prisma.Enumerable<Record<string, any>>;
  @ApiProperty({ type: 'object', required: false })
  cursor?: Record<string, any>;
}
