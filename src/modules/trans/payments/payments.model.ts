import { Prop, Schema } from '@nestjs/mongoose';
import { ID } from 'src/common';
import { BaseModel } from '../../base';

@Schema({ timestamps: true, _id: false })
export class Payment extends BaseModel {

    @Prop({
        required: true,
        unique: true,
        collection: 'trans_payments'
    })
    orderId: ID;

    @Prop({ 
        type: 'string',
        default: ''
    })
    summary: string;
}
