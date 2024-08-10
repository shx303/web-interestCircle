import { Inject , Controller , Post , Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserDTO } from '../dto/user';
import {UserService} from '../service/User';



@Controller('/')
export class UserController {

  @Inject()
  userService: UserService;

  @Inject()
  ctx: Context;

  @Post('/login')
  async login(@Body() user: UserDTO) {
    const result = await this.userService.login(user.username,user.password);
    return result;
  }
}
