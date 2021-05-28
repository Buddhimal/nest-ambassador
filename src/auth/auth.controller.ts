import {BadRequestException, Body, Controller, Get, NotFoundException, Post, Req, Res} from '@nestjs/common';
import {RegisterDto} from "./dto/register.dto";
import {UserService} from "../user/user.service";
import * as bcrypt from 'bcryptjs';
import {JwtService} from "@nestjs/jwt";
import {Response, Request} from "express";

@Controller()
export class AuthController {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {
    }

    @Post('admin/register')
    async register(@Body() body: RegisterDto) {
        const {password_confirm, ...data} = body;

        if (body.password !== body.password_confirm) {
            throw new BadRequestException("Password do not match");
        }

        const hashed = await bcrypt.hash(body.password, 12);

        return this.userService.save({
            ...data,
            password: hashed,
            is_ambassador: false
        })
    }

    @Post('admin/login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough:true}) response: Response
    ) {
        const user = await this.userService.findOne({email})
        console.log(user);

        if (!user) {
            throw new NotFoundException("User Not Found");
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException("Invalid Credentials")
        }

        const jwt = await this.jwtService.signAsync({
            id: user.id
        })

        response.cookie('jwt', jwt, {httpOnly: true});

        return {
            message: "Success"
        };

    }

    @Get('admin/user')
    async user(@Req() request: Request){
        const cookie = request.cookies['jwt'];

        return cookie;
    }
}
