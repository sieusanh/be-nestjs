import { Injectable } from '@nestjs/common';
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { BaseDto } from 'src/modules/base';
import { ApiProperty } from '@nestjs/swagger';
import { ROLES } from 'src/common';

@Injectable()
export class RoleDto extends BaseDto {

    @ApiProperty()
    @IsString()
    // @Matches(/^[a-zA-Z ]+$/)
    name: string = '';

    @ApiProperty({ enum: Object.keys(ROLES) })
    @IsString()
    @IsEnum(Object.values(ROLES))
    @IsOptional()
    type?: string = ROLES.MEMBER;

}
