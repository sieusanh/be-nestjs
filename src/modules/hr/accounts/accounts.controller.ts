import {
    Get, Post, Put, Delete,
    Controller, Body, Query,
    Req, Res,
    Header,
    HttpCode, HttpStatus, Param, Redirect,
    HttpException,
} from '@nestjs/common';
import { ApiOperation, ApiBody, ApiHeader, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { ID, QueryParams, QueryParser, PathParams, HttpErrorMessage } from 'src/common';

import { AccountsService } from './accounts.service';
import { AccountDto } from './accounts.dto';
import { Account } from './accounts.model';
import { SWAGGER_TAG_ACCOUNT, API_BODY_EXAMPLE } from './accounts.constant';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ROLES } from 'src/common';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'common/guards';
import { Roles } from 'common/decorator';
import { FindManyOptions } from 'typeorm';


@Controller()
@UseGuards(RolesGuard)
@ApiTags(SWAGGER_TAG_ACCOUNT)
@ApiHeader({
    name: 'X-MyHeader',
    description: 'Custom header'
})
@ApiBearerAuth()
export class AccountsController {

    private queryParser: QueryParser;

    constructor(
        protected accountsService: AccountsService,
        // protected accountDto: AccountDto, 
        // protected account: Account, 
        // @Inject('ApiBodyExample') apiBodyExample: Object
    ) { 
        this.queryParser = new QueryParser();
    } 
    
    @Post()
    // @Roles([ROLES.ADMIN])
    // @Header('Cache-Control', 'none')
    @HttpCode(HttpStatus.CREATED)
    // @RolesGuard(['admin'])

    @ApiOperation({ summary: `Create` })
    // @ApiBody({
    //     // a: {
    //     //     description: 'Body Creating',
    //     //     // examples: this?.['apiBodyExample'],
    //     examples: {
    //         a: {
    //             value: {
    //                 prop1: 'val1'
    //             }
                
    //         }
    //     }
    // })
    @ApiBody({
        description: 'Body',
        // examples: this?.['apiBodyExample'],
        examples: {
            'Case 1': {
                value: {
                    username: 'username_1',
                    email: 'user1@gmail.com',
                    password: 'Abc@123',
                    name: 'Username 1',
                    phone: '0123456789',
                    avatar: 'a.png',
                    gender: 'FEMALE',
                    roleId: 'role1',
                    // lastLoginAt
                }
            },
            // 'Case 2': {
            //     // value: getSchemaPath(this?.['apiBodyExample']!)
            //     value: undefined
            // }
        }
    })
    async create(
        // @Body(new ValidationPipe())
        @Body()
        accountDto: AccountDto,

        // @Res() res: Response
    ): Promise<AccountDto> {
        try {

            const result = this.accountsService
                .insertOne(accountDto);

            return result;
            // res.status(HttpStatus.CREATED).json(data);
        } catch (error) {
            throw new HttpException(
                HttpErrorMessage.CREATE, 
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: `findOne` })
    findById(
        @Param() pathParams: PathParams,
        // @Res({ passthrough: true }) res: Response
    ) {
        try {
            const { id } = pathParams;

            const data = this.accountsService.findById(id!);

            return data;
            // res.status(HttpStatus.CREATED).json(data);

        } catch (error) {
            throw new HttpException(
                HttpErrorMessage.NOT_FOUND, 
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: `findAll` })
    async findMany(
        @Query() query: QueryParams,
    ) {
        try {
            // throw new HttpException(
            //     HttpErrorMessage.NOT_FOUND, 
            //     HttpStatus.INTERNAL_SERVER_ERROR
            // );

            const queryOptions: FindManyOptions
                = this.queryParser.parseFindManyQuery(query);
            

            const result = await this.accountsService.findMany();

            return result;
        } catch (err) {
            console.log('================= BaseController findMany ', 
                err)

            throw new HttpException(
                HttpErrorMessage.INTERNAL_SERVER_ERROR, 
                HttpStatus.INTERNAL_SERVER_ERROR
            );
            
            /*
                throw new BadRequestException('Something bad happened', { 
                    cause: new Error(), 
                    description: 'Some error description' 
                })
                    
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'This is a custom message',
                }, HttpStatus.FORBIDDEN, {
                    cause: 'Em sai roi'
                });
            */
        }
    }

    // @Put(':id')
    // @HttpCode(HttpStatus.NO_CONTENT)
    // @ApiOperation({ summary: `update` })
    // updateById(
    //     @Param('id') id: ID,
    //     @Body() accountDto: AccountDto,
    // ) {
    //     try {
    //         return this.accountsService.updateById(id, accountDto);

    //     } catch (error) {
    //         throw new HttpException(
    //             HttpErrorMessage.UPDATE, 
    //             HttpStatus.INTERNAL_SERVER_ERROR
    //         );
    //     }
    // }

    // @Delete(':id')
    // @HttpCode(HttpStatus.NO_CONTENT)
    // @ApiOperation({ summary: `remove` })
    // async deleteById(
    //     @Param('id') id: ID
    // ) {
    //     try {
    //         return this.accountsService.deleteById(id);
    //     } catch (error) {
    //         throw new HttpException(
    //             HttpErrorMessage.DELETE, 
    //             HttpStatus.INTERNAL_SERVER_ERROR
    //         );
    //     }
    // }

    @Get('*')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    
}
