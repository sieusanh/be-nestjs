import { Injectable } from '@nestjs/common';
import { RoleDto } from './roles.dto';
import { Role } from './roles.entity';
import { RolesRepository } from './roles.repository';

@Injectable()
export class RolesService {

    constructor(
        protected rolesRepository: RolesRepository
    ) {
    }

}
