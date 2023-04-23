import { IsNotNull } from '@common/class-validator/decorator/is-not-null.decorator';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsOptional, ValidateNested } from 'class-validator';

@Expose()
export class NestedBoolFilter {
  @ApiProperty({
    type: Boolean,
    example: true,
    required: false,
    nullable: false,
  })
  @IsBoolean()
  @IsNotNull()
  @Expose()
  public equals?: boolean;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedBoolFilter) }, { type: 'boolean' }],
    example: { not: { equals: true } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedBoolFilter)
  @Expose()
  public not?: NestedBoolFilter | boolean;
}

@Expose()
export class BoolFilter {
  @ApiProperty({
    type: Boolean,
    example: true,
    required: false,
    nullable: false,
  })
  @IsBoolean()
  @IsNotNull()
  @Expose()
  public equals?: boolean;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedBoolFilter) }, { type: 'boolean' }],
    example: { not: { equals: true } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedBoolFilter)
  @Expose()
  public not?: NestedBoolFilter | boolean;
}

@Expose()
export class NestedBoolNullableFilter {
  @ApiProperty({
    type: Boolean,
    example: true,
    required: false,
    nullable: true,
  })
  @IsBoolean()
  @IsOptional()
  @Expose()
  public equals?: boolean | null;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedBoolFilter) }, { type: 'boolean' }],
    example: { not: { equals: true } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedBoolNullableFilter)
  @Expose()
  public not?: NestedBoolNullableFilter | boolean | null;
}

@Expose()
export class BoolNullableFilter {
  @ApiProperty({
    type: Boolean,
    example: true,
    required: false,
    nullable: true,
  })
  @IsBoolean()
  @IsOptional()
  @Expose()
  public equals?: boolean | null;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedBoolFilter) }, { type: 'boolean' }],
    example: { not: { equals: true } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedBoolNullableFilter)
  @Expose()
  public not?: NestedBoolNullableFilter | boolean | null;
}
