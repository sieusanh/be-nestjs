import { BaseDto } from './base.dto';
import { QueryParams, PathParams, ID } from 'src/common';

export interface IFindDtosResult<Dto extends BaseDto>  {
    data: Dto[];
    total: number;
}

export interface IBaseController<Dto extends BaseDto> {
    // create(dto: Dto): Promise<Dto>;
    // findById(pathParams: PathParams, res: Response): Promise<Dto>;
    // findMany(query: QueryParams, res: Response): Promise<Dto[]>;
    // update(id: Id, dto: Dto): Promise<UpdateResult>
    // remove(id: Id): Promise<DeleteResult>;

    create(dto: Dto);
    findMany(query: QueryParams, res: Response);
    findById(pathParams: PathParams);
    updateById(id: ID, dto: Dto);
    deleteById(id: ID);
}
