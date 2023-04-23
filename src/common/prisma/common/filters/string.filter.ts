import { IsNotNull } from '@common/class-validator/decorator/is-not-null.decorator';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { QueryMode } from '../enums/query-mode.enum';

@Expose()
export class NestedStringFilter {
  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public equals?: string;

  @ApiProperty({
    type: String,
    example: ['example1', 'example2'],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString({ each: true })
  @Expose()
  public in?: string[];

  @ApiProperty({
    type: String,
    example: ['example1', 'example2'],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public notIn?: string[];

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public lt?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public lte?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public gt?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public gte?: string;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedStringFilter) }, { type: 'string' }],
    example: { not: { equals: 'example' } },
    required: false,
    nullable: false,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedStringFilter)
  @Expose()
  public not?: NestedStringFilter | string;
}

@Expose()
export class StringFilter {
  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public equals?: string;

  @ApiProperty({
    type: String,
    example: ['example1', 'example2'],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString({ each: true })
  @Expose()
  public in?: string[];

  @ApiProperty({
    type: String,
    example: ['example1', 'example2'],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public notIn?: string[];

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public lt?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public lte?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public gt?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public gte?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public contains?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public startsWith?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @IsString()
  @Expose()
  public endsWith?: string;

  @ApiProperty({
    enum: QueryMode,
    example: QueryMode.default,
    required: false,
    nullable: false,
  })
  @IsNotNull()
  @Expose()
  public mode?: QueryMode;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedStringFilter) }, { type: 'string' }],
    example: { not: { equals: 'example' } },
    required: false,
    nullable: false,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedStringFilter)
  @Expose()
  public not?: NestedStringFilter | string;
}

@Expose()
export class NestedStringNullableFilter {
  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public equals?: string | null;

  @ApiProperty({
    type: String,
    example: ['example1', 'example2'],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString({ each: true })
  @Expose()
  public in?: string[] | null;

  @ApiProperty({
    type: String,
    example: ['example1', 'example2'],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString({ each: true })
  @Expose()
  public notIn?: string[] | null;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public lt?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public lte?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public gt?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public gte?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public contains?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public startsWith?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public endsWith?: string;

  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(NestedStringNullableFilter) },
      { type: 'string' },
    ],
    example: { not: { equals: 'example' } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedStringNullableFilter)
  @Expose()
  public not?: NestedStringNullableFilter | string | null;
}

@Expose()
export class StringNullableFilter {
  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public equals?: string | null;

  @ApiProperty({
    type: String,
    example: ['example1', 'example2'],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString({ each: true })
  @Expose()
  public in?: string[] | null;

  @ApiProperty({
    type: String,
    example: ['example1', 'example2'],
    isArray: true,
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString({ each: true })
  @Expose()
  public notIn?: string[] | null;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public lt?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public lte?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public gt?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public gte?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public contains?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public startsWith?: string;

  @ApiProperty({
    type: String,
    example: 'example',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Expose()
  public endsWith?: string;

  @ApiProperty({
    enum: QueryMode,
    example: QueryMode.default,
    required: false,
    nullable: true,
  })
  @IsOptional()
  @Expose()
  public mode?: QueryMode;

  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(NestedStringNullableFilter) },
      { type: 'string' },
    ],
    example: { not: { equals: 'example' } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedStringNullableFilter)
  @Expose()
  public not?: NestedStringNullableFilter | string | null;
}
