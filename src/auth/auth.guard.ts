import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) {
    }

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        try {
            const jwt = request.cookies['jwt'];
            const {scope} = await this.jwtService.verify(jwt);

            const isAmbassador = request.path.toString().indexOf('api/ambassador') >= 0;

            return isAmbassador && scope == 'ambassador' || !isAmbassador && scope == 'admin'
        } catch (e) {
            return false;
        }

        return undefined;
    }

}