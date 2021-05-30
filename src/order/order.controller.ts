import {
    ClassSerializerInterceptor,
    Controller,
    Get, UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {OrderService} from "./order.service";
import {AuthGuard} from "../auth/auth.guard";

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class OrderController{

    constructor(
        private orderService: OrderService
    ) {
    }

    @UseGuards(AuthGuard)
    @Get('admin/orders')
    async all(){
        return this.orderService.find({
            relations: ['order_item']
        });
    }

}
