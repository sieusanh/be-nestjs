import { Module } from '@nestjs/common';
import { UserAuthService } from './user.auth.service';
import { UserAuthController } from './user.auth.controller';
// import { AccountsModule, AccountsService, AccountDto, 
//     EmployeesModule, EmployeesService, EmployeeDto } from 'src/modules/hr';


import { AccountsModule } from 'modules/hr/accounts/accounts.module';
import { AccountsService } from 'modules/hr/accounts/accounts.service';


import { JWT_SECRET, API_BODY_EXAMPLE } from './user.auth.constant';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: JWT_SECRET,
            signOptions: {
                expiresIn: '60s'
            }
        }),
        AccountsModule,
    ],
    providers: [
        // AccountsService,

        // EmployeeDto,
        UserAuthService, 


        // {
        //     provide: 'AccountDto',
        //     useClass: AccountDto
        // },
        // {
        //     provide: 'AccountsService',
        //     useClass: AccountsService
        // },
        // {
        //     provide: 'EmployeeDto',
        //     useClass: EmployeeDto
        // },
        // {
        //     provide: 'EmployeesService',
        //     useClass: EmployeesService
        // },
        {
            provide: 'ApiBodyExample',
            useValue: API_BODY_EXAMPLE
        }
    ],
    controllers: [ UserAuthController ],
})
export class UserAuthModule { }
