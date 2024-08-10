import { Inject , Controller , Post , Body,Get } from '@midwayjs/core';
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
    async createCard(@Body() card: cardDTO) {
        const result = await this.cardService.AddCard(card);
        return result;
    }

    @Post('/AddComment')
    async addComment(@Body() comment: CommentDTO) {
        const result = await this.cardService.AddComment(comment);
        return result;
    }

    @Get('/GetCardList')
    async getCardList(@Body() InterestCircle :string) {
        const result = await this.cardService.GetCards(InterestCircle);
        return result;
    }

}
