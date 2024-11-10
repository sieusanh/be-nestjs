// import { FindOneOptions, 
//     FindManyOptions, FindOptionsWhere,
//     UpdateResult, DeleteResult } from 'typeorm';

// import { BaseModel } from './base.mongo.model';
// import { BaseDto } from '../base.dto';
// import { ID } from 'src/common';
// import { IFindModelsResult } from './base.mongo.interfaces';
// import { IFindDtosResult } from '../base.interfaces';
// import { BaseMongoRepository } from './base.mongo.repository';


// export abstract class BaseMongooseService<
//     Dto extends BaseDto,
//     Model extends BaseModel> 
//     // implements IBaseService<Dto> 
//     {

//     // @InjectDataSource()
//     // protected dataSource: DataSource;

//     // @Inject()
//     // queryRunnerFactory: QueryRunnerFactory<Model>;

//     // @Inject()
//     // protected modelFactory: ModelFactory<Dto, Model>

//     // @InjectRepository(Model)
//     constructor(
//         protected repository: BaseMongoRepository<Model>
//     ) {}
//     // constructor(
//     //     // protected readonly repository: Repo
//     // ) { }

//     // async index(): Promise<Dto[]> {
//     //     const entities: Model[] = await this.repository.findMany({});

//     //     const dtos: Dto[] = this.convertModelsToDtos(entities);
//     //     return dtos;
//     // }

//     /*
//     async findById(id: ID): Promise<Dto> {

//         const entity: Entity 
//             = await this.repository.findById(id);
        
//         const dto: Dto = this.convertEntityToDto(entity);
//         return dto;
//     }

//     instanceOfWhere(object: any): 
//         object is FindOptionsWhere<Dto> {

//         const keys = Object.keys(object);
//         if (keys?.length == 1 && keys[0] === 'where') {
//             return true;
//         }
//         return false;
//     }

//     async findOne(dtoOptions: 
//         FindOneOptions<Dto> 
//         | FindOptionsWhere<Dto> 
//         | FindOptionsWhere<Dto>[]
//     ): Promise<Dto | null> {

//         const entityOptions: FindOneOptions<Entity> 
//             = {} as FindOneOptions<Entity>;
//         let isInstanceOfWhere: boolean = false;

//         if (Array.isArray(dtoOptions)) {
//             for (const where of dtoOptions) {
//                 if (!this.instanceOfWhere(where)) {
//                     break;
//                 }
//             }
//             isInstanceOfWhere = true;
//         } else if (this.instanceOfWhere(dtoOptions)) {
//             isInstanceOfWhere = true;
//         } 

//         if (isInstanceOfWhere) {
//             const entityOptions2: FindOneOptions<Entity> 
//                 = { where: dtoOptions as FindOptionsWhere<Entity> };

//             Object.assign(entityOptions, entityOptions2);
//         } else {
//             Object.assign(
//                 entityOptions, 
//                 dtoOptions as FindOneOptions<Entity>
//             );
//         }
//         const entity: Entity 
//             = await this.repository.findOne(entityOptions)!;
        
//         if (!entity) {
//             return null;
//         }

//         const dto: Dto = this.convertEntityToDto(entity);

//         if (!Object.keys(dto)?.length) {
//             return null;
//         }

//         return dto;
//     }

//     async findMany(dtoOptions: 
//         FindManyOptions<Dto> 
//         | FindOptionsWhere<Dto>
//         |  FindOptionsWhere<Dto>[]
//     ): Promise<IFindDtosResult<Dto>> {
//         try {
//             const entityOptions: FindManyOptions<Entity> 
//                 = {} as FindManyOptions<Entity>;
//             let isInstanceOfWhere: boolean = false;

//             if (Array.isArray(dtoOptions)) {
//                 for (const where of dtoOptions) {
//                     if (!this.instanceOfWhere(where)) {
//                         break;
//                     }
//                 }
//                 isInstanceOfWhere = true;
//             } else if (this.instanceOfWhere(dtoOptions)) {
//                 isInstanceOfWhere = true;
//             } 

//             if (isInstanceOfWhere) {
//                 const entityOptions2: FindManyOptions<Entity> 
//                     = { where: dtoOptions as FindOptionsWhere<Entity> };

//                 Object.assign(entityOptions, entityOptions2);
//             } else {
//                 Object.assign(
//                     entityOptions, 
//                     dtoOptions as FindManyOptions<Entity>
//                 );
//             }

//             const findEntitiesResult: IFindEntitiesResult<Entity> 
//                 = await this.repository.findMany(entityOptions);
            
//             const { data: entities, total}: IFindEntitiesResult<Entity> 
//                 = findEntitiesResult;

//             // Convert Entity to Dto
//             const dtos: Dto[] = this.convertEntitiesToDtos(entities);

//             const findManyDtosResult: IFindDtosResult<Dto> 
//                 = { data: dtos, total };
            
//             return findManyDtosResult;
//         } catch (err) {
//             throw err;
//         }
//     }

//     async insertOne(dto1: Dto): Promise<Dto> {
//         try {
//             const entity1: Entity = this.convertDtoToEntity(dto1);
            
//             const entity2: Entity = await this.repository
//                 .insertOne(entity1);
            
//             const dto2: Dto = this.convertEntityToDto(entity2);
//             return dto2;
            
//         } catch (err) {
//             throw err;
//         }
//     }

//     // async createMany(entities: Dto[]): Promise<void> {
//     //     const func = async function () {
//     //         await this.queryRunnerFactory.save(entities[0]);
//     //         await this.queryRunnerFactory.save(entities[1]);
//     //     }
//     //     await this.queryRunnerFactory.wrapTransaction(func);
//     // }

//     updateById(
//         id: ID, 
//         dto: Dto
//     ): Promise<UpdateResult> {

//         const entity: Entity = this.convertDtoToEntity(dto);

//         const result = this.repository
//             .updateById(id, entity)
//             .then(res => res)
//             .catch(err => err);
//         return result; 
//     }

//     // updateMany(
//     //     FindManyOptions
//     //     criteria: FindOptionsWhere<Dto>, 
//     //     dto: Dto
//     // ): Promise<UpdateResult> {
//     //     const partialDto: QueryDeepPartialDto<Dto> 
//     //         = dto as QueryDeepPartialDto<Dto>; 

//     //     const result = this.repository
//     //         .update(criteria, partialDto)
//     //         .then(res => res)
//     //         .catch(err => err);
//     //     return result; 
//     // }

//     deleteById(id: ID): Promise<DeleteResult> {
        
//         const result = this.repository
//             .deleteById(id);
            
//         return result;
//     }
//     */

//     convertDtoToModel(dto: Dto): Model {

//         const model: Model = {} as Model;

//         for (const key of Object.keys(dto)) {
//             model[key] = dto[key];
//         }

//         return model;
//     }

//     convertModelToDto(model: Model): Dto {

//         const dto: Dto = {} as Dto;

//         for (const key of Object.keys(dto)) {
//             dto[key] = model[key];
//         }

//         return dto;
//     }

//     convertModelsToDtos(models: Model[]): Dto[] {

//         const dtos: Dto[] = [] as Dto[];

//         for (const model of models) {
//             const dto: Dto = {} as Dto;

//             for (const [key, val] of Object.entries(model)) {
//                 dto[key] = val;
//             }
//             dtos.push(dto);
//         }

//         return dtos;
//     }
// }
