import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from 'common/decorator';

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private reflector: Reflector) { }

    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> {

        const roles = this.reflector.get(Roles, context.getHandler());
        if (!roles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        console.log('================ canActivate request ', request)

        const user = request.user;
        console.log('================ canActivate user ', user)

        return matchRoles(roles, user.roles);
        
    }
}

function matchRoles(roles: string[], userRoles: string[]) {
    const roleSet = new Set(roles);
    const userRoleSet = new Set(userRoles);
    const hasCommonRole = [...userRoleSet].some(item => roleSet.has(item));
    return hasCommonRole;
}
