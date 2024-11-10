import { SchemaFactory } from '@nestjs/mongoose';
import { Payment } from './payments.model';

export const PaymentSchema = SchemaFactory.createForClass(Payment);
