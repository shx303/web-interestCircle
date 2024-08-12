import { Provide,Scope, ScopeEnum} from '@midwayjs/core';
import { Card , Comment } from '../interface';

@Scope(ScopeEnum.Singleton)
@Provide()
export class CardService {

    private cards: Card[] = [];
    private comments: Comment[] = [];

    async AddCard(card: Card) {
        const num = this.cards.length;
        card.id = num + 1;
        this.cards.push(card);
        return this.cards;
    }

    async AddComment(comment: Comment) {
        this.comments.push(comment);
        return this.comments;
    }

    async GetCards(InterestCircle : string) {
        let aim_cards: Card[] = [];
        const num = this.cards.length;
        for (let i = 0; i < num; i++) {
            if(this.cards[i].belongingInterestCircle == InterestCircle){
                aim_cards.push(this.cards[i]);
            }
        }
        return this.cards;
    }

    async SetCommentCount(cardId: number) {
        const num = this.cards.findIndex(card => card.id === cardId);
        this.cards[num].comment_count += 1;
    }

    async GetCommentList(cardId: number) {
        let aim_comments: Comment[] = [];
        const num = this.comments.length;
        for (let i = 0; i < num; i++) {
            if(this.comments[i].belongTo_id === cardId){
                aim_comments.push(this.comments[i]);
            }
        }

        return aim_comments
    }
}