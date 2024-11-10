import { Injectable, 
    // UnauthorizedException, NotFoundException, 
    BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountDto } from 'src/modules/hr/accounts/accounts.dto'
import { AccountsService } from 'src/modules/hr/accounts/accounts.service';
import { FindOptionsWhere, FindOneOptions } from 'typeorm';
import { ErrorMessage } from 'src/common';
// import { SignInDto } from './user.auth.dto';

// interface LoginInfos {
//     username: string;
//     employeeId: Id;
//     role?: string;
//     projectIds?: Array<Id>;
//     departmentId: Id;
// }

// type AccessInfo = {
//     access_token: string
// }

@Injectable()
export class UserAuthService {
    constructor(

        // @Inject(forwardRef(() => AccountsService))
        private accountsService: AccountsService, 
        private jwtService: JwtService
    ) {}

    // async signIn({username = '', email, password: pass}: SignInDto): Promise<AccessInfo> {
    //     try {
    //         // Account        
    //         const whereAccount: FindOptionsWhere<Account>[] = [
    //             ...(username ? [{ username }] : []),
    //             ...(email ? [{ email }] : [])
    //         ];
    //         const account = await this.accountsService.findOne(whereAccount);
    //         if (!account) {
    //             throw new UnauthorizedException();
    //         }

    //         const { username: accUsername, password = '', employeeId = '' } = account;

    //         if (password != pass) {
    //             throw new UnauthorizedException();
    //         }

    //         // Employee
    //         const whereEmployee: FindOptionsWhere<Employee> = {
    //             id: employeeId
    //         };

    //         const employee = await this.employeesService.findOne(whereEmployee);
    //         if (!employee) {
    //             throw new NotFoundException();
    //         }
    //         const { role, projectIds, departmentId } = employee;

    //         // Generate access token
    //         const jwtPayload: LoginInfos = {
    //             username: accUsername, 
    //             employeeId, role,
    //             projectIds, 
    //             departmentId
    //         }

    //         const accessToken: string = await this.jwtService.signAsync(jwtPayload);

    //         return {
    //             access_token: accessToken
    //         }
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    async register(accountDto: AccountDto): Promise<void> {

        try {
            // 
            const { phone, email } = accountDto;

            // Check if account existed
            const { username } = accountDto;
            const whereAccount: FindOptionsWhere<AccountDto>[] = [
                { username },
                { email }, 
                { phone } 
            ];

            const findAccountOptions: FindOneOptions<AccountDto> = { 
                where: whereAccount 
            };

            const filter = {};
            const projection = {};
            const options = {};

            const findOneAccountService 
                = await this.accountsService.findOne(filter, projection, options);

            console.log('======================== findOneAccountService ', 
                findOneAccountService)

            // const account: AccountDto | null 
            //     = await this.accountsService.findOne(findAccountOptions);
            
            // if (account) {
            //     throw new BadRequestException(`Account ${ErrorMessage.EXISTED_POSTFIX}`);
            // }
            
            // // Insert account
            // await this.accountsService.insertOne(accountDto);
            
        } catch (err) {
            console.log('================== register err', err)
            throw err;
        }
    }
}