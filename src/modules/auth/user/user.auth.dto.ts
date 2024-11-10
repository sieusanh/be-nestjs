import { AccountDto } from 'modules/hr/accounts/accounts.dto';
import { OmitType } from '@nestjs/mapped-types';
import { PickType } from '@nestjs/swagger';

export class SignInDto extends PickType(
    AccountDto, ['username', 'email', 'phone', 'password'] as const
) { }

export class RegistryDto extends OmitType(
    AccountDto, ['lastLoginAt'] as const, 
) { }

export class AccessDto {
    access_token: string
}
