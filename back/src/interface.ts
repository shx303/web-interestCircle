/**
 * @description User-Service parameters
 */


//用户列表
export interface IUser {
  username: string;
  password: string;
}

export interface Card {
  id: number;
  belongingInterestCircle : string;
  author_username: string;
  title: string;
  content: string;
  comment_count: number;
  like_count: number; 
}

export interface Comment {  
  belongTo_id: number;
  author_username: string;
  content: string;
}

export interface InterrestCircle {
  name: string;
}