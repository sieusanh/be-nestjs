import { IsString, IsInt, IsDate, IsEnum, IsOptional } from 'class-validator';
import { STATUS, ID } from 'src/common';
import { ApiProperty } from '@nestjs/swagger';


export class BaseDto {
    
    @IsString()
    @IsOptional()
    @ApiProperty({
        type: 'string'
    })
    id: ID = '';
    
    // @IsInt()
    // @IsOptional()
    // @IsEnum(STATUS)
    // @ApiProperty({ enum: Object.keys(STATUS) })
    // status: number = 1;

    @IsOptional()
    @IsDate()
    @ApiProperty()
    createdAt: Date = new Date();

    @IsDate()
    @IsOptional()
    @ApiProperty()
    updatedAt: Date = new Date();

    @IsString()
    @IsOptional()
    @ApiProperty()
    createdBy: string = '';

    @IsString()
    @IsOptional()
    @ApiProperty()
    updatedBy: string = '';

    // constructor(...fields: any[]) {
    //     super();
    //     for (const key of Object.keys(this)) {
    //         this[key] = fields[key];
    //     }
    // }

    // getProperties() {
    //     const properties = Object.keys(this);
    //     return properties;
    // }

    // createFromEntity<Entity extends BaseEntity>(entity: Entity) {
    //     for (const key of Object.keys(entity)) {
    //         this[key] = entity[key];
    //     }

    //     return this;
    // }

}   

