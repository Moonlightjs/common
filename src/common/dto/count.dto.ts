import { ApiProperty } from '@nestjs/swagger';

export class CountDto {
  @ApiProperty({ type: 'number' })
  public readonly count: number;

  constructor(count: number) {
    this.count = count;
  }

  public static create(count: number): CountDto {
    return new CountDto(count);
  }
}
