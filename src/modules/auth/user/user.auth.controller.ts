import {
    Controller, Post, Body,
    HttpCode, HttpStatus, Inject, HttpException
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { UserAuthService } from './user.auth.service';
import { SWAGGER_TAG_USER_AUTH } from './user.auth.constant';
import { SignInDto, RegistryDto, 
    // AccessDto 
} from './user.auth.dto';
// import { AccountDto, EmployeeDto } from 'src/modules/hr';
import { AccountDto } from 'src/modules/hr/accounts/accounts.dto';

import { HttpErrorMessage, ROLES } from 'src/common';
// import { BaseApiBody } from 'src/common/decorator';

@ApiTags(SWAGGER_TAG_USER_AUTH)
@Controller()
export class UserAuthController {   

    constructor(
        private userAuthService: UserAuthService,
        // @Inject('AccountDto') 
        // private accountDto: AccountDto,
        // @Inject('EmployeeDto') 
        // private employeeDto: EmployeeDto,
        @Inject('ApiBodyExample') protected apiBodyExample: Object
    ) { } 

    /*
        {
            "username": "nguyenvana",
            "email": "nguyenvana@gmail.com",
            "password": "abc123@",
            "name": "Nguyễn Văn A",
            "phone": "0123456789",
            "avatar": "",
            "gender": "MALE",
            "role": "MEMBER"
        }
    */

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Account Login' })
    // @ApiBody({ type: SignInDto })
    async signIn(@Body() signInDto: SignInDto): Promise<void> {
    // Promise<AccessDto> {
        try {
            // const { username, email, password } = signInDto;
            // return this.userAuthService.signIn({username: '', email: '', password: ''});
            return;
        } catch (err) {
            throw new HttpException(
                HttpErrorMessage.UNAUTHORIZED, 
                HttpStatus.UNAUTHORIZED
            );
        }
    }
 
    @Post('register')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'User account registration' })
    @ApiQuery({ 
        name: 'role', enum: ROLES, 
        // isArray: true 
    })
    @ApiBody({
        examples: this?.['apiBodyExample'],
        schema: {
            $ref: getSchemaPath(RegistryDto)
        }
    })
    async register(@Body() registryDto: RegistryDto): Promise<void> {
        try {
            // Account
            console.log(
                '=============== UserAuthController apiBodyExample ', 
                this?.['apiBodyExample']
            )
            const accountDto = new AccountDto();
            for (const key in accountDto) {
                accountDto[key] = registryDto[key];
            }

            return this.userAuthService.register(accountDto);
        } catch (err) {
            throw new HttpException(
                HttpErrorMessage.CREATE, 
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
