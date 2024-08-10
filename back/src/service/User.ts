import { Provide,} from '@midwayjs/core';
import {IUser} from '../interface';

const user1: IUser = {
  username: 'tianyi',
  password: '112233'
}

const user2: IUser = {
  username: 'guwen',
  password: '445566'
}

const user3: IUser = {
  username: 'xuexiao',
  password: '778899'
}

@Provide()
export class UserService {

  async login(username: string, password: string): Promise<string> {
    if((username === user1.username && password === user1.password)
      || (username === user2.username && password === user2.password)
      || (username === user3.username && password === user3.password)
    ){
      return username;
    }else {
      return 'error';
    }
  }
}
