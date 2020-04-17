import { QuoteRequest } from '../shared/models/quote-request.model';
import { User } from '../shared/models/user.model';

export class HomeService {

    public quoteRequest: {email: String, quoteRequest:QuoteRequest}; 
    constructor(){}

    onCreateQuoteRequest(user: User, quoteRequest: QuoteRequest){
        this.quoteRequest[user.email] = quoteRequest;
    }
}