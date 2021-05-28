import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import {User} from "./user/user";
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'db',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'ambassador',
        entities: [
            User
        ],
        synchronize: true,
      }),
      UserModule,
      AuthModule,
      ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
