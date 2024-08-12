import { Inject , Controller , Post, Body,Get, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { cardDTO , CommentDTO } from '../dto/Card';
import {CardService} from '../service/Card';



@Controller('/card')
export class CardController {
    @Inject()
    ctx: Context;

    @Inject()
    cardService: CardService;

    @Post('/AddCard')
    async createCard(@Body() message: cardDTO) {
        const card = {
            id : 0,
            belongingInterestCircle : message.belongingInterestCircle,
            author_username : this.ctx.cookies.get('username'),
            title: message.title,
            content: message.content,
            comment_count: 0,
            like_count: 0
        }
        const result = await this.cardService.AddCard(card);
        return result;
    }

    
    @Get('/GetCardList')
    async getCardList(@Body() InterestCircle :string) {
        const result = await this.cardService.GetCards(InterestCircle);
        return result;
    }


    @Post('/AddComment')
    async addComment(@Body() message: CommentDTO) {
        const comment = {
            belongTo_id: message.belongTo_id,
            author_username : this.ctx.cookies.get('username'),
            content: message.content,
        }
        const result = await this.cardService.AddComment(comment);
        return result;
    }

    @Post('/SetCommentCount')
     async setCommentCount(@Body() cardId :number) {
        await this.cardService.SetCommentCount(cardId);
    }

    @Get('/GetCommentList')
    async getCommentList(@Query('cardId') cardId : number) {
        console.log(cardId);
        const result = await this.cardService.GetCommentList(cardId);
        return result;
    }

}
