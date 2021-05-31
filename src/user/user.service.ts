import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user";
import {Repository} from "typeorm";
import {AbstractService} from "../shared/abstract.service";

@Injectable()
export class UserService extends AbstractService{

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
        super(userRepository);
    }

        async findOneRelation(id){
        return this.userRepository.findOne(id,{relations: ['orders', 'orders.order_items']});
    }

}


// Create functions separately

// @Injectable()
// export class UserService {
//
//     constructor(
//         @InjectRepository(User) private readonly userRepository: Repository<User>
//     ) {
//     }
//
//     async save(options){
//         return this.userRepository.save(options);
//     }
//
//     async find(options){
//         return this.userRepository.find(options);
//     }
//
//     async findOne(options){
//         return this.userRepository.findOne((options));
//     }
//
//     async update(id: number, options){
//         return this.userRepository.update(id, options);
//     }
//
// }
