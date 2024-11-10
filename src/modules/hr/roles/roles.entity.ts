import { Prop, Schema } from '@nestjs/mongoose';
import { BaseModel } from '../../base';
import { ID, ROLES } from 'src/common';


@Schema({ 
    _id: false, 
    timestamps: true, 
    collection: 'hr_roles'
})
export class Role extends BaseModel {

    @Prop()
    name: string = '';

    @Prop()
    type?: string = ROLES.MEMBER;

}
