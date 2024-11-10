import { Injectable } from '@nestjs/common';
import { Payment } from './payments.model';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model as MongooseModel, Connection } from 'mongoose';
import { SCHEMA_NAME } from './payments.constant';
import { BaseMongoRepository } from '../../base';

@Injectable()
export class PaymentsRepository extends BaseMongoRepository<Payment>{

    constructor(

        @InjectModel(SCHEMA_NAME) 
        model: MongooseModel<Payment>,

        // @InjectConnection() 
        // private readonly connection: Connection,
    ) { 
        super(model);
    }

    // async insertOne(newPayment: Payment): Promise<Payment> {
    //     const data = new this.model(newPayment);
    //     const result = data.save();

    //     return result;
    // }

    // findAll1(options: any): Promise<Payment[]> {
    //     return this.model.find().exec();
    // }

    // async wrapMongoTransaction(...funcList: Function[]) {
    //     const session = await this.connection.startSession();
    //     session.startTransaction();
    //     for (const func of funcList) {
    //         func();
    //     }
        
    // }
}
