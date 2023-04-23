import { IsNotNull } from '@common/class-validator/decorator/is-not-null.decorator';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsInt, IsOptional, ValidateNested } from 'class-validator';

@Expose()
export class NestedIntFilter {
  @ApiProperty({ type: Number, example: 10, required: false, nullable: false })
  @IsInt()
  @IsNotNull()
  @Expose()
  public equals?: number;

  @ApiProperty({
    type: Number,
    example: [1, 2, 3],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsInt({ each: true })
  @Expose()
  public in?: number[];

  @ApiProperty({
    type: Number,
    example: [1, 2, 3],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsInt({ each: true })
  @IsNotNull()
  @Expose()
  public notIn?: number[];

  @ApiProperty({ type: Number, example: 10, required: false, nullable: false })
  @IsInt()
  @IsNotNull()
  @Expose()
  public lt?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: false })
  @IsInt()
  @IsNotNull()
  @Expose()
  public lte?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: false })
  @IsInt()
  @IsNotNull()
  @Expose()
  public gt?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: false })
  @IsNotNull()
  @IsInt()
  @Expose()
  public gte?: number;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedIntFilter) }, { type: 'number' }],
    example: { not: { equals: 10 } },
    required: false,
    nullable: false,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedIntFilter)
  @Expose()
  public not?: NestedIntFilter | number;
}

@Expose()
export class IntFilter {
  @ApiProperty({ type: Number, example: 10, required: false, nullable: false })
  @IsInt()
  @IsNotNull()
  @Expose()
  public equals?: number;

  @ApiProperty({
    type: Number,
    example: [1, 2, 3],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsInt({ each: true })
  @IsNotNull()
  @Expose()
  public in?: number[];

  @ApiProperty({
    type: Number,
    example: [1, 2, 3],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsInt({ each: true })
  @IsNotNull()
  @Expose()
  public notIn?: number[];

  @ApiProperty({ type: Number, example: 10, required: false, nullable: false })
  @IsInt()
  @IsNotNull()
  @Expose()
  public lt?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: false })
  @IsInt()
  @IsNotNull()
  @Expose()
  public lte?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: false })
  @IsInt()
  @IsNotNull()
  @Expose()
  public gt?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: false })
  @IsInt()
  @IsNotNull()
  @Expose()
  public gte?: number;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedIntFilter) }, { type: 'number' }],
    example: { not: { equals: 10 } },
    required: false,
    nullable: false,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedIntFilter)
  @Expose()
  public not?: NestedIntFilter | number;
}

@Expose()
export class NestedIntNullableFilter {
  @ApiProperty({ type: Number, example: 10, required: false, nullable: true })
  @IsOptional()
  @IsInt()
  @Expose()
  public equals?: number | null;

  @ApiProperty({
    type: Number,
    example: [1, 2, 3],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsInt({ each: true })
  @Expose()
  public in?: number[] | null;

  @ApiProperty({
    type: Number,
    example: [1, 2, 3],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsInt({ each: true })
  @Expose()
  public notIn?: number[] | null;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: true })
  @IsOptional()
  @IsInt()
  @Expose()
  public lt?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: true })
  @IsOptional()
  @IsInt()
  @Expose()
  public lte?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: true })
  @IsOptional()
  @IsInt()
  @Expose()
  public gt?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: true })
  @IsOptional()
  @IsInt()
  @Expose()
  public gte?: number;

  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(NestedIntNullableFilter) },
      { type: 'number' },
    ],
    example: { not: { equals: 10 } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedIntNullableFilter)
  @Expose()
  public not?: NestedIntNullableFilter | number | null;
}

@Expose()
export class IntNullableFilter {
  @ApiProperty({ type: Number, example: 10, required: false, nullable: true })
  @IsInt()
  @IsOptional()
  @Expose()
  public equals?: number | null;

  @ApiProperty({
    type: Number,
    example: [1, 2, 3],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsInt({ each: true })
  @IsOptional()
  @Expose()
  public in?: number[] | null;

  @ApiProperty({
    type: Number,
    example: [1, 2, 3],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsInt({ each: true })
  @IsOptional()
  @Expose()
  public notIn?: number[] | null;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: true })
  @IsInt()
  @IsOptional()
  @Expose()
  public lt?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: true })
  @IsInt()
  @IsOptional()
  @Expose()
  public lte?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: true })
  @IsInt()
  @IsOptional()
  @Expose()
  public gt?: number;

  @ApiProperty({ type: Number, example: 10, required: false, nullable: true })
  @IsInt()
  @IsOptional()
  @Expose()
  public gte?: number;

  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(NestedIntNullableFilter) },
      { type: 'number' },
    ],
    example: { not: { equals: 10 } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedIntNullableFilter)
  @Expose()
  public not?: NestedIntNullableFilter | number | null;
}
