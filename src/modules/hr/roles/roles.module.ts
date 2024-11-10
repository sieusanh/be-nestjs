import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from './roles.service';
import { RolesRepository } from './roles.repository';
import { Role } from './roles.entity';
// import { EntityListenerFactory, QueryRunnerFactory } from 'src/common';

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([ Role ])
    ],
    controllers: [],
    providers: [
        RolesService, 
        RolesRepository,
    ],
    exports: [
        RolesService,
        RolesRepository,
    ]
})
export class RolesModule {}
