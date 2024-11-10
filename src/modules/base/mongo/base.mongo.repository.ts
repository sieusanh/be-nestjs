import { BaseModel } from './base.mongo.model';
import { ID } from 'src/common';
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Model as MongooseModel, 
    Connection, RootFilterQuery } from 'mongoose';

@Injectable()
export class BaseMongoRepository<Model extends BaseModel> 
    // extends Repository<Model> 

// implements IBaseRepository<Model> 
{

    // constructor(
    //     protected repoModel: Model
    // ) {}
    
    // @InjectRepository(Model)
    // protected repository: Repository<Model> ;

    // private SCHEMA_NAME = this.SCHEMA_NAME;

    @InjectConnection() 
    protected readonly connection: Connection;

    constructor(
        // @InjectModel(SCHEMA_NAME) 
        // private model: MongooseModel<Model>,

        protected model: MongooseModel<Model>

        // protected repository: Repository<Entity>
    ) { }

    async insertOne(newModel: Model): Promise<Model> {
        // const partialEntity: QueryDeepPartialEntity<Entity> 
        //     = entity as QueryDeepPartialEntity<Entity>;

        // const data = this.repository
        //     .insert(partialEntity)
        //     .then(res => res.raw[0]);

        const data = new this.model(newModel);
        const result = data.save();

        return result;
    }
/*
    async insertOne(model: Model): Promise<Model> {
        const partialModel: QueryDeepPartialModel<Model> 
            = model as QueryDeepPartialModel<Model>;

        const data = this.repository
            .insert(partialModel)
            .then(res => res.raw[0]);

        return data;
    }
*/

/*
    filter: RootFilterQuery<TRawDocType>,
    projection: ProjectionType<TRawDocType> | null | undefined,
    options: QueryOptions<TRawDocType> & { lean: true }
*/
    findMany(filter: any, projection: any, options: any) {
        // : Promise<Model[]> {
        return this.model.find(filter, projection, options).exec();
    }

    findOne(filter: any, projection?: any, options?: any) {
        // : Promise<Model[]> {
        return this.model.find(filter, projection, options).exec();
    }

    async wrapTransaction(...funcList: Function[]) {
        const session = await this.connection.startSession();
        session.startTransaction();
        for (const func of funcList) {
            func();
        }
        
    }

    // insertOne(Model: Model): Promise<InsertResult> {
    //     const partialModel: QueryDeepPartialModel<Model> 
    //         = Model as QueryDeepPartialModel<Model>;
    //     const data = this
    //         .insert(partialModel)
    //         .then(res => res.raw[0])
    //         .catch(err => err);
    //     return data;
    // }


    // insertMany(models: Model[]): Promise<InsertResult> {
    //     const partialModels: QueryDeepPartialModel<Model>[] 
    //         = [] as QueryDeepPartialModel<Model>[];
    //     for (const model of models) {
    //         const partialModel: QueryDeepPartialModel<Model> 
    //             = model as QueryDeepPartialModel<Model>;
    //         partialModels.push(partialModel);
    //     }
    //     const data = this.repository
    //         .insert(partialModels)
    //         .then(res => res.raw[0])
    //         .catch(err => err);
    //     return data;
    // }

    /*
        filter: RootFilterQuery<TRawDocType>,
        projection: ProjectionType<TRawDocType> | null | undefined,
        options: QueryOptions<TRawDocType> & { lean: true }
    */

    findById(id: ID): Promise<Model> {
        const options: RootFilterQuery<Model> = { code: id };

        const result = this.model        
            .findOne(options)
            .then(res => res)
            .catch(err => err);
        return result;
    }

    // findOne(options: FindOneOptions<Model>): Promise<Model> {

    //     const result = this.repository
    //         .findOne(options)
    //         .then(res => res)
    //         .catch(err => err);
    //     return result;
    // }

    // async findMany(options: FindManyOptions<Model>): Promise<
    // IFindModelsResult<Model>
    // > {
    //     const result = this.repository.findAndCount(options)
    //         .then(([data, count]) => ({data, total: count}))
    //     console.log('================ BaseRepository result ', result)
        
    //     return result;
    // }
    
    // updateById(id: ID, model: Model): Promise<UpdateResult> {

    //     const findOptionsWhere: FindOptionsWhere<Model> = { 
    //         id
    //     } as FindOptionsWhere<Model>;

    //     const partialModel: QueryDeepPartialModel<Model> 
    //         = model as QueryDeepPartialModel<Model>;
            
    //     const data: Promise<UpdateResult> = this.repository
    //         .update(findOptionsWhere, partialModel)
    //         .then(res => res.raw[0])
    //         .catch(err => err);
    //     return data;
    // }

    // // updateMany(options, Model: Model): Promise<void> {

    // // }

    // deleteById(id: ID): Promise<DeleteResult> {
    //     const findOptionsWhere: FindOptionsWhere<Model> = {
    //         id
    //     } as FindOptionsWhere<Model>;

    //     const result = this.repository.delete(findOptionsWhere)
    //         .then(res => res)
    //         .catch(err => err);
    //     return result;
    // }
}
