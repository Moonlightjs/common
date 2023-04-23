import { ApiProperty } from '@nestjs/swagger';
import { SortOrder } from '@common/prisma/common/enums/sort-order';
import { IsNotNull } from '@common/class-validator';
import { Expose } from 'class-transformer';
import { IsEnum } from 'class-validator';

@Expose()
export class OrderByRelationAggregateInput {
  @ApiProperty({
    type: 'string',
    enum: SortOrder,
    required: false,
    nullable: false,
  })
  @IsEnum(SortOrder)
  @IsNotNull()
  @Expose()
  public _count?: SortOrder;
}
