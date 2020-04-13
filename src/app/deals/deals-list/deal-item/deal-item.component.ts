import { Component } from '@angular/core';
import { Deal } from '../../deal.model';

@Component({
    selector: 'app-deal-item',
    templateUrl: 'deal-item.component.html'
})
export class DealItem {

    deals: Deal[] = [
        new Deal('Wonderful Bahamas', 'Bahama', '', 'Bahama Islands', 1400, 'CAD'),
        new Deal('Wonderful Bahamas', 'Bahama', '', 'Bahama Islands', 1600, 'CAD')
    ];

    constructor(){

    }
}