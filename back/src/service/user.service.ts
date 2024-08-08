import { Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface';

@Provide()
export class UserService {
  async getTheUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
