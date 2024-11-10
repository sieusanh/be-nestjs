import { Injectable } from '@nestjs/common';
import { BaseMongoRepository } from 'src/modules/base';
import { Account } from './accounts.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model as MongooseModel } from 'mongoose';
import { SCHEMA_NAME } from './accounts.constant';


@Injectable()
export class AccountsRepository extends BaseMongoRepository<Account> {

    constructor(
        @InjectModel(SCHEMA_NAME) 
        protected model: MongooseModel<Account>
    ) {
        super(model);
    }

    getAccounts(): Promise<any> {
        const p = new Promise((resolve) => 
            resolve('nothing'));
        return p;
    }
}
