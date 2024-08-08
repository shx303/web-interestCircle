import { Provide } from '@midwayjs/core';
import {IUser1} from '../interface';
import {IUser2} from '../interface';
import {IUser3} from '../interface';


@Provide()
export class UserLoginService {

    //读值
    options1: IUser1;
    options2: IUser2;
    options3: IUser3;

    async login(username: string, password: string): Promise<any> {
        // TODO: implement login logic
        if(username === 'tianyi'){
            if(password === this.options1.password){
                return {
                    result: true,
                    url: this.options1.pic
                }
            }else{
                return{
                    result:false
                }
            }
        }else if(username === 'guwen'){
            if(password === this.options2.password){
                return {
                    result: true,
                    url: this.options2.pic
                }
            }else{
                return{
                    result:false
                }
            }
        }else if(username === 'xuexiao'){
            if(password === this.options3.password){
                return {
                    result: true,
                    url: this.options3.pic
                }
            }else{
                return{
                    result:false
                }
            }
        }else{
            return {
                result:false
            }
        }
    }
}