import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("用户模块")
@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }
    
    @ApiOperation({
        summary: "用户进行注册"
    })
    @Post('regist')
    async registUser(@Body() userDto: User) {
        return await this.userService.regist(userDto);
    }
}
