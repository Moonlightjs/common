import { IsNotNull } from '@common/class-validator/decorator/is-not-null.decorator';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, ValidateNested } from 'class-validator';

@Expose()
export class NestedFloatFilter {
  @ApiProperty({ type: Number, example: 10, required: false, nullable: false })
  @IsNumber()
  @IsNotNull()
  @Expose()
  public equals?: number;

  @ApiProperty({
    type: [Number],
    example: [1.1, 2.2, 3.3],
    isArray: true,
    required: false,
    nullable: false,
  })
  @Type(() => Number)
  @IsNotNull()
  @Expose()
  public in?: number[];

  @ApiProperty({
    type: [Number],
    example: [1.1, 2.2, 3.3],
    isArray: true,
    required: false,
    nullable: false,
  })
  @Type(() => Number)
  @IsNotNull()
  @Expose()
  public notIn?: number[];

  @ApiProperty({
    type: Number,
    example: 10.1,
    required: false,
    nullable: false,
  })
  @IsNumber()
  @IsNotNull()
  @Expose()
  public lt?: number;

  @ApiProperty({
    type: Number,
    example: 10.1,
    required: false,
    nullable: false,
  })
  @IsNumber()
  @IsNotNull()
  @Expose()
  public lte?: number;

  @ApiProperty({
    type: Number,
    example: 10.1,
    required: false,
    nullable: false,
  })
  @IsNumber()
  @IsNotNull()
  @Expose()
  public gt?: number;

  @ApiProperty({
    type: Number,
    example: 10.1,
    required: false,
    nullable: false,
  })
  @IsNumber()
  @IsNotNull()
  @Expose()
  public gte?: number;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedFloatFilter) }, { type: 'number' }],
    example: { not: { equals: 10.1 } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedFloatFilter)
  @Expose()
  public not?: NestedFloatFilter | number;
}

@Expose()
export class FloatFilter {
  @ApiProperty({
    type: Number,
    example: 10.1,
    required: false,
    nullable: false,
  })
  @IsNumber()
  @IsNotNull()
  @Expose()
  public equals?: number;

  @ApiProperty({
    type: [Number],
    example: [1.1, 2.2, 3.3],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsNotNull()
  @Expose()
  public in?: number[];

  @ApiProperty({
    type: [Number],
    example: [1.1, 2.2, 3.3],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsNotNull()
  @Expose()
  public notIn?: number[];

  @ApiProperty({
    type: Number,
    example: 10.1,
    required: false,
    nullable: false,
  })
  @IsNumber()
  @IsNotNull()
  @Expose()
  public lt?: number;

  @ApiProperty({
    type: Number,
    example: 10.1,
    required: false,
    nullable: false,
  })
  @IsNumber()
  @IsNotNull()
  @Expose()
  public lte?: number;

  @ApiProperty({
    type: Number,
    example: 10.1,
    required: false,
    nullable: false,
  })
  @IsNumber()
  @IsNotNull()
  @Expose()
  public gt?: number;

  @ApiProperty({
    type: Number,
    example: 10.1,
    required: false,
    nullable: false,
  })
  @IsNumber()
  @IsNotNull()
  @Expose()
  public gte?: number;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedFloatFilter) }, { type: 'number' }],
    example: { not: { equals: 10.1 } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedFloatFilter)
  @Expose()
  public not?: NestedFloatFilter | number;
}

@Expose()
export class NestedFloatNullableFilter {
  @ApiProperty({ type: Number, example: 10.1, required: false, nullable: true })
  @IsNumber()
  @IsOptional()
  @Expose()
  public equals?: number | null;

  @ApiProperty({
    type: [Number],
    example: [1.1, 2.2, 3.3],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  @Expose()
  public in?: number[] | null;

  @ApiProperty({
    type: [Number],
    example: [1.1, 2.2, 3.3],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  @Expose()
  public notIn?: number[] | null;

  @ApiProperty({ type: Number, example: 10.1, required: false, nullable: true })
  @IsNumber()
  @IsOptional()
  @Expose()
  public lt?: number;

  @ApiProperty({ type: Number, example: 10.1, required: false, nullable: true })
  @IsNumber()
  @IsOptional()
  @Expose()
  public lte?: number;

  @ApiProperty({ type: Number, example: 10.1, required: false, nullable: true })
  @IsNumber()
  @IsOptional()
  @Expose()
  public gt?: number;

  @ApiProperty({ type: Number, example: 10.1, required: false, nullable: true })
  @IsNumber()
  @IsOptional()
  @Expose()
  public gte?: number;

  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(NestedFloatNullableFilter) },
      { type: 'number' },
    ],
    example: { not: { equals: 10.1 } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedFloatNullableFilter)
  @Expose()
  public not?: NestedFloatNullableFilter | number | null;
}

@Expose()
export class FloatNullableFilter {
  @ApiProperty({ type: Number, example: 10.1, required: false, nullable: true })
  @IsNumber()
  @IsOptional()
  @Expose()
  public equals?: number | null;

  @ApiProperty({
    type: [Number],
    example: [1.1, 2.2, 3.3],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  @Expose()
  public in?: number[] | null;

  @ApiProperty({
    type: [Number],
    example: [1.1, 2.2, 3.3],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  @Expose()
  public notIn?: number[] | null;

  @ApiProperty({ type: Number, example: 10.1, required: false, nullable: true })
  @IsNumber()
  @IsOptional()
  @Expose()
  public lt?: number;

  @ApiProperty({ type: Number, example: 10.1, required: false, nullable: true })
  @IsNumber()
  @IsOptional()
  @Expose()
  public lte?: number;

  @ApiProperty({ type: Number, example: 10.1, required: false, nullable: true })
  @IsNumber()
  @IsOptional()
  @Expose()
  public gt?: number;

  @ApiProperty({ type: Number, example: 10.1, required: false, nullable: true })
  @IsNumber()
  @IsOptional()
  @Expose()
  public gte?: number;

  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(NestedFloatNullableFilter) },
      { type: 'number' },
    ],
    example: { not: { equals: 10.1 } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedFloatNullableFilter)
  @Expose()
  public not?: NestedFloatNullableFilter | number | null;
}
