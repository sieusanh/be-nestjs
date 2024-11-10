import { Injectable } from '@nestjs/common';
import { BaseMongoRepository } from 'src/modules/base';
import { Role } from './roles.entity';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model as MongooseModel } from 'mongoose';
import { SCHEMA_NAME } from './roles.constant'

@Injectable()
export class RolesRepository extends BaseMongoRepository<Role> {

    constructor(
        
        @InjectModel(SCHEMA_NAME) 
        model: MongooseModel<Role>,

    ) {
        super(model);
    }

    
}
