import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Order} from "./order";
import {OrderItem} from "./order-item";
import {OrderItemService} from "./order-item.service";
import {SharedModule} from "../shared/shared.module";
import {LinkModule} from "../link/link.module";
import {ProductModule} from "../product/product.module";
import {StripeModule} from "nestjs-stripe";

@Module({
  imports:[
      TypeOrmModule.forFeature([Order, OrderItem]),
      SharedModule,
      LinkModule,
      ProductModule,
      StripeModule.forRoot({
          apiKey: 'sk_test_51J3oV6FP8VrYk4PyxrFqyQ1ubxDPXqlhDpmozUSBeibpMZnmy3SqC9k7OqqWOtjdUTuEHSvy0O7DhGJ6mfEfy63H00X6BP1Ixi',
          apiVersion: '2020-08-27',
      }),
  ],
  controllers: [OrderController],
  providers: [OrderService,OrderItemService]
})
export class OrderModule {}
