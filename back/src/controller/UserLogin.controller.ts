import { Controller,  Post, Body } from '@midwayjs/core';
import { UserLoginService} from '../service/UserLogin.service';

@Controller('/user')
export class UserController {
  constructor(private UserLoginService: UserLoginService) {}

  @Post('/login')
  async login(@Body() loginData: { username: string, password: string }) {
    const {result, url} = await this.UserLoginService.login(loginData.username, loginData.password);
    return { success: result , url};
  }
}