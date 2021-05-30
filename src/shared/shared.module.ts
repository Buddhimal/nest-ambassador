import { Module } from '@nestjs/common';
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports:[
        JwtModule.register({
            secret: 'buddhimal',
            signOptions:{expiresIn: '1d'}
        }),
    ],
    exports:[JwtModule]
})
export class SharedModule {}
