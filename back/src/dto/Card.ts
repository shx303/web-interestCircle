import { Rule, RuleType } from '@midwayjs/validate';

export class cardDTO {
    @Rule(RuleType.number().required())
    id: number;

    @Rule(RuleType.string().required())
    belongingInterestCircle : string;

    @Rule(RuleType.string().required())
    author_username: string;

    @Rule(RuleType.string().required())
    title: string;

    @Rule(RuleType.string().required())
    content: string;

    @Rule(RuleType.number().required())
    comment_count: number;

    @Rule(RuleType.number().required())
    like_count: number; 
  
  }

  export class CommentDTO {  

    @Rule(RuleType.number().required())
    blongTo_id: number;

    @Rule(RuleType.string().required())
    id: number;

    @Rule(RuleType.string().required())
    author_username: string;

    @Rule(RuleType.string().required())
    content: string;
  }