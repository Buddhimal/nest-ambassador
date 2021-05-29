import { Module } from '@nestjs/common';
import { LinkController } from './link.controller';
import { LinkService } from './link.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Link} from "./link";

@Module({
  imports:[
      TypeOrmModule.forFeature([Link])
  ],
  controllers: [LinkController],
  providers: [LinkService]
})
export class LinkModule {}
