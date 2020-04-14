import { Component, Input } from '@angular/core';
import { Deal } from '../../deal.model';

@Component({
    selector: 'app-deal-item',
    templateUrl: 'deal-item.component.html'
})
export class DealItem {

    @Input('deal') deal: Deal;
    constructor(){

    }
}