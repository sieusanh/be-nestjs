import { SchemaFactory } from '@nestjs/mongoose';
import { BaseModel } from './base.mongo.model';

export const BaseSchema = SchemaFactory.createForClass(BaseModel);

