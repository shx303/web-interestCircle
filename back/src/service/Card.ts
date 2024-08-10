import { Provide,Scope, ScopeEnum} from '@midwayjs/core';
import { Card , Comment } from '../interface';

@Scope(ScopeEnum.Singleton)
@Provide()
export class CardService {

    private cards: Card[] = [];
    private comments: Comment[] = [];

    async AddCard(card: Card) {
        this.cards.push(card);
        return card;
    }

    async AddComment(comment: Comment) {
        this.comments.push(comment);
    }

    async GetCards(InterestCircle : string) {
        let aim_cards: Card[] = [];
        const num = this.cards.length;
        for (let i = 0; i < num; i++) {
            if(this.cards[i].belongingInterestCircle == InterestCircle){
                aim_cards.push(this.cards[i]);
            }
        }

        return aim_cards;
    }
}