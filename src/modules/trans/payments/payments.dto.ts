import { Injectable } from '@nestjs/common';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

import { BaseDto } from 'src/modules/base';
import { ApiProperty } from '@nestjs/swagger';

import { ID } from 'src/common';

@Injectable()
export class PaymentDto extends BaseDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    orderId: ID = '';

    @ApiProperty()
    @IsString()
    @IsOptional()
    summary?: string = '';

}
