import { Prop, Schema } from '@nestjs/mongoose';
import { BaseModel } from '../../base';
import { ID, GENDERS, ROLES } from 'src/common';

@Schema({ 
    _id: false, 
    timestamps: true, 
    collection: 'hr_accounts',
})
export class Account extends BaseModel {

    // @Prop({
    //     unique: true,
    //     required: true,
    // })
    // id: string;

    @Prop({
        unique: true,
    })
    username: string;

    @Prop({
        unique: true,
    })
    email: string;

    @Prop()
    password: string;

    @Prop()
    name: string = '';

    @Prop()
    phone?: string = '';
    
    @Prop()
    avatar?: string = '';

    @Prop()
    gender?: string = GENDERS.MALE;

    @Prop()
    roleId?: ID;

    @Prop()
    lastLoginAt: Date;
}
