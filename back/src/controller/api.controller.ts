import { Inject, Controller, Get, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/getTheuser')
  async getTheUser(@Query('uid') uid) {
    const user = await this.userService.getTheUser({ uid });
    return { success: true, message: 'OK', data: user };
  }
}
