import { BaseModel } from './base.mongo.model';
import { BaseDto } from '../base.dto';
import { ID } from 'src/common';
import { FindManyOptions, FindOneOptions, FindOptionsWhere, 
    InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { IFindDtosResult } from '../base.interfaces';

export interface IFindModelsResult<Model extends BaseModel>  {
    data: Model[];
    total: number;
}


export interface IBaseMongooseRepository<Model extends BaseModel> {

    insertOne(model: Model): Promise<Model>;

    insertMany(models: Model[]): Promise<InsertResult>;

    findById(id: ID): Promise<Model>;

    findOne(options: FindOneOptions<Model>): Promise<Model>;

    findMany(options: FindManyOptions<Model>): 
        Promise<IFindModelsResult<Model>>;

    updateById(id: ID, Model: Model): Promise<UpdateResult>;
    
    deleteById(id: ID): Promise<DeleteResult>
        
}