import { BaseEntity } from './base.typeorm.entity';
import { BaseDto } from '../base.dto';
import { IFindDtosResult } from '../base.interfaces';
import { ID } from 'src/common';
import { FindManyOptions, FindOneOptions, FindOptionsWhere, 
    InsertResult, UpdateResult, DeleteResult } from 'typeorm';

export interface IFindEntitiesResult<Entity extends BaseEntity>  {
    data: Entity[];
    total: number;
}


export interface IBaseTypeormRepository<Entity extends BaseEntity> {

    insertOne(entity: Entity): Promise<Entity>;

    insertMany(entities: Entity[]): Promise<InsertResult>;

    findById(id: ID): Promise<Entity>;

    findOne(options: FindOneOptions<Entity>): Promise<Entity>;


    findMany(options: FindManyOptions<Entity>): 
        Promise<IFindEntitiesResult<Entity>>;

    updateById(id: ID, entity: Entity): Promise<UpdateResult>;
    
    deleteById(id: ID): Promise<DeleteResult>;
}
