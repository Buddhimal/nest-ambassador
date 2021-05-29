import {Controller, Get, Param} from '@nestjs/common';
import {LinkService} from "./link.service";

@Controller()
export class LinkController {

    constructor(
        private linkService: LinkService
    ) {
    }

    @Get('admin/users/:id/links')
    async all(@Param('id') id: number) {
        return this.linkService.find({
            user: id
        })
    }

}
