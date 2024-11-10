import { Module, Global } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { AccountsRepository } from './accounts.repository';
import { ModuleServiceFactory } from 'src/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './accounts.schema';
import { Account } from './accounts.model';
import { SCHEMA_NAME } from './accounts.constant';
// import { EntityListenerFactory, QueryRunnerFactory } from 'src/common';

// import { API_BODY_EXAMPLE } from './accounts.constant';

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([{ 
            name: SCHEMA_NAME, 
            schema: AccountSchema,
        }]),
    //     MongooseModule.forFeatureAsync([{ 
    //         name: SCHEMA_NAME, 
    //         // schema: AccountSchema,
    //         useFactory: () => {
    //             const schema = AccountSchema;
    //             schema.pre('save', function() {
    //                 this
    //             });
    //             return schema;
    //           },
    //     }])
    ],
    controllers: [AccountsController],
    providers: [
        AccountsRepository,
        AccountsService, 

        {
            provide: ModuleServiceFactory,
            useClass: ModuleServiceFactory
        }

        // AccountDto, 
        // Account

        // Account, 
        // EntityListenerFactory, QueryRunnerFactory
        // {
        //     provide: 'AccountDto',
        //     useClass: AccountDto
        // },
        // {
        //     provide: 'ApiBodyExample',
        //     useValue: API_BODY_EXAMPLE
        // }
    ],
    exports: [
        AccountsService,
        AccountsRepository,

        // TypeOrmModule,
    ]
})
export class AccountsModule {}
