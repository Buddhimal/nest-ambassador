import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from "./product";
import {Repository} from "typeorm";
import {AbstractService} from "../shared/abstract.service";
import {User} from "../user/user";


@Injectable()
export class ProductService extends AbstractService {

    constructor(
        @InjectRepository(Product) private readonly productService: Repository<User>
    ) {
        super(productService);
    }

}

