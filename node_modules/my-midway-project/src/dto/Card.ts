import { Rule, RuleType } from '@midwayjs/validate';

  export class cardDTO {
    @Rule(RuleType.string().required())
    belongingInterestCircle : string;

    @Rule(RuleType.string().required())
    title: string;

    @Rule(RuleType.string().required())
    content: string;
  }

  export class CommentDTO {  

    @Rule(RuleType.number().required())
    belongTo_id: number;

    @Rule(RuleType.string().required())
    content: string;
  }

  export class InterrestCircleDTO {
    @Rule(RuleType.string().required())
    name: string;
  }