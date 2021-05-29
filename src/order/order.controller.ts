import {
    ClassSerializerInterceptor,
    Controller,
    Get,
    UseInterceptors
} from '@nestjs/common';
import {OrderService} from "./order.service";

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class OrderController{

    constructor(
        private orderService: OrderService
    ) {
    }

    @Get('admin/orders')
    async all(){
        return this.orderService.find({
            relations: ['order_item']
        });
    }

}
