import {CacheModule, Module} from '@nestjs/common';
import {JwtModule} from "@nestjs/jwt";
import * as redisStore from 'cache-manager-redis-store'

@Module({
    imports: [
        JwtModule.register({
            secret: 'buddhimal',
            signOptions: {expiresIn: '1d'}
        }),
        CacheModule.register({
            store: redisStore,
            host: 'redis',
            port: 6379,
        })
    ],
    exports: [
        JwtModule,
        CacheModule
    ]
})
export class SharedModule {
}
