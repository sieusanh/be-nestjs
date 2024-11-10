
import { BaseModel, BaseDto } from 'src/modules/base';

export class ModuleServiceFactory<
    Dto extends BaseDto,
    Model extends BaseModel
> {

    convertDtoToModel(dto: Dto): Model {

        const model: Model = {} as Model;

        for (const key of Object.keys(dto)) {
            model[key] = dto[key];
        }

        return model;
    }

    convertModelToDto(model: Model): Dto {

        const dto: Dto = {} as Dto;

        for (const key of Object.keys(dto)) {
            dto[key] = model[key];
        }

        return dto;
    }

    convertModelsToDtos(models: Model[]): Dto[] {

        const dtos: Dto[] = [] as Dto[];

        for (const model of models) {
            const dto: Dto = {} as Dto;

            for (const [key, val] of Object.entries(model)) {
                dto[key] = val;
            }
            dtos.push(dto);
        }

        return dtos;
    }
}
