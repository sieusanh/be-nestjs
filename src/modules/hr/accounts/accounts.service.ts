import { Injectable, Inject } from '@nestjs/common';
import { AccountDto } from './accounts.dto';
import { Account } from './accounts.model';
import { AccountsRepository } from './accounts.repository';
import { ModuleServiceFactory, ID } from 'src/common';

@Injectable()
export class AccountsService {

    constructor(
        protected repository: AccountsRepository,

        // @Inject('ApiBodyExample') 
        protected moduleServiceFactory: 
            ModuleServiceFactory<AccountDto, Account>,

    ) { }

    async insertOne(accountDto: AccountDto) {
        try {
            console.log('======================== zzz accountDto ', 
                accountDto)
            const accountModel: Account
                = this.moduleServiceFactory.convertDtoToModel(accountDto);

            const createdModel 
                = await this.repository.insertOne(accountModel);

            const resDto: AccountDto 
                = this.moduleServiceFactory.convertModelToDto(createdModel);

            return resDto;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async findById(id: ID) {
        try {
  
            const accountModel = await this.repository.findById(id);

            const resDto: AccountDto 
                = this.moduleServiceFactory.convertModelToDto(accountModel);
    
            return resDto;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async findOne(filter, projection, options) {
        try {
  
            const filter = {};
            const projection = {};
            const options = {};
            const accountModel 
                = await this.repository.findOne(filter, projection, options);

            console.log('======================== findOne accountModel ', accountModel)

            return accountModel;

            // const resDto: AccountDto 
            //     = this.moduleServiceFactory.convertModelToDto(accountModel);
    
            // return resDto;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async findMany() {
        try {
            const accountModels = await this.repository.findMany({}, {}, {});

            console.log('================== accountModels ', accountModels);
            return {}
            // return resDto;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}
