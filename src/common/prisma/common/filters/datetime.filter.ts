import { IsNotNull } from '@common/class-validator/decorator/is-not-null.decorator';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsDate, IsOptional, ValidateNested } from 'class-validator';

@Expose()
export class NestedDateTimeFilter {
  @ApiProperty({
    type: Date,
    example: '2023-04-22T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @IsDate()
  @IsNotNull()
  @Expose()
  public equals?: Date | string;

  @ApiProperty({
    type: [Date],
    example: ['2023-04-22T00:00:00.000Z'],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @ValidateNested({ each: true })
  @Type(() => Date)
  @Expose()
  public in?: Date[] | string[];

  @ApiProperty({
    type: [Date],
    example: ['2023-04-22T00:00:00.000Z'],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @ValidateNested({ each: true })
  @Type(() => Date)
  @Expose()
  public notIn?: Date[] | string[];

  @ApiProperty({
    type: Date,
    example: '2023-04-22T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @IsDate()
  @IsNotNull()
  @Expose()
  public lt?: Date | string;

  @ApiProperty({
    type: Date,
    example: '2023-04-22T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @IsDate()
  @IsNotNull()
  @Expose()
  public lte?: Date | string;

  @ApiProperty({
    type: Date,
    example: '2023-04-22T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @IsDate()
  @IsNotNull()
  @Expose()
  public gt?: Date | string;

  @ApiProperty({
    type: Date,
    example: '2023-04-22T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @IsDate()
  @IsNotNull()
  @Expose()
  public gte?: Date | string;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedDateTimeFilter) }, { type: 'string' }],
    example: { not: { equals: '2023-04-22T00:00:00.000Z' } },
    required: false,
    nullable: false,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedDateTimeFilter)
  @Expose()
  public not?: NestedDateTimeFilter | Date | string;
}

@Expose()
export class DateTimeFilter {
  @ApiProperty({
    type: Date,
    example: '2023-04-22T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsDate()
  @Expose()
  public equals?: Date | string;

  @ApiProperty({
    type: [Date],
    example: ['2023-04-22T00:00:00.000Z'],
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsDate({ each: true })
  @Expose()
  public in?: Date[] | string[];

  @ApiProperty({
    type: [Date],
    example: ['2023-04-22T00:00:00.000Z'],
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsDate({ each: true })
  @Expose()
  public notIn?: Date[] | string[];

  @ApiProperty({
    type: Date,
    example: '2023-04-22T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsDate()
  @Expose()
  public lt?: Date | string;

  @ApiProperty({
    type: Date,
    example: '2023-04-22T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsDate()
  @Expose()
  public lte?: Date | string;

  @ApiProperty({
    type: Date,
    example: '2023-04-22T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsDate()
  @Expose()
  public gt?: Date | string;

  @ApiProperty({
    type: Date,
    example: '2023-04-22T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsDate()
  @Expose()
  public gte?: Date | string;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedDateTimeFilter) }, { type: 'string' }],
    example: { not: { equals: '2023-04-22T00:00:00.000Z' } },
    required: false,
    nullable: false,
  })
  @ValidateNested()
  @Type(() => NestedDateTimeFilter)
  @IsOptional()
  @Expose()
  public not?: NestedDateTimeFilter | Date | string;
}

@Expose()
export class NestedDateTimeNullableFilter {
  @ApiProperty({ type: String, required: false, nullable: true })
  @IsDate()
  @IsOptional()
  @Expose()
  public equals?: Date | string | null;

  @ApiProperty({ type: [String], required: false, nullable: true })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Date)
  @Expose()
  public in?: Date[] | string[] | null;

  @ApiProperty({ type: [String], required: false, nullable: true })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Date)
  @Expose()
  public notIn?: Date[] | string[] | null;

  @ApiProperty({ type: String, required: false, nullable: false })
  @IsDate()
  @IsOptional()
  @Expose()
  public lt?: Date | string;

  @ApiProperty({ type: String, required: false, nullable: false })
  @IsDate()
  @IsOptional()
  @Expose()
  public lte?: Date | string;

  @ApiProperty({ type: String, required: false, nullable: false })
  @IsDate()
  @IsOptional()
  @Expose()
  public gt?: Date | string;

  @ApiProperty({ type: String, required: false, nullable: false })
  @IsDate()
  @IsOptional()
  @Expose()
  public gte?: Date | string;

  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(NestedDateTimeNullableFilter) },
      { type: 'string' },
    ],
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedDateTimeNullableFilter)
  @Expose()
  public not?: NestedDateTimeNullableFilter | Date | string | null;
}

@Expose()
export class DateTimeNullableFilter {
  @ApiProperty({
    type: Date,
    example: '2022-01-01T00:00:00.000Z',
    required: false,
    nullable: true,
  })
  @Type(() => Date)
  @IsOptional()
  @IsDate()
  @Expose()
  public equals?: Date | string | null;

  @ApiProperty({
    type: [Date],
    example: ['2022-01-01T00:00:00.000Z'],
    required: false,
    nullable: true,
  })
  @Type(() => Date)
  @IsOptional()
  @IsDate({ each: true })
  @Expose()
  public in?: Date[] | string[] | null;

  @ApiProperty({
    type: [Date],
    example: ['2022-01-01T00:00:00.000Z'],
    required: false,
    nullable: true,
  })
  @Type(() => Date)
  @IsOptional()
  @IsDate({ each: true })
  @Expose()
  public notIn?: Date[] | string[] | null;

  @ApiProperty({
    type: Date,
    example: '2022-01-01T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @Type(() => Date)
  @IsOptional()
  @IsDate()
  @Expose()
  public lt?: Date | string;

  @ApiProperty({
    type: Date,
    example: '2022-01-01T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @Type(() => Date)
  @IsOptional()
  @IsDate()
  @Expose()
  public lte?: Date | string;

  @ApiProperty({
    type: Date,
    example: '2022-01-01T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @Type(() => Date)
  @IsOptional()
  @IsDate()
  @Expose()
  public gt?: Date | string;

  @ApiProperty({
    type: Date,
    example: '2022-01-01T00:00:00.000Z',
    required: false,
    nullable: false,
  })
  @Type(() => Date)
  @IsOptional()
  @IsDate()
  @Expose()
  public gte?: Date | string;

  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(NestedDateTimeNullableFilter) },
      { type: 'string' },
    ],
    example: { not: { equals: '2022-01-01T00:00:00.000Z' } },
    required: false,
    nullable: true,
  })
  @Type(() => NestedDateTimeNullableFilter)
  @ValidateNested()
  @IsOptional()
  @Expose()
  public not?: NestedDateTimeNullableFilter | Date | string | null;
}
