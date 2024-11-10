import { Module, Global } from '@nestjs/common';

import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
// import { paymentsRepository } from './accounts.repository';

import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema } from './payments.schema';
import { SCHEMA_NAME } from './payments.constant';
import { ModuleServiceFactory } from 'src/common';


@Global()
@Module({
    imports: [
        MongooseModule.forFeature([{ 
            name: SCHEMA_NAME, schema: PaymentSchema 
        }])
    ],
    controllers: [PaymentsController],
    providers: [
        PaymentsService, 
        {
            provide: ModuleServiceFactory,
            useClass: ModuleServiceFactory
        }
    ],
    exports: [
        PaymentsService,

        
        // TypeOrmModule,
    ]
})
export class PaymentsModule {}
