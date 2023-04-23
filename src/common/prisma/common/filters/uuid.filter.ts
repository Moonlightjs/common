import { IsNotNull } from '@common/class-validator/decorator/is-not-null.decorator';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsOptional, IsUUID, ValidateNested } from 'class-validator';
@Expose()
export class NestedUuidFilter {
  @ApiProperty({
    type: String,
    example: 'd24c8f2f-a9c9-4f50-aa8c-1b71d84e82f7',
    required: false,
    nullable: false,
  })
  @IsUUID()
  @IsNotNull()
  @Expose()
  public equals?: string;

  @ApiProperty({
    type: [String],
    example: ['d24c8f2f-a9c9-4f50-aa8c-1b71d84e82f7'],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsUUID('all', { each: true })
  @IsNotNull()
  @Expose()
  public in?: string[];

  @ApiProperty({
    type: [String],
    example: ['d24c8f2f-a9c9-4f50-aa8c-1b71d84e82f7'],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsUUID('all', { each: true })
  @IsNotNull()
  @Expose()
  public notIn?: string[];

  @ApiProperty({
    type: String,
    example: 'd24c8f2f-a9c9-4f50-aa8c-1b71d84e82f7',
    required: false,
    nullable: false,
  })
  @IsUUID()
  @IsNotNull()
  @Expose()
  public lt?: string;

  @ApiProperty({
    type: String,
    example: 'd24c8f2f-a9c9-4f50-aa8c-1b71d84e82f7',
    required: false,
    nullable: false,
  })
  @IsUUID()
  @IsNotNull()
  @Expose()
  public lte?: string;

  @ApiProperty({
    type: String,
    example: 'd24c8f2f-a9c9-4f50-aa8c-1b71d84e82f7',
    required: false,
    nullable: false,
  })
  @IsUUID()
  @IsNotNull()
  @Expose()
  public gt?: string;

  @ApiProperty({
    type: String,
    example: 'd24c8f2f-a9c9-4f50-aa8c-1b71d84e82f7',
    required: false,
    nullable: false,
  })
  @IsUUID()
  @IsNotNull()
  @Expose()
  public gte?: string;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedUuidFilter) }, { type: 'string' }],
    example: { not: { equals: 'd24c8f2f-a9c9-4f50-aa8c-1b71d84e82f7' } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsOptional()
  @Type(() => NestedUuidFilter)
  @Expose()
  public not?: NestedUuidFilter | string;
}

@Expose()
export class UuidFilter {
  @ApiProperty({
    type: String,
    example: '72b3c3df-a69d-4c2c-8f97-66ae4140c28c',
    required: false,
    nullable: false,
  })
  @IsUUID()
  @IsNotNull()
  @Expose()
  public equals?: string;

  @ApiProperty({
    type: [String],
    example: ['72b3c3df-a69d-4c2c-8f97-66ae4140c28c'],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsUUID('all', { each: true })
  @IsNotNull()
  @Expose()
  public in?: string[];

  @ApiProperty({
    type: [String],
    example: ['72b3c3df-a69d-4c2c-8f97-66ae4140c28c'],
    isArray: true,
    required: false,
    nullable: false,
  })
  @IsUUID('all', { each: true })
  @IsNotNull()
  @Expose()
  public notIn?: string[];

  @ApiProperty({
    type: String,
    example: '72b3c3df-a69d-4c2c-8f97-66ae4140c28c',
    required: false,
    nullable: false,
  })
  @IsUUID()
  @IsNotNull()
  @Expose()
  public lt?: string;

  @ApiProperty({
    type: String,
    example: '72b3c3df-a69d-4c2c-8f97-66ae4140c28c',
    required: false,
    nullable: false,
  })
  @IsUUID()
  @IsNotNull()
  @Expose()
  public lte?: string;

  @ApiProperty({
    type: String,
    example: '72b3c3df-a69d-4c2c-8f97-66ae4140c28c',
    required: false,
    nullable: false,
  })
  @IsUUID()
  @IsNotNull()
  @Expose()
  public gt?: string;

  @ApiProperty({
    type: String,
    example: '72b3c3df-a69d-4c2c-8f97-66ae4140c28c',
    required: false,
    nullable: false,
  })
  @IsUUID()
  @IsNotNull()
  @Expose()
  public gte?: string;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(NestedUuidFilter) }, { type: 'string' }],
    example: { not: { equals: '72b3c3df-a69d-4c2c-8f97-66ae4140c28c' } },
    required: false,
    nullable: true,
  })
  @ValidateNested()
  @IsNotNull()
  @Type(() => NestedUuidFilter)
  @Expose()
  public not?: NestedUuidFilter | string;
}
