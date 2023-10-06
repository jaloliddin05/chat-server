import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateGroupDto {
  @ApiProperty({
    description: `name`,
    example: 'John Doe',
  })
  @IsOptional()
  @IsString()
  readonly name: string;
}

export default UpdateGroupDto;
