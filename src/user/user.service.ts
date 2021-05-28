import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user";
import {Repository} from "typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
    }

    async save(options){
        return this.userRepository.save(options);
    }

    async findOne(options){
        return this.userRepository.findOne((options));
    }

}
