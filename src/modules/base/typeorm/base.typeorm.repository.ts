import { BaseEntity } from './base.typeorm.entity';
import { Repository, InsertResult, UpdateResult,
    FindOneOptions, FindManyOptions, FindOptionsWhere, 
    DeleteResult
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { IFindEntitiesResult } from './base.typeorm.interfaces';
import { ID } from 'src/common';


export class BaseTypeormRepository<Entity extends BaseEntity> 
    // extends Repository<Entity> 

// implements IBaseRepository<Entity> 
{

    // constructor(
    //     protected repoEntity: Entity
    // ) {}
    
    // @InjectRepository(Entity)
    // protected repository: Repository<Entity> ;

    constructor(
        protected repository: Repository<Entity>
    ) {

    }

    // insertOne(entity: Entity): Promise<InsertResult> {
    //     const partialEntity: QueryDeepPartialEntity<Entity> 
    //         = entity as QueryDeepPartialEntity<Entity>;
    //     const data = this
    //         .insert(partialEntity)
    //         .then(res => res.raw[0])
    //         .catch(err => err);
    //     return data;
    // }

    async insertOne(entity: Entity): Promise<Entity> {
        const partialEntity: QueryDeepPartialEntity<Entity> 
            = entity as QueryDeepPartialEntity<Entity>;

        const data = this.repository
            .insert(partialEntity)
            .then(res => res.raw[0]);

        return data;
    }

    insertMany(entities: Entity[]): Promise<InsertResult> {
        const partialEntities: QueryDeepPartialEntity<Entity>[] 
            = [] as QueryDeepPartialEntity<Entity>[];
        for (const entity of entities) {
            const partialEntity: QueryDeepPartialEntity<Entity> 
                = entity as QueryDeepPartialEntity<Entity>;
            partialEntities.push(partialEntity);
        }
        const data = this.repository
            .insert(partialEntities)
            .then(res => res.raw[0])
            .catch(err => err);
        return data;
    }

    findById(id: ID): Promise<Entity> {
        const options: FindOneOptions<Entity> = {
            where: {
              id,
            } as FindOptionsWhere<Entity>,
        };

        const result = this.repository
            .findOne(options)
            .then(res => res)
            .catch(err => err);
        return result;
    }

    findOne(options: FindOneOptions<Entity>): Promise<Entity> {

        const result = this.repository
            .findOne(options)
            .then(res => res)
            .catch(err => err);
        return result;
    }

    async findMany(options: FindManyOptions<Entity>): Promise<
        IFindEntitiesResult<Entity>
    > {
        const result = this.repository.findAndCount(options)
            .then(([data, count]) => ({data, total: count}))
        console.log('================ BaseRepository result ', result)
        
        return result;
    }
    
    updateById(id: ID, entity: Entity): Promise<UpdateResult> {

        const findOptionsWhere: FindOptionsWhere<Entity> = { 
            id
        } as FindOptionsWhere<Entity>;

        const partialEntity: QueryDeepPartialEntity<Entity> 
            = entity as QueryDeepPartialEntity<Entity>;
            
        const data: Promise<UpdateResult> = this.repository
            .update(findOptionsWhere, partialEntity)
            .then(res => res.raw[0])
            .catch(err => err);
        return data;
    }

    // updateMany(options, entity: Entity): Promise<void> {

    // }

    deleteById(id: ID): Promise<DeleteResult> {
        const findOptionsWhere: FindOptionsWhere<Entity> = {
            id
        } as FindOptionsWhere<Entity>;

        const result = this.repository.delete(findOptionsWhere)
            .then(res => res)
            .catch(err => err);
        return result;
    }
}
